const a = 1734.87; 
const b = 8;
const c = 20; 
const d = a / (c * b * 3600);

function e(f) {
    const g = 9;
    const h = 17;
    const i = f.getDay(); 
    const j = f.getHours();
    return i >= 1 && i <= 5 && j >= g && j < h;
}

function k() {
    const l = new Date();
    let m = 0;

    for (let n = 1; n <= l.getDate(); n++) {
        const o = new Date(l.getFullYear(), l.getMonth(), n);
        if (o.getDay() === 0 || o.getDay() === 6) continue; 

        const p = new Date(o);
        p.setHours(9, 0, 0, 0);
        const q = new Date(o);
        q.setHours(17, 0, 0, 0);

        if (n === l.getDate()) {
            if (l < p) break;
            if (l < q) q.setTime(l.getTime());
        }

        m += (q - p) / 1000;
    }
    return m;
}

function r() {
    const s = new Date();
    let u = 0;
    if (e(s)) {
        const t = k();
        u = t * d;
    }
    document.querySelector('.t').textContent = `$${u.toFixed(4)}`;
}

setInterval(r, 10);
