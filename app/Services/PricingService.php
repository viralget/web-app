<?php

namespace App\Services;

use App\Models\PaymentServicePlans;
use Laravelcm\Subscriptions\Models\Plan;
use Laravelcm\Subscriptions\Models\Feature;
use Laravelcm\Subscriptions\Interval;
use App\Services\PaymentMethods\Paystack;

class PricingService {


    protected $plan;

    public function __construct()
    {
        $this->plan = new Plan;

        // Fetch plans from paystack. Refactor later


        $this->getPaymentServicePlans();
    }

    public function createPlan(array $planData, array $planFeatures = []): void
    {

        $plan = $this->plan->create($planData);


        if(count($planFeatures)) {
            $plan->createFeatures($plan, $planFeatures);
        }
    }

    public function createFeatures(Plan $plan, array $features)
    {

        $plan->features()->saveMany(array_map(function ($feature) {
            $this->createFeature($feature);
        }, $features)); 
    }


    public function createFeature(array $featureData): Feature
    {
        return new Feature($featureData);
    }

    public function getPlans() {
        return $this->plan->with('features')->orderBy('sort_order', 'desc')->get();
    }

    public function getPlan($id) {
        return $this->plan->with('features')->find($id);
    }


    public function getPlanFeatures(Plan $plan) {
        return $plan->features()->get();
    }

    public function findPlanByName($pricingPlanName) {

        return $this->plan->where('name', $pricingPlanName)->first();
    }

    private function getPaymentServicePlans() {

       $payment_service_plans =  Paystack::fetchPlans();

        $plans = $this->getPlans()->count();

        if(!$plans) {
            $features = $this->getFeatures();

            if($payment_service_plans && count($payment_service_plans)) {

                    foreach($payment_service_plans as $key => $plan) {
                        $new_plan = $this->plan->firstOrCreate([
                            'name' => $plan->name,
                        ],
                        [
                            'name' => $plan->name,
                            'description' => '',
                            'price' => $plan->amount/100,
                            'signup_fee' => $plan->amount/100,
                            'invoice_period' => 1,
                            'invoice_interval' => Interval::MONTH->value,
                            'trial_period' => 7,
                            'trial_interval' => Interval::DAY->value,
                            'sort_order' => $key,
                            'currency' => $plan->currency,
                        ]);

                        PaymentServicePlans::create([
                            'platform_name' => 'paystack',
                            'plan_code' => $plan->plan_code,
                            'plan_id' => $new_plan->id,
                        ]);

                        foreach($features as $key => $feature) {
                            $data = ['name' => $feature['feature_data_field'], 'value' => "", 'sort_order' => $key];
                            $new_plan->features()->save($this->createFeature($data));
                        }
                    }
            }
            }


    }

    private function getFeatures() {

        $features = [
            [
                'section' => 'Plan',
                'features' => [
                    ['feature_name' => 'Social Media Platform', 'feature_data_field' => 'social_media_platform',]
                ]
            ],
            [
                'section' => 'Find',
                'features' => [
                    ['feature_name' => 'Discovery', 'feature_data_field' => 'discovery'],
                    ['feature_name' => 'Access to database', 'feature_data_field' => 'access_to_database'],
                    ['feature_name' => 'Category accessible', 'feature_data_field' => 'category_accessible'],
                    ['feature_name' => 'Numbers of search filters', 'feature_data_field' => 'numbers_of_search_filters'],
                    ['feature_name' => 'Numbers of search requests', 'feature_data_field' => 'numbers_of_search_requests'],
                    ['feature_name' => 'Monthly search results', 'feature_data_field' => 'monthly_search_results'],
                    ['feature_name' => 'Save your searches', 'feature_data_field' => 'save_your_searches'],
                    ['feature_name' => 'Save search results', 'feature_data_field' => 'save_search_results'],
                    ['feature_name' => 'Profiling', 'feature_data_field' => 'profiling']
                ]
            ],
            [
                'section' => 'Campaigns',
                'features' => [
                    ['feature_name' => 'Monthly influencer analysis', 'feature_data_field' => 'monthly_influencer_analysis'],
                    ['feature_name' => 'Influencer Overview', 'feature_data_field' => 'influencer_overview'],
                    ['feature_name' => 'Influencer Performance', 'feature_data_field' => 'influencer_performance'],
                    ['feature_name' => 'Audience Insight', 'feature_data_field' => 'audience_insight'],
                    ['feature_name' => 'Content Performance', 'feature_data_field' => 'content_performance'],
                    ['feature_name' => 'Brands influencer has worked with', 'feature_data_field' => 'brands_influencer_has_worked_with'],
                    ['feature_name' => 'Export profile analyzed', 'feature_data_field' => 'export_profile_analyzed']
                ]
            ],
            [
                'section' => 'Campaigns',
                'features' => [
                    ['feature_name' => 'Campaign management', 'feature_data_field' => 'campaign_management'],
                    ['feature_name' => 'Influencer Managed', 'feature_data_field' => 'influencer_managed']
                ]
            ],
            [
                'section' => 'Help Desk',
                'features' => [
                    ['feature_name' => 'Support', 'feature_data_field' => 'support'],
                    ['feature_name' => 'Dedicated Team', 'feature_data_field' => 'dedicated_team']
                ]
            ],
            [
                'section' => 'Pricing',
                'features' => [
                    // ['feature_name' => 'MONTHLY SEARCH RESULTS AND INFLUENCER ANALYSIS', 'feature_data_field' => 'monthly_search_results_and_influencer_analysis'],
                    ['feature_name' => 'price', 'feature_data_field' => 'platform_cost'],
                    ['feature_name' => 'discounted_price', 'feature_data_field' => 'discounted_cost']
                ]
            ]
        ];


        // Create an empty array to store the extracted features
        $extracted_features = [];

        // Loop through the initial array and extract the feature_data_field along with the section
        foreach ($features as $feature_set) {
            foreach ($feature_set['features'] as $feature) {
                $feature['section'] = $feature_set['section'];

                $extracted_features[] = $feature;
            }
        }

        return ($extracted_features); // Display the resulting array

    }
}