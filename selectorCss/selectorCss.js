//querry selector() only returns the first match
var elements = document.querySelector("li.hot");
elements.className = "cool";

// querrySelectorAll() returns a nodeList
//the second matching element (the third list item) is selected and changed
var els = document.querySelectorAll("li.hot");
els[1].className = "cool";
console.log(elements);
console.log(els);
