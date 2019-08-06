 /* ******
 ? Scope
 ********/

 // Local Scope: Indiana
 // Global Scope: The World/Earth

 /* Scope refers to where a variable is defined and accessivle.
    - Js has function scope: each func creates a new scope
    - Scope determines the visibility of these variables
    - Variables defined inside a func are not visible from outsidethe func.

*/


var x = 12;

function scope() {
    var x =33;
    console.log('inside function', x);
}

scope();
console.log('outside function', x);


var y = 12;

function scopeY() {
    var y =33;
    console.log(y);
}

scopeY();
console.log(y);


  // Var vs Let.

  var x = 12;
  function varTest() {
      var x = 33;
      if (1 == 1) {
          var x = 45;
          console.log(x)
      }
      console.log(x)
  };

  varTest();
  console.log(x);

//* keeps the content from bleeding into the rest of the scope *//

  function letTest() {
      var x = 33;
      if (true) {
          let x = 45;
          console.log(x);
      }
      console.log(x);
  }

  letTest();
  console.log(x);


  function constTest() {
    const scope = 1;
    if (true) {
      const scope = 2;
      console.log(scope);
    }
    console.log(scope);
  }
  constTest();
  