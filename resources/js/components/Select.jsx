import { useEffect, useRef } from 'react';

export default function Select({
    name,
    value,
    className,
    autoComplete,
    disabled = false,
    required,
    isFocused,
    onChange,
    secondary = false,
    label,
    id = '',
    explainer = '',
    options = [],
    defaultOptionText,
    defaultValue,
    capitalize = true
}) {
    const select = useRef();

    useEffect(() => {
        // console.log({defaultValue})
        if (isFocused) {
            select.current.focus();
        }
    }, []);

    useEffect(() => {
    }, [options]);


    return (
        <div className="flex flex-col items-start ">
            {label &&
                <label htmlFor={id ? id : name} className="block text-sm text-gray-500 mb-1">
                    {label}
                </label>
            }
            {explainer &&
                <p className="text-sm text-gray-400 mb-1">
                    {explainer}
                </p>
            }
            <select
                id={id ? id : name}
                name={name}
                disabled={disabled}
                ref={select}
                className={
                    // `border-gray-300 focus:border-green-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block` +
                    `focus:ring-gray-400 ${capitalize && 'capitalize'} focus:ring-0 focus:border-gray-400 block w-full py-2.5 sm:text-sm border-gray-300 rounded-md ${secondary && 'bg-gray-100'} ` +
                    className
                }
                defaultValue={defaultValue}
                required={required}
                onChange={(e) => onChange(e)}
            >
                <option value="">{defaultOptionText ?? 'Select option'}</option>
                {options.length && options.map((item, key) => (
                    <option value={item.value || item.value == '' ? item.value : item.name} className="capitalize" key={key}>{item.name.replace('-', ' ')}</option>
                ))}
            </select>
        </div>
    );
}
