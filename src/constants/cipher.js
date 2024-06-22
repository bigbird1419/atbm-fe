let e = 1303
let n = 8633
let d = 4519

function abModN(a, b, n) {
    let b2 = [];
    while (b > 0) {
        b2.push(b % 2);
        b = Math.floor(b / 2);
    }
    let f = 1;
    for (let i = b2.length - 1; i >= 0; i--) {
        f = (f * f) % n;
        if (b2[i] === 1) {
            f = (f * a) % n;
        }
    }
    return f;
}

const timNghichDao = (a, n) => {
    for(let i = 1; i < n; i++){
        if((a * i) % n === 1) return i
    }
    return -1
}

function convertStringToInt(mes) {
    let rs = [];
    for (let i = 0; i < mes.length; i++) {
        rs.push(mes.charCodeAt(i));
    }
    return rs;
}

export function en(mes) {
    let mesInt = convertStringToInt(mes);
    let mahoa = [];
    let rs = "";
    for (let m of mesInt) {
        let c = abModN(m, e, n);
        rs += c + " ";
        mahoa.push(c);
    }
    return { rs: rs.trim(), mahoa };
}

export function dy(mahoa) {
    let rs = "";
    for (let c of mahoa) {
        let m = abModN(c, d, n);
        rs += String.fromCharCode(m);
    }
    return rs;
}