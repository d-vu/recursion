// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var stringified = "";

  if (typeof obj === "boolean" || typeof obj === "number" || obj === null) {
    return '' + obj;
  }
  if (typeof obj === "undefined" || typeof obj === "function") {
    return;
  }
  if (obj.constructor === Object) {
    var listOfKeys = Object.keys(obj);
    for (var i = 0; i < listOfKeys.length; i++) {
      if (i === listOfKeys.length - 1) {
        if (typeof obj[listOfKeys[i]] === "object") {
          stringified += '"' + listOfKeys[i] + '":' + stringifyJSON(obj[listOfKeys[i]]);
        } else if (typeof obj[listOfKeys[i]] === "function" || typeof obj[listOfKeys[i]] === "undefined") {
          stringified += "";
        } else if (typeof obj[listOfKeys[i]] === 'string') {
          stringified += '"' + listOfKeys[i] + '":' + '"' + obj[listOfKeys[i]] + '"';
        } else {
          stringified += '"' + listOfKeys[i] + '":' + stringifyJSON(obj[listOfKeys[i]]);
        }
      } else {
        if (typeof obj[listOfKeys[i]] === "object") {
          stringified += '"' + listOfKeys[i] + '":' + stringifyJSON(obj[listOfKeys[i]]) + ',';
        } else if (typeof obj[listOfKeys[i]] === "function" || typeof obj[listOfKeys[i]] === "undefined") {
          stringified += "";
        } else if (typeof obj[listOfKeys[i]] === 'string') {
          stringified += '"' + listOfKeys[i] + '":' + '"' + obj[listOfKeys[i]] + '",';
        } else {
          stringified += '"' + listOfKeys[i] + '":' + stringifyJSON(obj[listOfKeys[i]]) + ',';
        }

      }
    }
    return '{' + stringified + '}';
  }

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        stringified += stringifyJSON(obj[i]);

      } else {
        stringified += stringifyJSON(obj[i]) + ',';
      }
    }
    return '[' + stringified + ']';
  }

  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
};