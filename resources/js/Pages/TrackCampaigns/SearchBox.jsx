import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import { get } from "@/Utils/api"

export default function SearchBox(props) {


    function handleSubmit(event){

        console.log("event")
    }

    function handleChange(val){

        console.log("val:", val)
    }
    return (
        <div className="-mt-12 relative z-1 px-10 rounded-lg">
                     <form action="#" onSubmit={handleSubmit} className="sm:mx-auto lg:mx-0">
                         <div 
                            className="flex bg-white shadow px-5 p-4 rounded-md"
                            >
                            
                            <div className="rounded-md w-full border  p-1 px-3">
                                  <input
                                    id="keywords"
                                    name="keywords"
                                    type="text"
                                  //  defaultValue={Selectedkeywords ? Selectedkeywords : keywords}
                                    onChange={(e) => handleChange(e, 'Keywords', 'keywords')}
                                    placeholder={"Track campaign by keywords or hashtag"}
                                    className="block w-full px-3  flex-grow  rounded-none rounded-r-md border-0 text-gray-900 placeholder-gray-500 py-3 text-lg focus:outline-none focus:ring-0 focus:ring-offset-none"
                                />

                                
                            </div>



                                <div className="flex items-center sm:mt-0 sm:ml-3 w-[20%]">
                                    <button
                                        onClick={handleSubmit}
                                        // type="submit"
                                        className="w-full py-4 text-lg rounded-md shadow bg-orange-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 "
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
    )
}
