const btn = document.querySelector("#clickMe");

const handelClick = ()=> {
    const message = document.querySelector("#message, span");
    message.innerText = "good mornung";

}
btn.addEventListener ("click",handelClick);

window.addEventListener('resize', (e)=> {
    console.log("stop playying with the sheet ", e);
})

const Hover = document.querySelector("#hoverOver");
const onHover=(event)=>{
    hoverOver.style.backgroundColor = "orange";
    hoverOver.innerText = "Don't Play"
    console.log(event)
}
hoverOver.addEventListener("mouseover", onHover);

hoverOver.addEventListener("mouseleave",()=>{
    hoverOver.style.backgroundColor = "green" 
})

btn. removeEventListener("click",handelClick);

const onkeydown =(event)=>{
    console.log(event.key);
};

document.addEventListener("keydown",onkeydown);
const input = document.querySelector("#nono");

input.addEventListener("input", (e)=>{
    console.log("change", e.target.value);
})

const form = document.querySelector("#form");

const onSubmit = (e)=>{
e.preventDefault();
console.log("submit", e)
const email = e.target.email.value;
const password = e.target['password'].value

const body = {
    email,
    password,
};
console.log("send the info to the server !", body)

console.log("submit", email, password)
}
form.addEventListener("submit", onSubmit)