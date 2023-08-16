import Input from "@/Components/Input"
import Label from "@/Components/Label"
import MultiSelect from "@/Components/MultiSelect"
import Select from "@/Components/Select"
import TextArea from "@/Components/TextArea"

export default ({ data, onHandleChange, setData, campaign }) => {
    return (
        <>
            <div className="space-y-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Main Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be careful what you share.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="col-span-full">
                            <div className="mt-2">
                                <Input
                                    type="text"
                                    name="title"
                                    label="Campaign Title"
                                    required
                                    placeholder="Enter campaign title"
                                    defaultValue={data.title}
                                    onChange={onHandleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <TextArea
                                type="text"
                                name="description"
                                label="Campaign Description"
                                placeholder="Enter detailed campaign information"
                                className="mt-1 block w-full h-32"
                                defaultValue={data.description}
                                onChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <Input
                                type="date"
                                name="start_date"
                                label="Campaign start date"
                                required
                                placeholder="Start date"
                                defaultValue={data.start_date}
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <Input
                                type="date"
                                name="end_date"
                                label="End date"
                                required
                                placeholder="Campaign end date"
                                defaultValue={data.end_date}

                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="col-span-full">
                            <Label>Select Campaign Type</Label>
                            <div class="mt-4 flex space-x-3">
                                <div class="flex items-center">
                                    <input id="public" onChange={onHandleChange} name="campaign_type" checked={campaign?.campaign_type == 'public'} value="public" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                    <label for="public" class="ml-3 block text-sm font-medium text-gray-700">Public</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="private" onChange={onHandleChange} name="campaign_type" checked={campaign?.campaign_type == 'private'} value="private" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                    <label for="private" class="ml-3 block text-sm font-medium text-gray-700">Private</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <MultiSelect
                                options={[
                                    { value: 'Instagram' },
                                    { value: 'Twitter' }
                                ]}
                                label='Social Platform'
                                name="social_network"
                                required
                                defaultValue={campaign?.social_network?.split(',')}
                                onChange={(values) => setData('social_network', [...values].join(','))}
                            />
                        </div>

                        <div className="col-span-full">
                            <Input
                                type="text"
                                name="brand_name"
                                label="Company/brand/Product"
                                required
                                placeholder="Enter company/brand/product name"
                                defaultValue={data.brand_name}
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="col-span-full">
                            <Input
                                type="text"
                                name="keywords"
                                label="Tracked keywords"
                                required
                                placeholder="field(@handle, #hastag, keywords, phrase)"
                                defaultValue={data.keywords}
                                onChange={onHandleChange}
                            />
                        </div>


                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Campaign Target Details</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Define your campaign's target audience.</p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-full">
                            <Input
                                type="text"
                                name="location"
                                label="Campaign target location"
                                required
                                placeholder="Enter preferred campaign target location"
                                defaultValue={data.location}
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="sm:col-span-full">
                            <Label>Target Gender</Label>

                            <div class="mt-4 flex space-x-3">
                                <div class="flex items-center">
                                    <input id="male" onChange={onHandleChange} value="male" checked={campaign?.target_gender == 'male'} name="gender" value="male" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                    <label for="male" class="ml-3 block text-sm font-medium text-gray-700">Male</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="female" name="gender" value="female" checked={campaign?.target_gender == 'female'} onChange={onHandleChange} value="female" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                    <label for="female" class="ml-3 block text-sm font-medium text-gray-700">Female</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="female" name="gender" value="both" checked={campaign?.target_gender == 'both'} onChange={onHandleChange} value="both" type="radio" class="h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red" />
                                    <label for="female" class="ml-3 block text-sm font-medium text-gray-700">Both</label>
                                </div>
                            </div>
                        </div>


                        <div className="sm:col-span-full">
                            <Input
                                type="text"
                                name="age"
                                label="Preferred audience's Age range"
                                required
                                placeholder="Enter age range (e.g: 19-30, 30-40)"
                                defaultValue={data.age}
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="sm:col-span-full">
                            <Input
                                type="text"
                                name="interest"
                                label="Target audience interests"
                                required
                                placeholder="Enter preferred audience's interest"
                                defaultValue={data.interest}
                                onChange={onHandleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Campaign Goal</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Define what your brand hopes to achieve with this campaign.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-full">
                            <Select
                                name="reach_goal"
                                label="Campaign Goal"
                                required
                                placeholder="Select campaign goal"
                                defaultValue={data.reach_goal}
                                options={[
                                    { name: 'Reach' },
                                    { name: 'Impressions/Views' },
                                    { name: 'Engagement' },
                                    { name: 'Conversion' }
                                ]}
                            />
                        </div>

                    </div>
                </div>
            </div >


        </>

    )
}