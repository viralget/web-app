import { classNames } from "@/Utils/helpers";

export default function Badge({ type, color = 'text-yellow-800 bg-yellow-100', text }) {
    // state switch based on $type
    return (
        <>
            <span className={classNames("inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs font-medium ", color)}>
                {text}
            </span>
        </>
    )
}
