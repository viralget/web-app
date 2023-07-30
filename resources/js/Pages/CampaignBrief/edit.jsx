import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import ButtonBack from '@/components/ButtonBack';
import { useEffect, useState } from 'react'
import Button from '@/Components/Button';
import  Input from '@/Components/input';
import { useForm } from '@inertiajs/inertia-react';
import TextArea from '@/Components/TextArea';
import MultiSelect from '@/components/MultiSelect';
import { classNames } from '@/Utils/helpers';
import UploadImage from "@/components/UploadImage";
import { getEventValue } from '@/Utils/helpers';
import { numberWithCommas } from '@/Utils/helpers';
import Select from '@/components/Select';
import PaystackPop from '@paystack/inline-js';
import StripePaymentButton from '@/Components/PaymentButton/StripePaymentButton';
import axios from "axios";
import toast from '@/Components/Toast'

export default function  Edit({ user, campaign }) {


   const [tab, setTab] = useState('details')
   const [image, setImageUrl] = useState(campaign.logo_url);
   const [serviceFee, setServiceFee] = useState(0);
   const [total, setTotal] = useState(0);
   const [stripeProps, setStripeProps] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [btnMessage, setBtnMessage] = useState("Pay & Create Campaign");
    const { data, setData, post, processing, errors, reset } = useForm({
        title: campaign.campaign_name,
        social_network:  campaign.social_network,
        campaign_type: campaign.campaign_type,
        budget: campaign.budget,
        keywords: campaign.tracked_keywords,
        start_date:campaign.state_date,
        end_date:campaign.end_date,
        description: campaign.campaign_description,
        brand_name:campaign.brand_name,
        location:campaign.target_location,
        gender: campaign.target_gender,
        age:campaign.target_age,
        interest:campaign.target_interest,
        reach: campaign.reach_goal,
        impression: campaign.impressions_goal,
        engagement: campaign.engagement_goal,
        conversion:campaign.conversion_goal,
        logo:'',
        about_us: campaign.about_us,
        campaign_goal:campaign.campaign_goal,
        campaign_message: campaign.campaign_message,
        key_objectives: campaign.campaign_key_objectives,
        channels: campaign.channels,
        timeline: campaign.timeline,
        mood_board:'',
        target_audience:campaign.target_audience,
        currency: campaign.currency,
        influencer_niche: campaign.influencer_niche,
        influencer_size: campaign.influencer_size,
        influencer_number:campaign.influencer_number,
        influencer_gender:campaign.influencer_gender,
        influencer_location:campaign.influencer_location,
        influencer_category: campaign.influencer_category,
    });



    useEffect(() => {
        handleBudget();
        setStripeProps({
            email: user.email,
            amount_usd: total,
            metadata: { ...data, email: user.email },
            paymentDataExtras: {
                // job_listing_id: job.id,
            },
            type: 'paid-listing',
            paymentVerificationRoute: route("general.payments.verify"),
            successRedirectsTo: route('preorder.success'),
        })

    }, [data])
    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const displayFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            setData('logo', event.target.files[0]);
            let reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
    }
}



function submit(e){
    e.preventDefault();
        if(tab === 'details'){
            setTab('contents');
            return;
        }

        if(tab === 'contents'){
            setTab('influencer');
            return;
        }

        createBrief();

    //  if(data.currency === 'NGN'){
    //     payWithPaystack()
    //  }
}

// function payWithPaystack() {
 
//     setBtnMessage("initiating payment...");
//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//         key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
//         email: user.email,
//         amount: total * 100, //plan.amount * 100,
//         reference: (new Date()).getTime().toString(),
//         metadata: {
//             ...data,
//             platform: data.social_network,
//             email:user.email,
//         },
     
//         onSuccess: (transaction) => {
          
//             const payment_data = {
//                 reference: transaction.reference,
//                 payment_gateway: 'paystack',
//                // metadata: data
//             }
//             verifyPayment(payment_data);
//         },
//         onCancel: () => {
//             // user closed popup
//             console.log("You need this, stay back!")
//             // setErrors({})
//         }
//     });


// }

// async function verifyPayment(payment_data) {
//     setBtnMessage("Verifying payment..");
//     const response = await  axios.post(route("general.payments.verify"), payment_data);
//     if (response?.data.status) {
//         createBrief();
//     } else {
//         toast.error('Something went wrong');
//     }

// }

    const createBrief = async () => {
        setBtnMessage("Updating campaign..")
        post(route('brief.update', {id : campaign.id}));
        reset();
        window.location.href = route('brief');       
 
        
        // , {
        //     onSuccess: () => {
        //         reset();
        //         window.location.href = route('brief.success');       
        //    },
        //     onError: (error) => {
        //         console.log(error)
        //         toast.error('An error occured');
        //     }
        // });
     
    };

    function  handleBudget(){
       const budget = campaign.budget;
       const serviceFee = 0.15 * Number(budget);
      const  total =  Number(budget) + serviceFee;
      setTotal(total);
      setServiceFee(serviceFee);
    }

    return(
        <AuthenticatedLayout  title="My Campaigns"  smallHeader={true}>
          <div className='bg-white h-screen  mt-3 px-5 mb-10'>
            <ButtonBack />

            <div className='flex  justify-center mx-auto'>
                     <div className='flex space-x-5'>
                          <span className='font-bold  text-viralget-red  capitalize'>campaign  details</span>
                           <span className='text-gray-300'>|</span>
                          <span className={classNames('font-bold  capitalize',  tab == 'contents' || tab == 'influencer' ? 'text-viralget-red' : 'text-gray-200' )}>content</span>
                          <span className='text-gray-300'>|</span>
                          <span className={classNames('font-bold  capitalize', tab == 'influencer' ? 'text-viralget-red' : 'text-gray-200' )}>influencers  detail</span>
                          
                     </div>
            </div>


            <form onSubmit={submit} className='mt-10  bg-white shadow-sm md:p-5 p-3 w-full'>
          {     tab == 'details' ? (
            <>
                <div className='flex md:flex-row flex-col md:space-x-5 md:space-y-0  space-y-4 w-full'>
                    <div className='form-group w-full'>
                                    <span className='text-t-lg-x  capitalize font-bold '>main info</span>
                                    <div className='inputs  mt-5 w-full flex flex-col space-y-4'>
                                            <div>
                                                <Input
                                                    type="text"
                                                    name="title"
                                                    label="Campaign Title"
                                                    required
                                                    placeholder="input campaign title"
                                                    defaultValue={data.title}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>

                                            <div>
                                            

                                         <MultiSelect
                                                options={[
                                                    { value: 'Instagram' },
                                                    { value: 'Twitter' }
                                                ]}
                                                label='Social Platform'
                                                name="social_network"
                                                required
                                                defaultValue={campaign.social_network?.split(',')}
                                                onChange={(values) => setData('social_network', [...values].join(','))}
                                            />
                                            </div>

                                            <div class="max-w-lg">
                                                <p class="text-sm text-gray-500">Select Campaign Type</p>
                                                <div class="mt-4 flex space-x-3">
                                                    <div class="flex items-center">
                                                        <input id="public" onChange={onHandleChange} name="campaign_type" checked={campaign.campaign_type == 'public'} value="public" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="public" class="ml-3 block text-sm font-medium text-gray-700">Public</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="private" onChange={onHandleChange} name="campaign_type" checked={campaign.campaign_type == 'private'}  value="private"type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="private" class="ml-3 block text-sm font-medium text-gray-700">Private</label>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                <div className='mt-10'>
                                    <span className='text-t-lg-x  capitalize font-bold mt-10'>Tracked keywords</span>
                                    <div className='inputs  mt-5 w-full flex flex-col space-y-4'>
                                        <div>
                                                <Input
                                                    type="text"
                                                    name="keywords"
                                                    label="keywords"
                                                    required
                                                    placeholder="field(@handle, #hastag, keywords, phrase)"
                                                    defaultValue={data.keywords}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>
                                     </div>
                                 </div>
                        </div>


                            <div className='form-group w-full'>
                                    <span className='text-t-lg-x  capitalize font-bold '>about campaign</span>
                                    <div className='inputs  mt-5 w-full flex flex-col space-y-4'>
                                            {/* <div className='flex w-full items-center'>
                                                <div className=''>
                                                    <Select options={[
                                                            { name: 'Naira', value: 'NGN' },
                                                            { name: 'Dollar', value: 'USD' }
                                                        ]}
                                                            name="currency"
                                                            value={data.currency}
                                                            onChange={onHandleChange}
                                                            label="Currency"
                                                            defaultOptionText="Select Currency"
                                                            required
                                                        />
                                                    </div>
                                             
                                                    <div className='w-full'>
                                                            <Input
                                                            type="text"
                                                            name="budget"
                                                            label="Budget"
                                                            required
                                                            placeholder="input campaign budget (E.g: 3000000)"
                                                            defaultValue={data.budget}
                        
                                                            onChange={handleBudget}
                                                        />
                                                    </div>
                                               
                                            </div> */}

                                            <div>
                                                <Input
                                                    type="date"
                                                    name="start_date"
                                                    label="Start date"
                                                    required
                                                    placeholder="input start date"
                                                    defaultValue={data.start_date}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>

                                            <div>
                                                <Input
                                                    type="date"
                                                    name="end_date"
                                                    label="End date"
                                                    required
                                                    placeholder="input end date"
                                                    defaultValue={data.end_date}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>
                                            <div>
                                                <TextArea
                                                    type="text"
                                                    name="description"
                                                    label="Description (about campaign)"
                                                    className="mt-1 block w-full h-32"
                                                    defaultValue={data.description}
                                                    onChange={onHandleChange}
                                                    required
                                                />
                                             </div>

                                             <div>
                                                <Input
                                                    type="text"
                                                    name="brand_name"
                                                    label="Company/brand/Product"
                                                    required
                                                    placeholder="input compnay/brand/product"
                                                    defaultValue={data.brand_name}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>

                                    </div>
                        </div>
                </div>


                <div className='flex md:flex-row flex-col md:space-x-5 md:space-y-0  space-y-4 w-full mt-5'>

                          <div className='form-group w-full'>
                                    <span className='text-t-lg-x  capitalize font-bold '>Target</span>
                                     <div className='inputs  mt-5 w-full flex flex-col space-y-4'>
                                         <div>
                                                  <Input
                                                    type="text"
                                                    name="location"
                                                    label="Location"
                                                    required
                                                    placeholder="input location"
                                                    defaultValue={data.location}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>

                                            <div class="max-w-lg">
                                                <p class="text-sm text-gray-500">Gender</p>
                                                <div class="mt-4 flex space-x-3">
                                                    <div class="flex items-center">
                                                        <input id="male"  onChange={onHandleChange} checked={campaign.target_gender == 'male'} name="gender" value="male" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="male" class="ml-3 block text-sm font-medium text-gray-700">Male</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="female" name="gender" checked={campaign.target_gender == 'female'}  onChange={onHandleChange}  value="female" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="female" class="ml-3 block text-sm font-medium text-gray-700">Female</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="age"
                                                    label="Age range"
                                                    required
                                                    placeholder="input age(E.g: 19-30)"
                                                    defaultValue={data.age}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>

                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="interest"
                                                    label="Interest"
                                                    required
                                                    placeholder="input interest"
                                                    defaultValue={data.interest}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>
                                     </div>
                          </div>


                          <div className='form-group w-full'>
                                    <span className='text-t-lg-x  capitalize font-bold '>campaign goals</span>
                                     <div className='inputs  mt-5 w-full flex flex-col space-y-4'>
                                         <div>
                                                  <Input
                                                    type="text"
                                                    name="reach"
                                                    label="Reach"
                                                    required
                                                    placeholder="Input reach"
                                                    defaultValue={data.reach}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>


                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="impression"
                                                    label="Impression/View"
                                                    required
                                                    placeholder="Input impression"
                                                    defaultValue={data.impression}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>

                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="engagement"
                                                    label="Engagement"
                                                    required
                                                    placeholder="Input engagement"
                                                    defaultValue={data.engagement}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>

                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="conversion"
                                                    label="Conversion"
                                                    required
                                                    placeholder="Input conversion"
                                                    defaultValue={data.conversion}
                
                                                    onChange={onHandleChange}
                                                />
                                            </div>
                                     </div>
                          </div>
                                    
                </div>
                    
                </> ) :   tab == 'influencer' ?  (
                     <div className='flex md:flex-row flex-col md:space-x-5 md:space-y-0  space-y-4 w-full mt-5'>
                         <div className='w-full'>
                            <div>
                             <div className='flex w-full items-center'>
                                                <div className=''>
                                                    <Select disabled options={[
                                                            { name: 'Nano', value: 'nano' },
                                                            { name: 'Micro', value: 'micro' },
                                                            { name: 'Macro', value: 'macro' },
                                                            { name: 'Mid-tier', value: 'mid-tier' },
                                                            { name: 'Mega', value: 'mega' }
                                                        ]}
                                                            name="influencer_size"
                                                            value={data.influencer_size}
                                                            onChange={onHandleChange}
                                                            label="Size"
                                                            defaultOptionText="Select size"
                                                            required
                                                            defaultValue={campaign.influencer_size?.split(',')}
                                                        />
                                                    </div>
                                             
                                                    <div className='w-full'>
                                                            <Input
                                                            disabled
                                                            type="number"
                                                            name="influencer_number"
                                                            label="Influencer Number"
                                                            required
                                                            placeholder="input number(please work with the selected size)"
                                                            defaultValue={data.influencer_number}
                        
                                                            onChange={handleBudget}
                                                        />
                                                    </div>
                                     </div>
                            { data.influencer_size && (
                                <div className='mt-3 shadow-md p-2'>
                                     <span className='font-bold text-sm'>Minimum cost per influencers</span>
                                     <div className='flex justify-between  w-full border-b  pb-2'>
                                          <span>Plartforms</span>   
                                          <span>Followers</span>  
                                           <span>Cost</span>
                                        </div>
                                        <div className='flex justify-between  w-full   my-2 mt-2'>
                                             <span>Instagram</span>  
                                             <span>{ data.influencer_size === 'nano' ? '10,000' : data.influencer_size === 'micro' ? '10,000 - 100,000' :  data.influencer_size === 'mid-tier' ? '100,001 - 500,000' :  data.influencer_size === 'macro' ? '500,001 - 1,000,000' : data.influencer_size === 'mega' ?   '1,000,00 above' : '' }</span>  
                                            <span> { data.influencer_size === 'nano' ? 'N50,000' : data.influencer_size === 'micro' ? 'N150,000' :  data.influencer_size === 'mid-tier' ? 'N350,000' :  data.influencer_size === 'macro' ? 'N750,000' : data.influencer_size === 'mega' ?   'N1,500.000' : '' }</span>
                                        </div>
                                        <div className='flex justify-between   w-full   my-2'>
                                             <span>Twitter</span>   
                                             <span>{ data.influencer_size === 'nano' ? '10,000' : data.influencer_size === 'micro' ? '10,000 - 100,000' :  data.influencer_size === 'mid-tier' ? '100,001 - 500,000' :  data.influencer_size === 'macro' ? '500,001 - 1,000,000' : data.influencer_size === 'mega' ?   '1,000,00 above' : '' }</span>  
                                            <span> { data.influencer_size === 'nano' ? ' N3,500' : data.influencer_size === 'micro' ? 'N7,500' :  data.influencer_size === 'mid-tier' ? 'N20,500' :  data.influencer_size === 'macro' ? 'N35,500' : data.influencer_size === 'mega' ?   'N65,000' : '' }</span>
                                    
                                        </div>
                                </div>
                            )}
                                    
                              </div>

                               <div className='flex w-full items-center mt-4'>
                                                <div className=''>
                                                    <Select options={[
                                                            { name: 'Naira', value: 'NGN' },
                                                            { name: 'Dollar', value: 'USD' }
                                                        ]}
                                                            name="currency"
                                                            value={data.currency}
                                                            onChange={onHandleChange}
                                                            label="Currency"
                                                            defaultOptionText="Select Currency"
                                                            required
                                                            disabled
                                                            defaultValue={campaign.currency?.split(',')}
                                                        />
                                                    </div>
                                             
                                                    <div className='w-full'>
                                                            <Input
                                                            type="number"
                                                            name="budget"
                                                            label="Budget"
                                                            required
                                                            placeholder="input campaign budget (E.g: 3000000)"
                                                            defaultValue={data.budget}
                        
                                                            onChange={handleBudget}
                                                        />
                                                    </div>
                                               
                                            </div>

                                            <div className='w-full mt-4'>
                                                  <Input
                                                    type="text"
                                                    name="influencer_niche"
                                                    label="Influencer Niche"
                                                    required
                                                    placeholder="input influencer niche"
                                                    defaultValue={data.influencer_niche}
                                                    onChange={onHandleChange}
                                                />
                                            </div>


                                 </div>
                                 <div className='w-full'>
                                            <div className='w-full '>
                                                  <Input
                                                    type="text"
                                                    name="influencer_category"
                                                    label="Influencer Category"
                                                    required
                                                    placeholder="input influencer category"
                                                    defaultValue={data.influencer_category}
                                                    onChange={onHandleChange}
                                                />
                                            </div>
                                            <div className='w-full mt-4'>
                                                  <Input
                                                    type="text"
                                                    name="influencer_location"
                                                    label="Influencer Location"
                                                    required
                                                    placeholder="input influencer location"
                                                    defaultValue={data.influencer_location}
                                                    onChange={onHandleChange}
                                                />
                                            </div>


                                           <div class="w-full mt-4">
                                                <p class="text-sm text-gray-500">Influencer Gender</p>
                                                <div class="mt-4 flex space-x-3">
                                                    <div class="flex items-center">
                                                        <input id="male"  onChange={onHandleChange} checked={campaign.influencer_gender == 'male'} name="influencer_gender" value="male" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="male" class="ml-3 block text-sm font-medium text-gray-700">Male</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="female" name="influencer_gender" checked={campaign.influencer_gender == 'female'}   onChange={onHandleChange}  value="female" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="female" class="ml-3 block text-sm font-medium text-gray-700">Female</label>
                                                    </div>
                                                </div>
                                            </div>
                               </div>
                     </div>

                )
                  : (
                    <div className='w-full'>
                            <div className="mt-space-20  mb-space-20 md:w-full  max-w-sm">
                                <UploadImage  displayFile={displayFile} image={image} name="logo" />
                            </div>

                            <div className='flex md:flex-row flex-col md:space-x-5 md:space-y-0  space-y-4 w-full'>
                                  <div className='w-full'>
                                        <div className='mt-5'>
                                                    <TextArea
                                                        type="text"
                                                        name="about_us"
                                                        label="About us"
                                                        placeholder="2-3 sentences  explaining what your company does."
                                                        className="mt-1 block w-full h-32"
                                                        defaultValue={data.about_us}
                                                        onChange={onHandleChange}
                                                        required
                                                    />
                                        </div>
                                        <div className='mt-5'>
                                                    <TextArea
                                                        type="text"
                                                        name="campaign_goal"
                                                        label="Campaign goal"
                                                        placeholder="1-2 sentences  describing the campaign and what you hope to accomplish."
                                                        className="mt-1 block w-full h-32"
                                                        defaultValue={data.campaign_goal}
                                                        onChange={onHandleChange}
                                                        required
                                                    />
                                        </div>
                                        <div className='mt-5'>
                                                    <TextArea
                                                        type="text"
                                                        name="campaign_message"
                                                        label="Campaign message"
                                                        placeholder="Specific information that the influencer should include in post captions"
                                                        className="mt-1 block w-full h-32"
                                                        defaultValue={data.campaign_message}
                                                        onChange={onHandleChange}
                                                        required
                                                    />
                                        </div>
                                  </div>
                                   <div className='w-full flex flex-col  space-y-5'>
                                                            
                                          <div className='mt-5'>
                                                        <TextArea
                                                            type="text"
                                                            name="key_objectives"
                                                            label="Key objectives"
                                                            placeholder="What are you hoping to accomplish (brand awareness, engagement, etc.)"
                                                            className="mt-1 block w-full h-32"
                                                            defaultValue={data.key_objectives}
                                                            onChange={onHandleChange}
                                                            required
                                                        />
                                            </div>

                                            <div className="hidden">
                                                                <Input
                                                                
                                                                type="text"
                                                                name="channels"
                                                                label="Channel"
                                                                required
                                                                placeholder="Input channel"
                                                                defaultValue={data.social_network}
                                                               
                                                                onChange={onHandleChange}
                                                            />
                                                </div>


                                            <div>
                                                                <Input
                                                                type="text"
                                                                name="timeline"
                                                                label="Timeline"
                                                                required
                                                                placeholder="Input timeline"
                                                                defaultValue={data.timeline}
                            
                                                                onChange={onHandleChange}
                                                            />
                                                </div>


                                                <div className='flex flex-col space-y-3'>
                                                                <Input
                                                                type="file"
                                                                name="mood_board"
                                                                accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" 
                                                                label="Mood board"
                                                               
                                                                placeholder="Input mood board"
                                                                defaultValue={data.mood_board}
                            
                                                                onChange={(event) =>  setData('mood_board', event.target.files[0])}
                                                            />
                                                   <div>
                                                       Selected:  <a href={campaign.mood_board_url}  target='_blank' className='text-blue-400'>
                                                          {campaign.mood_board}
                                                        </a>
                                  
                                                   </div>
                                                </div>

                                                <div>
                                                                <Input
                                                                type="text"
                                                                name="target_audience"
                                                                label="Target audience"
                                                                required
                                                                placeholder="Input target audience"
                                                                defaultValue={data.target_audience}
                            
                                                                onChange={onHandleChange}
                                                            />
                                                </div>
                                  </div>
                            </div>
                    </div>
                  )
                
                }
        {
            data.budget && data.influencer_number && (
                 <div className='bg-white shadow-md  md:max-w-md p-5 w-full mt-3 flex flex-col space-y-3'>
                        
                        <div className='flex justify-between'>
                             <span className='w-full'>Budget:</span>
                              <span className='text-left w-full'>{ data.currency } { numberWithCommas(data.budget)}</span>
                        </div>
                        <div className='flex justify-between'>
                             <span className='w-full'>Budget Per Influencer :</span>
                              <span className='text-left w-full'>{ data.currency } { numberWithCommas(Number(data.budget) / Number(data.influencer_number))}</span>
                        </div>
                        <div className='flex justify-between'>
                             <span className='w-full'>Service fee(15%):</span>
                              <span className='text-left w-full'>{ data.currency } { numberWithCommas(serviceFee)}</span>
                        </div>
                        <div className='flex justify-between'>
                             <span className='w-full'>Total:</span>
                              <span className='text-left w-full '>{ data.currency } { numberWithCommas(total)}</span>
                        </div>
                  </div>
            )
        }
                 


                   <div className="text-center flex space-x-3 mt-4 md:max-w-md">
                   { tab == 'details'  ? 
                   null : (
                        <Button type="buton"
                                    className='block w-full bg-white text-viralget-red'
                                    onClick={() => setTab(tab == 'influencer' ? 'contents' : 'details' )}
                                    >
                                       
                                        Back
                          </Button>
                   )}
                   {
                  
                        <Button
                                    type="submit"
                                    className='block w-full bg-viralget-red  text-white'
                                    processing={processing}>
                                 { tab == 'details' || tab == 'contents' ? 'Next' : btnMessage}  
                          </Button>
                  
                   }
                         
                         
                                              
                 </div>
             </form>

           </div>
         </AuthenticatedLayout>
    )
}