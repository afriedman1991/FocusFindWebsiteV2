import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/spinningCoin.json";

const LoadingPage: React.FC = () => {
    return (
        <div data-testid="loading-page" className="relative flex flex-col items-center justify-center min-h-screen overflow-auto py-4 sm:py-6 loading-container">
            <Lottie animationData={loadingAnimation} loop={true} className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center background-image-div" />
        </div>
    )
}

export default LoadingPage;
