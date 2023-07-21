
import { EyeSlashIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef, useState } from 'react';
import { inputStyle } from './Input';

export default function PasswordInput({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    onChange,
    secondary = false,
    // defaultValue='',
    onBlur,
    label = '',
    id = '',
    ref,
    placeholder = '',
    show = false,
    icon
}) {
    const input = useRef();

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setShowPassword(show)
    }, [show])

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start mb-3 relative ">

             
            {label &&
                <label htmlFor={id ? id : name} className="block text-sm font-medium mb-1 text-gray-700 w-full">
                    {label}
                </label>
            }
            {/* `border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 rounded-md shadow-sm ` */}
            <div className='relative w-full'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name={name}
                    value={value}
                    className={
                        inputStyle +
                        className
                    }
                    ref={ref ? ref : input}
                    autoComplete={autoComplete}
                    required={required}
                    onChange={(e) => onChange(e)}
                    placeholder={placeholder}
                    onBlur={onBlur}         
                />
                <div className="absolute inset-y-0 right-0 p-3 bg-dark z-50 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ?
                        <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        :
                        <EyeSlashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
                </div>

                {icon && (
                <div className='absolute  bottom-5 left-3 '>
                    {icon}
                </div>

            )}
            </div>
        </div>
    );
}