import Guage from "@/Components/Guage"
import { getQASColor, getQASValue, nFormatter, safetyLevel, safetyLevelColor } from "@/Utils/helpers"
import GaugeChart from "react-gauge-chart"

export default function BrandSafetyLevel({ influencer }) {

    const list = [
        'Inappropriate words',
        'Negative sentiments',
        'Toxic content',
        'Offensive content',
        'Explicit words',
        'Adult content'
    ]


    return (
        <div className="border  w-full h-full rounded-md p-5">
            <span className="font-bold text-t-xs font-lexend">Brand Safety Level</span>

            <div className="flex items-center  w-full space-x-3 " >

                <div className={`relative sm:w-2/5`}>
                    <Guage
                        score={influencer.brand_safety_level / 1000}
                        name="bsl"
                        color={safetyLevelColor(influencer.brand_safety_level)}
                        text={safetyLevel(influencer.brand_safety_level)}
                    />
                </div>

                <div className="w-full p-4 space-y-3">
                    <p className="font-bold text-sm font-lexend">Negative content background check:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                        {
                            list.map((item, index) => (
                                <div key={index} className={`flex items-center`}>
                                    <div className="mr-2">
                                        <div className="bg-green-600 w-1.5 h-1.5 rounded-full"></div>
                                    </div>
                                    <p className="text-sm">{item}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}