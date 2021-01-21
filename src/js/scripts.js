/* ================================================================================================ */
// 1.- DECLARACIÓN DE CONSTANTES Y VARIABLES - UBICACIÓN DE ELEMENTOS HTML.
/* ================================================================================================ */
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const emailConfir = document.querySelector('#email-confir');
const password = document.querySelector('#password');
const passwordConfir = document.querySelector('#password-confir');
const mensajesErrores = document.querySelector('#mensajesErrores');
/* ================================================================================================ */

/* ================================================================================================ */
// 2.- FUNCIÓN PRINCIPAL DE TRATAMIENTO Y VALIDACIONES DEL FORMULARIO
/* ================================================================================================ */
formulario.addEventListener('submit', (event) => {
    let errores = [];
    
    if(!validateName(nombre.value.toLowerCase())){
        errores.push('Nombre Invalido');
        nombre.classList.add('input-error');
    }else{
        nombre.classList.remove('input-error');
    }
    
    if(!validateName(apellido.value.toLowerCase())){
        errores.push('Apellido Invalido');
        apellido.classList.add('input-error');
    }else {
        apellido.classList.remove('input-error');
    }

    if(!validateEmail(email.value)){
        errores.push('Email Invalido');
        email.classList.add('input-error');
    }else{
        email.classList.remove('input-error');
    }
    
    if(!validateEmail(emailConfir.value)){
        errores.push('Email Confirmación Invalido');
        emailConfir.classList.add('input-error');
    }else{
        emailConfir.classList.remove('input-error');
    }
    
    if((email.value) != (emailConfir.value)){
        errores.push('Email Diferentes');
        email.classList.add('input-error');
        emailConfir.classList.add('input-error');
    }else if((validateEmail(email.value)) && (validateEmail(emailConfir.value))){
        email.classList.remove('input-error');
        emailConfir.classList.remove('input-error');
    }

    if(!validatePasswordComplex(password.value)){
        errores.push('Password Invalido');
        password.classList.add('input-error');
    }else{
        password.classList.remove('input-error');
    }
    
    if(!validatePasswordComplex(passwordConfir.value)){
        errores.push('Password Confirmación Invalido');
        passwordConfir.classList.add('input-error');
    }else{
        passwordConfir.classList.remove('input-error');
    }
    
    if((password.value) != (passwordConfir.value)){
        errores.push('Password Diferentes');
        password.classList.add('input-error');
        passwordConfir.classList.add('input-error');
    }else if((validatePasswordComplex(password.value)) && (validatePasswordComplex(passwordConfir.value))){
        password.classList.remove('input-error');
        passwordConfir.classList.remove('input-error');
    }
    
    if(errores.length > 0){
        event.preventDefault();
        mensajesErrores.textContent = errores.join(', ');
    }
});
/* ================================================================================================ */

/* ================================================================================================ */
// 3.- FUNCIONES PARA VALIDAR LOS CAMPOS DEL FORMULARIO DE REGISTRO
/* ================================================================================================ */

// 3.1.- Validación de Nombre y Apellildo:
//       Alpha string, having a length of 1 to 20 characters, sin espacio
/* ------------------------------------------------------------------------------------------------ */
const validateName = (name) => {
    const nameRegex = /^[a-z]{1,20}$/
    if(nameRegex.test(name)) return true;
    else return false;
}
/* ------------------------------------------------------------------------------------------------ */

// 3.2.- Validación de Email y Email Confirmación.
/* ------------------------------------------------------------------------------------------------ */
const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(emailRegex.test(email)) return true;
    else return false;
}
/* ------------------------------------------------------------------------------------------------ */

// 3.3.- Validación de Password y Password Confirmación:
//       Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and
//       be at least 8 to 12 characters long
/* ------------------------------------------------------------------------------------------------ */
const validatePasswordComplex = (password) => {
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,12}$/
    if(passwordRegex.test(password)) return true;
    else return false;
}
/* ------------------------------------------------------------------------------------------------ */
/* ================================================================================================ */