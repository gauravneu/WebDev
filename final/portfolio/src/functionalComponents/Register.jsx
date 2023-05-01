import '../static/css/Register.css';
import '../static/javascripts/register'
import { useState } from 'react';


function Register({ navClick }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorNameText, setErrorNameText] = useState('');
    const [errorEmailText, setErrorEmailText] = useState('');
    const [errorMessageText, setErrorMessageText] = useState('');
    const [formSubmitted, setFormSubmitted] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name === "") {
            setErrorNameText(`Name field is Required`);
           
            return;
        }
        if (email === "") {
            setErrorEmailText("Email is required");
          
        return;
        
        }

        if (!(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) {
            setErrorEmailText('Provide correct Email');
            return;
        }
        if (message === "") {
            setErrorMessageText(`Message is required`)
            
            return;
        }
        setFormSubmitted(`Your message has been Sent Successfully`);
        
    }

    const handleNameChange = (event) => {
       
        setFormSubmitted(``);
        setName(event.target.value);
        if (name.trim === "") {
            setErrorNameText(`Name field is Required`)
            return;
        }
        if(name.trim.length === 0){
        setErrorNameText("");
        return;
        }
    }






    const handleEmailChange = (event) => {
        setFormSubmitted(``);
        setEmail(event.target.value);

        if (email.trim === "") {
            setErrorEmailText(`Email field is Required`)
            return;
        }
        else if (!(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) {
            setErrorEmailText('Please enter an confirm email in the correct format');
        }
        setErrorEmailText("");
        return;

    }

    const handleMessageChange = (event) => {
        setFormSubmitted(``);
        setMessage(event.target.value);
        if (message.trim === "") {
            setErrorMessageText(`Message field is Required`)
            return;
        }
        
        setErrorMessageText("");
        return;
    }




    return (
        <div className="form">
            <div className='form__title'>Contact Me</div>
            <div className="form__element">
                <label className="form__label" htmlFor="name">
                    <span>Name:</span>
                </label>
                <input className="form__input" name="name"
                    onKeyUp={e => handleNameChange(e)}
                />
                <span className="form__error">{errorNameText}</span>
            </div>

            <div className="form__element">
                <label className="form__label" htmlFor="email">
                    <span>Email:</span>
                </label>
                <input className="form__input" name="email"
                    onChange={e => handleEmailChange(e)} />
                <span className="form__error">{errorEmailText}</span>
            </div>
            <div className="form__element">
                <label className="form__label" htmlFor="message">
                    <span>Message To Me:</span>
                </label>
                <input className="form__input" name="message"
                    onChange={e => handleMessageChange(e)} />
                <span className="form__error">{errorMessageText}</span>
            </div>
            <div className="form__chckbox">
                <label className="form__label" htmlFor="chckbox">
                    <span>wants-spam</span>
                </label>
                <input className="input" name="annoy_me" type="checkbox" />
            </div>

            <div className="form__button">
                <a className="form__link" onClick={e => handleSubmit(e)} href='./contactMe.html' aria-label="Click here to send email to Gaurav">Send Message</a>
            </div>
            <span className="form__submitted">{formSubmitted}</span>
        </div>
    );
}

export default Register;




