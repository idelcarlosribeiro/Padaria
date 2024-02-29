window.addEventListener("scroll", function(){
    let header = document.querySelector('.rolag')
    header.classList.toggle('rolagem', window.scrollY > 0)
})