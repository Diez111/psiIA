// Referencias
const chatHeader = document.querySelector('.chat-header');
const chatBox = document.querySelector('.chat-box');
const inputText = document.getElementById('inputText');
const sendButton = document.getElementById('sendButton');

// Función para ocultar el texto inicial y activar el chat
function startChat() {
    chatHeader.style.opacity = '0'; // Oculta el encabezado gradualmente
    chatHeader.style.visibility = 'hidden'; // Evita la interacción
}

// Función para agregar un mensaje al chat
function addMessage(text, type) {
    const message = document.createElement('div');
    message.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight; // Desplazar al final
}

// Evento para enviar mensajes
sendButton.addEventListener('click', () => {
    const userInput = inputText.value.trim();
    if (userInput) {
        if (chatHeader.style.visibility !== 'hidden') startChat(); // Inicia el chat si no se ha hecho
        addMessage(userInput, 'user'); // Agrega mensaje del usuario
        inputText.value = ''; // Limpia el input
    }
});
