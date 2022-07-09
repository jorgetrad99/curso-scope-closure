function greeting() {
  let username = 'Oscar';

  function displayUserName() {
    return `Hello, ${username}`;
  }

  return displayUserName;
}

const g = greeting();
console.log(g); //Function definition
console.log(g()); //The returned result of the function
