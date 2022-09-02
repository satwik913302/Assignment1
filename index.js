var getBtn = document.querySelector(".cn");
var getInp = document.querySelector("#getInp");

getBtn.addEventListener("click",()=>{
var input = getInp.value;
var pass = "B520028@IIIT";
if(pass === input){
    location.href = "assignment2.html";
}
else{
    console.log("wrong ans:"+inpt);
}
}
)