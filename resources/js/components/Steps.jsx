import { CheckIcon } from '@heroicons/react/24/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Staps({ steps }) {
  return (
    <nav className="mx-auto px-4 sm:px-6 " aria-label="Progress">
      <ol
        role="list"
        className="overflow-hidden flex lg:border-gray-200"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.id} className={`md:w-1/5 relative`}>
            <div className={classNames(
              step.status === 'complete' ? 'bg-viralget-red ' : 'bg-[#F5F5F5] ',
              stepIdx == 0 && 'rounded-l-md',
              stepIdx == steps.length - 1 && 'rounded-r-md',
              "relative  lg:flex-1 flex items-center w-full h-14 border-2 border-white influencer-size")}
            >
              <div
                className={classNames(
                  stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                  stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                  'border-gray-200 lg:border-0'
                )}
              >
                {step.status === 'complete' ? (
                  <span className="group influencer-size">

                    <span
                      className={classNames(
                        'flex items-center px-2 py-2 text-sm font-medium'
                      )}
                    >
                      <span className="mt-0.5 ml-4 flex items-center text-center">
                        <span className="text-xs  text-white">{step.name}</span>
                      </span>
                    </span>
                  </span>
                ) : step.status === 'current' ? (
                  <span aria-current="step">

                    <span
                      className={classNames(
                        'flex items-start px-2 py-2 text-sm font-medium'
                      )}
                    >

                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-viralget-grey">{step.name}</span>
                      </span>
                    </span>
                  </span>
                ) : (
                  <span className="group">
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-transparent  lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        'flex items-start px-2 py-2 text-sm font-medium'
                      )}
                    >

                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-viralget-grey">{step.name}</span>
                      </span>
                    </span>
                  </span>
                )}

                {/* {stepIdx !== 0 ? ( */}
                {stepIdx !== steps.length - 1 ? (
                  <div className={`influencer-size-arrow ${step.status == 'complete' ? ' bg-viralget-red' : ' bg-[#F5F5F5]'}`}></div>
                ) : null}


              </div>
            </div>
            <div className='border-0 mt-2'>
              <span className='text-[#748094]'>{step.value}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}