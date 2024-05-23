/**
 * Prototype chain traversal
 * Keep the primitive values in mind. They're essentially obj you can call methods on. But you have to convert them to their respective obj respectivly.
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {

    if(obj === null) return false;
    if(obj === undefined) return false;
    if(typeof classFunction !== "function") return false;

    if(typeof obj === "number") {
        // console.log('num')
        obj = new Number(obj);
    }

    if(typeof obj === "string") {
        // console.log('str')
        obj = new String(obj);
    }

    if(typeof obj === "boolean") {
        // console.log('bool');
        obj  = new Boolean(obj);
    }

    while(obj) {
        if(obj.__proto__ === classFunction.prototype) return true;
        obj = obj.__proto__;
    }
    return false;
};


/**
 * Prototype chain traversal.
 * this is donig the same thing as above but instead of going through __proto__ we are getting to the prototype 
 * with getPrototypeOf method. With __proto__ we have to convert any primitive values to their respective obj first.
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf0 = function(obj, classFunction) {

    while(obj != null) {
        if(obj.constructor === classFunction) return true;
        obj = Object.getPrototypeOf(obj);
    }
    return false;
};