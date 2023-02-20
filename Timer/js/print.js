const result = document.getElementById("datecalc__result");
const counter = document.getElementById('demo');

export const formatError = (textErr) => {

    result.innerHTML = `<span style="color: red;">
                        ${textErr}
                        </span>
                    `;
}

export const printResult = ({ years, months, days }) => {
    result.innerHTML = `<span> Осталось:<br>
    Лет: ${years ? + years : '0 '}
    Месяцев: ${months ? + months : '0 '}
    Дней: ${days ? + days : '0 '}
    </span>`
}

export const printCount = ({ hours, minutes, seconds }) => {
    counter.innerHTML = `<span> 
     ${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}
     </span>`
}

export const printFinish = (text) => {
    counter.innerHTML = text;
}

