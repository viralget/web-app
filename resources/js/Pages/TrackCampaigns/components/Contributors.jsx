import ContributorsCard from "./ContributorsCard";

const contributors = ({ metrics }) => {

      // const top_contributors = metrics.top_contributors

      return (
            <div className="flex flex-col  mt-space-60">
                  <div className="flex justify-start mb-4">
                        <span className="font-lexend font-semibold  text-2xl text-viralget-grey">Contributor Ranking</span>
                  </div>
                  <div className="grid ld:grid-cols-3 md:grid-cols-3 grid-cols-1    gap-5 ">
                        <ContributorsCard title="Top Contributors" subTitle="contributions" contributors={metrics?.top_contributors} total_contributors={metrics.no_of_contributors} />
                        <ContributorsCard title="Best performing contibutors" subTitle="contributions" contributors={metrics?.best_performing_contributors} total_contributors={metrics.no_of_contributors} />
                        <ContributorsCard title="Most Active" subTitle="tweets" contributors={metrics?.most_active} total_contributors={metrics.no_of_contributors} />
                        <ContributorsCard title="Original Tweeters" subTitle="tweets" contributors={metrics?.original_tweets} total_contributors={metrics.no_of_contributors} />
                        <ContributorsCard title="Retweeters" subTitle="tweets" contributors={metrics.retweeters} total_contributors={metrics.no_of_contributors} />
                  </div>
            </div>
      )
}


export default contributors;