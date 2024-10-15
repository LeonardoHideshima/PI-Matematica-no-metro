const notification = document.getElementById('notification');
const acceptBtn = document.getElementById('acceptBtn');
const closeBtn = document.getElementById('closeBtn');


function hideNotification() {
    notification.classList.add('hidden');
    localStorage.setItem('notificationAccepted', 'true'); 
}


acceptBtn.addEventListener('click', hideNotification);
closeBtn.addEventListener('click', hideNotification);


window.onload = function() {
    if (localStorage.getItem('notificationAccepted') === 'true') {
        notification.classList.add('hidden'); 
    }
};
