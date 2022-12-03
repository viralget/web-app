export default function Avatar({ userName, url, size, className }) {

    return (
        url ?
            <img
                className={`inline-block rounded-full ${className}`}
                src={url}
                alt=""
            />
            :
            <span className={`inline-flex items-center justify-center rounded-full bg-gray-800 ${className} w-8 h-8`} >
                <span className="text-sm font-medium leading-none text-white">{userName?.charAt(0)}</span>
            </span >
    )
}