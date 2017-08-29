/**
 * Created by lenovo on 2017/8/29.
 */
const Event = function () {
    let eventDict = {}, __this = this;

    let listen = function (key, fn, times) {
        if (typeof fn !== 'function') return;
        eventDict[key] = eventDict[key] != null ? eventDict[key] : [];
        eventDict[key].push(fn);
        if (times) {
            if (isNaN(Number(times))) {
                eventDict[key].times = 0;
                return;
            }
            eventDict[key].times = Number(times);
        }

    };

    let once = function (key, fn) {
        listen(key, fn, 1);
    };

    let trigger = function (key) {
        if (!eventDict[key]) return false;
        for (let i = 0; i < eventDict[key].length; i ++) {
            let fn = eventDict[key][i];
            if (eventDict[key].times && eventDict[key].times !== 0) {
                eventDict[key].times --;
                eventDict[key][i].apply(__this);
            } else if (eventDict[key].times === 0) {
                eventDict[key] = [];
                return false;
            }else {
                eventDict[key][i].apply(__this);
            }
        }

        return true;
    };

    let remove = function (key) {
        if (eventDict[key]) {
            eventDict[key] = null;
            return true;
        } else {
            return false;
        }

    };

    return {
        listen: listen,
        once: once,
        trigger: trigger,
        remove: remove,

    }
};

let events = Event();

events.listen('play', function () {
    console.log('i am play');
});

events.listen('play', function () {
    console.log('i am trigger once');
}, '5');

let ret = events.trigger('play');
let ret2 = events.trigger('play');
let ret3 = events.trigger('play');
console.log('ret: ', ret);
console.log('ret2: ', ret);
console.log('ret3: ', ret3);
