let alumniList = [
  "Alex",
  "David",
  "Eduardo",
  "Hugh",
  "Johan",
  "Johannes",
  "Jörg",
];

let emptyArr = [];

for (let i = 0; i < alumniList.length; i++) {
  console.log(`#${i + 1} ${alumniList[i]}`);
}

function logClass(alumniList) {
  if (emptyArr.length === 0) {
    console.log("This class is empty");
  }
  return alumniList;
}

console.log(logClass(emptyArr));
