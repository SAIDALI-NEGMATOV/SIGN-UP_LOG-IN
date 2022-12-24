let userName = document.querySelector("#login");
let userSurename = document.querySelector("#sure");
let userAge = document.querySelector("#age");
let userEmail = document.querySelector("#email");
let userPassword = document.querySelector("#parol");

function getUser() {
  let name =localStorage.getItem("userName");
  let sureanme =localStorage.getItem("userSurename");
  let age = localStorage.getItem("userAge");
  let email = localStorage.getItem("userEmail");
  let code = localStorage.getItem("userCode");

  userName.innerHTML = name;
  userSurename.innerHTML = sureanme;
  userAge.innerHTML = age;
  userEmail.innerHTML = email;
  userPassword.innerHTML = code;

}

getUser();
