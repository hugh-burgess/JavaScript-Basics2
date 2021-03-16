function isEmptyString(a) {
  if (a === "") {
    return true;
  } else {
    return false;
  }
}

console.log(isEmptyString("hello"));
console.log(isEmptyString(""));

function isIncluded(a, b) {
  if (a.includes("us") && b.includes("us")) {
    return true;
  } else {
    return false;
  }
}

console.log(isIncluded("house", "mouse"));
console.log(isIncluded("mouse", "dog"));

function firstCharacter(a) {
  return a.charAt(0);
}

console.log(firstCharacter("house"));

function lastCharacter(b) {
  return b.charAt(b.length - 1);
}

console.log(lastCharacter("house"));

function capitalize(c) {
  return c[0].toUpperCase() + c.slice(1);
}

console.log(capitalize("house"));
