import Button from "@/Components/Button";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function SuccessNotice({ title, message, actionText, link }) {
    return (
        <div className='space-y-5  text-center py-8 min-h-fit'>
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                <CheckIcon className="h-10 w-10 text-green-600" aria-hidden="true" />
            </div>
            <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
            <p className="text-center text-gray-800 mt-3">{message}</p>
            <Button href={link}>{actionText}</Button>
        </div>

    )
}