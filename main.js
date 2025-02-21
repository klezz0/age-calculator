const resultElement = document.getElementById('result');
const inputElement = document.getElementById('birthdate');
const calculatorElement = document.getElementsByClassName('calculator__display')[0];
const mainElement = document.getElementsByClassName('main')[0];

function setColorRed() {
    calculatorElement.style.background = 'linear-gradient(315deg, rgba(0,0,0,1) 16%, rgba(255,0,0,1) 100%)'
    mainElement.style.background = 'linear-gradient(147deg, rgba(0,0,0,1) 16%, rgba(255,0,0,1) 100%)'
}

function setColorBlue() {
    calculatorElement.style.background = 'linear-gradient(315deg, rgba(2, 0, 36, 1) 28%, rgba(0, 212, 255, 1) 100%)'
    mainElement.style.background = 'linear-gradient(157deg, rgba(2, 0, 36, 1) 28%, rgba(0, 212, 255, 1) 100%)'
}

function setColorYellow() {
    calculatorElement.style.background = 'linear-gradient(315deg, rgba(0,0,0,1) 16%, rgba(209,255,0,1) 100%)'
    mainElement.style.background = 'linear-gradient(158deg, rgba(0,0,0,1) 16%, rgba(209,255,0,1) 100%)'
}

document.getElementById('calculate').addEventListener('click', function () {
    const birthdateInput = inputElement.value;
    if (birthdateInput) {
        const birthdate = new Date(birthdateInput);
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDifference = today.getMonth() - birthdate.getMonth();

        if (birthdate > today) {
            resultElement.textContent = 'Ты не можешь родится в будущем >:(';
            return;
        }

        if (age > 200) {
            resultElement.textContent = 'Да, да, кому ты мелишь?';
            setColorRed();
            return;
        }

        if (age > 122) {
            resultElement.textContent = 'Средняя продолжительность жизни 70 лет (переделывай)';
            setColorYellow();
            return;
        }


        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        resultElement.textContent = `Ваш возраст: ${age} лет`;
        setColorBlue();
    } else {
        resultElement.textContent = 'Я найду тебя...';
    }
});