// let div = document.querySelectorAll('div')
// console.dir(div)

const calculator = document.getElementById('calculator');

calculator.addEventListener('click', calculate);
function calculate() {
    let data = prompt('Привет, я калькулятор, введите пример', '');

    if (data == null) {
        alert('Вы отменили дейстивие');
    } else {
        data = data.replace(/,/g, ".");
        try {
            let result = eval(data);
            if (data == '') {
                alert('Вы ввели пустую строку');
            } else if (result === Infinity || result === -Infinity) {
                alert('На 0 делить нельзя');
            } else if (isNaN(result)) {
                showMessageError();
            } else {
                alert(`Результат операции: ${result}`);
            }
        } catch {
            showMessageError();
        }
    }
}
function showMessageError() {
    alert('Введите правильное выражение');
}
const header = document.getElementById('header');
const menu = document.getElementById('menu');
const menuAdaptive = document.getElementById('menu-adaptive');
menuAdaptive.addEventListener('click', switchMenu);
function switchMenu() {
    menu.classList.toggle('menu-none');
    // header.style.marginBottom = '300px';
    header.classList.toggle('m-b-200');
}

const formOpenButton = document.getElementById('formOpenButton');
const modallogIn = document.getElementById('modal-logIn');
const formWrap = document.getElementById('form-wrap')
const formCloseButton = document.getElementById('formCloseButton')
formOpenButton.addEventListener('click', switchForm);
function switchForm() {
    modallogIn.classList.toggle('d-none');
}
formCloseButton.addEventListener('click', switchForm);
