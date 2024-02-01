let action = prompt('что вы хотите сделать?(add, sub, mult, div)');
let firstNumber = parseInt(prompt('введите первое число'));
let secondNumber = parseInt(prompt('введите второе число'));
if (action === 'add') {
       let result = firstNumber + secondNumber;
       alert(firstNumber + '+' + secondNumber + '=' + result);
}
else if (action === 'sub') {
       let result = firstNumber - secondNumber;
       alert(firstNumber + '-' + secondNumber + '=' + result);
}

else if (action === 'mult') {
       let result = firstNumber * secondNumber;
       alert(firstNumber + '*' + secondNumber + '=' + result);
}
else if(action === 'div') {
       let result = firstNumber / secondNumber;
       alert(firstNumber + '/' + secondNumber + '=' + result);
}