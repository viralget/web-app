export default function Badge({ type, text }) {
    // state switch based on $type
    return (
        <>
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                {text}
            </span>
        </>
    )
}
