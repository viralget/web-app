import { classNames } from "@/Utils/helpers";
import maleImg from '../../../assets/images/avatars/male.jpeg';
import femaleImg from '../../../assets/images/avatars/female.jpeg';


export default function Avatar({ user, userName, url, size, useIcon, className, isEditable, isDark }) {
    let sizeClass;

    switch (size) {
        case 'xlarge':
            sizeClass = 'w-24 h-24'
            break;
        case 'large':
            sizeClass = 'w-12 h-12'
            break;

        default:
            sizeClass = 'w-8 h-8'
            break;
    }

    const username = userName ?? user?.name ?? user?.email;
    const avatarUrl = url ?? user?.image_url ?? user?.logo_url;

    const getIcon = (gender) => {
        return <img
            className={`inline-block rounded-md ${sizeClass} ${className}`}
            // src={avatarUrl}
            src={gender == 'male' ? maleImg : femaleImg}
            alt=""
        />
    }

    return (
        <>
            <div className={`relative inline-block ${isEditable && 'cursor-pointer'}`}>
                {avatarUrl ?
                    <img
                        className={`inline-block rounded-md ${sizeClass} ${className}`}
                        src={avatarUrl}
                        alt=""
                    />
                    :
                    useIcon ? getIcon(user?.gender) :
                        <span className={classNames(`inline-flex items-center justify-center rounded-md`, isDark ? 'bg-secondary' : 'bg-gray-800', className, sizeClass)} >
                            <span className="text-sm font-medium leading-none text-white">{username?.toUpperCase()?.charAt(0)}</span>
                        </span >
                }

            </div>

        </>
    )
}