const students = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace"];
const subjects = ["Math", "Science", "English", "History", "Art", "PE"];
const studentGrades = [
  [85, 92, 78, 90, 88, 76],
  [91, 83, 87, 95, 80, 85],
  [78, 85, 90, 92, 75, 84],
  [82, 79, 88, 86, 90, 89],
  [88, 81, 92, 91, 84, 82],
  [90, 93, 89, 85, 88, 87],
  [76, 80, 85, 88, 82, 79] 
];

// Function to search for a specific grade in the matrix
function searchInMatrix(studentGrades, targetGrade) {
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < subjects.length; j++) {
      if (studentGrades[i][j] === targetGrade) {
        return students[i] + " scored " + targetGrade + " in " + subjects[j];
      }
    }
  }
  return "No student scored " + targetGrade;
}

// Print the student grades in a readable format
console.log("Student Grades:");
console.log(`Name        | ${subjects.join(" | ")}`);
console.log("-----------------------------------------------------------");

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].padEnd(10)} | ${studentGrades[i].join("     | ")}`);
}

// Search for a specific grade (e.g., 85)
console.log(searchInMatrix(studentGrades, 85));
