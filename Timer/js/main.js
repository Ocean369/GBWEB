import diffDates from "./datecalc.js";
import { formatError, printResult, printFinish } from "./print.js";
import { openForm, switchOn } from './switch.js';
import { counter, setTime } from "./timer.js";
import rendering from "./renderingTimer.js";



const formCalc = document.getElementById("datecalc");
const formTimer = document.getElementById('timer');
const btnsMenu = document.querySelectorAll('#menu button');


window.onload = () => {
    btnsMenu.forEach((btn) => {
        const id = btn.getAttribute('for');
        btn.onclick = openForm;
    })
    rendering();
    document.querySelector('button[for=datecalc]').click();
}

formCalc.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    if (firstDate && secondDate) {
        printResult(diffDates(firstDate, secondDate));
    }
    else formatError("Для расчета промежутка необходимо заполнить оба поля");
}

document.getElementById('start').onclick = (event) => {
    event.preventDefault();
    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;
    let seconds = document.getElementById('seconds').value;
    counter(hours, minutes, seconds);
    setTime({ hours: 0, minutes: 0, seconds: 0 })
}

