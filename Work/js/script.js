//alert('Hello');

//const result = confirm('Are you here?');

//const answer = +prompt("Вам есть 18 лет?","20");
//console.log(typeof(answer));
//console.log(answer + 5);


//7 урок --
//const answers = [];

//answers[0] = prompt('Какое ваше имя?','');
//answers[1] = prompt('Какая ваша фамилия?','');
//answers[2] = prompt('Сколько вам лет?','');

//document.write(answers);
//7 урок ++

//8 урок интерполяция --
//const category = 'toys';

//Старый механизм
//console.log('https://someurl.com/' + category);

//Новый механизм
//console.log(`https://someurl.com/${category}/5`);

//const user = 'Ivan';
//alert(`Hello,${user}`);

//8 урок интерполяция ++

//9 урок операторы --
//4 + "- object" это строка
//4 + +"- object" это Nan
//4 + +"5" это 9

let incr = 10,
    decr = 10;

//постфиксная форма
incr ++; //увеличение на 1 console.log(i++) вернет 10 
decr --; //уменьшение на 1

//префиксная форма
++ incr; //увеличение на 1 console.log(++i) вернет 11
-- decr; //уменьшение на 1
//9 урок операторы ++