const btn = document.getElementById("confirm");

btn.addEventListener("click", function(event){
    console.log("TEST");
    event.preventDefault();
});

function validateOffice(){
    let name = document.getElementById("nameOffice").value;
    if(name == ""){
        alert("กรุณาลงชื่อเจ้าหน้าที่สำนักทะเบียน");
        return false;
    }

    alert("คำร้องดำเนินการเสร็จสิ้น");
    window.location.href = "registryOffice.html";
    return true;
}

const btncc = document.getElementById("cancel");

btncc.addEventListener("click", function(event){
    console.log("TEST");
    event.preventDefault();
});

function cancelOffice(){
    alert("คำร้องนี้ถูกยกเลิกเรียบร้อย");
    window.location.href = "registryOffice.html";
    return true;
}