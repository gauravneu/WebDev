
function Button({className,onClick,href,title,ariaLabel}){
    return(
        <div>
            <button className= {className}
            onClick = {onClick}
            href = {href}
            aria-label = {ariaLabel}>
                {title}
            </button>
        </div>
    );
}

export default Button;