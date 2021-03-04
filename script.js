const nav  = document.querySelector(".nav")
const one  = document.getElementById('one')
const hero = document.querySelector('.hero')
window.addEventListener("scroll", ()=>{
    const scroll = window.pageYOffset
    const windowHeight = window.innerHeight / 2
    if(scroll > windowHeight){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }


})

// or nav.offsetHeightv + 150 is also true
    // console.log(nav.offsetHeight)
    // console.log(hero.offsetHeight)
    // console.log(height)
    // console.log(nav.getBoundingClientRect().bottom)
   
    // console.log(one.getBoundingClientRect().bottom,"bottom")
    // console.log(one.getBoundingClientRect().left,"left")
    // console.log(one.getBoundingClientRect().right,"right")