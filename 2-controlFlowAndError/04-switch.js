/* *******
? Switch
******* */

let friend = 'Bob';

switch (friend) {
    case 'Jack':
        console.log("Hey Jack, when are you going to the game tonight?");
       break;
       case 'Dave':
           console.log(" Hey Dave, how is your dog?");
       break;
       case 'Alex':
           console.log(" Hey Alex?");
       break;
       default:
       console.log(`I'm sorry, ${friend}, but do i know you?`);
       console.log('I\'m sorry, ', friend, ', but do i know you?');
}

/* ******
the bottom is the same ^^
***** */



/* ******
!A challenger aproaches!
Dessert Menu Time!
******* */



let dessert = 'dessert menu';

switch (dessert) {
    case 'pie':
        console.log("Pie, pie, me oh my!");
       break;
       case 'cake':
           console.log("Cake is great!");
       break;
       case 'ice cream':
           console.log("I scream for ice cream!");
       break;
       default:
       console.log(`Not on the ${menu} at the current time.`);
       console.log('Not on the, ', menu, ', at the current time');
}



/* ******
challenge!
****** */


let age = 26;

switch (true) {
    case (age >= 25):
        console.log('Yay! you can rent a car!')
       break;
       case (age >= 21):
           console.log('Yay! You can drink!')
       break;
       case (age >= 18):
           console.log('Yay! You can vote!')
       break;
       case (age <= 17):
           console.log('You are too young!')
        break;
       default:
       console.log('Not a number Bro!')
}




