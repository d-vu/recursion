// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var stringified = "";

  if (typeof obj === "object") {
    for (var key in obj) {
      if (typeof obj[key] === "object") {
        stringified += '"' + key + '":' + stringifyJSON(obj[key]);
      } else if (typeof obj[key] === "function") {
        stringified += "";
      } else if (typeof obj[key] === 'string') {
        stringified += '"' + key + '":' + '"' + obj[key] + '"';
      } else {
        stringified += '"' + key + '":' + obj[key];
      }
    }
    return '{' + stringified + '}';
  }

  if (Array.isArray(obj)) {
    for (var i = 0, i < obj.length; i++) {
      if (i === obj.length - 1) {
        stringified += stringifyJSON(obj[i]);

      } else {
        stringified += stringifyJSON(obj[i]) + ',';
      }
    }
    return '[' + stringified + ']';
  }

  //TODO: implement other data types passed into an array
  //boolean
  //number
  //string
  //nulls



};