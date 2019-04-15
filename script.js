// Zadanie 1

let a ='hello';
let b = 'world';

const hello = `${a} ${b}`;

//alert(hello);



// Zadanie 2 

const multiply =  (x = 1 ,y = 1) =>  {return x * y}

//alert(multiply(5));




// Zadanie 3 
         
let average = (...items) => {
    let sum = 0;
    items.forEach(item=>
    sum +=item );
    return sum/items.length;
};

console.log (average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6)); 




// Zadanie 4 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

let gradesAverage = (grades)=> {
    let sum= 0;
    grades.forEach(grad=>
        sum +=grad);
    return sum/grades.length
};

console.log(gradesAverage(grades));




// Zadanie 5 

const data = [1, 4, 'Iwona', false, 'Nowak'];

let  [, , firstname,  ,lastname] = data;

//	alert(`${firstname}, ${lastname}`);