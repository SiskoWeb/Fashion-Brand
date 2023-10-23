
//get elemets 
let name = document.getElementById("name");
let email = document.getElementById("email")
let password = document.getElementById("password")
let passwordConfirm = document.getElementById("passwordConfirm")
let error = document.getElementById("error")
let submit = document.getElementById("btn-form")
let base_url = window.location.origin

async function onSubmit() {

    // validation value
    if (name.value.trim() === "") {
        console.log("no error name");
        // add text to error span

        setError("name is requird")
        return;
    }
    else if (email.value.trim() === "") {
        console.log("no error email");

        setError("email is requird")

        return;
    }
    else if (!validateEmail(email.value)) {
        console.log("no error email");
        setError("this is not email")

        return;
    }
    else if (password.value.trim() === "") {
        console.log("no error passowrd");
        setError("password is requird")

        return;
    }


    else if (password.value.trim() != passwordConfirm.value.trim()) {
        console.log("no error passowrd");
        setError("passowrd are not same")

        return;
    }
    else {
        // if there is no error empty span error 
        // desplay user thata and bring them to home page
        console.log("no error");
        setError("")
        alert(`email:${email.value} ,name:${name.value} ,`)

        // Empty inputs
        name.value = ""
        email.value = ""
        password.value = ""
        passwordConfirm.value = ""

        // Afetr 2s Redirect to home page
        await setInterval(() => {
            setError("Redicreting")

            window.location.replace(`${base_url}/index.html#category`);

        }, 1000)
        setError("")
    }

}




function setError(msg) {
    error.textContent = msg
}

// this fun return booolean value if email correct or not
function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


    return emailRegex.test(email);
}