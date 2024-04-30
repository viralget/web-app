import { nFormatter } from "@/Utils/helpers";

const BaseCard = ({ Icon, label, influencers, field, value }) => {

  // console.log({ influencers })
  function getValue() {
    const data = influencers?.reduce((sum, data) => {
      let val = data?.influencer?.metrics[field];

      let total = parseFloat(sum += parseFloat(val ?? 0))

      return isNaN(total) ? 0 : total;
    }, {});

    return nFormatter(data);
  }

  return (
    <div className='bg-white border rounded-md p-2  '>
      <div className='flex space-x-2 items-center' >
        {/* <Icon /> */}
        {Icon}

        <span className='text-xs'>{label}</span>
      </div>
      <div className='mt-2'>
        <span className='font-bold text-lg'>{getValue()}</span>
      </div>
    </div>
  )
}


export default BaseCard;