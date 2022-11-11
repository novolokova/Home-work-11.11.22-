// Людина вводить номер місяця, ви виводите пору року
// 1,2,12 - winter
// 3,4,5 - spring
// 6,7,8, - summer
// 9,10,11 - fall
// 404 try again
// виконати 2 варіантами: через switch та if...else if...else


function checkSeasons() {
  
const lang = prompt();

if (lang === "1" || lang === "2" || lang === "12") {
  console.log("winter");
} else if (lang === "3" || lang === "4" || lang === "5") {
  console.log("spring");
} else if (lang === "6" || lang === "7" || lang === "18") {
  console.log("summer");
} else if (lang === "9" || lang === "10" || lang === "11") {
  console.log("fall");
} else {
  console.log("404 try again");
}

switch (lang) {
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
checkSeasons();