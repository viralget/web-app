import Typography from '@/components/Typography'
export default function FeatureCard({title, reach, className, images, TopologySvg}){

    return (
             <div className={"w-full p-5 relative rounded-md bg-gradient-to-r  " + className}>


                    <div className='absolute top-0 -right-10'>
                        { TopologySvg}
                    </div>

                    <div  className="w-full  text-white">
                       <Typography variant='h3' content={title} />
                    </div>

                    <div className="grid grid-cols-3  mt-4">
                               <div className="w-[38px]  h-[38px] flex justify-center  border-2 border-white rounded-full ">
                                    <img className="rounded-full" src={images ? images[0] : ''}/>
                               </div>
                               <div className="w-[23px]  h-[23px] flex justify-center  border-2 border-white rounded-full ">
                                    <img className="rounded-full" src={images ? images[1] : ''}/>
                               </div>

                               <div className="w-[38px]  h-[38px] flex justify-center  border-2 border-white rounded-full ">
                                    <img className="rounded-full" src={images ? images[2] : ''} />
                               </div>
                    </div>

                    <div className="grid grid-cols-3   ml-[3rem]  ">
                               <div className="max-w-[37px]  max-h-[38px] flex justify-center  border-2 border-white rounded-full ">
                                    <img className="rounded-full w-full " src={images ? images[3] : ''} />
                               </div>
                               <div className="w-[24px]  h-[24px] flex justify-center   border-2 border-white rounded-full ">
                                    <img className="rounded-full" src={images ? images[4] : ''} />
                               </div>

                               <div className="w-[38px]  h-[38px]  text-center flex items-center justify-center bg-[#F5F5F5] ml-5 border-2 border-white rounded-full ">
                                    <span className="text-center  text-xs">{reach}</span>
                               </div>
                    </div>
             </div>
    )
}