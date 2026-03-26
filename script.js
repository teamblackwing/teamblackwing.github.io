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
    
    h.classList.remove('on');
    
    setTimeout(() => {
        h.classList.add('on');
    }, 10);

    setTimeout(() => {
        h.classList.remove('on');
    }, 1000);
}

const b = document.getElementById('bn-v');

b.addEventListener('click', () => {
    document.body.classList.toggle('d');
    
    b.textContent = document.body.classList.contains('d') ? 'Light Mode' : 'Dark Mode';
});
