import { useEffect, useState } from "react"
import { get, post } from '@/Utils/api';
import toast from '@/Components/Toast';
import { usePage } from "@inertiajs/inertia-react";

export default function Footer({ influencer }) {

       const { auth } = usePage().props;
       const { user } = auth;

       const [isProfiled, setIsProfiled] = useState(false);
       //   cons

       useEffect(() => {
              checkIfProfiled();
       }, [])


       async function checkIfProfiled() {
              const response = await get(route('influencer.findprofiled', { id: influencer.id }), true);
              const { data } = response.data;
              if (data) {
                     setIsProfiled(true);
              }
       }


       async function handleProfileInfluencer() {
              const data = {
                     data: [
                            { id: influencer.id }
                     ],
              }
              const response = await post(route('create.profiling'), data, true);

              if (response?.data?.status) {
                     toast(response?.data?.message);
                     checkIfProfiled();
              } else {
                     toast.error('An error occured');
              }
       }

       return (
              <div className="absolute bottom-0 bg-white p-4  w-full border">
                     <div className="flex md:flex-row flex-col  justify-between">
                            <button disabled={isProfiled || user.available_profiling_count <= 0} onClick={() => handleProfileInfluencer()} className={isProfiled ? " bg-viralget-red rounded-md px-5 py-2 text-white opacity-5" : "bg-viralget-red rounded-md px-5 py-2 text-white"}>{isProfiled ? 'Influencer Profiled' : 'Profile influencer'}</button>

                            <div className="flex space-x-1 md:mt-2  mt-2">
                                   <span className="text-viralget-grey ">Available to profile</span>
                                   <span className="text-viralget-red">{user.available_profiling_count} influencers</span>
                            </div>
                     </div>
              </div>
       )
}