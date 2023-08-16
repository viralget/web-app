import { platforms } from "@/Services/PlatformsService";
import { createContext, useState } from "react";

export const PlatformContext = createContext();

export const PlatformProvider = ({ children }) => {
    const [platform, setPlatform] = useState(platforms[0]);

    return (
        <PlatformContext.Provider value={[platform, setPlatform]}>
            {children}
        </PlatformContext.Provider>
    )
}