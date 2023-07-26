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


export default function  Create() {


   const [tab, setTab] = useState('contents')
   const [image, setImageUrl] = useState(null);
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
        logo:''
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

    };

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


            <form onSubmit={submit} className='mt-10  bg-white shadow-sm p-5 w-full'>
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
                                            <div>
                                                <Input
                                                    type="text"
                                                    name="budget"
                                                    label="Budget"
                                                    required
                                                    placeholder="input campaign budget (E.g: 3000000)"
                                                    defaultValue={data.budget}
                                                    className="mt-1 block w-full"
                                                    onChange={onHandleChange}
                                                />
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
                                                    placeholder="input reach"
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
                                                    placeholder="input impression"
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
                                                    placeholder="input engagement"
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
                                                    placeholder="input conversion"
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
                    <div>
                            <div className="mt-space-20  mb-space-20">
                                <UploadImage  displayFile={displayFile} image={image} />
                            </div>
                    </div>
                  )
                
                }


                   <div className="text-center  mt-4 md:max-w-md">
                         <Button
                                    type="submit"
                                    className='block w-full bg-viralget-red  text-white'
                                    processing={processing}>
                                 { tab == 'details' ? 'Next' : ' Create Campaign'}  
                          </Button>
                 </div>
             </form>

           </div>
         </AuthenticatedLayout>
    )
}