
export default function TitleText({ text, isPageTitle = false, className, light }) {
    return (
        <h3 className={`text-lg capitalize font-medium ${light ? 'text-gray-50' : 'text-gray-900'} ${className ? className : 'mb-5'} ${isPageTitle ? " font-bold leading-4" : " font-medium leading-6"}`}>{text}</h3>
    );
}
