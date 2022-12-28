import AuthGuest from "../../../assets/images/auth_guest.svg";

export default function Auth({ children }) {
    return (

        <div className="flex min-h-screen">
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    {children}
                </div>
            </div>
            <div className="relative overflow-hidden hidden w-0  pt-10 flex-1 justify-center align-middle md:flex lg:block bg-gradient-to-r from-yellow-600 to-fuchsia-600">
                <div className="text-white m-12 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold">Find influencers in seconds.
                        Drive your business forward with data-driven influencers’ insight</h2>
                    <p className="mt-3">Search through the database of 43.9m+
                        to find your perfect influencer</p>
                </div>
                <div className="relative  h-full">
                    <img
                        className="absolute bottom-0 inset-0 h-full w-full object-cover opacity-75"
                        src={AuthGuest}
                        alt=""
                    />
                    {/* <AuthGuest /> */}
                </div>
                {/* <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt=""
                /> */}
            </div>
        </div>
    )
}
