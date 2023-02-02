import { useEffect, useRef } from 'react';
import Label from './Label';

// export const inputStyle = "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm"

export const inputStyle = "block text-md text-gray-500 w-full appearance-none rounded-md border border-gray-200 p-3 placeholder-gray-400 focus:border-black focus:ring-black";


export default function Input({
    type = 'text',
    label,
    explainer,
    id,
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    onChange,
    placeholder,
    defaultValue
}) {
    // const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className=" flex flex-col items-start w-full space-y-1">
            {label &&
                <Label for={id ? id : name} value={label} />
            }
            {explainer &&
                <p className="text-sm text-gray-400 mb-1">
                    {explainer}
                </p>
            }

            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={inputStyle + ' ' + className}
                // ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => onChange(e)}
            />
        </div>
    );
}
