/* mega menu click event */

let other_links = document.querySelector(".other_links")
let links = document.querySelectorAll(".nav_link")
let mega_menu = document.querySelector(".mega-menu")
let open = false
other_links.addEventListener('click', function (e) {
    e.preventDefault()
    open = !open
    console.log(links);
    if(open){
        mega_menu.classList.add("mega-menu_clicked");
    }else{
        mega_menu.classList.remove("mega-menu_clicked");
    }  
})

window.addEventListener('mouseup', function(e) {
    e.preventDefault()
    if (e.target != document.querySelector(".mega_menu")) {
        open = false
        mega_menu.classList.remove("mega-menu_clicked");
    }
});


links.forEach(link =>{
    link.addEventListener('click',function (e){
        open = false
        mega_menu.classList.remove("mega-menu_clicked");
       
    })
})



/* CountDown Time from the moment to the next year */

let nextYear = new Date("Dec 31,2022 23:59:59").getTime()
let counter = setInterval(function () {
    let currentTime = new Date().getTime()
    let TimeDiff = nextYear - currentTime
    days = Math.floor(TimeDiff / (1000 * 60 * 60 * 24))
    hours = Math.floor(TimeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    minutes = Math.floor(TimeDiff % (1000 * 60 * 60) / (1000 * 60))
    secondes = Math.floor(TimeDiff % (1000 * 60) / (1000))
    document.querySelector(".days").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minutes").innerHTML = minutes
    document.querySelector(".secondes").innerHTML = secondes
}, 1000)