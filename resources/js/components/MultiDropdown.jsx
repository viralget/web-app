import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import Label from "./Label";

const MultiDropdown = ({ label, name, options, onChange, defaultOptionText }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentSelectedItem, setCurrentSelectedItem] = useState(defaultOptionText ?? 'Select an option');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const handleSelected = (e, item, value) => {


        setCurrentSelectedItem(item.name);

        let _selectedOptions = selectedOptions;

        if (_selectedOptions.indexOf(value) === -1) {
            _selectedOptions.push(value);
        } else {
            _selectedOptions.pop(value);
        }

        setSelectedOptions(_selectedOptions);

        e.target.value = _selectedOptions;
        onChange(e);
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowDropdown(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <div className="relative">
            {label &&
                <Label for={name} value={label} />
            }
            <div onClick={() => setShowDropdown(!showDropdown)} className="w-full py-3 px-4 rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                <div className="flex justify-between w-full">
                    <span>{currentSelectedItem ?? label}</span>
                    <span>{selectedOptions.length > 1 && <span className="text-xs bg-gray-100 p-1 mr-1">+{selectedOptions.length - 1}</span>}</span>
                </div>
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
                <div ref={wrapperRef} className="absolute z-10 -left-2 w-full">
                    <div className="mt-3 w-64 h-auto bg-white shadow rounded">
                        {options.length && options.map((item, index) => {

                            const value = item.name ?? item.label;
                            console.log({ value })
                            return (

                                <div className="flex py-2 px-2 items-center justify-between cursor-pointer hover:bg-gray-50" key={index} onClick={(e) => handleSelected(e, item, value)}>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <p className="text-xs leading-normal ml-2 text-gray-800">{value}</p>
                                        </div>
                                    </div>
                                    {selectedOptions.includes(value) && (
                                        <CheckIcon className="w-4 text-black h-4" />
                                    )}
                                </div>

                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};


export default MultiDropdown;