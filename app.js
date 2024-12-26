// chapter no 14-16  arrays

// question no 1
//1

// let studentNames = []

// studentNames .push("Salman");
// studentNames .push("Sami")

// document.write("student Names: " , studentNames );
// document.write("Total Students: " , studentNames.length);

//2

// let studentNames = new Array();

// studentNames.push("salman");
// studentNames.push("sami");

// document.write("student names: " + studentNames );
// document.write(" Total student: " + studentNames.length);

//3 

// let vegitables = []

// vegitables.push("potato");
// vegitables.push("tomato");
// vegitables.push("onion");

// document.write("vegitables names: " + vegitables);
// document.write(" total vegitables: " + vegitables.length);

//4

// let numbers = []

// numbers.push("10 , 20")
// numbers.push(" 30 , 40")

// document.write("number: " + numbers);
// document.write(" total number: " + numbers.length);

//5

// let boolean = []

// boolean.push("true")
// boolean.push(" false")

// document.write("booleab: " + boolean);
// document.write(" total boolean: " + boolean.length);

//6

// let names = []
// let age = []
// let boolean = []

// names.push("salman");
// age.push("27");
// boolean.push("true");

// document.write("info: " + names + age + boolean);

//7

// // Step 1: Declare and initialize the array
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// // Step 2: Create a message to display the qualifications
// let message = "<h1>Available Education Qualifications in Pakistan:</h1>";
// for (let i = 0; i < qualifications.length; i++) {
//     message += (i + 1) + ". " + qualifications[i] + "<br>";
// }

// // Step 3: Display the message in the browser
// document.write(message);

//8

// let student_1 = ["salman"]
// let student_2 = ["sami"]
// let student_3 = ["sajid"]

// let score_1 = [325]
// let score_2 = [430]
// let score_3 = [295]

// const totalmarks = 500;

// percentage1 = (score_1 / 500) * 100
// percentage2 = (score_2 / 500) * 100
// percentage3 = (score_3 / 500) * 100

// document.write("score of salman 325: " + percentage1 + "% " );
// document.write(" score if sami 430: " + percentage2 + "% ");
// document.write(" score of sajid 295: " + percentage3 + "%");

//Question-3
// // Initialize an array with student scores
// var studentScores = [320, 230, 480, 120];

// // Display the original array of student scores
// document.write("Original Scores: " + studentScores + "<br>");

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b; // This ensures the array is sorted numerically
// });

// // Display the sorted array
// document.write("Sorted Scores in Ascending Order: " + studentScores + "<br>");


//Question-4

// // Initialize an array with city names
// var cities = ["Karachi", "Lahore", "Faisalabad", "Islamabad", "Nawabshah", "Sukkur"];

// // Copy 3 elements from cities array to selectedCities array
// var selectedCities = cities.slice(0, 3);  // `slice(0, 3)` copies elements from index 0 to index 2

// // Display the original cities array
// document.write("Cities Array: " + cities + "<br>");

// // Display the selected cities array
// document.write("Selected Cities Array: " + selectedCities + "<br>");


//Quesion-5

// Initialize the array with words
//var arr = ["This ", " is ", " Sami ", " Hussain"];

// Use the join() method to create a single string
//var result = arr.join("");  // Join elements with an empty string to form one sentence

// Display the resulting string
//document.write("Resulting String: " + result + "<br>");


//Question-6
 // Create an empty array to act as the stack
//  let stack = [];

//  // Add elements one by one (Last In)
//  stack.push("keyboard");
//  stack.push("mouse");
//  stack.push("printer");
//  stack.push("monitor");

//  // Remove and display elements one by one (First Out)
//  document.write("Out: " + stack.pop() + "<br>"); // monitor
//  document.write("Out: " + stack.pop() + "<br>"); // printer
//  document.write("Out: " + stack.pop() + "<br>"); // mouse
//  document.write("Out: " + stack.pop() + "<br>"); // keyboard

//  console.log(stack);


