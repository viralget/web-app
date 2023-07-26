import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import ButtonBack from '@/components/ButtonBack';
import { useEffect, useState } from 'react'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import { useForm } from '@inertiajs/inertia-react';
import TextArea from '@/Components/TextArea';
import MultiSelect from '@/components/MultiSelect';
import { classNames } from '@/Utils/helpers';
import UploadImage from "@/components/UploadImage";
import { getEventValue } from '@/Utils/helpers';
import { numberWithCommas } from '@/Utils/helpers';
import Select from '@/components/Select';

export default function  Create() {


   const [tab, setTab] = useState('details')
   const [image, setImageUrl] = useState(null);
   const [serviceFee, setServiceFee] = useState(0);
   const [total, setTotal] = useState(0);
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        social_network: '',
        campaign_type: '',
        budget:'',
        keywords: '',
        start_date:'',
        end_date:'',
        description:'',
        brand_name:'',
        location:'',
        gender:'',
        age:'',
        interest:'',
        reach: '',
        impression:'',
        engagement:'',
        conversion:'',
        logo:'',
        about_us: '',
        campaign_goal:'',
        campaign_message:'',
        key_objectives: '',
        channels:'',
        timeline: '',
        mood_board:'',
        target_audience:'',
        currency: ''
    });


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


    const submit = (e) => {
        e.preventDefault();
        if(tab === 'details'){
            setTab('contents');
            return;
        }

        post(route('brief.store'), {
            onSuccess: () => {
                toast('Campaign created successfully! Our team would reach out to you once the highlighted influencer(s) respond');
            },
            onError: () => {
                toast.error('An error occured');
            }
        });
     
    };

    function  handleBudget(event){
        setData(event.target.name, getEventValue(event));
       const budget = event.target.value;
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
                          <span className={classNames('font-bold  capitalize',  tab == 'contents' ? 'text-viralget-red' : 'text-gray-200' )}>content</span>
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
                                                    className="mt-1 block w-full"
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
                                                onChange={(values) => setData('social_network', [...values].join(','))}
                                            />
                                            </div>

                                            <div class="max-w-lg">
                                                <p class="text-sm text-gray-500">Select Campaign Type</p>
                                                <div class="mt-4 flex space-x-3">
                                                    <div class="flex items-center">
                                                        <input id="public" onChange={onHandleChange} name="campaign_type" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="public" class="ml-3 block text-sm font-medium text-gray-700">Public</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="private" onChange={onHandleChange} name="campaign_type" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
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
                                                    className="mt-1 block w-full"
                                                    onChange={onHandleChange}
                                                />
                                            </div>
                                     </div>
                                 </div>
                        </div>


                            <div className='form-group w-full'>
                                    <span className='text-t-lg-x  capitalize font-bold '>about campaign</span>
                                    <div className='inputs  mt-5 w-full flex flex-col space-y-4'>
                                            <div className='flex w-full items-center'>
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
                                                            className="mt-1 block w-full"
                                                            onChange={handleBudget}
                                                        />
                                                    </div>
                                               
                                            </div>

                                            <div>
                                                <Input
                                                    type="date"
                                                    name="start_date"
                                                    label="Start date"
                                                    required
                                                    placeholder="input start date"
                                                    defaultValue={data.start_date}
                                                    className="mt-1 block w-full"
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
                                                    className="mt-1 block w-full"
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
                                                    className="mt-1 block w-full"
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
                                                    className="mt-1 block w-full"
                                                    onChange={onHandleChange}
                                                />
                                            </div>

                                            <div class="max-w-lg">
                                                <p class="text-sm text-gray-500">Gender</p>
                                                <div class="mt-4 flex space-x-3">
                                                    <div class="flex items-center">
                                                        <input id="male"  onChange={onHandleChange} name="gender" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="male" class="ml-3 block text-sm font-medium text-gray-700">Male</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="female" name="gender"  onChange={onHandleChange} type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
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
                                                    className="mt-1 block w-full"
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
                                                    className="mt-1 block w-full"
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
                                                    className="mt-1 block w-full"
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
                                                    className="mt-1 block w-full"
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
                                                    className="mt-1 block w-full"
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
                                                    className="mt-1 block w-full"
                                                    onChange={onHandleChange}
                                                />
                                            </div>
                                     </div>
                          </div>
                                    
                </div>
                    
                </> ) : 
                  (
                    <div className='w-full'>
                            <div className="mt-space-20  mb-space-20 md:w-full  max-w-sm">
                                <UploadImage  displayFile={displayFile} image={image} name="logo" isRequired/>
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

                                            <div>
                                                                <Input
                                                                type="text"
                                                                name="channel"
                                                                label="Channel"
                                                                required
                                                                placeholder="Input channel"
                                                                defaultValue={data.channels}
                                                                className="mt-1 block w-full"
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
                                                                className="mt-1 block w-full"
                                                                onChange={onHandleChange}
                                                            />
                                                </div>


                                                <div>
                                                                <Input
                                                                type="file"
                                                                name="mood_board"
                                                                accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" 
                                                                label="Mood board"
                                                                required
                                                                placeholder="Input mood board"
                                                                defaultValue={data.mood_board}
                                                                className="mt-1 block w-full"
                                                                onChange={(event) =>  setData('mood_board', event.target.files[0])}
                                                            />
                                                </div>

                                                <div>
                                                                <Input
                                                                type="text"
                                                                name="target_audience"
                                                                label="Target audience"
                                                                required
                                                                placeholder="Input target audience"
                                                                defaultValue={data.target_audience}
                                                                className="mt-1 block w-full"
                                                                onChange={onHandleChange}
                                                            />
                                                </div>
                                  </div>
                            </div>
                    </div>
                  )
                
                }

                  <div className='bg-white shadow-md  md:max-w-md p-5 w-full  flex flex-col space-y-3'>
                        <div className='flex justify-between'>
                             <span className='w-[10rem] '>Budget:</span>
                              <span className='text-left w-[10rem] '>{ data.currency } { numberWithCommas(data.budget)}</span>
                        </div>
                        <div className='flex justify-between'>
                             <span className='w-[10rem] '>Service fee:</span>
                              <span className='text-left w-[10rem] '>{ data.currency } { numberWithCommas(serviceFee)}</span>
                        </div>
                        <div className='flex justify-between'>
                             <span className='w-[10rem] '>Total:</span>
                              <span className='text-left w-[10rem] '>{ data.currency } { numberWithCommas(total)}</span>
                        </div>
                  </div>


                   <div className="text-center flex space-x-3 mt-4 md:max-w-md">
                   { tab == 'details' ? 
                   null : (
                        <Button type="buton"
                                    className='block w-full bg-white text-viralget-red'
                                    onClick={() => setTab('details')}
                                    >
                                       
                                        Back
                          </Button>
                   )}
                         <Button
                                    type="submit"
                                    className='block w-full bg-viralget-red  text-white'
                                    processing={processing}>
                                 { tab == 'details' ? 'Next' : 'Pay & Create Campaign'}  
                          </Button>
                 </div>
             </form>

           </div>
         </AuthenticatedLayout>
    )
}