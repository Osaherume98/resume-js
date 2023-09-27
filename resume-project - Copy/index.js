// let changeBtn = document.getElementById("change-btn");
// let container = document.getElementById("container");
// // let h4 = document.getElementsByTagName("h4");
// let h4 = (document.getElementsByTagName("h4").style.color = "red");

// function changeColor() {
//   if (container.style.background == "white") {
//     container.style.background = "blue";
//   } else {
//     container.style.background = "white";
//   }
// }
function changeColor() {
  let numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let color = "";

  for (let i = 0; i < 6; i++) {
    let random_index = Math.floor(Math.random() * numbers.length);

    color += numbers[random_index];
  }
  document.getElementById("change_color").style.background = "#" + color;
}
