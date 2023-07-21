import Steps from "@/components/Steps";
import { classNames } from "@/Utils/helpers";

export default function influencerSize({ influencer, isMini }) {

    const steps = [
        { id: '01', name: 'Nano', value: '1K', href: '#', status: 'current' },
        { id: '02', name: 'Micro', value: '10K', href: '#', status: 'current' },
        { id: '03', name: 'Mid-tier', value: '50K', href: '#', status: 'current' },
        { id: '04', name: 'Macro', value: '100K', href: '#', status: 'current' },
        { id: '05', name: 'Mega', value: '1m+', href: '#', status: 'current' },
    ]




    function getLevels() {

        const data = steps;
        data.forEach(item => {
            if (influencer.followers_count >= 1000 && item.name === 'Nano') item.status = 'complete';
            if (influencer.followers_count >= 10000 && item.name === 'Micro') item.status = 'complete';
            if (influencer.followers_count >= 50000 && item.name === 'Mid-tier') item.status = 'complete';
            if (influencer.followers_count >= 100000 && item.name === 'Macro') item.status = 'complete';
            if (influencer.followers_count >= 10000000 && item.name === 'Mega') item.status = 'complete';
        });

        return data;
    }


    return (
        <div className={classNames("border pb-10 rounded-md", isMini ? 'w-full h-full' : ' md:h-space-190')} >
            <div className="pl-7 p-space-20  pt-space-24">
                <span className="font-bold  text-t-xs font-lexend">
                    Influencer size
                </span>
            </div>
            <div className="mt-space-20">
                <Steps steps={getLevels()} />
            </div>

        </div>
    )
}