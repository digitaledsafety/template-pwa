// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service worker registered.', reg))
            .catch(err => console.log('Service worker registration failed.', err));
    });
}

// Online/Offline Status Tracking
const statusBadge = document.getElementById('status-badge');

function updateOnlineStatus() {
    if (navigator.onLine) {
        statusBadge.textContent = 'Online';
        statusBadge.className = 'status-badge online';
    } else {
        statusBadge.textContent = 'Offline';
        statusBadge.className = 'status-badge offline';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Initialize status badge
updateOnlineStatus();
