//* IfElse
    
 

let weather = 75;

if ( weather < 70 ) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket needed!');
}


let name = 19;

if ( name < 26 ) {
    console.log('Hello, my last name is <Sumner>');
} else {
    console.log('Just joking, My name is <Jack>');
}


let name = 'aUTuMN';

//charAt(0) -- method
//[0] -- squarebracket notation

if(name.charAt(0) === name.charAt(0).toUpperCase()) {
    firstLetter = name.charAt(0) + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}




