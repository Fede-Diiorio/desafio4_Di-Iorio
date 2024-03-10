// JS del lado del cliente (browser)
const socket = io();

const getCurrentMessage = () => document.querySelector('#inputMessage').value

socket.on('message', (message) => {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${message.socketId} ==> ${message.text}`

    document.querySelector('#chatBox').appendChild(paragraph);
})

document.querySelector('#sendMessage').addEventListener('click', () => {
    socket.emit('new-message', { socketId: socket.id, text: getCurrentMessage() });
})



