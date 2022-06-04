const clockElement = document.querySelector(".clock")

function getTimeParts()
{
    const now = new Date();

    let hour = now.getHours();

    if(hour>12) hour = hour % 12;
    
    const minute = now.getMinutes();

    const seconds = now.getSeconds()

    const isAm = now.getHours() < 12 ;

    return{
        hour,minute,seconds,isAm
    };
}

function updateTime()
{
    let parts = getTimeParts();
    let formttedMinute,formattedSecond;
    
    formttedMinute = parts.minute.toString().padStart(2,'0')
        
    formattedSecond = parts.seconds.toString().padStart(2,"0")
    
    const amPm = parts.isAm?'AM':'PM';
    
    const time = `${parts.hour}:${formttedMinute}:${formattedSecond}`

    document.querySelector('.clock-time').textContent = time;

    document.querySelector('.clock-ampm').textContent = amPm
    
}

updateTime() 
// If it is not called here then there will be a delay of 500 milliseconds.

setInterval(()=>{
    updateTime()

},500)