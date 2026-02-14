//Count even numbers from 1-50
let count = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log(count);


// Print table of 7

const num = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// Check palindrome
const word = "level";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}

if (word === reversed) {
  console.log("Palindrome hai");
} else {
  console.log("Palindrome nahi hai");
}
