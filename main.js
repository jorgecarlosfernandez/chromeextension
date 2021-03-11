
const bodyPage = document.querySelector('body');
const divs = document.getElementsByTagName('div');
const inputs = document.getElementsByTagName('input');
const elements = document.getElementsByTagName('*');
console.log(elements);
//changes the text of each element to white
for (let element of elements) {
  element.style.color = 'white';
}
//changes the background to black
bodyPage.style.backgroundColor= 'black';
//changes the background of each div to black
for (let div of divs) {
  div.style.backgroundColor = 'black';
}
//changes the background of each button to gray
for (let input of inputs) {
    input.style.backgroundColor = 'gray';
}

// //Possible hex values
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// //grabs random index from hex array
// function getRandomHexValue() {
//   return Math.floor(Math.random() * hex.length);
// }
// //waits for a click event and then createss a new hex color and assigns it to the background and each div element
// bodyPage.addEventListener("click", function(){
//     let hexColor = '#';
//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomHexValue()];
//     }
//     console.log(hexColor)
//     bodyPage.style.backgroundColor= hexColor;
//     for (let div of divs) {
//       div.style.backgroundColor = hexColor;
//     }
//     for (let input of inputs) {
//       input.style.backgroundColor = hexColor;
//     }
// })




// bodyOfPage.style.background = 'black';
// bodyOfPage.style.color = 'white';
// bodyOfPage.parentNode.removeChild(bodyOfPage);


// let btn = document.createElement("BUTTON");
// btn.innerHTML = "CLICK ME";
// btn.style.backgroundColor= 'white'
// footer.appendChild(btn);


// const footer = document.createElement("footer");
// // footer.setAttribute('width', '100%');
// // footer.setAttribute('height', '500px');
// footer.style.backgroundColor = 'black';
// const page = document.querySelector('html');

// page.appendChild(footer);


//If text
//var newHeading = document.createElement('h1');
//var h1Text= document.createTextNode('Sleepy head, back to bed!');