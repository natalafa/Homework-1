function fn1(x) {
    return x * x;
}
function fn2(y) {
    return y + y;
}

function fn3(z) {
    return z * 2;
}

function composer(a, b, c) {
    return function(x) {
        return fn1(fn2(fn3(x)));
    }
}

var combo = composer(fn1, fn2, fn3);


console.assert(combo(9)===1296);
console.assert(combo(0)===0);
console.assert(combo(1)===16);
console.assert(combo(-1)===16);
console.assert(combo(1.5)===36);