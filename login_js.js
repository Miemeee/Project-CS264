const form = document.querySelector('#login-form');
const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");

let text = document.getElementById("text");
let text2 = document.getElementById("text2");

username.addEventListener('input', validate);
password.addEventListener('input', validate);

 form.addEventListener('submit', function (e) {
   //e.preventDefault();
   usernameValue = document.getElementById("username").value;
   passwordValue = document.getElementById("password").value;
     if (usernameValue == "" || passwordValue == "") {
         alert("กรุณากรอกข้อมูลให้ครบถ้วน");
         return false;
     };
   
   //text2.innerHTML = "รหัสผ่านผิดพลาด!";
 
  //alert('เข้าสู่ระบบสำเร็จ');
  window.location.href ="/login";
//  return true;
 });

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

function validate (e) {
 if (e.target.name == "password") {
  //pass_reg.test(e.target.value)
  if (e.target.value.length >= 6) {
    text2.innerHTML = "";
    e.target.setCustomValidity('');
   e.target.classList.add('valid');
   e.target.classList.remove('invalid');
  } else {
   text2.innerHTML = "รหัสผ่านต้องประกอบด้วยชุดตัวอักษร ตัวเลข หรืออักขระพิเศษ ไม่น้อยกว่า 6 ตัวอักษร";
   e.target.setCustomValidity("รหัสผ่านต้องประกอบด้วยชุดตัวอักษร ตัวเลข หรืออักขระพิเศษ ไม่น้อยกว่า 6 ตัวอักษร");
   e.target.classList.add('invalid');
   e.target.classList.remove('valid');
  }
 }
 
 if (e.target.name == "username") {
  if (e.target.value.length == 10 && isNumeric(e.target.value)) {
    text.innerHTML = "";
   e.target.setCustomValidity('');
   e.target.classList.add('valid');
   e.target.classList.remove('invalid');
  } else {
    text.innerHTML = "ต้องประกอบด้วยตัวเลขทั้งหมด 10 หลัก";
    e.target.setCustomValidity("ต้องประกอบด้วยตัวเลขทั้งหมด 10 หลัก");
   e.target.classList.add('invalid');
   e.target.classList.remove('valid');
  }
 }
}