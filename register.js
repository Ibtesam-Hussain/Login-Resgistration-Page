const btnDiv = document.querySelector("#Register");
const emailInput = document.querySelector("#email");
const Username = document.querySelector("#username");
const passInput = document.querySelector("#pwd");
const ConfpassInput = document.querySelector("#Confpwd");

const popUp = document.querySelector("#h1");

function Delay(){
    location.reload();
}

const regDetails = JSON.parse(localStorage.getItem("Reg Details")) || []; 
btnDiv.addEventListener("click", (e) => {
    e.preventDefault();
    let str = emailInput.value.search("@");
    let passCheck = passInput.value;

    
    if (emailInput.value === "" 
        && passInput.value === "" 
        && Username.value === "" 
        && ConfpassInput.value === ""){
        popUp.innerText = "All fields are Required";
        popUp.style.color = "red";
        popUp.style.fontSize = "small";
        alert("Invalid");
        setTimeout(Delay, 1500);
    }
    else if(str < 1){  
        popUp.innerText = "Invalid Email !";
        popUp.style.color = "red";
        popUp.style.fontSize = "small";
        setTimeout(Delay, 1500);
    }
    
    else if ((ConfpassInput.value.length < 8 || passCheck.length < 8)
            && (ConfpassInput.value != passCheck.value)){ 
        popUp.innerText = "Password doesnt match";
        popUp.style.color = "red";
        popUp.style.fontSize = "small";
        setTimeout(Delay, 1500);
    }
    else{
        alert("Registered Successfully!");
        let username =  Username.value;
        let e = emailInput.value;
        let p = passInput.value;
        let ConP = ConfpassInput.value
        
        regDetails.push({
            username,
            e,
            p,
            ConP
        });
        localStorage.setItem("Registration Detail", JSON.stringify(regDetails));
        return true;
    }
    
});




function myFunction() {
    if (passInput.type === "password" && ConfpassInput.type === "password") {
        passInput.type = "text";
        ConfpassInput.type = "text";

    } else {
        passInput.type = "password";
        ConfpassInput.type = "password";
    }
  }