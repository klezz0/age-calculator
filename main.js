const resultElement = document.getElementById('result');
const inputElement = document.getElementById('birthdate');
console.log(resultElement);

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
            resultElement.textContent = 'Да, да, кому ты мелишь?'
            return;
        }

        if (age > 122) {
            resultElement.textContent = 'Ты че мамонт? (переделывай неадекват)';
            return;
        }


        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        resultElement.textContent = `Абобка тебе: ${age} лет`;
    } else {
        resultElement.textContent = 'Я найду тебя...';
    }
});