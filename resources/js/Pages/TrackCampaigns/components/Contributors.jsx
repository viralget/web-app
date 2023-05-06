import ContributorsCard from "./ContributorsCard";
const contributors = () => {



    return(
        <div  className="flex flex-col  mt-space-20">
                <div className="flex justify-start mb-4">
                      <span className="text-t-lg  font-lexend  font-bold text-viralget-grey">Contributor Ranking</span>
                </div>
                <div className="grid grid-cols-3  gap-5 ">
                      <ContributorsCard title="Top Contributors" subTitle="contributions" />
                      <ContributorsCard title="Best performing contibutors" subTitle="contributions" />
                      <ContributorsCard title="Most Active" subTitle="tweets" />
                      <ContributorsCard title="Original Tweets" subTitle="tweets" />
                      <ContributorsCard title="Retweeters" subTitle="tweets" />
                </div>
               

                
        </div>
    )
}


export default contributors;