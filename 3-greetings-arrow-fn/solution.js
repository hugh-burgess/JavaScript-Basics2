const greet = (userName) => {
  if (userName === "") {
    userName = "Mr. Nobody";
  }

  return `Hello ${userName}`;
};

console.log(greet(""));
console.log(greet("Hugh"));
console.log(greet("Eduardo"));
console.log(greet("Shari"));
