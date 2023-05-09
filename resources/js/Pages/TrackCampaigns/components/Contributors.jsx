import ContributorsCard from "./ContributorsCard";

const contributors = () => {

  return(
        <div  className="flex flex-col  mt-space-60">
                <div className="flex justify-start mb-4">
                      <span className="font-lexend font-semibold  text-2xl text-viralget-grey">Contributor Ranking</span>
                </div>
                <div className="grid ld:grid-cols-3 md:grid-cols-3 grid-cols-1    gap-5 ">
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