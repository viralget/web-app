import { getQASColor, getQASValue, nFormatter } from "@/Utils/helpers"
import GaugeChart from "react-gauge-chart"



export default function QAS({ influencer }) {

    return (
        <div className={`relative  text-center`}>
            <span className="font-bold  text-t-xs font-lexend">Quality audience score</span>

            <GaugeChart id="gauge-chart5"
                nrOfLevels={420}
                animate
                arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                colors={['#E46361', '#FEB702', '#0BCEF9', '#25EEB2', '#28CA42']}
                percent={influencer.quality_audience_score / 100}
                arcPadding={0.02}
                textColor={'#3E4555'}
                needleColor={'#748094'}
            // arcWidth={[4, 2, 2, 2, 2]}
            // arcHeight={[2, 2, 2, 2, 2]}
            />

            <div className="">
                <span className={`text-xl font-bold ${getQASColor(influencer.quality_audience_score)}`}>{getQASValue(influencer.quality_audience_score)}</span>
                {/* <span className="text-[#28CA42] font-bold">Excellent</span> */}
            </div>

        </div>
    )
}