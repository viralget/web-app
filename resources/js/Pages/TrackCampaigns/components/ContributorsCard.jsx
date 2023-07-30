

const ContributorsCard = ({ title, subTitle, contributors, total_contributors }) => {


        const Row = ({ item }) => {
                console.log({ item })
                const { username, name, profile_image_url } = item.user;
                const value = item?.tweets_count;
                const percentage = (item?.tweets_count / total_contributors) * 100;

                return (<div className=" flex flex-col space-y-2 w-full">
                        <div className="flex  justify-between">
                                <div className="flex justify-start space-x-2">
                                        <a href={"https://twitter.com/" + username} target="_blank">
                                                <img src={profile_image_url} className="rounded-full w-space-40 h-space-40" />
                                        </a>
                                        <div className="flex flex-col space-y-1">
                                                <a href={"https://twitter.com/" + username} target="_blank" className="text-t-x  font-bold">@{username}</a>
                                                <span className="text-t-normal  text-viralget-gray-400 font-normal capitalize">{subTitle}: {value}</span>
                                        </div>
                                </div>

                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                <div class="bg-primary h-2.5 rounded-full dark:bg-gray-300" style={{ width: `${percentage ?? 10}%` }}></div>
                        </div>
                </div>
                )
        }

        return (

                <div className="flex flex-col">
                        <div className="bg-[#F37C38]  py-5 px-3 mb-3 flex justify-between">
                                <span className="text-t-normal font-normal text-white font-lexend capitalize">{title}</span>
                                {/* <span className="font-normal  text-t-xsx text-white font-lexend">{subTitle}</span> */}
                        </div>
                        <div className="flex  flex-col  space-y-3">

                                {
                                        contributors?.length > 0 ?

                                                contributors.map((item, index) => (
                                                        <Row item={item} key={index} />
                                                ))
                                                : 'No data available'
                                }
                        </div>
                </div>
        )
}


export default ContributorsCard;