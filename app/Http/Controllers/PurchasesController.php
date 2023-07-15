<?php

namespace App\Http\Controllers;

use App\Helpers\LoggerHelper;
use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use App\Models\RecruiterSubscriptionPlans;
use App\Services\PaymentMethods\Paystack;
use App\Services\PaymentMethods\StripeService;
use App\Services\PaymentMethods\PaystackService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PurchasesController extends Controller
{
    //
    use LoggerHelper;

    protected $user;
    protected $invoice;
    protected $plans;
    protected $stripeService;
    protected $paystackService;

    function __construct(Invoice $invoice)
    {
        $this->invoice = $invoice;
        $this->stripeService = new StripeService();
        $this->paystackService = new PaystackService();


        $this->middleware(function ($request, $next) {
            $this->user = $request->user();

            return $next($request);
        });
    }


    public function billings()
    {

        $user = $this->user;

        $invoices = [];

        if ($user) {
            $invoices = $user->invoices()->latest()->paginate(7);
        }

        $subscription = $user ? $user->subscription : null;

        // dd($subscription);
        return Inertia::render('Billings/index', [
            'invoices' => $invoices,
            'plan' => $subscription ? $subscription->plan : null,
            'subscription' => $subscription
        ]);

        // return Inertia::render('Recruiters/Pages/Purchases/Billing');
    }

    public function invoice($id)
    {

        $user = $this->user;

        $invoices = [];

        if ($user) {
            $invoice = $user->invoices()->find($id);
        }

        return Inertia::render('Billings/Invoice', [
            'invoice' => InvoiceResource::make($invoice),
        ]);

        // return Inertia::render('Recruiters/Pages/Purchases/Billing');
    }

    public function preOrder(Request $request)
    {

        $reference = $request->reference;

        $verify = Paystack::verify($reference);
        $data['verify'] = $verify;

        $user = request()->user();


        // $user_id =  $user->id;
        // if ($verify->status) {
        //     $invoice = Invoice::create([
        //         'user_id' => $user->id,
        //         'amount' => $verify->data->amount / 100,
        //         'description' => 'Influencers database',
        //         'items' => 'Influencers database',
        //         'total_amount' => $verify->data->amount / 100,
        //         'tax' => 0,
        //         'tax_rate' => 0,
        //         'currency' => 'NGN',
        //         'status' => 'paid',
        //         // 'status_comment' => json_encode(''),
        //         'reference' => $request->reference,
        //     ]);

        //     if ($invoice) {
        //         return response(['status' => true, 'message' => $verify->message]);
        //     }
        // } else {
        //     // dd('');
        //     return response(['status' => false, 'message' => $verify->message]);
        // }
    }

    public function verifyPayment(Request $request)
    {
        $request->validate([
            'reference' => 'required',
            'payment_gateway' => 'required',
        ]);

        try {
            $reference = $request->reference;

            if ($request->payment_gateway == 'paystack') {
                $verify = $this->paystackService->verifyTransaction($reference);
                // $verify = Paystack::verify($reference);
            } else {
                $verify = $this->stripeService->verifyTransaction($reference);
            }

            $data['verify'] = $verify;

            $user = request()->user();


            if ($verify['status']) {
                $invoice = Invoice::create([
                    'user_id' => $user?->id ?? 0,
                    'amount' => $verify['data']['amount'] / 100,
                    'description' => 'Influencers database',
                    'items' => 'Influencers database',
                    'total_amount' =>  $verify['data']['amount'] / 100,
                    'tax' => 0,
                    'tax_rate' => 0,
                    'currency' => 'NGN',
                    'status' => 'paid',
                    'status_comment' => json_encode($verify['data']['metadata']),
                    'reference' => $request->reference,
                ]);

                if ($invoice) {
                    return response(['status' => true, 'message' => 'Payment successful']);
                }
            } else {
                return response(['status' => false, 'message' => 'Payment failed. Please contact support']);
            }
        } catch (\Exception $e) {
            $this->log($e);

            dd($e);
            return response(['status' => false, 'message' => $e->getMessage()]);
        }
    }




    public function stripeCreateIntent(Request $request)
    {
        $request->validate([
            'type' => 'required',
            'amount' => 'required',
            'customer_id' => 'required',
            'email' => 'required',
            'plan_id' => 'required_if:type,subscription'
        ]);

        try {
            if ($request->type == 'subscription') {
                $this->stripeService->createSubscription($request->customer_id, [
                    'plan' => $request->plan_id,
                ]);
            }

            $metadata = ['user_email' => $request->email, 'plan_id' => $request->plan_id];

            if ($request->metadata && is_array($request->metadata)) {
                $metadata =  array_merge($metadata, $request->metadata);
            }


            $intent = $this->stripeService->createPaymentIntent([
                'amount' => $request->amount,
                'customer' => $request->customer_id,
                'currency' => 'usd',
                'metadata' => $metadata
            ]);

            return $intent;
        } catch (\Exception $e) {
            $this->log($e);

            dd($e);
            return false;
        }
    }



    public function stripeCreateCustomer(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'payment_method_id' => 'required',
        ]);

        try {
            $customer = $this->stripeService->createCustomer(
                [
                    'email' => $request->email,
                    'payment_method' => $request->payment_method_id,
                    'invoice_settings' => [
                        'default_payment_method' => $request->payment_method_id,
                    ]
                ]
            );

            return $customer;
        } catch (\Exception $e) {
            $this->log($e);

            return false;
        }
    }
}
