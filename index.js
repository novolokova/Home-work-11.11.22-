// Людина вводить номер місяця, ви виводите пору року
// 1,2,12 - winter
// 3,4,5 - spring
// 6,7,8, - summer
// 9,10,11 - fall
// 404 try again
// виконати 2 варіантами: через switch та if...else if...else


function checkSeasons(value) {
  if (value === "1" || value === "2" || value === "12") {
    console.log("winter");
  } else if (value === "3" || value === "4" || value === "5") {
    console.log("spring");
  } else if (value === "6" || value === "7" || value === "18") {
    console.log("summer");
  } else if (value === "9" || value === "10" || value === "11") {
    console.log("fall");
  } else {
    console.log("404 try again");
  }

  switch (value) {
    case "1":
    case "2":
    case "12":
      console.log("winter");
      break;
    case "3":
    case "4":
    case "5":
      console.log("spring");
      break;
    case "6":
    case "7":
    case "8":
      console.log("summer");
      break;
    case "9":
    case "10":
    case "11":
      console.log("fall");
      break;
    default:
      console.log("404 try again");
      break;
  }
}

checkSeasons(prompt('Enter month number'));

// Людина вводить вік (привести до числа), ви виводите класифікацію за віком:
// [0 - 2) baby
// [2 - 6) kinder
// [6 - 12) child
// [12 - 18) teenager
// [18 - 65) adult
// [65 - 100) oldmen
// [100 - 150) super!
// 404 try again
// оберіть самі потрібну конструкцію

/**
 *
 * @param {string} value
 */
function checkAge(value) {
  value = Number(value);
  if (value > 0 && value < 2) {
    console.log("baby");
  } else if (value >= 2 && value < 6) {
    console.log("kinder");
  } else if (value >= 6 && value < 12) {
    console.log("child");
  } else if (value >= 12 && value < 18) {
    console.log("teenager");
  } else if (value >= 18 && value < 65) {
    console.log("adult");
  } else if (value >= 65 && value < 100) {
    console.log("oldmen");
  } else if (value >= 100 && value < 150) {
    console.log("super!");
  } else {
    console.log("404 try again");
  }
}

checkAge(prompt("Enter your age"));

// Людина вводить годину([0-23]), ви виводите привітання
// [7 - 11) - good morning
// [11 - 18) - good day
// [18 - 23) - good evening
// усе інше - good night
// усе невірне - 404 try again
// виконати 2 варіантами: через switch та if...else if...else і скажете який краще!!!

/**
 *
 * @param {string} value
 */
function checkTime_1(value) {
  value = Number(value);
  if (value >= 7 && value < 11) {
    console.log("good morning");
  } else if (value >= 11 && value < 18) {
    console.log("good day");
  } else if (value >= 18 && value < 23) {
    console.log("good evening");
  } else if ((value >= 0 && value < 7) || value === 23) {
    console.log("good night");
  } else {
    console.log("404 try again");
  }
}
checkTime_1(prompt('Enter time_1'));

/**
 *
 * @param {string} value
 */
function checkTime_2(value) {
  switch (value) {
    case "7":
    case "8":
    case "9":
    case "10":
      console.log("good morning");
      break;
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
      console.log("good day");
      break;
    case "18":
    case "19":
    case "20":
    case "21":
    case "22":
      console.log("good evening");
      break;
    case "23":
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
      console.log("good night");
      break;
    default:
      console.log("404 try again");
      break;
  }
}
checkTime_2(prompt('Enter time_2'));
