//barra rolagem nav
window.addEventListener("scroll", function(){
    let header = document.querySelector('.rolag')
    header.classList.toggle('rolagem', window.scrollY > 0)
})


//slades topo
let radio = document.querySelector(".manual-btn")
let cont = 1

document.getElementById("radio1").checked = true
setInterval(() => {
    proximaimg()
}, 40000)

function proximaimg(){
    cont++
    if(cont > 2){
        cont = 1
    }
    document.getElementById("radio"+cont).checked = true
}



//aparecer itens
//intes
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove("show");
        }
    })
})
const elements = document.querySelectorAll(".hidden")
elements.forEach((element) => myobserver.observe(element))
//ITENS FIM

//aparecer text
const obssevar = new IntersectionObserver((test) =>{
    test.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animacao-texto-prod");
        }
    })
})
const textoAnimado = document.querySelector(".texto-animado")
obssevar.observe(textoAnimado)
//aparecer text FIM
//fim aparecer intes