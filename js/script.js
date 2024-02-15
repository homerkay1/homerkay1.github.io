document.addEventListener('DOMContentLoaded', function () {
    // Your color-music coordination logic goes here

    // Example: Change background color on button click
    document.getElementById('musicPlayer').addEventListener('click', function () {
        changeBackgroundColor();
    });
});

function changeBackgroundColor() {
    // Example: Generate a random color and set it as the background color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
