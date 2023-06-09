import GaugeChart from "react-gauge-chart";

export default function Guage({ score, id, color, value }) {
    return (
        <div className="text-center">
            <GaugeChart id={id}
                nrOfLevels={420}
                animate
                arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                colors={['#E46361', '#FEB702', '#0BCEF9', '#25EEB2', '#28CA42']}
                percent={score}
                arcPadding={0.02}
                textColor={'#3E4555'}
                needleColor={'#748094'}
            // arcWidth={[4, 2, 2, 2, 2]}
            // arcHeight={[2, 2, 2, 2, 2]}
            />

            <div className="">
                <span className={`text-xl font-bold ${color}`}>{value}</span>
                {/* <span className="text-[#28CA42] font-bold">Excellent</span> */}
            </div>
        </div>

    )
}