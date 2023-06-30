import { forwardRef, useEffect, useState } from 'react';
import { Select, SIZE, TYPE } from 'baseui/select';
import { useStyletron } from 'styletron-react';
import { StyledInput } from 'baseui/input';
import Label from './Label';

export default function MultiSelect({ options, defaultValue, label, explainer, handleChange, onChange, labelKey = 'value', valueKey = 'value' }) {

    defaultValue = defaultValue?.map((item) => ({ value: item })) ?? [];

    const [value, setValue] = useState(defaultValue ?? []);

    useEffect(() => {
        // if ((onChange || handleChange) && value.length > 0) {
        if ((onChange || handleChange)) {
            let values = value?.map((item) => item.name ?? item.value) ?? []

            handleChange && handleChange(values);
            onChange && onChange(values)
        }

    }, [value])

    return (
        <div className="flex flex-col items-start space-y-1">
            {label &&
                <Label value={label} />
            }
            {explainer &&
                <p className="text-sm text-gray-400 mb-1">
                    {explainer}
                </p>
            }
            <Select
                // size={SIZE.compact}
                options={options}
                labelKey={labelKey}
                valueKey={valueKey}
                placeholder="Choose at least one"
                maxDropdownHeight="300px"
                // type={TYPE.search}
                multi
                onChange={({ value }) => setValue(value)}
                value={value}
            />
        </div>
    );
}


// import React, { useEffect } from 'react';
// import { Select, SIZE, TYPE } from 'baseui/select';

// export default function MultiSelect({ options, value, onChange }) {


//     return (
//         <Select
//             // size={SIZE.compact}
//             options={options}
//             labelKey="label"
//             valueKey="label"
//             placeholder="Choose at least one"
//             maxDropdownHeight="300px"
//             // type={TYPE.search}
//             multi
//             onChange={onChange}
//             value={value}
//         />
//     );
// }