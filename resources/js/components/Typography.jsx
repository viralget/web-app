
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Typography = ({ variant, content, className}) => {

    if(variant == 'h2'){
        return (
            <h2  className={classNames("font-lexend font-semibold  text-2xl", className)}>
                   {content}
            </h2>
        )
    }

    if(variant == 'h3'){
        return (
            <h3  className= {classNames(className, "font-lexend font-bold  text-lg")}>
                   {content}
            </h3>
        )
    }

    if(variant == 'b1'){
        return (
            <span  className= {classNames("font-satoshi leading-6 font-bold  text-lg", className)}>
                   {content}
            </span>
        )
    }

    if(variant == 'b3'){
        return (
            <span  className= {classNames("font-satoshi font-normal  text-sm leading-4", className)}>
                   {content}
            </span>
        )
    }


  
    return(
        <span  className= {classNames("font-satoshi leading-6 font-bold  text-lg", className)}>
                   {content}
          </span>
    )






}

export default Typography;