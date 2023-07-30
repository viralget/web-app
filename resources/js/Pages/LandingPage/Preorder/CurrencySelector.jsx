import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useEffect } from 'react'

const currencies = ['NGN', 'USD']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CurrencySelector({ onChange }) {
    const [mem, setMem] = useState(currencies[0])

    useEffect(() => {
        onChange(mem);
    }, [mem]);
    return (
        <div>
            <div className="flex items-center justify-center">
                <h2 className="text-sm font-medium leading-6 text-gray-900">Select Currency</h2>
                {/* <a href="#" className="text-sm font-medium leading-6 text-primary hover:text-secondary">
                    Select preferred currency
                </a> */}
            </div>

            <div className='justify-center flex'>
                <RadioGroup value={mem} onChange={setMem} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a currency option</RadioGroup.Label>
                    <div className="grid grid-cols-2 gap-3">
                        {currencies.map((option) => (
                            <RadioGroup.Option
                                key={option}
                                value={option}
                                className={({ active, checked }) =>
                                    classNames(
                                        // option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                                        active ? 'ring-2 ring-primary ring-offset-2' : '',
                                        checked
                                            ? 'bg-primary text-white hover:bg-secondary'
                                            : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                                        'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1'
                                    )
                                }
                            // disabled={!option.inStock}
                            >
                                <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}
