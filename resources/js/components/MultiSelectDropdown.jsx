import { Select } from 'baseui/select';

export default function MultiSelectDropdown({ options }) {
    const [value, setValue] = React.useState([]);
    return (
        <Select
            creatable
            multi
            options={[
                { id: 'Portland', label: 'Portland' },
                { id: 'NYC', label: 'New York City' },
                { id: 'LosAngeles', label: 'Los Angeles' },
                { id: 'Boston', label: 'Boston' },
                { id: 'Atlanta', label: 'Atlanta' },
                { id: 'SanFrancisco', label: 'San Francisco' },
            ]}
            labelKey="label"
            valueKey="id"
            onChange={({ value }) => setValue(value)}
            value={value}
        />
    );
}