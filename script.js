const b = document.getElementById('bn-v');
const d = document.getElementById('b');

b.addEventListener('click', () => {
    d.classList.toggle('d');
    b.textContent = d.classList.contains('d') ? 'LIGHT_VIBE' : 'DARK_VIBE';
});

function go(src) {
    const o = document.getElementById('v');
    const i = document.getElementById('z');
    i.src = src;
    o.classList.add('on');
}

function off() {
    document.getElementById('v').classList.remove('on');
}

function pop(e) {
    const clr = ['#ff0000', '#ff69b4', '#ff1493', '#db7093'];
    for (let i = 0; i < 12; i++) {
        const h = document.createElement('div');
        h.className = 'p';
        h.innerHTML = '❤';
        h.style.left = e.clientX + 'px';
        h.style.top = e.clientY + 'px';
        h.style.color = clr[Math.floor(Math.random() * clr.length)];
        
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200 - 100;
        h.style.setProperty('--x', `${x}px`);
        h.style.setProperty('--y', `${y}px`);
        
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 1000);
    }
}const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btn.textContent = document.body.classList.contains('dark-mode') ? 'LIGHT_MODE' : 'DARK_MODE';
});

function openImage(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lb.classList.add('active');
}

