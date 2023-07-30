import Button from "@/Components/Button";
import { nFormatter } from "@/Utils/helpers";
import { useState } from "react";


import ValidationErrors from '@/Components/ValidationErrors';
import toast from '@/Components/Toast';
import TextArea from '@/Components/TextArea';
import { post } from '@/Utils/api';
import Modal from "@/Components/VModal";

export default function InfluencerCard({ influencer, showBanner, handleProfile, useShadow, useLink }) {

    const [showMessage, setShowMessage] = useState(false);

    const handleProfileClick = () => {
        useLink ? window.location.href = route('influencer.show', { influencer: influencer.username }) : handleProfile();
    }


    if (!influencer) return <></>;

    return (
        <div
            key={influencer?.id}
            className={`col-span-1 bg-white rounded-lg text-center ${useShadow ? 'shadow-lg' : 'border'} overflow-hidden`}
        >
            {showBanner && (

                <div className="bg-gray-500">
                    {
                        influencer.profile_banner_url && (<img className="h-space-131 w-full object-cover" src={influencer.profile_banner_url} alt="" />)
                    }

                </div>
            )}
            <div className={`flex flex-1 flex-col p-8 pb-4 ${showBanner && '-mt-16'}`}>
                <img className="mx-auto h-space-60 w-space-60  border-2 flex-shrink-0 rounded-full" src={influencer.profile_photo_url} alt="" />

                <div onClick={() => handleProfileClick()} className="mt-2 cursor-pointer flex flex-col">
                    <span className="text-t-xs font-bold " >{'@' + influencer.username} </span>
                    <span className="text-t-normal  font-medium text-viralget-gray-400">{influencer.full_name}</span>
                </div>

            </div>
            <div>
                <div className="flex justify-between px-space-20 mb-space-20 ">
                    <div className="text-center items-center flex-col">
                        <span className="text-t-xs font-bold block">{nFormatter(influencer.followers_count)}</span>
                        <span className="text-t-normal  text-viralget-gray-400  font-normal">
                            Followers
                        </span>
                    </div>
                    <div className="text-center items-center flex-col">
                        <span className="text-t-xs font-bold block p-0">{nFormatter(influencer.interactions)}</span>
                        <span className="text-t-normal  text-viralget-gray-400  font-normal">Interactions</span>
                    </div>
                    <div className="text-center items-center flex flex-col">
                        <span className="text-t-xs font-bold block p-0">{influencer.engagement_rate ?? 0}</span>
                        <span className="text-t-normal text-viralget-gray-400   font-normal">Engagement</span>
                    </div>

                </div>


                <div className="p-5">
                    <Button block onClick={() => setShowMessage(true)} usePrimary>Send Message</Button>
                </div>
            </div>

            <Modal isOpen={showMessage} setisOpen={setShowMessage}>
                <Form influencer={influencer.id} showModal={setShowMessage} />
            </Modal>
        </div>
    )
}



function Form(props) {

    const { influencer, sendEmail } = props;
    const [message, setMessage] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setProcessing(true);

        const data = {
            influencer,
            message,
            send_email: sendEmail
        }
        const response = await post(route('message.post'), data, true);

        if (response.errors) {
            setErrors(response.errors)
            toast.error('An error occurred');
        } else {
            toast('Message sent successfully')
            props.showModal(false);
        }

        setProcessing(false);
    }


    return (
        <form action="#" className="p-5 bg-white" onSubmit={handleSubmit} method="POST">
            <ValidationErrors errors={errors} />

            <div className="space-y-5">
                <TextArea value={message} label="Your message" name="message" onChange={(e) => setMessage(e.target.value)} className="w-full" />
                <Button block usePrimary processing={processing}>Send Message</Button>
            </div>
        </form>
    )
}
