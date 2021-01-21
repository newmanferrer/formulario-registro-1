"use strict";var formulario=document.querySelector("#formulario"),nombre=document.querySelector("#nombre"),apellido=document.querySelector("#apellido"),email=document.querySelector("#email"),emailConfir=document.querySelector("#email-confir"),password=document.querySelector("#password"),passwordConfir=document.querySelector("#password-confir"),mensajesErrores=document.querySelector("#mensajesErrores");formulario.addEventListener("submit",(function(e){var r=[];validateName(nombre.value.toLowerCase())?nombre.classList.remove("input-error"):(r.push("Nombre Invalido"),nombre.classList.add("input-error")),validateName(apellido.value.toLowerCase())?apellido.classList.remove("input-error"):(r.push("Apellido Invalido"),apellido.classList.add("input-error")),validateEmail(email.value)?email.classList.remove("input-error"):(r.push("Email Invalido"),email.classList.add("input-error")),validateEmail(emailConfir.value)?emailConfir.classList.remove("input-error"):(r.push("Email Confirmación Invalido"),emailConfir.classList.add("input-error")),email.value!=emailConfir.value?(r.push("Email Diferentes"),email.classList.add("input-error"),emailConfir.classList.add("input-error")):validateEmail(email.value)&&validateEmail(emailConfir.value)&&(email.classList.remove("input-error"),emailConfir.classList.remove("input-error")),validatePasswordComplex(password.value)?password.classList.remove("input-error"):(r.push("Password Invalido"),password.classList.add("input-error")),validatePasswordComplex(passwordConfir.value)?passwordConfir.classList.remove("input-error"):(r.push("Password Confirmación Invalido"),passwordConfir.classList.add("input-error")),password.value!=passwordConfir.value?(r.push("Password Diferentes"),password.classList.add("input-error"),passwordConfir.classList.add("input-error")):validatePasswordComplex(password.value)&&validatePasswordComplex(passwordConfir.value)&&(password.classList.remove("input-error"),passwordConfir.classList.remove("input-error")),r.length>0&&(e.preventDefault(),mensajesErrores.textContent=r.join(", "))}));var validateName=function(e){return!!/^[a-z]{1,20}$/.test(e)},validateEmail=function(e){return!!/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},validatePasswordComplex=function(e){return!!/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,12}$/.test(e)};