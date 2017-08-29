var Events = function () {

    var listen, log, obj, one, remove, trigger, __this;

    obj = {};

    __this = this;

    listen = function (key, eventfn) {  //把简历扔盒子, key就是联系方式.

        var stack, _ref;  //stack是盒子

        stack = ( _ref = obj[key] ) != null ? _ref : obj[key] = [];

        return stack.push(eventfn);

    };

    one = function (key, eventfn) {

        remove(key);

        return listen(key, eventfn);

    };

    remove = function (key) {

        var _ref;

        return ( _ref = obj[key] ) != null ? _ref.length = 0 : void 0;

    };

    trigger = function () {  //面试官打电话通知面试者

        var fn, stack, _i, _len, _ref, key;

        key = Array.prototype.shift.call(arguments);

        stack = ( _ref = obj[key] ) != null ? _ref : obj[key] = [];

        if (stack.length === 0) return false;

        for (_i = 0, _len = stack.length; _i < _len; _i++) {

            fn = stack[_i];

            fn.apply(__this, arguments);

        }
        return true;
    }

    return {

        listen: listen,

        one: one,

        remove: remove,

        trigger: trigger

    }

}


//发布者

var adultTv = Events();

adultTv.listen('play', function (data) {

    console.log("今天是谁的电影" + data.name);
    return false;

});
adultTv.listen('play', function (data) {

    console.log("今天是谁的电影22" + data.name);

});

//发布者

console.log(adultTv.trigger('play', {'name': '麻生希'}))
// adultTv.trigger('play', {'name': '麻生希'})