function greet(userName) {
  if (userName === "") {
    userName = "Mr. Nobody";
  }

  return `Hello ${userName}`;
}

alert(greet("Hugh"));
alert(greet("Eduardo"));
alert(greet("Shari"));
alert(greet(""));
