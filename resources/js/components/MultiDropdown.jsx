import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Label from "./Label";

const MultiDropdown = ({ label, name, options }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isSubList, setIsSubList] = useState(3);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelected = (value) => {

        console.log({ selectedOptions, value })

        let _selectedOptions = selectedOptions;

        if (_selectedOptions.indexOf(value) === -1) {
            _selectedOptions.push(value);

            setSelectedOptions(_selectedOptions);
        } else {
            _selectedOptions.pop(value);
            setSelectedOptions(_selectedOptions);
        }
    }

    return (
        <div className="relative">
            {label &&
                <Label for={name} value={label} />
            }
            <div onClick={() => setShowDropdown(!showDropdown)} className="w-full p-4  rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                {label}
                <div>
                    {showDropdown ? (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                            </svg>
                        </div>
                    ) : (
                        <div>
                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {showDropdown && (
                <div className="absolute -left-2 w-full">
                    <div className="w-full mt-2 h-auto bg-white shadow rounded-b">
                        {options.length && options.map((item, index) => (

                            <div className="flex py-1 px-2 items-center justify-between cursor-pointer" key={index} onClick={() => handleSelected(item.value)}>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <p className="text-sm leading-normal ml-2 text-gray-800">Facebook</p>
                                    </div>
                                </div>
                                {selectedOptions.indexOf(item.value) == 1 && (
                                    <CheckIcon className="w-4 text-black h-4" />
                                )}
                            </div>

                        ))}

                        <button className="text-xs bg-indigo-100 hover:bg-indigo-200 rounded-md mt-6 font-medium py-2 w-full leading-3 text-indigo-700">Select</button>
                    </div>
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    );
};


export default MultiDropdown;