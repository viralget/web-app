export default function header({ influencer, isMini }) {

      const categories = [
            'Award winning Actor & Entrepreneur',
            'Radio & TV Personality',
            'Brand Influencer',
            'Microbiologist',
            'Vlogger',
            'God\'s💝 alayandetomike@gmail.com'


      ];

      const tags = ['Lifestyle', 'Beauty', 'Entertainment'];

      console.log({ influencer })

      return (
            <>
                  <div className={isMini && 'bg-[#0077F2]' + " w-full rounded-br-3xl  h-40"}>

                        <div className="p-5 ">
                              <div className="bg-white shadow-md flex  items-center  rounded-md p-3  w-full space-x-10 ">

                                    <div className=" mb-14 ">
                                          <div className={isMini ? "h-12 w-12" : "h-24 w-24 " + "bg-gray-500 rounded-full overflow-hidden "}>
                                                <img className="mx-auto flex-shrink-0 object-cover w-full h-full" src={influencer.profile_photo_url} alt="" />
                                          </div>
                                    </div>

                                    <div className="w-full  md:mt-6">
                                          <div className="flex md:flex-row  flex-col justify-between">
                                                <div className="flex flex-col">
                                                      {/* <div className="flex flex-col"> */}
                                                      <span className="text-xl  font-bold">{influencer?.full_name}</span>
                                                      <span className="text-xs text-viralget-grey ">@{influencer?.username}</span>
                                                      {/* </div> */}


                                                </div>
                                                <div className="flex md:justify-between md:mt-0 mt-2 w-auto ">
                                                      <div className="flex  mr-4">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <g clip-path="url(#clip0_958_45476)">
                                                                        <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                  </g>
                                                                  <defs>
                                                                        <clipPath id="clip0_958_45476">
                                                                              <rect width="16" height="16" fill="white" />
                                                                        </clipPath>
                                                                  </defs>
                                                            </svg>


                                                            <span className="text-xs text-viralget-grey">{influencer?.location}</span>

                                                      </div>
                                                      <div className="flex">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <g clip-path="url(#clip0_958_45465)">
                                                                        <path d="M14.5 13.5L11 6.5L7.5 13.5" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M8.5 11.5H13.5" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M5.5 2V3.5" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M1.5 3.5H9.5" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M7.5 3.5C7.5 5.0913 6.86786 6.61742 5.74264 7.74264C4.61742 8.86786 3.0913 9.5 1.5 9.5" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M3.84375 5.5C4.2573 6.66971 5.02329 7.68246 6.03626 8.3988C7.04922 9.11515 8.25934 9.49988 9.5 9.5" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                                  </g>
                                                                  <defs>
                                                                        <clipPath id="clip0_958_45465">
                                                                              <rect width="16" height="16" fill="white" />
                                                                        </clipPath>
                                                                  </defs>
                                                            </svg>


                                                            <span className="text-xs text-viralget-grey">English</span>

                                                      </div>
                                                </div>


                                          </div>


                                          <div className="flex mt-3 w-full">
                                                <div className="flex mr-3">
                                                      <span className="font-bold mr-1">{influencer?.followers_count} </span>
                                                      <span className="text-viralget-grey"> followers </span>
                                                </div>
                                                <div className="flex mr-3">
                                                      <span className="font-bold mr-1">2,311 </span>
                                                      <span className="text-viralget-grey">  tweets </span>
                                                </div>
                                                <div className="flex">
                                                      <span className="font-bold mr-1">{influencer?.following_count} </span>
                                                      <span className="text-viralget-grey">  following</span>
                                                </div>
                                          </div>


                                          <div className="flex flex-wrap mt-2">
                                                {
                                                      categories.map((item) => (
                                                            <span className="text-xs text-viralget-grey mr-2">• {item}</span>
                                                      ))
                                                }
                                                <span></span>
                                          </div>

                                          <div className="my-3 flex space-x-2">
                                                {tags?.map((item) => (
                                                      <span className="text-viralget-grey  bg-[#F5F5F5] px-3 py-1">
                                                            {item}
                                                      </span>
                                                ))}

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </>
      )

}