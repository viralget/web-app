import { getQASColor, getQASValue, nFormatter } from "@/Utils/helpers"
import GaugeChart from "react-gauge-chart"
import QAS from "./QAS"



export default function AudienceCard({ influencer }) {

    const list = [
        {
            name: 'Quality audience',
            value: nFormatter(influencer.quality_audience ?? 0),
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_43749)">
                        <path d="M9 12.6562C10.5533 12.6562 11.8125 11.3971 11.8125 9.84375C11.8125 8.29045 10.5533 7.03125 9 7.03125C7.4467 7.03125 6.1875 8.29045 6.1875 9.84375C6.1875 11.3971 7.4467 12.6562 9 12.6562Z" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.7812 8.15626C14.4364 8.15516 15.0827 8.30717 15.6687 8.60015C16.2546 8.89314 16.764 9.31899 17.1562 9.84376" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M0.84375 9.84376C1.23595 9.31899 1.74535 8.89314 2.33132 8.60015C2.91729 8.30717 3.56362 8.15516 4.21875 8.15626" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.94922 15.1857C5.31964 14.4271 5.89568 13.7878 6.61172 13.3406C7.32776 12.8934 8.155 12.6562 8.99922 12.6562C9.84344 12.6562 10.6707 12.8934 11.3867 13.3406C12.1028 13.7878 12.6788 14.4271 13.0492 15.1857" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.21713 8.15625C3.79008 8.15668 3.37173 8.03557 3.01095 7.80708C2.65017 7.57858 2.36188 7.25213 2.17974 6.86586C1.99761 6.4796 1.92916 6.04948 1.9824 5.62577C2.03563 5.20205 2.20835 4.80223 2.48038 4.47303C2.7524 4.14383 3.11249 3.89884 3.51858 3.76669C3.92467 3.63454 4.35998 3.62069 4.77365 3.72675C5.18732 3.83281 5.56226 4.0544 5.85467 4.36564C6.14707 4.67687 6.34487 5.0649 6.42494 5.48437" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5742 5.48437C11.6543 5.0649 11.8521 4.67687 12.1445 4.36564C12.4369 4.0544 12.8118 3.83281 13.2255 3.72675C13.6392 3.62069 14.0745 3.63454 14.4806 3.76669C14.8867 3.89884 15.2468 4.14383 15.5188 4.47303C15.7908 4.80223 15.9635 5.20205 16.0168 5.62577C16.07 6.04948 16.0015 6.4796 15.8194 6.86586C15.6373 7.25213 15.349 7.57858 14.9882 7.80708C14.6274 8.03557 14.2091 8.15668 13.782 8.15625" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_958_43749">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            )
        },
        {
            name: 'Total likes',
            value: nFormatter(influencer.total_likes ?? 0),
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_43737)">
                        <path d="M2.25 7.3125H5.625V14.625H2.25C2.10082 14.625 1.95774 14.5657 1.85225 14.4602C1.74676 14.3548 1.6875 14.2117 1.6875 14.0625V7.875C1.6875 7.72582 1.74676 7.58274 1.85225 7.47725C1.95774 7.37176 2.10082 7.3125 2.25 7.3125V7.3125Z" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.625 7.3125L8.4375 1.6875C9.03424 1.6875 9.60653 1.92455 10.0285 2.34651C10.4504 2.76847 10.6875 3.34076 10.6875 3.9375V5.625H15.0398C15.1994 5.62461 15.3571 5.65835 15.5025 5.72397C15.6479 5.7896 15.7776 5.88557 15.8828 6.00546C15.988 6.12534 16.0664 6.26636 16.1126 6.41903C16.1588 6.57171 16.1718 6.7325 16.1508 6.89062L15.307 13.6406C15.2729 13.9116 15.1414 14.1609 14.9369 14.342C14.7325 14.5231 14.4692 14.6237 14.1961 14.625H5.625" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_958_43737">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        },
        {
            name: 'Total comments',
            value: nFormatter(influencer.total_comments ?? 0),
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_43732)">
                        <path d="M2.39761 9.89147C1.76716 8.82931 1.54618 7.57351 1.77617 6.35994C2.00617 5.14636 2.67132 4.0585 3.6467 3.30068C4.62207 2.54285 5.84057 2.16719 7.07334 2.24426C8.30611 2.32132 9.46834 2.84581 10.3417 3.71921C11.2151 4.59261 11.7396 5.75484 11.8167 6.98761C11.8938 8.22038 11.5181 9.43888 10.7603 10.4143C10.0025 11.3896 8.91459 12.0548 7.70102 12.2848C6.48744 12.5148 5.23165 12.2938 4.16948 11.6633L2.4187 12.1626C2.34657 12.1828 2.27033 12.1835 2.19783 12.1646C2.12533 12.1457 2.05919 12.1077 2.00621 12.0547C1.95322 12.0018 1.9153 11.9356 1.89636 11.8631C1.87741 11.7906 1.87811 11.7144 1.89839 11.6423L2.39761 9.89147Z" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.47656 12.3687C6.72437 13.0753 7.12603 13.718 7.65251 14.2503C8.17899 14.7827 8.81716 15.1915 9.52089 15.4471C10.2246 15.7028 10.9764 15.799 11.7218 15.7287C12.4672 15.6583 13.1877 15.4233 13.8312 15.0406V15.0406L15.582 15.5398C15.6542 15.5601 15.7304 15.5608 15.8029 15.5419C15.8754 15.5229 15.9415 15.485 15.9945 15.432C16.0475 15.379 16.0854 15.3129 16.1044 15.2404C16.1233 15.1679 16.1226 15.0917 16.1023 15.0195L15.6031 13.2687C16.0488 12.5206 16.2937 11.6701 16.3141 10.7995C16.3344 9.92893 16.1295 9.06786 15.7193 8.29973C15.3091 7.5316 14.7074 6.88246 13.9725 6.41522C13.2377 5.94797 12.3946 5.67846 11.525 5.63281" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_958_43732">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            )
        }
    ]




    return (
        <div className="flex  border  items-center  justify-center w-full h-full rounded-md p-3 my-3">
            <QAS influencer={influencer} />

            <div className="w-auto">
                {
                    list.map((item) => (
                        <div className="flex mt-5 border-b pb-2">
                            <div className="mr-2">
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs  text-viralget-grey"> {item.name}</span>
                                <span className="font-bold">{item.value}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}