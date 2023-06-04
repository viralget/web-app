

import { nFormatter } from '@/Utils/helpers'
import GaugeChart from 'react-gauge-chart'

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
                </svg>)
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


    // console.log({ influencer })

    return (
        <div className="  border  w-full h-full rounded-md p-space-20">


            <span className="font-bold font-lexend text-t-xs my-5  text-viralget-grey">Quality audience score</span>

            <div className="flex  md:flex-row flex-col justify-between w-full space-x-3 " >
                <div className="mt-2  relative">
                    <GaugeChart id="gauge-chart5"
                        nrOfLevels={420}
                        animate
                        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                        colors={['#E46361', '#FEB702', '#0BCEF9', '#25EEB2', '#28CA42']}
                        percent={influencer.quality_audience_score}
                        arcPadding={0.02}
                        textColor={'#3E4555'}
                        needleColor={'#748094'}
                    // arcWidth={[4, 2, 2, 2, 2]}
                    // arcHeight={[2, 2, 2, 2, 2]}
                    />
                    {/* <svg width="264" height="194" viewBox="0 0 264 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_958_42359)">
                            <path d="M83.4331 189V172.2H94.0171V174.696H86.0251V186.504H94.0171V189H83.4331ZM84.6091 181.632V179.136H92.6971V181.632H84.6091ZM105.687 189L101.607 183.696L101.247 183.24L95.9433 176.4H99.0633L103.071 181.632L103.479 182.16L108.711 189H105.687ZM95.9673 189L100.935 182.52L102.399 184.272L98.8953 189H95.9673ZM103.623 182.904L102.255 181.176L105.351 176.4H108.279L103.623 182.904ZM115.173 189.24C114.005 189.24 112.957 188.952 112.029 188.376C111.117 187.8 110.389 187.016 109.845 186.024C109.317 185.032 109.053 183.92 109.053 182.688C109.053 181.456 109.317 180.344 109.845 179.352C110.389 178.36 111.117 177.576 112.029 177C112.957 176.424 114.005 176.136 115.173 176.136C116.293 176.136 117.309 176.368 118.221 176.832C119.149 177.28 119.853 177.896 120.333 178.68L118.965 180.36C118.709 179.992 118.381 179.656 117.981 179.352C117.581 179.048 117.157 178.808 116.709 178.632C116.261 178.456 115.829 178.368 115.413 178.368C114.645 178.368 113.957 178.56 113.349 178.944C112.757 179.312 112.285 179.824 111.933 180.48C111.581 181.136 111.405 181.872 111.405 182.688C111.405 183.504 111.589 184.24 111.957 184.896C112.325 185.536 112.813 186.048 113.421 186.432C114.029 186.816 114.701 187.008 115.437 187.008C115.869 187.008 116.285 186.936 116.685 186.792C117.101 186.648 117.501 186.432 117.885 186.144C118.269 185.856 118.629 185.504 118.965 185.088L120.333 186.768C119.821 187.488 119.085 188.08 118.125 188.544C117.181 189.008 116.197 189.24 115.173 189.24ZM128.305 189.24C127.009 189.24 125.857 188.968 124.849 188.424C123.857 187.864 123.073 187.104 122.497 186.144C121.937 185.184 121.657 184.08 121.657 182.832C121.657 181.84 121.817 180.936 122.137 180.12C122.457 179.304 122.897 178.6 123.457 178.008C124.033 177.4 124.713 176.936 125.497 176.616C126.297 176.28 127.161 176.112 128.089 176.112C128.905 176.112 129.665 176.272 130.369 176.592C131.073 176.896 131.681 177.32 132.193 177.864C132.721 178.408 133.121 179.056 133.393 179.808C133.681 180.544 133.817 181.352 133.801 182.232L133.777 183.288H123.481L122.929 181.32H131.641L131.281 181.728V181.152C131.233 180.624 131.057 180.152 130.753 179.736C130.449 179.32 130.065 178.992 129.601 178.752C129.137 178.512 128.633 178.392 128.089 178.392C127.225 178.392 126.497 178.56 125.905 178.896C125.313 179.216 124.865 179.696 124.561 180.336C124.257 180.96 124.105 181.736 124.105 182.664C124.105 183.544 124.289 184.312 124.657 184.968C125.025 185.608 125.545 186.104 126.217 186.456C126.889 186.808 127.665 186.984 128.545 186.984C129.169 186.984 129.745 186.88 130.273 186.672C130.817 186.464 131.401 186.088 132.025 185.544L133.273 187.296C132.889 187.68 132.417 188.016 131.857 188.304C131.313 188.592 130.729 188.824 130.105 189C129.497 189.16 128.897 189.24 128.305 189.24ZM136.296 189V171.24H138.768V189H136.296ZM142.079 189V171.24H144.551V189H142.079ZM153.46 189.24C152.164 189.24 151.012 188.968 150.004 188.424C149.012 187.864 148.228 187.104 147.652 186.144C147.092 185.184 146.812 184.08 146.812 182.832C146.812 181.84 146.972 180.936 147.292 180.12C147.612 179.304 148.052 178.6 148.612 178.008C149.188 177.4 149.868 176.936 150.652 176.616C151.452 176.28 152.316 176.112 153.244 176.112C154.06 176.112 154.82 176.272 155.524 176.592C156.228 176.896 156.836 177.32 157.348 177.864C157.876 178.408 158.276 179.056 158.548 179.808C158.836 180.544 158.972 181.352 158.956 182.232L158.932 183.288H148.636L148.084 181.32H156.796L156.436 181.728V181.152C156.388 180.624 156.212 180.152 155.908 179.736C155.604 179.32 155.22 178.992 154.756 178.752C154.292 178.512 153.788 178.392 153.244 178.392C152.38 178.392 151.652 178.56 151.06 178.896C150.468 179.216 150.02 179.696 149.716 180.336C149.412 180.96 149.26 181.736 149.26 182.664C149.26 183.544 149.444 184.312 149.812 184.968C150.18 185.608 150.7 186.104 151.372 186.456C152.044 186.808 152.82 186.984 153.7 186.984C154.324 186.984 154.9 186.88 155.428 186.672C155.972 186.464 156.556 186.088 157.18 185.544L158.428 187.296C158.044 187.68 157.572 188.016 157.012 188.304C156.468 188.592 155.884 188.824 155.26 189C154.652 189.16 154.052 189.24 153.46 189.24ZM161.403 189V176.4H163.875V178.992L163.443 179.28C163.603 178.72 163.915 178.208 164.379 177.744C164.843 177.264 165.395 176.88 166.035 176.592C166.675 176.288 167.331 176.136 168.003 176.136C168.963 176.136 169.763 176.328 170.403 176.712C171.043 177.08 171.523 177.648 171.843 178.416C172.163 179.184 172.323 180.152 172.323 181.32V189H169.851V181.488C169.851 180.768 169.755 180.176 169.563 179.712C169.371 179.232 169.075 178.888 168.675 178.68C168.275 178.456 167.779 178.36 167.187 178.392C166.707 178.392 166.267 178.472 165.867 178.632C165.467 178.776 165.115 178.984 164.811 179.256C164.523 179.528 164.291 179.848 164.115 180.216C163.955 180.568 163.875 180.952 163.875 181.368V189H162.651C162.443 189 162.235 189 162.027 189C161.819 189 161.611 189 161.403 189ZM176.996 189V173.184H179.468V189H176.996ZM174.38 178.8V176.4H182.396V178.8H174.38Z" fill="#28CA42" />
                            <path d="M102.126 142L101.806 141.2L119.326 105.84L121.646 110.64C121.113 112.56 120.259 114.293 119.086 115.84C117.913 117.387 116.499 118.747 114.846 119.92C113.246 121.04 111.566 121.92 109.806 122.56C108.046 123.147 106.366 123.44 104.766 123.44C101.726 123.44 98.9259 122.613 96.3659 120.96C93.8059 119.307 91.7526 117.093 90.2059 114.32C88.6593 111.547 87.8859 108.533 87.8859 105.28C87.8859 101.44 88.7926 97.9733 90.6059 94.88C92.4726 91.7333 94.9793 89.2533 98.1259 87.44C101.273 85.5733 104.819 84.64 108.766 84.64C111.646 84.64 114.339 85.1467 116.846 86.16C119.353 87.1733 121.539 88.5867 123.406 90.4C125.326 92.16 126.819 94.2133 127.886 96.56C128.953 98.9067 129.486 101.387 129.486 104C129.486 105.92 129.326 107.813 129.006 109.68C128.686 111.493 128.179 113.36 127.486 115.28C126.793 117.2 125.966 119.2 125.006 121.28C124.099 123.36 123.033 125.627 121.806 128.08L114.766 142H102.126ZM108.046 112.72C109.699 112.72 111.166 112.347 112.446 111.6C113.726 110.853 114.713 109.867 115.406 108.64C116.153 107.36 116.526 105.947 116.526 104.4C116.526 102.747 116.153 101.28 115.406 100C114.713 98.6667 113.726 97.6267 112.446 96.88C111.219 96.1333 109.779 95.76 108.126 95.76C106.526 95.76 105.113 96.1333 103.886 96.88C102.713 97.5733 101.753 98.5867 101.006 99.92C100.313 101.2 99.9659 102.693 99.9659 104.4C99.9659 105.84 100.313 107.2 101.006 108.48C101.753 109.707 102.739 110.72 103.966 111.52C105.193 112.32 106.553 112.72 108.046 112.72ZM153.418 142.56C149.204 142.56 145.364 141.707 141.898 140C138.484 138.293 135.658 135.84 133.418 132.64L140.698 124.64C142.884 127.04 144.911 128.693 146.778 129.6C148.644 130.453 150.724 130.88 153.018 130.88C154.724 130.88 156.244 130.533 157.578 129.84C158.911 129.147 159.951 128.187 160.698 126.96C161.498 125.68 161.898 124.267 161.898 122.72C161.898 121.12 161.498 119.707 160.698 118.48C159.951 117.2 158.911 116.187 157.578 115.44C156.298 114.693 154.804 114.32 153.098 114.32C151.871 114.32 150.724 114.427 149.658 114.64C148.591 114.853 147.444 115.227 146.218 115.76C145.044 116.24 143.631 116.96 141.978 117.92L136.218 110.24L139.658 85.52H171.818V96.96H146.138L149.658 92.48L147.018 110.24L142.218 108.64C143.231 107.733 144.458 106.933 145.898 106.24C147.391 105.547 148.991 104.987 150.698 104.56C152.404 104.08 154.111 103.84 155.818 103.84C159.338 103.84 162.484 104.667 165.258 106.32C168.084 107.92 170.324 110.16 171.978 113.04C173.631 115.92 174.458 119.227 174.458 122.96C174.458 126.64 173.524 129.973 171.658 132.96C169.791 135.893 167.284 138.24 164.138 140C160.991 141.707 157.418 142.56 153.418 142.56Z" fill="#3E4555" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M229.743 93.3255C229.743 93.3254 229.743 93.3256 229.743 93.3255C229.349 92.2783 228.937 91.2364 228.508 90.2009C228.073 89.152 227.622 88.111 227.154 87.0784L226.207 87.5076C226.67 88.5299 227.117 89.5605 227.547 90.5989C227.972 91.624 228.379 92.6551 228.77 93.6918C228.77 93.6917 228.77 93.692 228.77 93.6918L229.743 93.3255ZM232.645 106.409L233.658 106.171C233.658 106.172 233.658 106.172 233.658 106.173C234.171 108.353 234.614 110.548 234.985 112.757C234.985 112.758 234.985 112.759 234.986 112.76L233.96 112.932C233.96 112.931 233.96 112.93 233.959 112.929C233.592 110.743 233.154 108.569 232.646 106.411C232.646 106.411 232.646 106.41 232.645 106.409ZM235.313 126.155L236.352 126.116C236.352 126.117 236.352 126.119 236.352 126.121C236.392 127.192 236.416 128.264 236.422 129.338C236.423 129.383 236.423 129.429 236.423 129.475C236.423 129.476 236.423 129.478 236.423 129.48C236.423 129.526 236.417 129.572 236.406 129.615L235.905 129.482L236.039 129.982C235.996 129.994 235.951 130 235.904 130C235.858 130 235.813 129.994 235.77 129.982L235.904 129.483L235.897 129.48L235.401 129.615C235.39 129.573 235.384 129.53 235.383 129.485C235.383 129.483 235.383 129.482 235.383 129.48C235.383 129.435 235.383 129.39 235.382 129.345C235.376 128.282 235.352 127.22 235.313 126.159C235.313 126.158 235.313 126.156 235.313 126.155ZM219.858 75.6301L220.742 75.0809C219.543 73.154 218.282 71.2668 216.961 69.4223L216.115 70.0281C217.424 71.8541 218.672 73.7225 219.858 75.6301ZM207.571 59.6174L208.33 58.9064C207.555 58.079 206.766 57.2637 205.964 56.4609C205.161 55.6581 204.345 54.869 203.518 54.0941L202.807 54.8531C203.626 55.6204 204.433 56.4015 205.228 57.1963C206.023 57.9911 206.804 58.7982 207.571 59.6174ZM192.396 46.3093L193.002 45.4639C191.158 44.1422 189.27 42.8812 187.344 41.683L186.794 42.5661C188.702 43.7524 190.57 45.0008 192.396 46.3093ZM174.917 36.2175L175.346 35.2702C174.313 34.8023 173.272 34.351 172.224 33.9165C171.175 33.482 170.119 33.0651 169.058 32.6658L168.692 33.6391C169.742 34.0344 170.787 34.4472 171.826 34.8774C172.864 35.3075 173.895 35.7543 174.917 36.2175ZM155.804 29.7296L156.04 28.7168C153.831 28.2015 151.604 27.7587 149.366 27.3891L149.196 28.4152C151.413 28.7811 153.616 29.2195 155.804 29.7296ZM135.793 27.0951L135.827 26.0557C134.694 26.0186 133.56 26 132.424 26C131.289 26 130.155 26.0186 129.022 26.0557L129.056 27.0951C130.177 27.0584 131.3 27.04 132.424 27.04C133.548 27.04 134.672 27.0584 135.793 27.0951ZM115.653 28.4152L115.483 27.3891C113.245 27.7587 111.018 28.2015 108.809 28.7168L109.045 29.7296C111.232 29.2195 113.436 28.7811 115.653 28.4152ZM96.1569 33.6391L95.7905 32.6658C94.7295 33.0651 93.6743 33.482 92.6254 33.9165C91.5765 34.351 90.5355 34.8023 89.5029 35.2702L89.9321 36.2175C90.9544 35.7543 91.985 35.3075 93.0234 34.8774C94.0618 34.4472 95.1065 34.0344 96.1569 33.6391ZM78.0546 42.5662L77.5054 41.683C75.5785 42.8812 73.6913 44.1422 71.8468 45.4639L72.4526 46.3093C74.2786 45.0008 76.1469 43.7524 78.0546 42.5662ZM62.0419 54.8531L61.3309 54.0941C60.5035 54.8691 59.6882 55.6581 58.8854 56.4609C58.0826 57.2637 57.2935 58.079 56.5186 58.9065L57.2776 59.6174C58.0448 58.7982 58.826 57.9911 59.6208 57.1963C60.4156 56.4015 61.2227 55.6204 62.0419 54.8531ZM48.7338 70.0281L47.8884 69.4223C46.5667 71.2668 45.3057 73.154 44.1075 75.0809L44.9906 75.6301C46.1769 73.7225 47.4253 71.8541 48.7338 70.0281ZM38.642 87.5076C38.1788 88.5299 37.732 89.5605 37.3018 90.5989C36.8772 91.624 36.4696 92.6551 36.0789 93.6918C36.0788 93.692 36.0789 93.6917 36.0789 93.6918L35.1055 93.3255C35.1055 93.3256 35.1056 93.3254 35.1055 93.3255C35.5002 92.2783 35.9121 91.2364 36.341 90.2009C36.7755 89.152 37.2268 88.111 37.6947 87.0784L38.642 87.5076ZM31.1907 106.173C30.6777 108.353 30.2352 110.548 29.8639 112.757C29.8638 112.758 29.8636 112.759 29.8634 112.76L30.889 112.932C30.8892 112.931 30.8894 112.93 30.8896 112.929C31.2571 110.743 31.6952 108.569 32.203 106.411C32.2032 106.411 32.2034 106.41 32.2035 106.409L31.1912 106.171C31.191 106.172 31.1909 106.172 31.1907 106.173ZM29.5363 126.155L28.497 126.116C28.497 126.117 28.4969 126.119 28.4969 126.121C28.4569 127.192 28.4334 128.264 28.4266 129.338C28.4263 129.383 28.426 129.429 28.4258 129.475C28.4258 129.476 28.4258 129.478 28.4258 129.48C28.4256 129.526 28.4315 129.572 28.4428 129.615L28.9435 129.483L28.8099 129.982C28.8528 129.994 28.8979 130 28.9445 130C28.9911 130 29.0362 129.994 29.0792 129.982L28.9454 129.483L28.9521 129.48L29.4476 129.615C29.4588 129.573 29.4651 129.53 29.4657 129.485C29.4658 129.483 29.4658 129.482 29.4658 129.48C29.466 129.435 29.4663 129.39 29.4666 129.345C29.4733 128.282 29.4965 127.22 29.5361 126.159C29.5362 126.158 29.5363 126.156 29.5363 126.155Z" fill="#E8E9F1" />
                            <path d="M257.4 132C261.045 132 264.017 129.043 263.835 125.402C262.667 102.051 255.315 79.4252 242.535 59.847C240.542 56.7947 236.4 56.1492 233.451 58.2917C230.502 60.4343 229.865 64.5525 231.841 67.6159C243.002 84.9237 249.473 104.84 250.617 125.403C250.819 129.043 253.755 132 257.4 132Z" fill="#28CA42" stroke="white" stroke-width="4" />
                            <path d="M233.435 58.2701C236.383 56.1269 237.049 51.9873 234.761 49.1496C220.086 30.948 200.837 16.9685 178.988 8.64617C175.581 7.34869 171.851 9.26231 170.725 12.7292C169.6 16.1961 171.506 19.9018 174.905 21.2182C194.11 28.6558 211.054 40.9611 224.069 56.9221C226.373 59.747 230.486 60.4132 233.435 58.2701Z" fill="#25EEB2" stroke="white" stroke-width="4" />
                            <path d="M170.728 12.73C171.853 9.26314 169.959 5.523 166.44 4.57192C143.869 -1.52849 120.079 -1.52389 97.511 4.58523C93.9925 5.53767 92.0992 9.27854 93.2262 12.745C94.3533 16.2115 98.0736 18.0889 101.597 17.1561C121.506 11.8853 142.447 11.8813 162.358 17.1443C165.882 18.0758 169.602 16.1969 170.728 12.73Z" fill="#0BCEF9" stroke="white" stroke-width="4" />
                            <path d="M93.2182 12.7476C92.0909 9.28123 88.3595 7.36938 84.9537 8.66848C63.1087 17.0012 43.8656 30.9898 29.1997 49.1984C26.9132 52.0372 27.5806 56.1764 30.5301 58.3182C33.4795 60.4599 37.5929 59.7918 39.8951 56.9658C52.9025 40.9986 69.8411 28.6852 89.0425 21.2385C92.4409 19.9205 94.3455 16.214 93.2182 12.7476Z" fill="#FEB702" stroke="white" stroke-width="4" />
                            <path d="M30.5399 58.3047C27.5907 56.1625 23.448 56.8085 21.4559 59.8611C8.67814 79.4409 1.32943 102.068 0.164091 125.419C-0.0175888 129.06 2.95492 132.016 6.6 132.016C10.2451 132.016 13.1805 129.058 13.3824 125.418C14.5231 104.855 20.9918 84.9379 32.1512 67.6286C34.1263 64.565 33.4891 60.4468 30.5399 58.3047Z" fill="#E46361" stroke="white" stroke-width="4" />
                            <g filter="url(#filter0_d_958_42359)">
                                <circle cx="251" cy="91" r="8" fill="white" />
                                <circle cx="251" cy="91" r="6.25" stroke="#28CA42" stroke-width="3.5" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_958_42359" x="239.162" y="83" width="23.6757" height="23.6757" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3.83784" />
                                <feGaussianBlur stdDeviation="1.91892" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.127778 0 0 0 0 0.333333 0 0 0 0 0.186508 0 0 0 0.14 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_958_42359" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_958_42359" result="shape" />
                            </filter>
                            <clipPath id="clip0_958_42359">
                                <rect width="264" height="194" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
 */}

                    <div className="absolute  flex flex-col top-8 left-8">
                        {/* <span className="text-2xl font-bold  text-viralget-grey">{influencer.quality_audience_score}</span> */}
                        {/* <span className="text-[#28CA42] font-bold">Excellent</span> */}
                    </div>

                </div>


                <div className="w-auto p-4">
                    {
                        list.map((item, index) => (
                            <div key={index} className={`flex mt-5  pb-2 w-[10rem]  ${list.length != (index + 1) ? 'border-b' : ''}`}>
                                <div className="mr-2">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> {item.name}</span>
                                    <span className="font-bold">{item.value}</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}