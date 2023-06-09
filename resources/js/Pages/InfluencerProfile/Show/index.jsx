import AuthenticatedLayout from "@/Components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import Header from '../header';
import { useEffect, useState } from "react";
import Loading from "@/Components/Loading";
import Tabs from "./Tabs";

export default function show({ list, influencer }) {

    const [loading, setLoading] = useState(false);


    const url = new URLSearchParams(window.location.search).get('tab');
    const urlParams = url == null ? 'overview' : url;

    return (
        <AuthenticatedLayout>
            {loading ? <Loading /> :
                <>
                    <>
                        <div className="relative -mt-40   md:mb-0  mb-[8rem]">
                            <div className="m-5">
                                <ButtonBack fill="white" className="text-white" />
                            </div>
                            <Header influencer={influencer} list={list} />
                        </div>
                    </>

                    <div className="w-full p-4  md:mt-5  mt-10 ">
                        <Tabs influencer={influencer} />
                    </div>

                </>

            }
        </AuthenticatedLayout>
    )
}
