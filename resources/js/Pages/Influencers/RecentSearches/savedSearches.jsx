
import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import SearchCard from "./searchCard";


const SavedSearches = ({ saved_search }) => {

  return (
        <AuthenticatedLayout   smallHeader={true}>
        <div className="mt-3 px-5">
        <ButtonBack />

        <div className="mt-space-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {saved_search.map((card, index) => {

                        const keywords = JSON.parse(card.search_filters);

                        return keywords && (
                            (
                                 <SearchCard   card={card}  isSaved={true} key={index} />
                            )
                        )


                    })}
                </div>
        </div>
        </AuthenticatedLayout>
    )
}


export default SavedSearches;