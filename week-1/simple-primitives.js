// 1:--- Program to greet a person given their first and last name:
function greet(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, good morning to you`;
}
const greet_usingname = greet("Samar", "Khan");
console.log(greet_usingname);

//2:--- Program that greets a person based on thier gender:
function gengreet(gender) {
  if (gender == "male") {
    console.log("Hello Sir");
  } else if (gender == "female") {
    console.log("Hello Ma'am");
  } else {
    console.log("Please enter your gender");
  }
}
const gender = "male";
gengreet(gender);

// 3.Program that counts 0-1000 and prints (for loop)
function count(num) {
  for (i = 0; i <= num; i++) {
    console.log(i);
  }
}
count(1000);
