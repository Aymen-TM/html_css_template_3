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