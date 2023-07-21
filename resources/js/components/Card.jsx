import { classNames } from '@/Utils/helpers';

export default function Card({ children, bgColor = 'bg-white', className, usePadding = true, bgClass, useBorder, useShadow = true, useHover, dark = false }) {

    return (
        // <div className={`p-4 border-b rounded border-gray-200 shadow-sm text-sm  ${bgClass} ${dark ? 'bg-gray-900 text-gray-50' : 'bg-white text-gray-500'}`}>
        // <UICard>
        <div className={classNames(
            useHover && 'hover:border-gray-100 hover:shadow-lg',
            useShadow && 'shadow-lg',
            bgColor,
            useBorder ? 'border-gray-100 hover:border-gray-200' : 'border-transparent ',
            usePadding ? 'p-3 md:py-4 md:px-6' : '',
            ' border overflow-hidden rounded-xl transition-all w-full',
        )}>
            <div className={className}>
                {children}
            </div>
        </div>
        // </UICard>
        // </div>
    );
}
