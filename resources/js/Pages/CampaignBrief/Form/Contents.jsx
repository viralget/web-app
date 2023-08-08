import Input from "@/Components/Input"
import Label from "@/Components/Label"
import MultiSelect from "@/Components/MultiSelect"
import Select from "@/Components/Select"
import TextArea from "@/Components/TextArea"
import UploadImage from "@/Components/UploadImage"
import { numberWithCommas } from "@/Utils/helpers"

export default ({ data, onHandleChange, setData, handleBudget, displayFile, image, }) => {

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
                                <UploadImage displayFile={displayFile} image={image} name="logo" isRequired={!image} />
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
                                label="Taskl"
                                placeholder="1-2 sentenses on what you expect from the influencer"
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
                                label="Dos"
                                placeholder="Instructions on what the influencer can/must do"
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
                                label="Don'ts"
                                placeholder="Instructions on what the influencer can't/mustn't do"
                                className="mt-1 block w-full h-32"
                                defaultValue={data.key_objectives}
                                onChange={onHandleChange}
                                required
                            />
                        </div>

                        {/* <div className="sm:col-span-3">
                            <Input

                                type="text"
                                name="channels"
                                label="Channel"
                                required
                                placeholder="Enter preferred channels/social media"
                                defaultValue={data.social_network}

                                onChange={onHandleChange}
                            />
                        </div> */}
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

                        <div className="sm:col-span-full">
                            <TextArea
                                type="text"
                                name="target_audience"
                                label="Audience Insights"
                                required
                                placeholder="Brief Insight about the target audience"
                                defaultValue={data.target_audience}

                                onChange={onHandleChange}
                            />
                        </div>


                    </div>
                </div>
            </div >


        </>

    )
}