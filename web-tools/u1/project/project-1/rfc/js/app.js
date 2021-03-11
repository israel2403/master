var monthList = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
    "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
var dayList;
var yearList;
var monthSelect;
var daySelect;
var yearSelect;
function init() {
    monthSelect = document.getElementById("month");
    daySelect = document.getElementById("day");
    yearSelect = document.getElementById("year");
}

function myFunction() {
    init();
    // create the years
    yearList = range(1931, 2021);
    yearList.forEach(createYearOption);
    monthList.forEach(createMonthOption);
    addDayRange();
}

function createMonthOption(value) {
    var optionMonth = document.createElement("option");

    optionMonth.text = value;
    optionMonth.value = value;
    monthSelect.add(optionMonth);
}

function createDayOption(value) {
    var optionDay = document.createElement("option");
    optionDay.text = value;
    optionDay.value = value;
    daySelect.add(optionDay);
}


function createYearOption(value) {
    var optionYear = document.createElement("option");
    optionYear.text = value;
    optionYear.value = value;
    yearSelect.add(optionYear);
}

function monthInNumber(month) {
    switch (month) {
        case 'ENERO':
            return '01';
        case 'FEBRERO':
            return '02';
        case 'MARZO':
            return '03';
        case 'ABRIL':
            return '04';
        case 'MAYO':
            return '05';
        case 'JUNIO':
            return '06';
        case 'JULIO':
            return '07';
        case 'AGOSTO':
            return '08';
        case 'SEPTIEMBRE':
            return '09';
        case 'OCTUBRE':
            return '10';
        case 'NOVIEMBRE':
            return '11';
        case 'DICIEMBRE':
            return '12';
    }
}

function dayFormat(number) {
    switch (number) {
        case '1':
            return '01';
        case '2':
            return '02';
        case '3':
            return '03';
        case '4':
            return '04';
        case '5':
            return '05';
        case '6':
            return '06';
        case '7':
            return '07';
        case '8':
            return '08';
        case '9':
            return '09';
    }
    return number;
}
function addDayRange() {
    switch (monthSelect.value) {
        case 'ENERO':
        case 'MARZO':
        case 'MAYO':
        case 'JULIO':
        case 'AGOSTO':
        case 'OCTUBRE':
        case 'DICIEMBRE':
            dayList = Array.from({ length: 31 }, (v, k) => k + 1);
            break;
        case 'ABRIL':
        case 'JUNIO':
        case 'SEPTIEMBRE':
        case 'NOVIEMBRE':
            dayList = Array.from({ length: 30 }, (v, k) => k + 1);
            break;
        case 'FEBRERO':
            var year = yearSelect.value;
            if (leapYear(year))
                dayList = Array.from({ length: 29 }, (v, k) => k + 1);
            else
                dayList = Array.from({ length: 28 }, (v, k) => k + 1);
            break;
        default:
            break;
    }
    daySelect.innerHTML = "";
    dayList.forEach(createDayOption);
}

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}


function generateRFC() {
    var name = document.getElementById("first-surname").value;
    var firstLastname = document.getElementById("first-lastname").value;
    var secondLastname = document.getElementById("second-lastname").value;
    var month = monthInNumber(monthSelect.value);
    var year = yearSelect.value.substring(2, 4);
    var day = dayFormat(daySelect.value);
    var rfc = firstLastname.charAt(0) + firstLastname.charAt(1) + secondLastname.charAt(0) + name.charAt(0)+year+month+day+generateRandomLetter()+generateRandomNumber();
    rfc = rfc.toUpperCase();
    alert(rfc)
    x.innerHTML = rfc;

}

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  function generateRandomNumber() {
      return Math.floor(Math.random() * 90 + 10);
  }