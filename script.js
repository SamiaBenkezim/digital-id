function updateAvatar(val) {
    const avatar = document.getElementById('liveAvatar');
    avatar.src = `https://api.dicebear.com/7.x/adventurer/svg?seed=${val || 'Lucky'}`;
}

function changeTheme(color) {
    document.documentElement.style.setProperty('--neon', color);
}

document.getElementById('identityForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        user: document.getElementById('user').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        social: document.getElementById('social').value,
        bio: document.getElementById('bio').value,
        role: document.getElementById('role').value,
        sync: document.getElementById('sync').value,
        color: document.getElementById('theme').value,
        avatar: document.getElementById('liveAvatar').src,
        nid: "NID-" + Math.random().toString(36).substr(2, 9).toUpperCase()
    };

    localStorage.setItem('neuralData', JSON.stringify(data));

    document.querySelector('.submit-btn').innerText = "UPLOADING...";
    setTimeout(() => window.location.href = 'display.html', 1000);
});
