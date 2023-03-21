
 const BaseCard = ({ Icon, label, value}) => {

    
  return (
            <div  className='bg-white border rounded-md p-2  '>
                    <div className='flex space-x-2 items-center' >
                      {/* <Icon /> */}
                      {Icon}

                        <span className='text-xs'>{label}</span>
                    </div>
                    <div className='mt-2'>
                        <span className='font-bold text-lg'>{value}</span>
                    </div>
            </div>
  )
}


export default BaseCard;