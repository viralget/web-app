import { classNames } from "@/Utils/helpers";
import { ArrowDownIcon, CheckBadgeIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import Label from "./Label";
import { inputStyle } from "./Input";
import { TvIcon } from "@heroicons/react/20/solid";


const MultiDropdown = ({ label, name, options, onChange, defaultOptionText }) => {
    const defaultText = 'Select an option';

    const [showDropdown, setShowDropdown] = useState(false);
    const [currentSelectedItem, setCurrentSelectedItem] = useState(defaultOptionText ?? defaultText);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);

    const handleSelected = (e, item, value) => {


        setCurrentSelectedItem(item.name ?? value);

        let _selectedOptions = selectedOptions;

        console.log({ selectedOptions })
        if (_selectedOptions.includes(value)) {
            _selectedOptions.pop(value);
        } else {
            _selectedOptions.push(value);
        }

        console.log({ _selectedOptions })

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

    const handleClearSelection = () => {
        setSelectedOptions([]);
        setCurrentSelectedItem(defaultText)
    }

    return (
        <div className="relative">
            {label &&
                <Label for={name} value={label} />
            }
            <div onClick={() => setShowDropdown(!showDropdown)} className="w-full py-3 px-0 rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
                {/* <div onClick={() => setShowDropdown(!showDropdown)} className={classNames(inputStyle, "border px-3 flex items-center justify-between cursor-pointer")}> */}
                <div className="flex justify-between w-full">
                    <span>{currentSelectedItem}</span>
                    <span>{selectedOptions.length > 1 && <span className="text-xs bg-gray-100 text-gray-500 rounded p-1 mr-1">+{selectedOptions.length - 1}</span>}</span>
                </div>
                <div>
                    {selectedOptions.length > 0 ? (
                        <XMarkIcon className="w-3 h-3 z-1" onClick={handleClearSelection} />
                    ) : (
                        showDropdown ? (
                            <ChevronUpIcon className="w-3 h-3" />
                        ) : (
                            <ChevronDownIcon className="w-3 h-3" />
                        )
                    )}
                </div>
            </div>
            {showDropdown && (
                <div ref={wrapperRef} className="absolute z-10 -left-2 w-full">
                    <div className="mt-2 w-64 p-2 h-auto bg-white shadow rounded">
                        {label &&
                            <h4 className="h4 px-2 font-bold">{label}</h4>
                        }
                        {options.length && options.map((item, index) => {

                            const value = item.value ?? item.name;

                            return (
                                <div className="flex py-2 px-2 items-center text-sm justify-between cursor-pointer hover:bg-gray-50" key={index} onClick={(e) => handleSelected(e, item, value)}>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <p className="leading-normal ml-2 text-gray-800">{item.name ?? item.value}</p>
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