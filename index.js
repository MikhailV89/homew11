document.write('<h3>Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).</h3>');
value = 20;

while (value <= 30) {
    document.write(`${value} `);
    value += 0.5;
}

document.write('<h3>Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.</h3>');
valueDollar = 10;
result = '';

while (valueDollar <= 100) {
    result = valueDollar * 27;
    document.write(`${valueDollar} usd x 27 = ${result} uah<br>`);
    valueDollar += 10;
}



document.write('<h3>Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.</h3>');
givenNumber = 100;
fromStart = 1;
number = '';

do {
  if (fromStart * fromStart <= givenNumber) {
    number += fromStart + ', ';
    }
    fromStart++;
} while (fromStart <= 100);
document.write(number.slice(0, -2));



document.write('<h3><b>Дане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).</b></h3>');
numberRequest = +prompt('Enter a prime number!');
valuePrime = 2;
resultPrime = true;

while (!numberRequest || isNaN(parseInt(numberRequest))) {
    numberRequest = +prompt('Enter a prime number!');
}

do {
    if (numberRequest % valuePrime === 0 && valuePrime !== numberRequest || numberRequest === 1) {
        resultPrime = false;
    }
    valuePrime++;
} while (valuePrime < numberRequest);

if (resultPrime) {
    document.write(`Число ${numberRequest} є простим числом.`);
} else {
    document.write(`Число ${numberRequest} не є простим числом.`);
}



document.write('<h3>Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).</h3>');
valueNumber = 1;

do {
    valueNumber++;
    resultDegre = Math.pow(3, valueNumber);
} while (resultDegre < numberRequest);

if (resultDegre == numberRequest) {
    document.write(`Число ${numberRequest} можна отримати шляхом зведення числа 3 у ступінь ${valueNumber}.`);
} else {
    document.write(`Число ${numberRequest} неможливо отримати шляхом зведеня числа 3 у деякий ступень.`);
}
