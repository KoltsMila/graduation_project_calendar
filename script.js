let date = new Date(); 
let month = date.getMonth(); 
let time = document.querySelector(".time"); 
let weather = document.querySelector(".weather");
let weatherText = document.querySelector(".weatherText");
let icons = document.querySelectorAll(".left, .right"); 
let year = date.getFullYear();
let today = document.querySelector("div.today");
let close = document.querySelector(".close");
let windowVis = document.querySelector(".window"); 
let events = document.querySelector(".events");
let exit = document.querySelector(".exit")
const dateTime = Intl.DateTimeFormat("ru").format(date); //форматирование даты в соответсвии с русским языком
const daysMonth = document.querySelector("div.days"); 
const monthYear = document.querySelector(".monthYear"); 
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

document.querySelector(".date").innerHTML = dateTime; //генерирование даты в формате ДД.ММ.ГГГГ в <div class="date">

setInterval(() => { //функция генерирования часов
  let hour = new Date().getHours(); 
  let min = new Date().getMinutes(); 
  let sec = new Date().getSeconds(); 
  
  hour = (hour < 10) ? "0" + hour : hour; //добавление 0 к часу, который меньше 10
  min = (min < 10) ? "0" + min : min; //добавление 0 к минутам, которые меньше 10
  sec = (sec < 10) ? "0" + sec : sec; //добавление 0 к секундам, которые меньше 10

  time.innerHTML = hour + " : " + min + " : " + sec; //запись времени в формате чч : мм : сс
})

const toDoCalendar = () => { //генерирование календаря
  let firstDayMonth  = new Date(year, month, 0).getDay(); //первый день месяца
  let lastDayMonth  = new Date(year, month + 1, 0).getDate(); //последний день месяца
  let daysLastMonth  = new Date(year, month, lastDayMonth).getDay(); //первые дни следующего месяца
  let lastDayLastMonth  = new Date(year, month, 0).getDate(); //последние дни предыдущего месяца
  let days = "";

  for (let i = firstDayMonth; i > 0; i--) { //последние дни предыдущего месяца
    days += `<div class="prevMonthDay">${lastDayLastMonth - i + 1}</div>`; 
  }

  for (let i = 1; i <= lastDayMonth; i++) { //создание всех дней месяца
    let today = i === date.getDate() && month === new Date().getMonth() 
    && year === new Date().getFullYear() ? "today" : "";
    days += `<div class="${today}">${i}</div>`;
  }

  for (let i = daysLastMonth; i < 7; i++) { //первые дни следующего месяца
    days += `<div class="nextMonthDay">${i - daysLastMonth + 1}</div>`;
  }

  monthYear.innerText = `${months[month]} ${year}`;//генерирование месяцев и года и отображение в header
  daysMonth.innerHTML = days; //отображение всех дней месяца в календаре
}
toDoCalendar();

icons.forEach(icon => { //функция для кликабельности и движения по месяцам и годам
  icon.addEventListener("click", () => {
    month = icon.id === "left" ? month - 1 : month + 1;
    if(month < 0 || month > 11) { //если месяц меньше 0 или больше 11, то есть меньше января или больше декабря, то
      date = new Date(year, month); //для создания годов до и после текущего года
      year = date.getFullYear(); //создание нового значения года
      month = date.getMonth(); //создание нового значения месяца
    } else {
      date = new Date(); //иначе создать новую дату в значении даты
    }
    toDoCalendar();
  });
});

  weatherText.addEventListener("click", function () { //открытие виджета погоды
    windowVis.style.display == "none"
      windowVis.style.display = "block";
    });
  close.addEventListener("click", function() { //закрытие виджета погоды
    windowVis.style.display = "none"
  });

  daysMonth.addEventListener("click", function() { //создание событий
    events.style.visibility = "hidden"
    events.style.visibility = "visible"
  })
  exit.addEventListener("click", function() { //закрытие поля событий
    events.style.visibility = "hidden"
  });
