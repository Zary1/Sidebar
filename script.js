const btn=document.getElementById("bars")
const container=document.getElementById("menu")
const text=document.querySelector("#lista")
const nav=document.querySelector(".nav")
const footer=document.querySelector(".footer")
const paragrafo=document.querySelector(".footer-paragrafo")
const busca=document.querySelector(".seach")
btn.addEventListener("click",()=>{
container.classList.toggle(("active"))
text.classList.toggle(("active"))
busca.classList.toggle(("active"))
footer.classList.toggle(("active"))
paragrafo.classList.toggle(("active"))

  
})