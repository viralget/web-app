
import { classNames } from '@/Utils/helpers'
export default function ButtonBack({ className, fill, title, url }) {



    return (
        <button className='flex  items-center ' onClick={() => window.open(url, '_current') ?? window.history.back()}>
            <div  >
                <svg width="18" height="18" viewBox="0 0 18 18" fill={fill ? fill : "current"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4698 13.0302C10.7626 12.7374 10.7626 12.2626 10.4697 11.9697L7.93357 9.43357C7.84889 9.34889 7.84889 9.2116 7.93357 9.12693L10.4698 6.59075C10.7626 6.2979 10.7626 5.8231 10.4698 5.53025C10.1769 5.2374 9.7021 5.2374 9.40925 5.53025L6.04836 8.89114C5.83346 9.10604 5.83346 9.45446 6.04836 9.66936L9.40925 13.0302C9.7021 13.3231 10.1769 13.3231 10.4698 13.0302Z" />
                </svg>
            </div>
            <span className={classNames('text-xs', className)}>{title ? title : 'Back'}</span>

        </button>
    )
}