<?php

namespace App\Services\PaymentMethods;

use App\Helpers\LoggerHelper;
use App\Interfaces\PaymentServiceInterface;
use Illuminate\Support\Facades\Http;
use Stripe;

class StripeService implements PaymentServiceInterface
{

    use LoggerHelper;

    private $stripe;

    public function __construct()
    {
        $clientSecret = config('services.stripe.secret');
        $this->stripe = Stripe::make($clientSecret);
    }


    public function verifyTransaction(string $reference): array
    {
        try {

            $response = $this->retrievePaymentIntent($reference);

            if (!isset($response['status']) || $response['status'] != 'succeeded') {
                return [
                    'status' => false,
                    'message' => 'Request failed',
                    'status_code' => $response['status'],
                ];
            }

            // $resp = $response->body();

            // if (!$resp['status'] || !isset($resp['data']['data']) || !$resp['data']['status']) {
            //     return response([
            //         'message' => 'Error validating payment', 'status' => false, 'status_code' => 401,
            //     ]);
            // }

            return [
                'status' => true,
                'status_code' => 200,
                'data' => [
                    'reference' => $reference,
                    'amount' => $response['amount'] / 100,
                    'metadata' => $response['metadata'],
                    'payment_gateway' => 'stripe',
                    'currency' => 'USD',
                    'plan_id' => isset($response['metadata']['plan_id']) ? $response['metadata']['plan_id'] : null,
                    'metadata' => $response['metadata'],
                    // 'metadata' => $,
                ]


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

    public function createCustomer($data)
    {
        $customer = $this->stripe->customers()->create($data);

        return $customer;
    }

    public function createPaymentIntent($data)
    {

        $intent = $this->stripe->paymentIntents()->create($data);

        return $intent;
    }

    public function createSubscription($customer_id, $data)
    {
        $subscription = $this->stripe->subscriptions()->create(
            $customer_id,
            $data
        );

        return $subscription;
    }

    public function retrievePaymentIntent($payment_id)
    {
        $intent = $this->stripe->paymentIntents()->find($payment_id);

        return $intent;
    }
}
