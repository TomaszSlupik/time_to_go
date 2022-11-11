const timetogo = document.querySelector('.timetogo')
const secToGo = document.querySelector('.sec')

let number = 11

var sec = Number(number)

var interval = setInterval(function() {
    if (sec > 0) {
        sec -= 1
        secToGo.innerText = sec + ' s'
    }
}, 1000)


interval()