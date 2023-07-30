import Input from "@/Components/Input"
import Label from "@/Components/Label"
import MultiSelect from "@/Components/MultiSelect"
import Select from "@/Components/Select"
import TextArea from "@/Components/TextArea"
import UploadImage from "@/Components/UploadImage"
import { numberWithCommas } from "@/Utils/helpers"

export default ({ data, onHandleChange, setData, handleBudget, displayFile, image }) => {
    return (
        <>
            <div className="space-y-12">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Campaign Content Details</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Provide the necessary details of your campaign.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="col-span-full">
                            <div className="mt-2">
                                <UploadImage displayFile={displayFile} image={image} name="logo" isRequired />
                            </div>
                        </div>
                        <div className="col-span-full">
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


                        <div className="sm:col-span-full">
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

                        <div className="col-span-full">
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

                        <div className="col-span-full">
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

                        <div className="sm:col-span-3">
                            <Input

                                type="text"
                                name="channels"
                                label="Channel"
                                required
                                placeholder="Enter preferred channels/social media"
                                defaultValue={data.social_network}

                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <Input
                                type="text"
                                name="timeline"
                                label="Timeline"
                                required
                                placeholder="Enter expected delivery timeline"
                                defaultValue={data.timeline}

                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <Input
                                type="file"
                                name="mood_board"
                                accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                                label="Mood board"
                                required
                                placeholder="Input mood board"
                                defaultValue={data.mood_board}

                                onChange={(event) => setData('mood_board', event.target.files[0])}
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <Input
                                type="text"
                                name="target_audience"
                                label="Target audience"
                                required
                                placeholder="Enter target audience"
                                defaultValue={data.target_audience}

                                onChange={onHandleChange}
                            />
                        </div>


                        <div className="col-span-full">

                            {
                                data.budget && data.influencer_number && (
                                    <div className='bg-white shadow-md  md:max-w-md p-5 w-full mt-3 flex flex-col space-y-3'>

                                        <div className='flex justify-between'>
                                            <span className='w-full'>Budget:</span>
                                            <span className='text-left w-full'>{data.currency} {numberWithCommas(data.budget)}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='w-full'>Budget Per Influencer :</span>
                                            <span className='text-left w-full'>{data.currency} {numberWithCommas(Number(data.budget) / Number(data.influencer_number))}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='w-full'>Service fee(15%):</span>
                                            <span className='text-left w-full'>{data.currency} {numberWithCommas(serviceFee)}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='w-full'>Total:</span>
                                            <span className='text-left w-[10rem] '>{data.currency} {numberWithCommas(total)}</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >


        </>

    )
}