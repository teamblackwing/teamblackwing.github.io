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

function pop() {
    const h = document.getElementById('heart-box');
    
    // reset first
    h.classList.remove('on');
    
    // force a tiny delay so the transition triggers
    setTimeout(() => {
        h.classList.add('on');
    }, 10);

    // hide after 1 second
    setTimeout(() => {
        h.classList.remove('on');
    }, 1000);
}
