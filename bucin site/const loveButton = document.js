const loveButton = document.getElementById('loveButton');
const loveMessage = document.getElementById('loveMessage');

loveButton.addEventListener('click', function() {
    loveMessage.textContent = "Aku sayang kamu selamanya! 💕";
    loveMessage.classList.remove('hidden');
    setTimeout(() => {
        loveMessage.style.opacity = 1;
    }, 100);
});
