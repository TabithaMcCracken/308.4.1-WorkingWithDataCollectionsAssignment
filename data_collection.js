// Assignment 308.4.1 Working with Data Collections
//Part 1 Refactoring Old Code
// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

let cell = '';
let row12 = '';
let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
for (const char of csvData){
    if (char !== ',' && char !== '\n'){
        cell += char;
    } 
    if(char ===','){
        row12+=cell;
        cell = ""; //Clears the cell
    }
    if(char === `\n`){
        row12 += cell;
        console.log(row12);
        cell = ""; //Clears the cell
        row12 = ""; //Clears the row
    }

}
// Prints the last row
if (cell !== '') {
    row12 += `${cell}`;
    console.log(row12);
  }

//Part 2 Expanding Functionality
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

const testData =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

const csv =
  'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

let row = testData.split('\n');

const table = [];

row.forEach((r) => {
    let rowData = r.split(',');
    table.push(rowData);
 });
 console.log(table)


//Part 3 Transforming Data
// For each row of data in the result array produced by your code above, 
// create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, 
// you do not need to create an object for the heading row itself.
 
 const people = [];
 const keys = [];
 const title = table.shift();
 title.forEach((t) => keys.push(t.toLowerCase()));
 console.log(title);

 table.forEach(row => {
    const person = {};
    for (let i = 0; i<row.length; i++){
        person[keys[i]] = row[i];
    }
    people.push(person);
 });
 console.log(people)


 // Part 4 Sorting and Manipulating Data

 // Remove the last element from the sorted array.
 people.pop();
 console.log(people);

 // Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
 const p= { id: "48", name: "Barry", occupation: "Runner", age: "25" };
 people.splice(1,0,p);
 console.log(people);

 // Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
 const q = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
 people.push(q);
 console.log(people);

 //Finally, use the values of each object within the array and the array’s 
 // length property to calculate the average age of the group. 
 // This calculation should be accomplished using a loop
let sum =0;
people.forEach(person =>{
    sum += Number(person.age);
})
const averageAge = sum / people.length;
console.log("Average age: " + averageAge);


//Part 5 Full Circle
// As a final task, transform the final set of data back into CSV format.
const row1 = Object.keys(people[0]);
let convertToCSV = row1.join(',') + '\\n';
people.forEach((person, index) => {
    for (let i = 0; i < row1.length; i++){
        if (i === row1.length - 1){
            if (index === people.length - 1 && i === row1.length -1){
                convertToCSV += `${person[row1[i]]}`;
            } else {
            convertToCSV = convertToCSV.concat(`${person[row1[i]]}\\n`);
            }
        } else {
            convertToCSV += `${person[row1[i]]},`;
        }
    }
}
);

console.log(convertToCSV);