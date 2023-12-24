function submitCheck() {

  let reason = document.getElementById("reason").value;

  if(reason == ""){
    alert("กรุณากรอกเหตุผลก่อนทำการกดยืนยัน");
  }else{
    alert("ยืนยันเสร็จสิ้น กลับสู่หน้าหลัก");
    
    window.location.href = "home_teacher.html";
  }
  
}