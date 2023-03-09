

export default function profiling(){



    const ProfileData = () =>(
            <div className="flex  space-x-2 my-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_958_43153)">
                        <path d="M12.75 8.25H5.25C4.42157 8.25 3.75 8.92157 3.75 9.75V14.25C3.75 15.0784 4.42157 15.75 5.25 15.75H12.75C13.5784 15.75 14.25 15.0784 14.25 14.25V9.75C14.25 8.92157 13.5784 8.25 12.75 8.25Z" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75Z" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 8.25V5.25C6 4.45435 6.31607 3.69129 6.87868 3.12868C7.44129 2.56607 8.20435 2.25 9 2.25C9.79565 2.25 10.5587 2.56607 11.1213 3.12868C11.6839 3.69129 12 4.45435 12 5.25V8.25" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_958_43153">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <span className="text-viralget-grey">Brand safety level</span>
                 </div>
    );

    return(

        <div  className="mt-5 px-5">
            <div className="my-5">
                    <span  className="text-viralget-grey text-2xl font-bold">Profile influencer to get full report</span>  
            </div>


             <div className="">
                    <div className="flex space-x-2">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#FEF2EB"/>
                                <g clip-path="url(#clip0_958_43030)">
                                <path d="M10 11.5C11.6569 11.5 13 10.1569 13 8.5C13 6.84315 11.6569 5.5 10 5.5C8.34315 5.5 7 6.84315 7 8.5C7 10.1569 8.34315 11.5 10 11.5Z" stroke="#F37C38" stroke-width="0.8" stroke-miterlimit="10"/>
                                <path d="M5.45312 14.1254C5.91388 13.3272 6.57664 12.6643 7.37479 12.2035C8.17294 11.7426 9.07835 11.5 10 11.5C10.9216 11.5 11.8271 11.7426 12.6252 12.2035C13.4234 12.6643 14.0861 13.3272 14.5469 14.1254" stroke="#F37C38" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_958_43030">
                                <rect width="12" height="12" fill="white" transform="translate(4 4)"/>
                                </clipPath>
                                </defs>
                           </svg>
                           <span className="text-viralget-grey font-medium">Influencer profiling</span>
                    </div>


                  <div className="flex flex-wrap justify-between  mt-3">
                       <ProfileData />
                       <ProfileData />
                       <ProfileData />
                       <ProfileData />
                       <ProfileData />
                       <ProfileData />
                       <ProfileData />
                       <ProfileData />
                       <ProfileData />
                  </div>


              </div>


        </div>
    )
}