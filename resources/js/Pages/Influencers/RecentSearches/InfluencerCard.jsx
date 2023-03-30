import { nFormatter } from "@/Utils/helpers";
import Typography from "@/components/Typography";

export default function InfluencerCard({ influencer, showBanner, handleProfile, useShadow, useLink }) {

    const handleProfileClick = () => {
        useLink ? window.location.href = route('influencer.show', { id: influencer.id }) : handleProfile();
    }

    return (
        <div
            key={influencer.id}
            className={`col-span-1 bg-white rounded-lg text-center ${useShadow ? 'shadow-lg' : 'border'} overflow-hidden`}
        >
            {showBanner && (

                <div className="bg-gray-500">
                    {
                        influencer.profile_banner_url && (<img className="h-36 w-full object-cover" src={influencer.profile_banner_url} alt="" />)
                    }

                </div>
            )}
            <div className={`flex flex-1 flex-col p-8 ${showBanner && '-mt-16'}`}>
                <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={influencer.profile_photo_url} alt="" />

                <div onClick={() => handleProfileClick()} className="mt-2 cursor-pointer flex flex-col">
                    <Typography variant={'b1'} content={'@' + influencer.username} />
                    <Typography variant={'b3'} content={influencer.full_name} className="text-gray-500 mt-1" />
                </div>

            </div>
            <div>
                <div className="flex justify-between mx-10 mb-5 ">
                    <div className="text-center items-center flex-col">
                        <span className="text-xl block">{nFormatter(influencer.followers_count)}</span>
                        <Typography variant={'b3'} content="Followers" className="text-gray-500 mt-1" />
                    </div>
                    <div className="text-center items-center flex-col">
                        <span className="text-xl block p-0">{nFormatter(influencer.interactions)}</span>
                        <Typography variant={'b3'} content="Interactions" className="text-gray-500 mt-1" />
                    </div>
                    <div className="text-center items-center flex flex-col">
                        <Typography variant={'b1'} content={influencer.engagement_rate ?? 0} />
                        <Typography variant={'b3'} content="ER" className="text-gray-500 mt-1" />
                    </div>

                </div>
            </div>
        </div>
    )
}