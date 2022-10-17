console.log("*-*-*-*-*--- Lets Chat! ---*-*-*-*-*");

// Name
let name = prompt("enter your name");
console.log("Oh! It's a nice name 👌🏻");
console.log("nice to meet you " + name);
console.log("My name is Alex.");

// Age
let age = prompt("enter your age");
if (age < 13) {
  console.log("this age is not valid !");
}
else if (age >= 100) {
  console.log("this age is not valid !");
}
else {
  console.log('Ok !');
}

// Email
let email = prompt("enter your email");
if (email.includes("@" && ".com")) {
  console.log("Ok, thanks.");
}
else {
  console.log("this is not a valid email ! (inculde @ and gmail.com or yahoo.com like this - something123@gmail.com,yahoo.com, etc.)");
}

// Phone number
let phone = prompt("enter your phone number");
if (phone.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0 || '+')) {
  console.log('Ok!');
}
else {
  console.log("this is not a valid phone number !");
}

// hobby/hobies
let hobby = prompt("what is your hobby/hobbies ?");
console.log('Ok!');

// favourite game 
let game = prompt("what is your favourite game ?");
if (game.includes("chess" || "Chess" || "CHESS" || "ChEsS")) {
  console.log("oh! my favourite game is also chess.");
}
else {
  console.log("Ok! It's a nice game");
}

// favourite movie
let movie = prompt("what is your favourite movie ?");
if (movie.includes("harry potter" || "matrix" || "robot 2.0" || "robot" || "robot 3.0" || "Harry Potter" || "Matrix" || "Robot 2.0" || "Robot" || "Robot 3.0" || "HARRY POTTER" || "MATRIX" || "ROBOT 2.0" || "ROBOT" || "ROBOT 3.0")) {
  console.log("me too!");
}
else {
  console.log("Ok! this is a nice movie.");
}

console.log("your name - " + name);
console.log("your age - " + age);
console.log("your email - " + email);
console.log("your phone number - " + phone);
console.log("your hobby/hobbies - " + hobby);
console.log("your favourite game - " + game)
console.log("your favourite movie - " + movie);

console.log("oh! I just remmember a urgent work. so, I have to go.");
console.log("Bye...Bye... 👋🏻");