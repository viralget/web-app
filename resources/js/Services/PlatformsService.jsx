import { InstagramSvg, TwitterSvg } from "@/Utils/icons";

export const platforms = [
    {
        name: 'instagram',
        url: "https://instagram.com/",
        icon: <InstagramSvg />,
        bg_color: "bg-fuchsia-600 bg-gradient-to-r from-yellow-600   to-fuchsia-600 ",
    },
    {
        name: 'twitter',
        icon: <TwitterSvg />,
        url: "https://twitter.com/",
        bg_color: "bg-[#01C5FF] bg-gradient-to-r from-[#01C5FF]  via-[#00AEFF] to-[#0094FE] ",
    },

]

export const getPlatforms = () => {
    return platforms;
}

export const getPlatform = (field, value) => {
    // console.log({ field, value })
    return platforms.filter((platform) => platform[field] == value)[0];
}