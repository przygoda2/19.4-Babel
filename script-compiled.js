'use strict';

// Zadanie 1

var a = 'hello';
var b = 'world';

var hello = a + ' ' + b;

//alert(hello);




// Zadanie 2  

var multiply = function multiply() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
  };
  
  //alert(multiply(5));




// Zadanie 3

//const average = (...args) => (console.log(args.length));

//const average = (...args) => {return args};
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
  
    var sum = 0;args.forEach(function (result) {
      return sum += result;
    });return sum / args.length;
  };
  
  /*alert(average(1)) // 1
  alert(average(1, 3)) // 2
  alert(average(1, 3, 6, 6)) // 4*/




// Zadanie 4 

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

//const average = (grades) => { let sum = 0; grades.forEach(result => sum += result); return sum / grades.length};

alert(average(grades).toString());




// Zadanie 5 

var data = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = data[2],
    lastname = data[4];

//	alert(`${firstname}, ${lastname}`);
