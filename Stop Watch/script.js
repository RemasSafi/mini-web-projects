let secandsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value){
    return String(value).padStart(2, '0')

}

function setTime(){
    const mins = Math.floor(secandsElapsed / 60)
    const seconds = secandsElapsed % 60
    time.innerText = `${padStart(mins)}:${padStart(seconds)}`
}
function timer(){
    secandsElapsed++
    setTime()
}
function startClock(){
    if(interval) stopClock()
    interval = setInterval(timer, 1000)
}
function stopClock(){
    clearInterval(interval)
}
function resetClock(){
    stopClock()
    secandsElapsed = 0
    setTime()
}