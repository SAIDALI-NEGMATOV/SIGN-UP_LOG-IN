
let login = document.querySelector("#text");
let password = document.querySelector("#password");
let link = document.querySelector(".link");


let name, userPassword;

let info = {
  name:"",
  password: "",
}

function getInfo(a, b) {
  info.name = localStorage.getItem("userName")
  info.password = localStorage.getItem("userCode")
  console.log(a, b);
}
getInfo(name, userPassword)


let obj = {
  name:"",
  password:"",
};

login.onchange = (event) => {
  obj.name = event.target.value;
}
password.onchange = (event) => {
  obj.password = event.target.value;
}



link.onclick = (event) => { 

  console.log(obj);
  
  if (info.name === obj.name && info.password === obj.password) {
    
    link.setAttribute("href","./main.html")
  }else {
    alert("xato")
  }
}


function getUser() {    
  let name =localStorage.getItem("userName");
  let sureanme =localStorage.getItem("userSurename");
  let age = localStorage.getItem("userAge");
  let email = localStorage.getItem("userEmail");
  let code = localStorage.getItem("userCode");
  
}
getUser();


