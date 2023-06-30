<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use App\Models\RecruiterSubscriptionPlans;
use App\Services\PaymentMethods\Paystack;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PurchasesController extends Controller
{
    //

    protected $user;
    protected $invoice;
    protected $plans;

    function __construct(Invoice $invoice)
    {
        $this->invoice = $invoice;

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

        $user_id =  $user->id;
        if ($verify->status) {
            $invoice = Invoice::create([
                'user_id' => $user->id,
                'amount' => $verify->data->amount / 100,
                'description' => 'Influencers database',
                'items' => 'Influencers database',
                'total_amount' => $verify->data->amount / 100,
                'tax' => 0,
                'tax_rate' => 0,
                'currency' => 'NGN',
                'status' => 'paid',
                'reference' => $request->reference,
            ]);

            if ($invoice) {
                return response(['status' => true, 'message' => $verify->message]);
            }
        } else {
            return response(['status' => false, 'message' => $verify->message]);
        }
    }

    public function verifyPayment(Request $request)
    {

        $reference = $request->reference;

        $verify = Paystack::verify($reference);
        $data['verify'] = $verify;

        $user = request()->user();

        $user_id =  $user->id;
        if ($verify->status) {
            $invoice = Invoice::create([
                'user_id' => $user->id,
                'amount' => $verify->data->amount / 100,
                'description' => 'Influencers database',
                'items' => 'Influencers database',
                'total_amount' => $verify->data->amount / 100,
                'tax' => 0,
                'tax_rate' => 0,
                'currency' => 'NGN',
                'status' => 'paid',
                'reference' => $request->reference,
            ]);

            if ($invoice) {
                return response(['status' => true, 'message' => $verify->message]);
            }
        } else {
            return response(['status' => false, 'message' => $verify->message]);
        }
    }
}
