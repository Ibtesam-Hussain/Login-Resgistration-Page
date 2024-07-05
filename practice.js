const btnDiv = document.querySelector("#loginbtn");
const emailInput = document.querySelector("#email");

const passInput = document.querySelector("#pwd");


const popUp = document.querySelector("#h1");
const fogtPass = document.querySelector("#Fpass");

const LoginDetails = JSON.parse(localStorage.getItem("Login Detail")) || [];


function Delay(){
    location.reload();
}


btnDiv.addEventListener("click", (e) => {
    e.preventDefault();
    let str = emailInput.value.search("@");
    let passCheck = passInput.value;
    if (emailInput.value === "" && passInput.value === ""){
        popUp.innerText = "Invalid Email and password";
        popUp.style.color = "red";
        popUp.style.fontSize = "small";
        setTimeout(Delay, 1500);
    }
    else if(str < 1){  
        popUp.innerText = "Invalid Email !";
        popUp.style.color = "red";
        popUp.style.fontSize = "small";
        setTimeout(Delay, 1500);
    }
    else if (passCheck.length < 8){ 
        popUp.innerText = "Invalid password !";
        popUp.style.color = "red";
        popUp.style.fontSize = "small";
        setTimeout(Delay, 1500);
    }
    else{
        let e = emailInput.value; 
        let p = passInput.value;
        alert("Login Successfull");
        
        LoginDetails.push({
            e,
            p
        });
        localStorage.setItem("Login Detail", JSON.stringify(LoginDetails));
        return true;
    }
    
});

fogtPass.addEventListener("click", () => {
    if(passInput.value === ""){
        popUp.innerText = "Input Password First";
        popUp.style.color = "red";
        popUp.style.fontSize = "small";
        setTimeout(Delay, 1500);
    }
});


function myFunction() {
    if (passInput.type === "password") {
        passInput.type = "text";

    } else {
        passInput.type = "password";
    }
}

