"use strict";

document.getElementById("submits").addEventListener("click", (event) => {
        event.preventDefault();
        var name = document.getElementById("names").value;
        var pass = document.getElementById("pass").value;
        console.log(`Ваш логин: ${name}, Ваш пароль: ${pass}`);
    }
)
