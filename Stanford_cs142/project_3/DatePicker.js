// var datePicker = new DatePicker("div1", function (id, fixedDate) {
//   console.log("DatePicker with id", id,
//     "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
// });
// datePicker.render(new Date("July 4, 1776"));


function clickCb(event) {
  // alert('hi');
  console.log('target id is: ' + event.target.id);
  console.log("callback-bound DOM element id = " + this.id);

}

document.getElementById('dp1_1').addEventListener("click", clickCb);

console.log("Loaded DatePicker.js -----");


