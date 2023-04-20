

export default function Label({ forInput, value, className = '', children }) {
    return (
        <label htmlFor={forInput} className={`block text-sm text-[#748094] mb-1` + className}>
            {value ? value : children}
        </label>
    );
}
