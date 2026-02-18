console.log("hi")

const btn= document.querySelector("#btn")

btn.addEventListener("mouseover", function() {
    btn.style.background="red";
});

const main = document.querySelector("main")
btn.addEventListener("click", ()=>{
  main.textContent="error";
})