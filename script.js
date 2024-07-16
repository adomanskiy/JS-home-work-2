// функция для вычисления суммы
function calculateSum(x, y){
    return Number(x) + Number(y);
  }
  
  console.log(calculateSum(10, '10'));  // 20
  console.log(calculateSum('5', '10')); // 15
  console.log(calculateSum(8, 8.8));  // 16.8
  
  // функция для получения рекомендаций по погоде
  function getWeatherRecommendations(issunny, israiny, issnowy) {
    if (issunny) {
      console.log('it is sunny, use sun protection.');
    } else if (israiny) {
      console.log('it is rainy, take an umbrella.');
    } else if (issnowy) {
      console.log('it is snow outside, do not forget the hat.');
    } else {
      console.log('casual day, have a great one!');
    }
  }
  
  getWeatherRecommendations(true, false, false);  // it is sunny, use sun protection.
  getWeatherRecommendations(false, true, false);  // it is rainy, take an umbrella.
  getWeatherRecommendations(true, false, true);  // snow and sun are outside, do not forget the hat and sunglasses.
  getWeatherRecommendations(false, false, true);  // it is snow outside, do not forget the hat.
  getWeatherRecommendations(false, false, false);  // casual day, have a great one!
  
  // функция для проверки значения на false
  function checkIfValisFalse(value) {
    if (typeof value === 'boolean' && value === false) {
      console.log("значение равно false");
    } else {
      console.log("значение не равно false");
    }
  }
  
  checkIfValisFalse(false); // значение равно false
  checkIfValisFalse(0); // значение не равно false
  checkIfValisFalse(''); // значение не равно false
  checkIfValisFalse(null); // значение не равно false
  
  // функция для демонстрации работы со строками
  function stringOperations() {
    let greeting = "hello, world!";
  
    // вывод длины строки
    console.log(`длина строки: ${greeting.length}`);
  
    // получение символа строки по индексу
    console.log(`символ по индексу 1: ${greeting.charAt(1)}`);
  
    // преобразование строки в верхний регистр
    console.log(`строка в верхнем регистре: ${greeting.toUpperCase()}`);
  
    // поиск подстроки в строке
    let searchterm = "world";
    if (greeting.includes(searchterm)) {
      console.log(`строка содержит подстроку ${searchterm}`);
    }
  
    let firstname = "john";
    let lastname = "doe";
    console.log(`полное имя: ${firstname} ${lastname}`);
  
    // получите подстроку world из строки hello world
    let substring = greeting.substring(greeting.indexOf('world'), greeting.indexOf('world') + 5);
    console.log(`подстрока: ${substring}`);
  }
  
  stringOperations();