//Задача на палиндром - нужно написать функцию, которая возвращает true если переданная строка читается с права налево и с лева на право - одинаково и false если нет.

//Палиндром это строка которую можно перевернуть
const palindrom = (str)=>{
    //Переводим строку в нижний регистр
    str = str.toLowerCase()
    //Разбиваем строку на символы, через
    // занесение в массив
    let str2 = str.split('');
    //разворачиваем массив
    str2 = str2.reverse();
    //объеденить в строку
    str2 = str2.join('');
    if(str == str2){
        return true
    } else{
        return false
    }


    return str2;

}
console.log(palindrom('abba'));
console.log(palindrom('hello'));

//Продвинутый вариант без сокращений
const palindrom2 = (str)=>{
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}
console.log(palindrom2('abba'));
console.log(palindrom2('hello'));