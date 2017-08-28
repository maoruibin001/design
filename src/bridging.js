Array.prototype.forEach = function(fn) {
    for (var i = 0; i < this.length; i ++) {
        fn(this[i], i)
    }
}

Array.prototype.map = function(fn) {
    let ret = [];
    let _this = this;
    this.forEach(function(e, i) {
        ret.push(fn.call(_this, e, i));
    })
    return ret;
}
var arr = [2, 3, 4]
arr.forEach(function(e, i) {
    e = e + 3;
})
console.log(arr);
console.log(arr.map(function(e) {
    return e + 1;
}))
