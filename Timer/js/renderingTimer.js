
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const rendering = () => {

    for (let i = 0; i < 24; i++) {
        hours[i] = new Option(`${i}`, i);
    }
    for (let i = 0; i < 60; i++) {
        minutes[i] = new Option(`${i}`, i);
    }
    for (let i = 0; i < 60; i++) {
        seconds[i] = new Option(`${i}`, i);
    }
}

export default rendering;