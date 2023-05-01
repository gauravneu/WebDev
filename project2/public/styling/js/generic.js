"use strict";
(function () {


    const emailInElement = document.querySelector('.subscribe__emailinput');
    const errEmailElement = document.querySelector('.subscribe__emailexc');
    const buttonMenuElement = document.querySelector('.mobile__menu');
    const buttonCardElement = document.querySelectorAll('.maincard__btn');
    const dropElement = document.querySelector('.nav__dropdowncontent');
    const modElement = document.querySelector('.subscribe');
    const inConfElement = document.querySelector('.subscribe__confirminput');
    const errConfirmElement = document.querySelector('.subscribe__confirmexc');
    const formElement = document.querySelector('.subscribe__form');
    const modalCloseElement = document.querySelector('.subscribe__close');



    buttonMenuElement.addEventListener('keyup', (event) => {
        if (event.keyCode == '13') {
            dropElement.classList.toggle('active');
        }
    });

    buttonMenuElement.addEventListener('click', function () {
        dropElement.classList.toggle('active');
    });


    emailInElement.addEventListener('blur', (e) => {
        let elementInvalid = false;

        errEmailElement.innerText = "";
        emailInElement.classList.remove('exc');
        if (!emailInElement.value) {
            errEmailElement.innerText = "Email is required";
            emailInElement.classList.toggle('exc');
            elementInvalid = true;
        } else if (emailInElement.value.indexOf('@') == -1) {
            errEmailElement.innerText = "Email must contain @";
            emailInElement.classList.toggle('exc');
            elementInvalid = true;
        }

        if (elementInvalid) {
            e.preventDefault();
        }
    });

    formElement.addEventListener('submit', (event) => {

        let elementInvalid = false;
        errEmailElement.innerText = "";
        errConfirmElement.innerText = "";
        emailInElement.classList.remove('exc');
        inConfElement.classList.remove('exc')

        if (!emailInElement.value) {
            // console.log(inConfElement.value);
            // console.log(emailInElement.value);
            errEmailElement.innerText = "Email is required";
            elementInvalid = true;
            emailInElement.classList.toggle('exc');
        } else if (emailInElement.value.indexOf('@') == -1) {
            // console.log(inConfElement.value);
            // console.log(emailInElement.value);
            errEmailElement.innerText = "Email must contain @";
            elementInvalid = true;
            emailInElement.classList.toggle('exc');
        }

        if (!inConfElement.value) {
            // console.log(inConfElement.value);
            // console.log(emailInElement.value);
            errConfirmElement.innerText = "Confirm Email is required";
            inConfElement.classList.toggle('exc');
            elementInvalid = true;
        }

        if (inConfElement.value !== emailInElement.value) {
            // console.log(inConfElement.value);
            // console.log(emailInElement.value);

            errConfirmElement.innerText = "This field must match the email field";
            inConfElement.classList.toggle('exc');
            elementInvalid = true;
        }

        if (elementInvalid) {
            event.preventDefault();
        }
    });




    inConfElement.addEventListener('blur', (e) => {
        let elementInvalid = false;
        errConfirmElement.innerText = "";
        inConfElement.classList.remove('exc')
        if (!inConfElement.value) {
            errConfirmElement.innerText = "Email is Required";
            inConfElement.classList.toggle('exc');
            elementInvalid = true;
        }

        if (inConfElement.value !== emailInElement.value) {
            errConfirmElement.innerText = "Email must match Confirm Email";
            inConfElement.classList.toggle('exc');
            elementInvalid = true;
        }

        if (elementInvalid) {
            e.preventDefault();
        }
    });


    for (let i = 0; i < buttonCardElement.length; i++) {
        buttonCardElement[i].addEventListener('click', function () {
            modElement.showModal();
        });
    }

    modalCloseElement.addEventListener('click', () => {
        modElement.close();
    });

})();