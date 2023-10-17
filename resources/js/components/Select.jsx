import { useEffect, useRef } from 'react';
import Label from './Label';

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
    label = '',
    id = '',
    explainer = '',
    options = [],
    defaultOptionText,
    defaultValue,
    capitalize = true,
    useBorder = true,
}) {
    const select = useRef();

    useEffect(() => {
        // // console.log({defaultValue})
        if (isFocused) {
            select.current.focus();
        }
    }, []);

    useEffect(() => {
    }, [options]);


    return (
        <div className="flex flex-col items-start space-y-1">
            {label &&
                <Label for={id ? id : name} value={label} />
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
                    `focus:ring-gray-400 ${capitalize && 'capitalize'} ${useBorder && 'border'}  indent-1 py-3 focus:border-gray-400 block w-full px-2  sm:text-sm border-gray-300 rounded-md ${secondary && 'bg-gray-100'} ` +
                    className +
                    'border border-gray-300'
                }
                defaultValue={defaultValue}
                required={required}
                onChange={(e) => onChange(e)}
            >
                <option value="">{defaultOptionText ?? 'Select option'}</option>
                {options.length && options.map((item, key) => {
                    let name = (item.name ?? item.value).toString();
                    let value = item.value ?? item.name;

                    return (
                        <option value={item.value || item.value == '' ? item.value : item.name} className="capitalize" key={key}>{name != '' ? name.replace('-', ' ') : name} </option>
                    )
                }
                )}
            </select>
        </div>
    );
}
