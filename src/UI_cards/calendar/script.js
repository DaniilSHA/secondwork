let date = new Date();
let rangeCheck = false;

const ditectLeftRange = () => {
    document.querySelector('.calendar__date-Range').id = "leftRange";
    document.querySelector('.calendar__date-Range').classList.remove('calendar__date-Range');
}

const ditectRightRange = () => {
    document.querySelector('.calendar__date-Range').id = "rightRange";
    document.querySelector('.calendar__date-Range').classList.remove('calendar__date-Range');
}

const setRange = (firstRange, lastRange) => {

let clickFunction = function click(e) {  
    if (rangeCheck === false) {
        firstRange = false;
        lastRange = false;
        rangeCheck = true;
    }
    if ((firstRange === true) & !(e.target.classList.contains("calendar__date-Range"))) {
        lastRange = true;
    }
    e.target.classList.toggle('calendar__date-Range');
    if (e.target.classList.contains("calendar__date-Range")) {firstRange=true}
    else {firstRange=false}
    if ((firstRange === true) & (lastRange === true)) {
    let list = document.querySelector('.calendar__date').children
    for (let i = 0; i< list.length; i++) {
    list[i].removeEventListener('click', clickFunction);
    }
    ditectLeftRange();
    ditectRightRange();
    printRange(); 
    firstRange = false;
    lastRange = false; 
}
}
let list = document.querySelector('.calendar__date').children
for (let i = 0; i< list.length; i++)
list[i].addEventListener('click', clickFunction)
}

let firstDate;
let secondDate;


const printRange = () => {
let list = document.querySelectorAll('.calendar__date div');
for (let i=0; i < list.length; i++) {
    if (list[i].id === "leftRange") {   
        if (list[i].classList.contains('calendar__date-prev')) {
        firstDate = new Date(date.getFullYear(), date.getMonth() - 1, list[i].textContent);    
        } else if (list[i].classList.contains('calendar__date-next')) {
        firstDate = new Date(date.getFullYear(), date.getMonth() + 1, list[i].textContent);} else  
        {firstDate = new Date(date.getFullYear(), date.getMonth(), list[i].textContent);}
        i++;
        while (list[i].id !== "rightRange") {
        list[i].classList.add("printRange");
        i++;
        }
        if (list[i].classList.contains('calendar__date-prev'))
            secondDate = new Date(date.getFullYear(), date.getMonth()-1, Number(list[i].textContent));  
        if (list[i].classList.contains('calendar__date-next'))
            secondDate = new Date(date.getFullYear(), date.getMonth()+1, Number(list[i].textContent));
        if (!list[i].classList.contains('calendar__date-next') & !list[i].classList.contains('calendar__date-prev'))
            secondDate = new Date(date.getFullYear(), date.getMonth(), Number(list[i].textContent));
        break;
    }      
}
}

                                                                        

const renderCalendar = () => {
   
//date.setMonth(8);

const months =["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const monthDays = document.querySelector('.calendar__date');

date.setDate(1);
    
const firstDayIndex = date.getDay() - 1;
    
const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

const nextDays = 7 - lastDayIndex;

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

document.querySelector('.calendar__header-date-month_mod').innerHTML = months[date.getMonth()];

document.querySelector('.calendar__header-date-year_mod').innerHTML = '&nbsp;' + String(date.getFullYear());

let days = "";

for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="calendar__date-prev">${prevLastDay - x + 1}</div>`
};

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    days += `<div class="calendar__date-today">${i}</div>`;
    } else {
    days += `<div>${i}</div>`;
    }
};

for (let j = 1; j <= nextDays; j++) {
    if (nextDays !== 7) {
    days += `<div class="calendar__date-next">${j}</div>`;
    }
    monthDays.innerHTML = days;
}; 
    let list = document.querySelectorAll('.calendar__date div');
    if (list.length == 42) {
        document.querySelector('.calendar').style.height = "409.44px";
        document.querySelector('.calendar__contant').style.height = "280.44px";
        document.querySelector('.calendar__date').style.height = "240.44px";
    } else {       
        document.querySelector('.calendar').style.height = "369px";
        document.querySelector('.calendar__contant').style.height = "240px";
        document.querySelector('.calendar__date').style.height = "200px";
    }
}    
 


document.querySelector('.calendar__header-left-button').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
    rangeCheck = false;
    setRange(false, false);
    console.log(date.getMonth());    
})

document.querySelector('.calendar__header-right-button').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
    console.log(date.getMonth());
    rangeCheck = false;
    setRange(false,false);
})
//console.log(date);




document.querySelector('.calendar__clear-button').addEventListener('click', () => {
    if (document.getElementById('leftRange') != null) {
        document.getElementById('leftRange').removeAttribute('id');}
    if (document.getElementById('leftRange') != null) {
        document.getElementById('rightRange').removeAttribute('id');
        } 
    let newDate = new Date();
    date.setMonth(newDate.getMonth());
    date.setYear(newDate.getFullYear());
    renderCalendar();
    rangeCheck = false;
    setRange(false, false);
})

//console.log(document.querySelector('.calendar__date-Range').textContent)
renderCalendar();
setRange(false,false);




//console.log(document.querySelector('.calendar__confirm-button').getEventListeners);


document.querySelector('.calendar__confirm-button').addEventListener('click', () => {
       console.log(firstDate);
       console.log(secondDate);})



//console.log(document.querySelector('.calendar__confirm-button').getEventListeners);

//let list = document.querySelectorAll('.calendar__date div');
//list[8].classList.add("printRange");
//console.log(list[8])

