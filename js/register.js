
//get elemets 
let name = document.getElementById("name");
let email = document.getElementById("email")
let password = document.getElementById("password")
let passwordConfirm = document.getElementById("passwordConfirm")
let error = document.getElementById("error")
let submit = document.getElementById("btn-form")


function onSubmit() {
    ;
    // validation value
    if (name.value.trim() === "") {
        console.log("no error name");
        // add text to error span
        error.textContent = "name is required"

        return;
    }
    else if (email.value.trim() === "") {
        console.log("no error email");
        error.textContent = "email is requird"
        return;
    }
    else if (password.value.trim() === "") {
        console.log("no error passowrd");
        error.textContent = "password is requird"
        return;
    }


    else if (password.value.trim() != passwordConfirm.value.trim()) {
        console.log("no error passowrd");
        error.textContent = "passowrd is not same"
        return;
    }
    else {
        // if there is no error empty span error 
        // desplay user thata and bring them to home page
        console.log("no error");
        error.textContent = ""
        alert(`email:${email.value} ,name:${name.value} ,`)

        // Empty inputs
        name.value = ""
        email.value = ""
        password.value = ""
        passwordConfirm.value = ""

        // Afetr 2s Redirect to home page
        setInterval(() => {

        }, 2000)

    }

}