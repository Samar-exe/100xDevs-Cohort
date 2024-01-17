// 1:--- Program to print all even number in an array.
console.log("1st program start");
function printevennumsinarray(array) {
  const final = array.filter((eachitem) => eachitem % 2 === 0);
  return final;
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = printevennumsinarray(array);
console.log(result);

// 2:--- Program to print largest number in array.
console.log("\n2nd program start");
function maxnum(array) {
  var temp = 0;
  for (i = 0; i <= array.length; i++) {
    if (array[i] > temp) {
      temp = array[i];
    }
  }

  return temp;
}

array2 = [14, 19, 31, 10, 40, 80, 200, 500, 210, 330];
const result2 = maxnum(array2);
console.log(result2);

// 3:--- Program to print all male people;s first name given the complex object.
console.log("\nStart of 3rd program");
const obj = [
  {
    name: "Samar",
    gender: "male",
  },
  {
    name: "Akshar",
    gender: "male",
  },
  {
    name: "amy",
    gender: "female",
  },
];
const result3 = obj
  .filter((item) => item.gender === "male")
  .map((item) => item.name);
console.log(result3);
