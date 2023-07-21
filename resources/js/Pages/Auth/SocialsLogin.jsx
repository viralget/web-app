
export default function SocialsLogin({ type, redirect_url }) {

    const handleSocialLogin = (platform) => {
        let url = `${route('auth.social')}?platform=${platform}`;

        if (redirect_url) {
            url = `${url}&redirect_url=${redirect_url}`
        }
        window.location.href = url;
    }



    const Twitter = () => (
        <div>
            <button
                onClick={() => handleSocialLogin('twitter')}
                className="inline-flex w-full justify-center space-x-3 rounded-md border  bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600"
            >
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span>Sign in with Twitter</span>
            </button>
        </div>
    )


 const Google = () => (

    <div>
    <button
        onClick={() => handleSocialLogin('google')}
        className="inline-flex w-full justify-center space-x-3 rounded-md border  bg-white py-space-16 px-4 text-sm font-medium text-black "
    >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7625 9.20114C17.7625 8.61183 17.7103 8.05236 17.6207 7.50781H9.19141V10.8721H14.0178C13.8014 11.9761 13.1674 12.9086 12.2275 13.5426V15.7805H15.1069C16.7927 14.2214 17.7625 11.9239 17.7625 9.20114Z" fill="#4285F4"/>
        <path d="M9.18844 17.9464C11.6054 17.9464 13.6269 17.1408 15.1039 15.7756L12.2245 13.5378C11.4189 14.0749 10.3969 14.4031 9.18844 14.4031C6.85359 14.4031 4.8768 12.8291 4.16814 10.7031H1.19922V13.0081C2.66876 15.9323 5.68989 17.9464 9.18844 17.9464Z" fill="#34A853"/>
        <path d="M4.16949 10.7059C3.983 10.1688 3.88602 9.5944 3.88602 8.99763C3.88602 8.40087 3.99046 7.82648 4.16949 7.28939V4.98438H1.20057C0.588881 6.19283 0.238281 7.55047 0.238281 8.99763C0.238281 10.4448 0.588881 11.8024 1.20057 13.0109L4.16949 10.7059Z" fill="#FBBC05"/>
        <path d="M9.18844 3.59018C10.5088 3.59018 11.6874 4.04522 12.6199 4.93291L15.171 2.38173C13.6269 0.934567 11.6054 0.046875 9.18844 0.046875C5.68989 0.046875 2.66876 2.06097 1.19922 4.98513L4.16814 7.29014C4.8768 5.16416 6.85359 3.59018 9.18844 3.59018Z" fill="#EA4335"/>
        </svg>

        <span className="text-t-normal font-bold">Sign in with Google</span>
    </button>
</div>
 )

 const DefaultLogin = () => (

    <div>
    <button
        onClick={() => alert("Please specify the login type")}
        className="inline-flex w-full justify-center space-x-3 rounded-md border  bg-white  py-2 px-4 text-sm font-medium  hover:bg-white"
    >
        
        <span className="text-black  text-t-normal  font-bold">Please specify sign type</span>
    </button>
</div>
 )



    return (
        <>

            <div className="mt-1 grid ">
                {/* <div className="mt-1 grid grid-cols-2 gap-3"> */}
                {/* <div>
                    <button
                        onClick={() => handleSocialLogin('facebook')}
                        className="inline-flex w-full justify-center rounded-md border bg-blue-800  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-900"
                    >
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div> */}

                {
                    type == 'twitter' ?
                    (<Twitter />)   :
                    type == 'google' ?
                    (<Google />)  :
                    (<DefaultLogin  />)

                    
                }

          

           


            </div>

        </>


    )
}

