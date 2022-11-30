import { useLottie } from "lottie-react";

const LottieAnimation = ({ animationData, className }) => {
    const options = {
        animationData,
        loop: true
    };

    const { View } = useLottie(options);

    return <div className={className}>{View}</div>;
};

export default LottieAnimation;