let ClickButton = document.querySelector('#ButtonToAddNewNumber').addEventListener("click", AllCodeFunction);
// считываем кнопку подсчета и сразу же вешаем на нее слушатель событий, который будет выполнять что то при нажатии
let ClickButtonClear = document.querySelector('#ButtonToClearNumber').addEventListener("click", AllCodeToClearFunction);
// считываем кнопку очищения всех значений и так же сразу же вешаем на нее слушатель событий, который будет выполнять 
// что то при нажатии на нее
let ArrowForNumbers = [];
// Основной массив, в который будем помещать значения с поля ввода, и так же будем удалять с него эти значения при нажатии на кнопку очистки 

function AllCodeFunction() { //общая функция, которая являеться контейнером для функций добавления числе в массив и их прибавления
   _FuncForFillArray();
   _FuncForSumArrayNumber();
}

let _FuncForFillArray = () => {  //Эта функция считывает числа и закидывает их в массив для чисел
   let InputText = document.querySelector('#InputText');
   for (let i = 0; i < InputText.value.length; i++) {
      ArrowForNumbers.push(InputText.value.slice(i, i + 1));
   }
   return (
      console.log(ArrowForNumbers)
   );
};

let _FuncForSumArrayNumber = () => { //Эта функция берет из массива числа, что были добавленый раннее и прибовляит их между собой в новую переменную
   let ArrayForCountNumber = 0;
   for (let i = 0; i < ArrowForNumbers.length; i++) {
      ArrayForCountNumber = Number(ArrayForCountNumber) + Number(ArrowForNumbers[i]);
   }

   let newDiv = document.createElement('div');
   newDiv.innerHTML = `Вот число, которое получилось, если разбить то что ввели Вы и прибавить между собой :  ${ArrayForCountNumber}`;
   let Div_1 = document.querySelector('.Div_1').prepend(newDiv);

   // return (
   //    console.log(newDiv)
   // )
};

function AllCodeToClearFunction() { //функция очистки массива и поля ввода
   for (let i = 0; ArrowForNumbers.length = 0;) { ArrowForNumbers.shift() } //массив перебираеться и удаляет первый в списке обьект, пока не будет пуст
   let InputText = document.querySelector('#InputText'); //считываем поле ввода на странице 
   InputText.value = ''; //зануление поля ввода
}





