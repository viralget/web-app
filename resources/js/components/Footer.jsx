import { Link } from '@inertiajs/inertia-react'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { header_routes } from '@/Utils/constants'

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-5  flex  items-center justify-between">

         <div>
                 <Link href="/" aria-label="Home">
                  <Logo className="h-10 w-auto" />
                </Link>
           </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
            {header_routes.map((route, index) => (
                <NavLink key={index} href={route.href}  className="text-t-xsx font-lexend font-medium ">{route.name}</NavLink>
              ))}
            </div>
          </nav>

          <div className="flex gap-x-space-12">
            <a
              href="https://twitter.com/viralget_io"
              target="_blank"
              className=" rounded-full p-space-12 border border-viralget-gray-300"
              aria-label="Viralger on Twitter"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/viralget_io/"
              target="_blank"
              className=" rounded-full p-space-12 border border-viralget-gray-300"
              aria-label="Viralget on Instagram"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/viralget_io/"
              target="_blank"
              className=" rounded-full p-space-12 border border-viralget-gray-300"
              aria-label="Viralget on Instagram"
            >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.56817 6.59727C5.67587 6.59727 6.57383 5.6993 6.57383 4.5916C6.57383 3.4839 5.67587 2.58594 4.56817 2.58594C3.46047 2.58594 2.5625 3.4839 2.5625 4.5916C2.5625 5.6993 3.46047 6.59727 4.56817 6.59727Z" fill="#3E4555"/>
                    <path d="M8.4661 8.1168V19.2442H11.921V13.7415C11.921 12.2895 12.1942 10.8833 13.9945 10.8833C15.7701 10.8833 15.7921 12.5434 15.7921 13.8331V19.2451H19.2489V13.1429C19.2489 10.1454 18.6035 7.8418 15.1 7.8418C13.4179 7.8418 12.2904 8.76488 11.8294 9.63846H11.7826V8.1168H8.4661ZM2.83594 8.1168H6.29635V19.2442H2.83594V8.1168Z" fill="#3E4555"/>
                </svg>
            </a>

            <a
              href="https://www.instagram.com/viralget_io/"
              target="_blank"
              className=" rounded-full p-space-12 border border-viralget-gray-300"
              aria-label="Viralget on Instagram"
            >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2822 19.2474V11.7344H14.8168L15.1936 8.79282H12.2822V6.91916C12.2822 6.07032 12.5187 5.48916 13.737 5.48916H15.2807V2.86657C14.5296 2.78608 13.7746 2.74722 13.0192 2.75016C10.7789 2.75016 9.24074 4.11782 9.24074 6.62857V8.78732H6.72266V11.7289H9.24624V19.2474H12.2822Z" fill="#3E4555"/>
                   </svg>
            </a>
          </div>
  



         

        </div>
       
       
        <div className="flex mt-space-20  items-center border-t border-viralget-gray-300 py-10  justify-between">
       
          <p className="text-t-normal  text-viralget-gray-400  font-normal">
            Copyright &copy; {new Date().getFullYear()} Viralget. All rights
            reserved.
          </p>

          <div  className='flex   space-x-space-36'>
               <a  href='#'  className='text-t-normal  text-viralget-gray-400  font-normal'>Terms and Conditions</a>
               <a href='#' className='text-t-normal  text-viralget-gray-400  font-normal' >Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
