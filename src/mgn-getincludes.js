/*

Megane Template

Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mgnInclude = factory();
    }
}(this, function() {

    function mgnInclude(t, s ,f) {

        this.id = document.getElementById(t.split("#")[1]);
        this.path = s;
        this.func = f != null ? f : function(){};

        this.getHtml(this.id, this.path, this.func)

    }

    mgnInclude.prototype.getHtml = function(target, src, func) {

        var request = new XMLHttpRequest();
        request.open("GET", src, true);

        request.onload = function(event) {

            if (request.readyState == 4) {
                if (request.status == 200) {

                    if( this.id ){
                        target.innerHTML = request.responseText;
                        func();
                    }

                } else {
                    alert('通信エラーが発生しました。\n恐れ入りますが、時間をおいてもう一度送信してください。');
                }
            }

        };

        request.onerror = function(event) {
            alert('通信エラーが発生しました。\n恐れ入りますが、時間をおいてもう一度送信してください。');
        };

        request.send(null);

    }

    return mgnInclude;

}));
