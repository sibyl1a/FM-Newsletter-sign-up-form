const form = document.getElementById("myForm");
const errorText = document.querySelector(".error");
const email = document.getElementById("email");
const text = document.getElementById("textMessage");
const modal = document.getElementById("modal-div");
const dismiss = document.getElementById("dismiss");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(!email.checkValidity()){
        email.classList.add("invalid");
        errorText.style.display = "block";
    }else{
        email.classList.remove("invalid");
        errorText.style.display = "none";
        modal.style.display = "flex";
        text.innerHTML = `A confirmation email has been sent to <b>${email.value}</b>. Please open it and click the button inside to confirm your subscription.`
    }
})

dismiss.addEventListener("click", ()=>{
    modal.style.display="none";
    email.value = "";
})