import { nFormatter } from "@/Utils/helpers";

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
                        influencer.profile_banner_url && (<img class="h-36 w-full object-cover" src={influencer.profile_banner_url} alt="" />)
                    }

                </div>
            )}
            <div className={`flex flex-1 flex-col p-8 ${showBanner && '-mt-16'}`}>
                <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={influencer.profile_photo_url} alt="" />
                <h3 className="mt-6 text-sm font-medium text-gray-900 cursor-pointer" onClick={() => handleProfileClick()}>@{influencer.username}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between cursor-pointer" onClick={() => handleProfileClick()}>
                    <dd className="text-sm text-gray-500">{influencer.full_name}</dd>
                </dl>
            </div>
            <div>
                <div className="flex justify-between mx-10 mb-5 ">
                    <div className="text-center items-center flex-col">
                        <span className="text-xl block">{nFormatter(influencer.followers_count)}</span>
                        <span className="text-sm text-gray-500">Followers</span>
                    </div>
                    <div className="text-center items-center flex-col">
                        <span className="text-xl block p-0">{nFormatter(influencer.interactions)}</span>
                        <span className="text-sm text-gray-500">Interactions</span>
                    </div>
                    <div className="text-center items-center flex-col">
                        <span className="text-xl block">{influencer.engagement_rate ?? 0}</span>
                        <span className="text-sm text-gray-500">ER</span>
                    </div>

                </div>
            </div>
        </div>
    )
}