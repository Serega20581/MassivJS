// //Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:
// 'long' – вернётся массив, содержащий значения saturday и sunday
// 'short' – вернётся массив со значениями sat и sun
const getWeekends = (size = 'long') => {
    if (size === 'long') {
      return ['saturday', 'sunday'];
    } else if (size === 'short') {
      return ['sat', 'sun'];
    } else {
      return [];
    }
  }
console.log(getWeekends('long'));
console.log(getWeekends('short'));
console.log(getWeekends());