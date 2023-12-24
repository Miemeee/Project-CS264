

  

function submitCheck() {

  let choice1 = document.getElementById("choice1").checked;
  let choice2 = document.getElementById("choice2").checked;

  if(choice1 == false && choice2 == false){
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");

  }else{
    if(choice1 == true){
      alert("คำร้องได้รับการอนุมัติ กลับสู่หน้าหลัก");
      location.reload();
      window.location.href = "home_dean.html"
    }else{
      alert("คำร้องได้รับการปฏิเสธ กลับสู่หน้าหลัก");
      window.location.href = "home_dean.html"
    }

  }
  
}


