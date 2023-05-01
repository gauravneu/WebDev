import './static/css/Button.css'
import {useState} from 'react';
function Button({
    children,
    click,
    title,
    type="submit",
    visual="button",
}){

    const [isOpen, setOpen] = useState(false);
    let buttonClass = "button";
    let clickAction = () => setOpen(!isOpen);
    if(visual === "link"){
        buttonClass = "button-link";
    }

    if(type === 'submit'){
        clickAction = click;
    }
    return(
        <div>
        <button className= {`${buttonClass}`}
        onClick = {clickAction}
        >{title}</button>
        <div className='content'>{isOpen && children}</div>
        </div>
    );
}
export default Button;