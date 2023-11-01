const fs = require('fs');
const path = require('path');

// Get the current directory of the JavaScript file
const currentDirectory = __dirname;

// Construct the full path to list1.txt and list2.txt in the same directory
const list1FilePath = path.join(currentDirectory, 'list1.txt');
const list2FilePath = path.join(currentDirectory, 'list2.txt');

// Read the content of list1.txt and list2.txt
const list1 = fs.readFileSync(list1FilePath, 'utf8').split('\n');
const list2 = fs.readFileSync(list2FilePath, 'utf8').split('\n');

// Generate list1-list2 (elements in list1 but not in list2)
const list1MinusList2 = list1.filter(item => !list2.includes(item));

// Generate list2-list1 (elements in list2 but not in list1)
const list2MinusList1 = list2.filter(item => !list1.includes(item));

// Generate list1 ∩ list2 (items in both list1 and list2)
const list1IntersectList2 = list1.filter(item => list2.includes(item));

console.log('list1-list2:', list1MinusList2);
console.log('list2-list1:', list2MinusList1);
console.log('list1 n list2:', list1IntersectList2);

// console.log('list1-list2:');
// list1MinusList2.forEach(item => console.log(item));

// console.log('\nlist2-list1:');
// list2MinusList1.forEach(item => console.log(item));

// console.log('\nlist1 ∩ list2:');
// list1IntersectList2.forEach(item => console.log(item));
