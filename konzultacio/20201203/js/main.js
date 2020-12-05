
const getCurrentTime = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = padNumbers(currentDate.getMonth() + 1);
    const day = padNumbers(currentDate.getDate());
    const hours = padNumbers(currentDate.getHours());
    const minutes = padNumbers(currentDate.getMinutes());
    const seconds = padNumbers(currentDate.getSeconds());

    return `${[year, month, day].join('.')} ${[hours, minutes, seconds].join(':')}`

};

const padNumbers = (num) => {
    return num < 10 ? `0${num}` : `${num}`
}

setInterval( () => {const time = getCurrentTime();}, 1000)


const getTimer = (startTime) => {
    const currentDate = startTime ? new Date(startTime) : new Date;
    const hours = padNumbers(currentDate.getHours());
    const minutes = padNumbers(currentDate.getMinutes());
    const seconds = padNumbers(currentDate.getSeconds());

    return `${[hours, minutes, seconds].join(':')}`

};

let stopperTime = 8800;
const stopperIsRunning = false;
setInterval( () => {
    if (!stopperIsRunning) {
        return;
    }
    stopperTime += 1;
    const seconds = padNumbers(stopperTime % 60);
    const minutes = padNumbers(Math.floor(stopperTime / 60) % 60);
    const hours = padNumbers(Math.floor(stopperTime / 3600)); 
    const time = `${[hours, minutes, seconds].join(':')}`;
    return time;
}, 1000)


