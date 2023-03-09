

export default  function  Card({data}){



    return (

        <div className="shadow-md rounded-md  flex flex-col p-3  h-[7rem]   items-left">
              <div  className="flex ">
                  <div>
                       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="11" fill="#FEF2EB"/>
                        <g clip-path="url(#clip0_958_43669)">
                        <path d="M6.59841 11.5969C6.1781 10.8888 6.03078 10.0516 6.18412 9.24256C6.33745 8.43351 6.78088 7.70827 7.43113 7.20306C8.08138 6.69784 8.89371 6.4474 9.71556 6.49878C10.5374 6.55015 11.3122 6.89981 11.8945 7.48208C12.4768 8.06435 12.8264 8.83916 12.8778 9.66101C12.9292 10.4829 12.6787 11.2952 12.1735 11.9454C11.6683 12.5957 10.9431 13.0391 10.134 13.1925C9.32496 13.3458 8.48776 13.1985 7.77966 12.7782L6.61247 13.111C6.56438 13.1245 6.51355 13.125 6.46522 13.1123C6.41689 13.0997 6.3728 13.0744 6.33747 13.0391C6.30215 13.0038 6.27687 12.9597 6.26424 12.9114C6.2516 12.863 6.25207 12.8122 6.26559 12.7641L6.59841 11.5969Z" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.31641 13.2406C9.48161 13.7116 9.74939 14.1401 10.1004 14.495C10.4514 14.8499 10.8768 15.1224 11.346 15.2929C11.8151 15.4633 12.3163 15.5274 12.8132 15.4806C13.3102 15.4337 13.7905 15.277 14.2195 15.0219V15.0219L15.3867 15.3547C15.4348 15.3682 15.4856 15.3687 15.534 15.356C15.5823 15.3434 15.6264 15.3181 15.6617 15.2828C15.697 15.2475 15.7223 15.2034 15.7349 15.1551C15.7476 15.1067 15.7471 15.0559 15.7336 15.0078L15.4008 13.8406C15.6979 13.3419 15.8612 12.7748 15.8747 12.1945C15.8883 11.6141 15.7517 11.04 15.4782 10.5279C15.2047 10.0159 14.8036 9.5831 14.3137 9.2716C13.8238 8.96011 13.2618 8.78043 12.682 8.75" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_958_43669">
                        <rect width="12" height="12" fill="white" transform="translate(5 5)"/>
                        </clipPath>
                        </defs>
                        </svg>

                  </div>
                  <span  className="text-xs  text-viralget-grey">Avg. comments</span>
              </div>

              <div className="mt-3">
                 <span  className="font-bold text-xl">249</span>
              </div>
              <div  className="flex mt-3">
                <div className="mt-2 mr-1">
                   <svg width="8" height="8" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M4.375 9.25V1" stroke="#28CA42" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 4.375L4.375 1L7.75 4.375" stroke="#28CA42" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                   

                  <span className="text-[#28CA42] mr-1">1.4%</span>
                  <span className="text-viralget-grey">vs last 7 days</span>
             </div>
        </div>
    )
}