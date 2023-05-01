// "use strict";
// (function() {


//     const formEl = document.querySelector('.form');
//     const nameErrEl = document.querySelector('.form__name--err');
//     const nameInEl = document.querySelector('.form__nameInput');
//     const emailInEl = document.querySelector('.form__emailInput');
//     const emailErrEl = document.querySelector('.form__email--err');
//     const confirmEmailInEl = document.querySelector('.form__emailRepeatInput');
//     const confirmEmailErrEl = document.querySelector('.form__emailRepeat--err');
//     const checkBoxEl = document.querySelector('.form__tierSelect');
//     const checkBoxErrorEl = document.querySelector('.form__tierSelect--err');

//     nameErrEl.innerText = "";

//     nameInEl.addEventListener('blur', (e) => {
//         nameErrEl.innerText = "";
//         if(!nameInEl.value){
//             nameErrEl.innerText = "Name is required";
//         }

//     });

//     emailInEl.addEventListener('blur', (e) => {
//         emailErrEl.innerText = "";

//         if(!emailInEl.value){
//             emailErrEl.innerText = "Email is required";
//         }

//     });

//     confirmEmailInEl.addEventListener('blur', (e) => {

//         confirmEmailErrEl.innerText = "";

//         if(!confirmEmailInEl.value){
//             confirmEmailErrEl.innerText = "Confirm Email is required";
//         }

//         if(confirmEmailInEl.value !== emailInEl.value){
//             confirmEmailErrEl.innerText = "Confirm email must match the email";
//         }

//     });

//     checkBoxEl.addEventListener('blur', (e) => {

//         checkBoxErrorEl.innerText = "";
//         if(checkBoxEl.value == 0){
//             checkBoxErrorEl.innerText = "Tier is required";
//            }

//     });

//     formEl.addEventListener('submit', event => {
//         if(!nameInEl.value || !emailInEl.value || !confirmEmailInEl.value ||
//             confirmEmailInEl.value !== emailInEl.value || checkBoxEl.value == 0){
//             event.preventDefault();
//         }

//         if(!nameInEl.value){
//             nameErrEl.innerText = "Name is required";
//         }

//         if(!emailInEl.value){
//             emailErrEl.innerText = "Email is required";
//         }

//         if(!confirmEmailInEl.value){
//             confirmEmailErrEl.innerText = "Confirm Email is required";
//         }

//         if(confirmEmailInEl.value !== emailInEl.value){
//             confirmEmailErrEl.innerText = "This field must match the email";
//         }

//         if(checkBoxEl.value == 0){
//             checkBoxErrorEl.innerText = "Tier is required"

//         }
//     });
// })();