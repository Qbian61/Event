window.Event = (function() {
    function Event() {
        this._events = {};
    }
    Event.prototype = {
        emit: function(name, obj) {
            if(name in this._events) {
                for(var i = 0, len = this._events[name].length; i < len; ++ i) {
                    this._events[name][i](obj);
                }
            }
        },
        on: function(name, callback) {
            if(!(name in this._events)) this._events[name] = [];
            this._events[name].push(callback);
        },
        remove: function(name, callback) {
            this._events[name] ? this._events[name].splice(this._events[name].indexOf(callback), 1) : void 0;
        },
        removeAll: function(name) {
            this._events[name] = [];
        }
    };
    return Event;
})();