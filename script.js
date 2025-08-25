const title = document.querySelector(".honorific");
const pwd = document.querySelector("#pwd");
const cpwd = document.querySelector("#cpwd");
const form = document.querySelector(".form")

pwd.addEventListener("keyup", ()=>{
    const str = reg(pwd.value);
    cpwd.setAttribute("pattern",str);
    cpwd.setCustomValidity("");
    
});

cpwd.addEventListener("keyup", ()=>{
    if(cpwd.value!==pwd.value)
    {
        cpwd.setCustomValidity("Passwords donot match. Try Again!");
    }
    else
    {
        cpwd.setCustomValidity("");
    }
});

title.addEventListener("input", ()=>{
    title.style.border = "2px solid green";
    title.style.boxShadow = "0px 4px 8px green";
});

function reg(str){
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(form.checkValidity())
    {
        alert("Form submitted successfully! Thank you!!");
        form.reGITset();
    }
})