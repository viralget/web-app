import { nFormatter } from "@/Utils/helpers";

export default function PlanCard({ item, isEmpty }) {

  const plan = item ?? null;

  return (
    <div className={`border  border-viralget-gray-300  flex flex-col  p-2  w-full  justify-center  ${!isEmpty && ' items-center '}`}>
      {
        isEmpty ? (
          <span className="font-bold  text-t-xs font-lexend text-left ">Pick a plan</span>
        )
          : (
            <div className="my-10 flex flex-col">
              {
                plan?.isPopular ? (
                  <span className="bg-viralget-red-100 flex rounded-[6px] text-viralget-red font-bold text-t-xsx  p-[4px] px-space-20 mb-1 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.75 6.66574C13.75 7.91574 13.3333 9.58241 11.3333 10.2491C11.9167 8.83241 12 7.41575 11.5833 6.08241C11 4.33241 9.08333 2.99908 7.75 2.24908C7.41667 1.99908 6.83333 2.33241 6.91667 2.83241C6.91667 3.74908 6.66667 5.08241 5.25 6.49908C3.41667 8.33241 2.5 10.2491 2.5 12.0824C2.5 14.4991 4.16667 17.4991 7.5 17.4991C4.16667 14.1657 6.66667 11.2491 6.66667 11.2491C7.33333 16.1657 10.8333 17.4991 12.5 17.4991C13.9167 17.4991 16.6667 16.4991 16.6667 12.1657C16.6667 9.58241 15.5833 7.58241 14.6667 6.41574C14.4167 5.99908 13.8333 6.24908 13.75 6.66574Z" fill="url(#paint0_linear_958_89654)" />
                      <defs>
                        <linearGradient id="paint0_linear_958_89654" x1="2.72368" y1="0.146289" x2="17.9373" y2="0.814515" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#F37C38" />
                          <stop offset="1" stop-color="#EE681B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Most popular
                  </span>
                ) :
                  (
                    <></>
                    // <span className="mt-space-35"></span>
                  )
              }

              <span className="font-bold  text-t-xs font-lexend text-center ">
                {plan?.name}
              </span>

              <span className="text-t-xlg font-lexend  font-bold mt-3">
                ${nFormatter(plan?.amount)}<span className="font-normal text-t-xs  text-viralget-gray-400">/{plan?.interval == 'monthly' ? 'mo' : 'yr'}</span>
              </span>

              <a href={route('user.payment.page', { plan_id: plan?.plan_code })} className="text-viralget-red border mt-3  p-1 hover:bg-viralget-red px-space-20 py-space-10  text-center  flex items-center hover:text-white rounded-md border-viralget-red ">
                <span className="text-t-normal  font-bold">Start free 7-day trial</span>
              </a>
            </div>
          )
      }

    </div>
  )
}