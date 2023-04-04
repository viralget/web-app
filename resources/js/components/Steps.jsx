import { CheckIcon } from '@heroicons/react/24/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Staps({steps}) {
  return (
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 " aria-label="Progress">
        <ol
          role="list"
          className="overflow-hidden rounded-md lg:flex lg:rounded-none  lg:border-gray-200"
        >
          {steps.map((step, stepIdx) => (
            <>
            <li key={step.id} 
             >
        <div   className={classNames(
                step.status === 'complete' ? 'bg-viralget-red ' : 'bg-[#F5F5F5] ',
                "relative overflow-hidden lg:flex-1 rounded-lt-md  flex items-center md:w-[6rem]   h-10") }
              >
              <div
                className={classNames(
                  stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                  stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                  'overflow-hidden md:border border-gray-200 lg:border-0'
                )}
              >
                {step.status === 'complete' ? (
                  <a href={step.href} className="group  ">
                
                    <span
                      className={classNames(
                        'flex items-center px-2 py-2 text-sm font-medium'
                      )}
                    >
                      <span className="mt-0.5 ml-4 flex items-center text-center">
                        <span className="text-xs  text-white">{step.name}</span>
                      </span>
                    </span>
                  </a>
                ) : step.status === 'current' ? (
                  <a href={step.href} aria-current="step">
                   
                    <span
                      className={classNames(
                        'flex items-start px-2 py-2 text-sm font-medium'
                      )}
                    >
                      
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-viralget-grey">{step.name}</span>
                      </span>
                    </span>
                  </a>
                ) : (
                  <a href={step.href} className="group">
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
                  </a>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                      <svg
                        className="h-full w-full text-gray-300  "
                        viewBox="0 0 12 82"
                        fill="#F37C38"
                        preserveAspectRatio="none"
                      >
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                      </svg>

                   {/* <svg  className="h-full w-full text-gray-300  " viewBox="0 0 12 82" >
                    <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>
                    */}
                    </div>
                  </>
                ) : null}

               
              </div>
              </div>
              <div className='border-0'>
                     <span className='text-[#748094]'>{step.value}</span>
                </div>
            </li>
            
            </>
          ))}
        </ol>
      </nav>
  )
}