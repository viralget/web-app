import LottieAnimation from "./LottieAnimation";
import chickySearching from "@/../assets/lottie/chicky-searching.json";

export default function Loading({ isChicky }) {
    // state switch based on $type
    return (
        <>
            <LottieAnimation className="w-40 h-40 mx-auto" animationData={chickySearching} />
        </>
    )
}
