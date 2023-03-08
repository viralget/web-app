import Steps  from "@/components/Steps";

export default function influencerSize({influencer}){
   
    const steps = [
        { id: '01', name: 'Nano', value:'1K', href: '#', status: 'complete' },
        { id: '02', name: 'Micro', value:'10K', href: '#', status: 'complete' },
        { id: '03', name: 'Mid-tier', value:'50K', href: '#', status: 'complete' },
        { id: '04', name: 'Macro', value:'100K', href: '#', status: 'complete' },
        { id: '05', name: 'Mega', value:'1m+', href: '#', status: 'current' },
      ]

    return (
        <div className=" mx-5 shadow-md border  pb-10 rounded-md ">
            <div className="pl-7 py-3">
                <span className="font-bold">
                Influencer size
                </span>
            </div>
              <Steps  steps={steps} />
        </div>
    )
}