<?php

namespace App\Services\PaymentMethods;

use App\Helpers\LoggerHelper;
use App\Interfaces\PaymentServiceInterface;
use Illuminate\Support\Facades\Http;

class PaystackService implements PaymentServiceInterface
{

    use LoggerHelper;

    private $sendgridService;
    private $secret_key;

    public function __construct()
    {
        if (config('services.paystack.mode') == 'live') {
            $this->secret_key = config('services.paystack.live_sk');
        } else {
            $this->secret_key = config('services.paystack.test_sk');
        }
        // $this->sendgridService = new SendGrid(env('SENDGRID_API_KEY'));
    }


    public function verifyTransaction(string $reference): array
    {
        try {


            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $this->secret_key,
                'Cache-Control' => 'no-cache'
            ])->get("https://api.paystack.co/transaction/verify/" . $reference);

            if ($response->failed()) {
                return [
                    'status' => false,
                    'message' => 'Request failed',
                    'status_code' => $response->status(),
                ];
            }

            $data =  json_decode($response->body());


            return [
                'status' => true,
                'status_code' => 200,
                'data' => [
                    'reference' => $reference,
                    'amount' => $data->data->amount / 100,
                    'metadata' => $data->data->metadata,
                    'payment_gateway' => 'paystack',
                    'currency' => 'USD',
                    'plan_id' => isset($data->data->metadata->plan_id) ? $data->data->metadata->plan_id : null,
                    'metadata' => (array)$data->data->metadata,
                ],
                // 'data' => json_decode($response->body(), true),
            ];
        } catch (\Exception $e) {

            $this->log($e);

            return [
                'status' => false,
                'status_code' => 500
            ];
        }
    }
}
