//Hoisting

// Hoisting does not exist, its an illusion. code doesn't actually get moved. 
// Js reads through code twice remembering left hand side of variables.


scissors = 'blue';
console.log(scissors);

var scissors;

b();
console.log(a);

function b(){
    console.log('this is all hoisted');
}

var a = 'this is all hoisted';


