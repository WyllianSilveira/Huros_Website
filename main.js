const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll(".toggle")
const links = document.querySelectorAll("nav ul li a")
const header = document.querySelector("#header")
const headerHeight = header.offsetHeight
const main = document.querySelector("main")
const mainHeight = main.offsetHeight
const arrowUp = document.querySelector(".back-to-up")
const home = document.querySelector("#home")
const homeHeight = home.offsetHeight
const about = document.querySelector("#about")
const aboutHeight = about.offsetHeight
const services = document.querySelector('#services')
const servicesHeight = services.offsetHeight
const contact = document.querySelector("#contact")
const contactHeight = contact.offsetHeight
const footer = document.querySelector("footer")
const footerHeight = footer.offsetHeight

//ABRE OU FECHA MENU MOBILE
toggle.forEach((element)=>{
    element.addEventListener("click",()=>{
        nav.classList.toggle('show')
    })
})

//QUANDO CLICAR NUM ITEM DO MENU FECHA MENU MOBILE
links.forEach((element)=>{
    element.addEventListener("click",()=>{
        nav.classList.remove('show')
    })
})

links.forEach((element)=>{
    element.addEventListener("click",()=>{
        element.classList.add('link_ativo::after')
    })
})



// SCROLL REVEAL MOSTRAR ELEMENTOS QUANDO DAR SCROLL NA PAG
// const scrollReveal = ScrollReveal({
//     origin : 'top',
//     distance : '30px',
//     duration : 700,
//     reset : false,
// })

// scrollReveal.reveal(
//     `#home .image, #home .text,
//     #about .image, #about .text, #about .valor_missao, #about .valor_visao, #about .valor,
//     #services header, #services .card,
//     #projects header,
//     #catalog header, #catalog .catalog-imgs,
//     #contact .text, #contact .links,
//     #projects .header, #projects .card-projects,
//     footer .brand, footer .horarios, footer .social
//     `,
//     { interval: 100}
//   )

//MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA 
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//MUDAR O HEADER QUANDO DER SCROLL NA PAGINA ADICIONA SHADOW 
function changeHeaderWhenScroll (){
    if(window.scrollY >= headerHeight){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
}

//MOSTRA OU ESCONDE ARROWUP PARA VOLTAR AO INICIO DA PAGINA
function backToTop(){
    if(window.scrollY >= (mainHeight-(footerHeight*2))){
        arrowUp.classList.add("show")
    }

    else{
        arrowUp.classList.remove("show")
    }
}

//WHEN SCROLL
window.addEventListener("scroll", function(){
    backToTop()
    changeHeaderWhenScroll()
    activateMenuAtCurrentSection()
})

function recarregar(){
  
}





