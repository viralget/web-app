
export default function Button({ type = 'submit', size = 'large', isDark = false, isLight, icon, rounded = true, transparent, block = false, usePrimary, bgColor = "bg-white", textColor = 'text-gray-900', borderColor, className = '', processing, children, href, onClick, disabled, target }) {



  const isBlock = block ? 'w-full' : '';
  // const buttonTextColor = transparent ? textColor ? textColor : 'text-white' : 'text-black';
  const buttonBorderColor = borderColor ? borderColor : transparent ? `border-gray-900` : ' border';
  const buttonBgColor = transparent ? ` bg-transparent hover:bg-gray-100` : isDark ? 'bg-gray-900 hover:bg-gray-600 ' : isLight ? 'bg-white' : usePrimary ? 'bg-primary' : bgColor;
  const buttonTextColor = transparent || isLight ? 'text-gray-900' : isDark ? `text-white` : usePrimary ? 'text-white' : textColor;
  const roundedStyle = rounded ? 'rounded-xl' : null;

  const _className = `inline-flex items-center justify-center text-sm border shadow-sm font-semibold  leading-7 gap-x-1.5 ${isBlock} ${buttonTextColor} transition-all duration-200 ${buttonBgColor} border ${buttonBorderColor} rounded-md 
                        ${processing && 'opacity-25'}
    ${size == 'small' ? 'px-4 py-2' : '  px-3 py-2 '}
                        ` + className;

  return (
    href ?
      <a
        href={href}
        className={_className}
        onClick={onClick}
        target={target ?? '_self'}
      >
        <div className="flex w-full text-center justify-center focus:ring-offset-0">
          {children}
        </div>
      </a>
      :
      <button
        type={type}
        className={_className}
        disabled={processing || disabled}
        onClick={onClick}
      >
        <div className=" w-full text-center justify-center items-center inline-flex">
          {icon}
          {processing && 'Please wait...'} {children}
        </div>
      </button>
  );
}
