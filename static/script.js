// House color changing code
const colors = ['#e8d8b7', '#d4c19c', '#c0aa7f', '#ac9362'];
const mansion = document.querySelector('.mansion');
let colorIndex = 0;

setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    mansion.style.backgroundColor = colors[colorIndex];
}, 3000);