document.addEventListener('DOMContentLoaded', function () {
    // WebSocket connection
    const socket = new WebSocket('ws://your-server-url'); // Replace with your WebSocket server URL

    socket.addEventListener('open', function (event) {
        console.log('WebSocket connection opened');
    });

    socket.addEventListener('message', function (event) {
        // Change background color on receiving a message
        const receivedColor = event.data;
        document.body.style.backgroundColor = receivedColor;
    });

    socket.addEventListener('close', function (event) {
        console.log('WebSocket connection closed');
    });

    // Handle tapping on the button
    document.getElementById('tapButton').addEventListener('click', function () {
        console.log('Button clicked!');
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        // Send the color to the other device
        socket.send(randomColor);

        // Change the background color locally
        document.body.style.backgroundColor = randomColor;
    });
});
