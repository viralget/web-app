
export default function RadioBox({ name, value, onChange, checked = false }) {
    return (
        <input
            type="radio"
            checked={checked}
            name={name}
            value={value}
            className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            onChange={(e) => onChange(e)}
        />
    );
}