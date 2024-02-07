let rule_x=document.querySelector(".rule_x");
let info_x=document.querySelector(".info_x");
let layout=document.querySelector(".layout_script");
let rule=document.querySelector(".rule");
let info=document.querySelector(".info");

rule_x.addEventListener("click",func1);
info_x.addEventListener("click",func2);
rule.addEventListener("click",func1);
info.addEventListener("click",func2);
document.addEventListener("keydown",func);

function func1() {
    let x=document.querySelector(".rule_script");
    x.classList.toggle("none");
    layout.classList.toggle("none");
}
function func2() {
    let x=document.querySelector(".info_script");
    x.classList.toggle("none");
    layout.classList.toggle("none");
}
function func(e) {
    if (layout.classList.contains("none")===false && e.which===13)
    {
        let x=document.querySelector(".rule_script");
        if (x.classList.contains("none")===false)
        {
            func1();
        }
        else
        {
            func2();
        }
    }
}