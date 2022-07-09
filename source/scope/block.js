/* function fruits() {
  if (true) {
    var fruit1 = 'Apple'; //function scope
    let fruit2 = 'Kiwi'; //block scope
    const fruit3 = 'Banana'; //block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits(); */

function fruits() {
  if (true) {
    var fruit1 = 'Apple'; //function scope
    let fruit2 = 'Kiwi'; //block scope
    const fruit3 = 'Banana'; //block scope

    //Here we can access variables with block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();
