"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login() {
    const req ={
        id: id.value,
        psword: psword.value,
    };
    
}