import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import ButtonBack from '@/components/ButtonBack';
import { useEffect, useState } from 'react'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import TextArea from '@/Components/TextArea';


export default function  Create() {

    return(
        <AuthenticatedLayout  title="My Campaigns"  smallHeader={true}>
          <div className='bg-white h-screen  mt-3 px-5 mb-10'>
            <ButtonBack />

            <div className='flex  justify-center mx-auto'>
                     <div className='flex space-x-5'>
                          <span className='font-bold  text-viralget-red  capitalize'>campaign  details</span>
                           <span className='text-gray-300'>|</span>
                          <span className='font-bold text-gray-200 capitalize'>content</span>
                     </div>
            </div>


            <form className='mt-10  bg-white shadow-sm p-5 w-full'>

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
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>

                                            <div>
                                                <Input
                                                    type="text"
                                                    name="title"
                                                    label="Social networks"
                                                    required
                                                    placeholder="input social networks"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>

                                            <div class="max-w-lg">
                                                <p class="text-sm text-gray-500">Select Campaign Type</p>
                                                <div class="mt-4 flex space-x-3">
                                                    <div class="flex items-center">
                                                        <input id="public" name="campaign_type" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="public" class="ml-3 block text-sm font-medium text-gray-700">Public</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="private" name="campaign_type" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="private" class="ml-3 block text-sm font-medium text-gray-700">Private</label>
                                                    </div>
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
                                                    placeholder="input campaign budget"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>

                                            <div>
                                                <Input
                                                    type="date"
                                                    name="start_date"
                                                    label="Start date"
                                                    required
                                                    placeholder="input start date"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>

                                            <div>
                                                <Input
                                                    type="date"
                                                    name="end_date"
                                                    label="End date"
                                                    required
                                                    placeholder="input end date"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>
                                            <div>
                                                <TextArea
                                                    type="text"
                                                    name="description"
                                                    label="Description (about campaign)"
                                                    className="mt-1 block w-full h-32"
                                                    defaultValue={null}
                                                    onChange={() => console.log("hello")}
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
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
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
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>

                                            <div class="max-w-lg">
                                                <p class="text-sm text-gray-500">Gender</p>
                                                <div class="mt-4 flex space-x-3">
                                                    <div class="flex items-center">
                                                        <input id="male" name="gender" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                                        <label for="male" class="ml-3 block text-sm font-medium text-gray-700">Male</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="female" name="gender" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
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
                                                    placeholder="input age"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>

                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="interest"
                                                    label="Interest"
                                                    required
                                                    placeholder="input interest"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
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
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>


                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="impression"
                                                    label="Impression/View"
                                                    required
                                                    placeholder="input impression"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>

                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="engagement"
                                                    label="Engagement"
                                                    required
                                                    placeholder="input engagement"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>

                                            <div>
                                                  <Input
                                                    type="text"
                                                    name="conversion"
                                                    label="Conversion"
                                                    required
                                                    placeholder="input conversion"
                                                    defaultValue={null}
                                                    className="mt-1 block w-full"
                                                    onChange={() => console.log("hell")}
                                                />
                                            </div>
                                     </div>
                          </div>
                                    
                </div>
                    
             </form>

           </div>
         </AuthenticatedLayout>
    )
}