

export default function Label({ forInput, value, className = '', children }) {
    return (
        <label htmlFor={forInput} className={`block text-xs text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
