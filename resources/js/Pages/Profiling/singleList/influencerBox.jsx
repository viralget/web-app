import { UserSvgWithBackground } from '@/Utils/icons'

const influencerBox = ({list}) => {
  return (
    <div className='border rounded-md  p-5 bg-white md:w-[20rem] md:h-[12em] w-full  '>
             <div className='flex space-x-3 items-center'>
                   <UserSvgWithBackground />
                   <span className='text-xs'>influencers</span>
             </div>

             <div className='flex flex-col h-full  justify-center items-center w-full'>
                  <span className='text-4xl font-bold'>{list.influencers?.length}</span>
                  <span className='text-[#748094] text-xs'>Total accounts</span>
             </div>
    </div>
  )
}

export default influencerBox