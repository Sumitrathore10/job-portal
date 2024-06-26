var sec1_text = document.querySelector(".sec1-text");
var btn_sec_1 = document.querySelector(".btn-sec-1");
var section_1 = document.querySelector(".section1");

var sec2_text = document.querySelector(".sec2-text");
var btn_sec_2 = document.querySelector(".btn-sec-2");
var section_2 = document.querySelector(".section2");


btn_sec_1.addEventListener("click", function() {
    section_1.style.backgroundColor = "green";
    btn_sec_1.style.backgroundColor = "white"
    btn_sec_1.style.color = "green";
    sec1_text.style.color = "white";
    section_2.style.backgroundColor = "white";
    btn_sec_2.style.backgroundColor = "green"
    btn_sec_2.style.color = "white";
    sec2_text.style.color = "green";
});

btn_sec_2.addEventListener("click", function() {
    section_2.style.backgroundColor = "green";
    btn_sec_2.style.backgroundColor = "white"
    btn_sec_2.style.color = "green";
    sec2_text.style.color = "white";
    section_1.style.backgroundColor = "white";
    btn_sec_1.style.backgroundColor = "green"
    btn_sec_1.style.color = "white";
    sec1_text.style.color = "green";
});



var job_btn = document.querySelector(".job-btn")

job_btn.addEventListener("click",function(){
    job_btn.style.innerHTML = "Scroll down"
})