function greet(userName) {
  result = `Hello ${userName}`;

  if (userName === "") {
    console.log("Hello Mr.Nobody");
  }
  return result;
}

console.log(greet("Hugh"));
console.log(greet("Eduardo"));
console.log(greet("Shari"));
console.log(greet(""));
