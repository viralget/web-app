// import Avatar from "@/Components/Avatar";
// import Card from "@/Components/Card";
// import EmptyState from "@/Components/EmptyState";
// import PageHeading from "@/Components/PageHeading";
// import toast from "@/Components/Toast";
import { classNames, formatDate } from "@/Utils/helpers";
// import { Inertia } from "@inertiajs/inertia";
// import { useForm, usePage } from "@inertiajs/inertia-react";
// import { useEffect, useRef, useState } from "react";
// import Dashboard from "../../Layouts/Dashboard";
import AuthenticatedLayout from "@/Components/AuthenticatedLayout";

export default function Messages() {

    // const { auth } = usePage().props;

    // const { user } = auth;

    // const [selectedThread, setSelectedThread] = useState(selected_thread ?? null);


    // const { data, put, setData } = useForm({
    //     message: null,
    // })

    // const messagesEnd = useRef(null);

    // const scrollToBottom = () => {
    //     messagesEnd.current?.scrollIntoView({ behavior: "smooth" })
    // }

    // useEffect(() => {
    //     scrollToBottom();
    // }, [messages])

    // useEffect(() => {
    //     // Just some mild delays
    //     setTimeout(() => {
    //         scrollToBottom();
    //     }, 10)
    // }, [])

    // const handleSelectedMessage = (thread) => {
    //     setSelectedThread(thread);
    //     setData('thread', thread.id)

    //     //Fetch message or redirect to show messages
    //     Inertia.get(route('messages.show', { id: thread?.id }));
    // }

    // const handleSendMessage = (e) => {
    //     e.preventDefault();

    //     // let _message = data.message;

    //     put(route('messages.update', { id: selected_thread?.id }), {
    //         preserveScroll: true,
    //         onSuccess: () => {
    //             setData('message', '');
    //         },
    //         onError: () => {
    //             toast.error('Error sending message at this time. Please try later');
    //             // setData('message', _message);
    //         }
    //     });
    // }

    return (
        <AuthenticatedLayout smallHeader={true}>
            <div>

                {/* <div className="min-h-full text-center text-sm">
                        <EmptyState title="All Empty" subtitle="No message in your inbox at the moment" />
                    </div> */}

                <div className="min-w-full lg:grid lg:grid-cols-3">
                    <div className="border-r border-gray-200 lg:col-span-1">
                        {/* <div className="mx-3 my-3">
                                <div className="relative text-gray-600">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            viewBox="0 0 24 24" className="w-6 h-6 text-gray-300">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </span>
                                    <input type="search" className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
                                        placeholder="Search" required />
                                </div>
                            </div> */}

                        <ul className="overflow-auto h-[32rem]">
                            <h2 className="text-lg text-gray-600 p-5 border-b border-gray-50">All Messages</h2>
                            <li onClick={() => console.log("hello")}>
                                <a
                                    className={classNames('flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-200 cursor-pointer hover:bg-gray-100 focus:outline-none bg-amber-100')}>
                                    {/* <Avatar userName={'Something'} /> */}
                                    <div className="w-full pb-2">
                                        <div className="flex justify-between">
                                            <span className="block ml-2 font-semibold text-gray-600">{'something here'}</span>
                                            <span className="block ml-2 text-sm text-gray-600">{formatDate('12/09/2023', true)}</span>
                                        </div>
                                        <span className="block ml-2 text-sm text-gray-600 overflow-hidden">{'Last message here'}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:col-span-2 lg:block">
                        {/* {!selectedThread ? */}
                        {/* <div className="min-h-full flex items-center">
                                    <EmptyState title="Your Inbox" subtitle={<>Manage messages from companies and recruiters. <br />Select a message to get started.</>} />
                                </div>
                                 */}
                        <div className="w-full">
                            <div className="relative flex items-center p-3 border-b border-gray-200">
                                {/* <Avatar userName={'something'} /> */}
                                {/* <img className="object-cover w-10 h-10 rounded-full"
                                            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" /> */}
                                <span className="block ml-2 font-bold text-gray-600">somehting here</span>
                                {/* <span className="absolute w-3 h-3 bg-primary rounded-full left-10 top-3">
                                        </span> */}
                            </div>
                            <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
                                <ul className="space-y-2">
                                    {/* {messages?.map((message, index) => */}
                                    <li className={classNames("flex justify-start")} >
                                        <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow break-all">
                                            <span className="block">Body message here.<br />
                                                <span className="text-xs">{formatDate('12/09/2023')}</span>
                                            </span>
                                        </div>
                                    </li>


                                </ul>
                                {/* <span ref={messagesEnd}></span> */}
                            </div>

                            <form
                            // onSubmit={handleSendMessage}
                            >
                                <div className="flex items-center justify-between w-full p-3 border-t border-gray-200">

                                    <input type="text" placeholder="Message"
                                        className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700 focus:border-gray-800  focus:ring-gray-700"
                                        name="message"
                                        //  value={data.message} 
                                        required
                                    //   onChange={(e) => setData("message", e.target.value)} 
                                    />
                                    <button type="submit">
                                        <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </AuthenticatedLayout>


    )
}