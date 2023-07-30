import Input from "@/Components/Input"
import Label from "@/Components/Label"
import MultiSelect from "@/Components/MultiSelect"
import Select from "@/Components/Select"
import TextArea from "@/Components/TextArea"

export default ({ data, onHandleChange, setData, handleBudget }) => {
    return (
        <>
            <div className="space-y-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Influencer Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Define your preferred influencer details.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="col-span-full">
                            <div className="mt-2">
                                <Select options={[
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
                                    defaultOptionText="Select preferred influencer size"
                                    required
                                />
                            </div>
                        </div>


                        {data.influencer_size && (
                            <div className='sm:col-span-full border'>
                                <span className='font-bold text-sm'>Minimum cost per influencers</span>
                                <div className='flex justify-between  w-full border-b  p-3'>
                                    <span>Platforms</span>
                                    <span>Followers</span>
                                    <span>Cost</span>
                                </div>
                                <div className='flex justify-between  w-full   my-2 mt-2'>
                                    <span>Instagram</span>
                                    <span>{data.influencer_size === 'nano' ? '10,000' : data.influencer_size === 'micro' ? '10,000 - 100,000' : data.influencer_size === 'mid-tier' ? '100,001 - 500,000' : data.influencer_size === 'macro' ? '500,001 - 1,000,000' : data.influencer_size === 'mega' ? '1,000,00 above' : ''}</span>
                                    <span> {data.influencer_size === 'nano' ? 'N50,000' : data.influencer_size === 'micro' ? 'N150,000' : data.influencer_size === 'mid-tier' ? 'N350,000' : data.influencer_size === 'macro' ? 'N750,000' : data.influencer_size === 'mega' ? 'N1,500.000' : ''}</span>
                                </div>
                                <div className='flex justify-between   w-full   my-2'>
                                    <span>Twitter</span>
                                    <span>{data.influencer_size === 'nano' ? '10,000' : data.influencer_size === 'micro' ? '10,000 - 100,000' : data.influencer_size === 'mid-tier' ? '100,001 - 500,000' : data.influencer_size === 'macro' ? '500,001 - 1,000,000' : data.influencer_size === 'mega' ? '1,000,00 above' : ''}</span>
                                    <span> {data.influencer_size === 'nano' ? ' N3,500' : data.influencer_size === 'micro' ? 'N7,500' : data.influencer_size === 'mid-tier' ? 'N20,500' : data.influencer_size === 'macro' ? 'N35,500' : data.influencer_size === 'mega' ? 'N65,000' : ''}</span>

                                </div>
                            </div>
                        )}

                        <div className="col-span-full">
                            <Input
                                type="number"
                                name="influencer_number"
                                label="Preferred number of influencers"
                                required
                                placeholder="Enter a value"
                                defaultValue={data.influencer_number}

                                onChange={handleBudget}
                            />
                        </div>
                        <div className="sm:col-span-3">
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

                        <div className="sm:col-span-3">
                            <Input
                                type="number"
                                name="budget"
                                label="Budget"
                                required
                                placeholder="(E.g: 3000000)"
                                defaultValue={data.budget}

                                onChange={handleBudget}
                            />
                        </div>

                        <div className="col-span-full">
                            <Input
                                type="text"
                                name="influencer_niche"
                                label="Influencer Niche"
                                required
                                placeholder="Enter influencer niche"
                                defaultValue={data.influencer_niche}
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <Input
                                type="text"
                                name="influencer_category"
                                label="Influencer Category"
                                required
                                placeholder="Enter influencer category"
                                defaultValue={data.influencer_category}
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <Input
                                type="text"
                                name="influencer_location"
                                label="Influencer Location"
                                required
                                placeholder="Select influencer location"
                                defaultValue={data.influencer_location}
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <Label>Influencer Gender</Label>
                            <div class="mt-4 flex space-x-3">
                                <div class="flex items-center">
                                    <input id="male" onChange={onHandleChange} name="influencer_gender" value="male" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                    <label for="male" class="ml-3 block text-sm font-medium text-gray-700">Male</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="female" name="influencer_gender" onChange={onHandleChange} value="female" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                    <label for="female" class="ml-3 block text-sm font-medium text-gray-700">Female</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >


        </>

    )
}