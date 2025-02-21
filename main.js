const resultElement = document.getElementById('result');
const inputElement = document.getElementById('birthdate');
function ChangeColor(){
    document.getElementsByClassName('calculator__display')[0].style.background = 'linear-gradient(315deg, rgba(0,0,0,1) 16%, rgba(255,0,0,1) 100%)'
    document.getElementsByClassName('main')[0].style.background = 'linear-gradient(147deg, rgba(0,0,0,1) 16%, rgba(255,0,0,1) 100%)'
}
function ChangeColorNormal(){
    document.getElementsByClassName('calculator__display')[0].style.background = 'linear-gradient(315deg, rgba(2, 0, 36, 1) 28%, rgba(0, 212, 255, 1) 100%)'
    document.getElementsByClassName('main')[0].style.background = 'linear-gradient(157deg, rgba(2, 0, 36, 1) 28%, rgba(0, 212, 255, 1) 100%)'
}
function ChangeColorStrange(){
    document.getElementsByClassName('calculator__display')[0].style.background = 'linear-gradient(315deg, rgba(0,0,0,1) 16%, rgba(209,255,0,1) 100%)'
    document.getElementsByClassName('main')[0].style.background = 'linear-gradient(158deg, rgba(0,0,0,1) 16%, rgba(209,255,0,1) 100%)'
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
            ChangeColor();
            return;
        }

        if (age > 122) {
            resultElement.textContent = 'Средняя продолжительность жизни 70 лет (переделывай)';
            ChangeColorStrange();
            return;
        }


        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        resultElement.textContent = `Ваш возраст: ${age} лет`;
        ChangeColorNormal();
    } else {
        resultElement.textContent = 'Я найду тебя...';
    }
});