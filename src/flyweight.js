/**
 * Created by lenovo on 2017/8/29.
 */
div.innerHTML = "${userinfo}";
var getDiv = (function () {
    var created = [];
    var create = function () {
        return document.body.appendChild(document.createElement('div'));
    }
    var get = function () {
        if (created.length) {
            return created.shift();
        } else {
            return create();
        }
    }
    /* 一个假设的事件，用来监听刚消失在视线外的div，实际上可以通过监听滚                                     动条位置来实现 */
    userInfoContainer.disappear(function (div) {
        created.push(div);
    })
})()
var div = getDiv();
div.innerHTML = "${userinfo}";