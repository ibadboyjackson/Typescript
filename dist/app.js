"use strict";
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
function printId(id) {
    if (typeof id === 'number') {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
const a = 'Hello World';
const n = 89;
const c = false;
const d = ['a', 'b', 'c'];
const user = { firstname: 'Herman', lastname: 'jackson' };
const ab = (e) => {
};
const cb = (e) => {
};
function hero(id) {
    console.log(id);
}
function identity(a) {
    return a;
}
const aa = identity(8);
