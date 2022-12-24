let name = document.querySelector("#name");
let surename = document.querySelector("#surename");
let age = document.querySelector("#age");
let email = document.querySelector("#email");
let code = document.querySelector("#code")
let add = document.querySelector("#add")




let obj = {
    name: "",
    surename: "",
    age: "",
    email: "",
    code: "",

  };
  
  name.onchange = (event) => {
    obj.name = event.target.value;
  };
  
  surename.onchange = (event) => {
    obj.surename = event.target.value;
  };
 age.onchange = (event) => {
    obj.age = event.target.value;
  };
  
 email.onchange = (event) => {
    obj.email = event.target.value;
  };
 code.onchange = (event) => {
    obj.code = event.target.value;
  };
  
  add.onclick = (event) => {
      
    localStorage.setItem("userName", obj.name);
    localStorage.setItem("userSurename", obj.surename);
    localStorage.setItem("userAge", obj.age);
    localStorage.setItem("userEmail", obj.email);
    localStorage.setItem("userCode", obj.code);
  };
  
  