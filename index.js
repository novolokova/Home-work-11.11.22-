// Людина вводить номер місяця, ви виводите пору року
// 1,2,12 - winter
// 3,4,5 - spring
// 6,7,8, - summer
// 9,10,11 - fall
// 404 try again
// виконати 2 варіантами: через switch та if...else if...else

function checkSeasons() {
  const inputTime = prompt();

  if (inputTime === "1" || inputTime === "2" || inputTime === "12") {
    console.log("winter");
  } else if (inputTime === "3" || inputTime === "4" || inputTime === "5") {
    console.log("spring");
  } else if (inputTime === "6" || inputTime === "7" || inputTime === "18") {
    console.log("summer");
  } else if (inputTime === "9" || inputTime === "10" || inputTime === "11") {
    console.log("fall");
  } else {
    console.log("404 try again");
  }

  switch (inputTime) {
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

//checkSeasons();



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

function checkAge() {
  const inputUser = prompt();

  const ageUser = Number(inputUser);

  if (ageUser > 0 && ageUser < 2) {
    console.log("baby");
  } else if (ageUser >= 2 && ageUser < 6) {
    console.log("kinder");
    // console.log(ageUser + ageUser);
  } else if (ageUser >= 6 && ageUser < 12) {
    console.log("child");
  } else if (ageUser >= 12 && ageUser < 18) {
    console.log("teenager");
  } else if (ageUser >= 18 && ageUser < 65) {
    console.log("adult");
  } else if (ageUser >= 65 && ageUser < 100) {
    console.log("oldmen");
  } else if (ageUser >= 100 && ageUser < 150) {
    console.log("super!");
  } else {
    console.log("404 try again");
  }
}

//checkAge();



// Людина вводить годину([0-23]), ви виводите привітання
// [7 - 11) - good morning
// [11 - 18) - good day
// [18 - 23) - good evening
// усе інше - good night
// усе невірне - 404 try again
// виконати 2 варіантами: через switch та if...else if...else і скажете який краще!!!

function checkTime() {
  const inputUser = prompt();
  const inputTime = Number(inputUser);

  if (inputTime >= 7 && inputTime < 11) {
    console.log("good morning");
    //console.log(inputTime + inputTime);
  } else if (inputTime >= 11 && inputTime < 18) {
    console.log("good day");
  } else if (inputTime >= 18 && inputTime < 23) {
    console.log("good evening");
  } else if (inputTime >= 0 && inputTime < 7 || inputTime === 23) {
    console.log("good night");
  } else {
    console.log("404 try again");
  }

  switch (inputTime) {
    case 7:
    case 8:
    case 9:
    case 10:
      console.log("good morning");
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      console.log("good day");
      break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
      console.log("good evening");
      break;
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("good night");
      break;
    default:
      console.log("404 try again");
      break;
  }
}
checkTime();
