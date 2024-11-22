const getNumbers = () => {
let num1 = parseFloat(document.getElementById('num1').value);
let num2 = parseFloat(document.getElementById('num2').value);
if(isNaN(num1) || isNaN(num2)){
    document.getElementById('result').textContent = `Введите числа!`;
    return;
}
return {
    num1,
    num2
}
}

const setResult = (value) => {
   document.getElementById('result').textContent = `Результат: ${value} `;
   document.getElementById('num1').value = value;
   document.getElementById('num2').value = '';
}

const plyus = () => {
    let numbers = getNumbers();
    setResult(numbers.num1 + numbers.num2)
}

const minus = () => {
    let numbers = getNumbers();
    setResult(numbers.num1 - numbers.num2)
}

const umnojenie = () => {
    let numbers = getNumbers();
    setResult(numbers.num1 * numbers.num2)
}


const delenie = () => {
    let numbers = getNumbers();
    setResult(numbers.num2 !== 0 ? numbers.num1 / numbers.num2 : 'На ноль делить нельзя')
}

const stepen = () => {
    let numbers = getNumbers();
    setResult(numbers.num1 ** numbers.num2)
}

const koren = () => {
    let numbers = getNumbers();
    setResult(numbers.num1 > 0 ? Math.pow(numbers.num1, 1 / numbers.num2) : 'так нельзя')
}


