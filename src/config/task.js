"use strict";
function math(calculate) {
    return calculate.firstNo + calculate.secondNo;
}
let add = { firstNo: 50, secondNo: 100 };
console.log(math(add));
