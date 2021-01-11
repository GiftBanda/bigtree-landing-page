
function changeImg(selected) {
    document.querySelector('.kungfu').src = selected;

}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}