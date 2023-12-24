
const btn = document.getElementById('submit');

btn.addEventListener("click", function(event){
  console.log("TEST");
  event.preventDefault();
});


function validateForm() {
  
  let date = document.getElementById("date").value;
  if (date == "") {
    alert("กรุณากรอกวันเดือนปี");
    return false;
  }
  let prefix = document.getElementById("dot-1").checked;
  let prefix2 = document.getElementById("dot-2").checked;
  let prefix3 = document.getElementById("dot-3").checked;
  if (prefix == false && prefix2 == false && prefix3 == false) {
    alert('กรุณาเลือก นาย หรือ นาง หรือ นางสาว ');
    return false;
  }
  let name = document.getElementById("name").value;
  if (name == "") {
    alert("กรุณากรอกชื่อ");
    return false;
  }
  let lastname = document.getElementById("lastname").value;
  if (lastname == "") {
    alert("กรุณากรอกนามสกุล");
    return false;
  }
    let id = document.getElementById("เลขทะเบียน").value.length;
  if (id == "" || id != 10) {
    alert("กรอกเลขทะเบียนผิด");
    return false;
  }
  let year = document.getElementById("ชั้นปี").value;
  if (isNaN(year) || year < 1 || year > 7) {
    alert("กรอกชั้นปีที่ศึกษาผิด");
    return false;
  }
  let major = document.getElementById("สาขา").value;
  if (major == "") {
    alert("กรุณากรอกสาขาวิชา");
    return false;
  }
  let phone = document.getElementById("เบอร์มือถือ").value;
  if (!phone.startsWith(0)) {
    alert("กรอกเบอร์มือถือผิด");
    return false;
  }
  if (phone.length != 10) {
    alert("กรอกเบอร์มือถือผิด");
    return false;
  }
  let advise = document.getElementById("advisor").value;
  if (advise == "") {
    alert("กรุณากรอกชื่ออาจารย์ที่ปรึกษา");
    return false;
  }
  let home = document.getElementById("home").value;
  if (home == "") {
    alert("กรุณากรอกบ้านเลขที่");
    return false;
  }
  let mooti = document.getElementById("mooti").value;
  if (mooti == "") {
    alert("กรุณากรอกหมู่ที่");
    return false;
  }
  let tumbol = document.getElementById("tumbol").value;
  if (tumbol == "") {
    alert("กรุณากรอกตำบล");
    return false;
  }
  let amphur = document.getElementById("amphur").value;
  if (amphur == "") {
    alert("กรุณากรอกอำเภอ");
    return false;
  }
  let province = document.getElementById("province").value;
  if (province == "") {
    alert("กรุณากรอกจังหวัด");
    return false;
  }
  let postcode = document.getElementById("รหัสไปรษณีย์").value.length;
  if (postcode != 5) {
    alert("กรอกรหัสไปรษณืย์ผิด");
    return false;
  }
  let เหตุผล = document.getElementById("reason").value;
  if (เหตุผล == "") {
    alert("กรุณากรอกเหตุผล");
    return false;
  }

  alert("SUBMIT!");
  window.location.href = "sentpass.html";
  return true;

}







