
setInterval(setClock,1000);
const hourHand= document.querySelector('.hour');
const minuteHand= document.querySelector('.minute');
const secondHand= document.querySelector('.second');

function setClock(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds()/60;
    //console.log("seconds",seconds)
    const minutes = (seconds+currentDate.getMinutes())/60;
    //console.log("minute",minutes);
    const hours = (minutes+currentDate.getHours())/12;
    //console.log("hours",hours)

    setRotation(secondHand,seconds);
    setRotation(minuteHand,minutes);
    setRotation(hourHand,hours);

}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}
setClock();