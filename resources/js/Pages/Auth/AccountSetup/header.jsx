import { Logo } from "@/components/Logo";
import { classNames } from "@/Utils/helpers";
import Avatar from "@/components/Skeleton/Avatar";
import { DoneSvg } from "@/Utils/icons";
import DropdownMenu from "@/Components/Layouts/Navigation/DropdownMenu";

const Header = ({ user, image_url, levels }) => {






    const Steps = ({ item, index }) => {
        return (
            <div className="flex space-x-2">
                {
                    item.status === 'complete' ?
                        (
                            <DoneSvg />
                        )
                        :
                        (
                            <div className={classNames("w-space-35 h-space-35  flex items-center justify-center rounded-full", item.status == 'current' ? 'bg-viralget-red-100' : 'bg-viralget-gray-200')}>
                                <span className={classNames("font-lexend font-medium text-t-xsx   ", item.status == 'current' ? 'text-viralget-red' : '')}>{index + 1}</span>
                            </div>
                        )
                }


                <div className="flex flex-col">
                    {
                        item.status === 'complete' ?
                            (
                                <span className={classNames("capitalize text-t-normal-x  font-medium text-viralget-green-200")}>Done</span>
                            ) :
                            (
                                <span className={classNames("capitalize text-t-normal-x  font-medium", item.status == 'current' ? 'text-viralget-red' : 'text-viralget-gray-500')}>{item.status}</span>
                            )
                    }

                    <span className="text-t-normal font-bold">{item.name}</span>
                </div>
            </div>
        )
    }

    return (

        <div className="flex justify-between md:px-space-80  px-space-10   shadow-header-card-2  py-space-24">
            <Logo className="w-space-75  h-space-32" />


            {
                levels?.length > 0 ? (
                    <div className="lg:flex  hidden  space-x-space-60">
                        {
                            levels?.map((item, index) => (
                                <Steps item={item} index={index} key={index} />
                            ))
                        }
                    </div>
                ) :
                    null
            }

            <div className="flex space-x-1 items-center">
                {/* <Avatar userName={user.name} /> */}
                <DropdownMenu user={user} />
                {/* <span className="text-t-xsx   ml-space-12 font-medium font-lexend">Hello, {user.name}</span> */}
            </div>
        </div>
    )
}


export default Header;