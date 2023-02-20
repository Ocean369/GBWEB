
import { printCount, printFinish } from './print.js';
import "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.js"
import { switchOff, switchOn } from './switch.js';

function getBackTime(allSeconds) {
    let hours = Math.floor(allSeconds / 3600);
    let minutes = Math.floor(allSeconds % 3600 / 60);
    let seconds = Math.floor(allSeconds % 3600 % 60);
    return { hours: hours, minutes: minutes, seconds: seconds }
}

export function setTime({ hours, minutes, seconds }) {
    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;
}

export function counter(hours, minutes, seconds) {
    let allSeconds = +hours * 3600 + +minutes * 60 + +seconds;
    if (allSeconds === 0) {
        printFinish('<span style="color: red;">Установите время!</span>');
        return;
    }
    switchOn();
    printCount({ hours: +hours, minutes: +minutes, seconds: +seconds });

    var interval = setInterval(function () {

        --allSeconds;
        printCount(getBackTime(allSeconds));
        if (allSeconds === 0) {
            clearInterval(interval);
            let sound = new Howl({
                src: ['../media/eralash.mp3']
            });
            sound.play();
            printFinish('Время вышло!');
        }

    }, 1000);

    document.getElementById('stop').onclick = (event) => {
        event.preventDefault();
        if (interval) clearInterval(interval);
        setTime(getBackTime(allSeconds));
        switchOff();
    }

    document.getElementById('reset').onclick = (event) => {
        event.preventDefault();
        if (interval) clearInterval(interval);
        allSeconds = 0;
        setTime({ hours: 0, minutes: 0, seconds: 0 })
        printFinish('');
        switchOff();
    }
}

