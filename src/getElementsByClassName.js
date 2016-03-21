// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  //create empty array
  var elements = [];
  //per testing spec get document.body element
  var root = document.body;
  //push document.body element into array
  helper(root);

  //recursively push child elements and subsequent grandchildren elements that contains 'className'
  function helper(parent) {
    if (parent.classList.contains(className)) {
      elements.push(parent);
    }
    for (var i = 0; i < parent.children.length; i++) {
      helper(parent.children[i]);
    }
  }
  //return array
  return elements;
};