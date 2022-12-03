import { useEffect, useRef } from 'react';

export const inputStyle = "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm"


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
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start w-full space-y-1">
            {label &&
                <label htmlFor={id ? id : name} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
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
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => onChange(e)}
            />
        </div>
    );
}
