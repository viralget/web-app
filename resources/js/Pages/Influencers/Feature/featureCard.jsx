export default function FeatureCard({title,reach, colors, className}){


    console.log("colors:", `from-[${colors[0]}]`);

    return (
             <div className={`w-full p-5 relative rounded-md bg-gradient-to-r  ` + className}>
                    <div  className=" w-full  text-white">
                          <span className="font-bold text-white text-sm">{title}</span>
                    </div>

                    <div className="grid grid-cols-3  mt-4">
                               <div className="w-[38px]  h-[38px]  border-2 border-white rounded-full ">
                                    <img className="rounded-full" src="https://s3-alpha-sig.figma.com/img/c307/2c21/626398ad60aab894ef8df1734315f247?Expires=1678665600&Signature=hVrLki4wEACHzH~CvJo153AHOSA1RM9HAEmsIwL-FVyCge8H6gofo0XJFMjHKJAISF26qd-PAvUF909zdrodaQmPdJrndBJj0i-THhNqKotbPidgk5GIvJS8C7UeOl-yBn5GhZ910CfiQctfaBIeWij21l6E8t7DSfnjhSGlazmGK7mfxnYbLuRiIDQyYF7r9KpLRSbyD8Pa1h9OZ9y63fLdayCWNExE3ANqvBdlHZXa~W7aaRSUO7bwaMuoOS5lf9x2MpoJL8CDWYNV25q~VxI-pLHJYjOcejkYeI~YgWZ9v~OiLnXGyfDjrvzorg6L6T9VxJNAdXyCrVndJJ--ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                               </div>
                               <div className="w-[23px]  h-[23px]  border-2 border-white rounded-full ">
                                    <img className="rounded-full" src="https://s3-alpha-sig.figma.com/img/acd6/2d9e/613d3016628118cecff63e61b9912e97?Expires=1678665600&Signature=MGiTxOK2qKXGbHqmYqNi9UsvsT8AAOX55VMWPmplgcuZpWZrNXdy84GxKzmomqOKFCXVi6zRNFjnVOcv-HzGiVvoF9dBaH1pdZopX6UgI0RMkSJB9O8sRVSl00ZYsiNKPKGyqjpzsY-1SnANIR6ZFFhOsg-lYlflnh-RfHqw8dQUjwS7YzrpQhRboY2AXNiPl7llS5eGKxNT7MCAk7-PlmRsj7IEdQtjSzgdwQ~vVp-1wOQR8DfcJWAm3p0E-0DhuaxJTMvhdeSPq4C1VHkObStGBuAZF~2YXD4TEC6a61LP4jFjkmK2-18vT41BPTZYbKj~LBWyAIO-yTBEBjWCyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                               </div>

                               <div className="w-[38px]  h-[38px]  border-2 border-white rounded-full ">
                                    <img className="rounded-full" src="https://s3-alpha-sig.figma.com/img/9adc/0496/e0342205022bf8e989ae4006b76865b3?Expires=1678665600&Signature=Ly1KX-Ulvje3KSVIYfZnGa7e6Evw3JhoHLEHkMsPV1-WFikLpbD0JpUZTjBQKm-PsgTVaeBv193Sxg1TqMrxo-r4IMUt92QWU-B2Yu7L6M7iqo9zbUwLasv8OYGzZWfjh6oW4u7kbe~POvRZP3wRzcUppZ-WGtuOr1g9jDKKc00rzLFTn-q2D4DMiq9ivlvsU8eWskN1aGUI7wZwjlNmdOQvyr7OaGaNx3KSryLklvym-QHACnCkU3uzmvjkmuO2mMn48FDG0ZnZvBU7AgRrVANJ1dT2bxpj3ehTWIzvDYaViASC5WzMMfx3f2yoTVbQ5scQEfUBXNvdQBafLynFug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                               </div>
                    </div>

                    <div className="grid grid-cols-3   ml-[3rem]  ">
                               <div className="w-[38px]  h-[38px]  border-2 border-white rounded-full ">
                                    <img className="rounded-full" src="https://s3-alpha-sig.figma.com/img/37c5/9fb5/a2862023c3e6bcb8fbaa55e577832889?Expires=1678665600&Signature=apOE60ZCnKvEbORiJB1yQvKhMMxEIpsuVfq4QCBXKWYxtE-782uK3hGk~E5z8ICRPBlNIyK-RoWCntI4TDZIid~mq3RJspHcT1dPpeC4AfkmjA~JB~8xdD15-QRz9hRjTA3jq0hmyc7ykPYs-p2KZ~0YKkYzjhQdExM7uzc~Z5Yp4jz7S4MoylosPxk04cSHiPrMN1j6v6lPlWEOt0X3aV3ZP04UzbQOzzEWOYFZuHS-pNmHaWkzDr5S5PriYeP7D~AdV6TdFaKdBtJIaEaiGq3zjj6tLW1pTNAGk9YcSxh2Mi-KHaA56uPRV4xPeEJd75Y~4DEtq7dljiImHz7jrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                               </div>
                               <div className="w-[23px]  h-[23px]  border-2 border-white rounded-full ">
                                    <img className="rounded-full" src="https://s3-alpha-sig.figma.com/img/b8b9/887a/6edcfe9ecf9e83ada4c5013ddc80519a?Expires=1678665600&Signature=GheiTVMTgmjVg~4Oec2pQiBlLCPa~kQ4livk6hWCGUt-HX1JVPnCcYrqfTVgrWe2FjBLLU~UWCr1jsdxt0fjAQUbYvJfJeFv2bxrE9yqBzL0xDwIgT7Kjwh4JxKra~XHRkB4qc9ArRvigKVAF6z69Y6GmgqrvlaGRUvGop0HQnDO5fZHCu0UcPYiyPhH4v0xVpXmekLuaRpWFk07SXXfCibkTWicK7BBVi-FHPNQDf5fbjfIf3k6GE794URNc5ns35pfke732hENegg5LD6YrAc9-8eEVNtdXcm6HPUuoXA4RfDocog78L4ifPPn10qnIh1bCxk1c95eXnnjbIQz8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                               </div>

                               <div className="w-[38px]  h-[38px]  text-center flex items-center justify-center bg-[#F5F5F5] ml-5 border-2 border-white rounded-full ">
                                    <span className="text-center">{reach}</span>
                               </div>
                    </div>
             </div>
    )
}