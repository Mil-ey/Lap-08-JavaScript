
// This code demonstrates the use of objects, JSON, destructuring, cloning, and methods in JavaScript.//

// Part one//
// In this part i will create a student object with properties and methods.//
// I will also demonstrate how to access and display the properties of the object.//
const student = {
    name: "Milli Weldu",   
    age: 20,
    isEnrolled: true,
    courses: ["Math", "Science", "History"],
};
function displayStudentInfo(student) {
    console.log("Student Name: " + student.name);
    console.log("Age: " + student.age);
    console.log("Enrolled: " + student.isEnrolled);
    console.log("Courses: " + student.courses.join(", "));
}

console.log(student.name);
console.log(student.age);
displayStudentInfo(student);


// Part two//
// In this part i will convert the student object to JSON and back to an object.//
const studentJson = JSON.stringify(student);
console.log(studentJson);

const studentFromJson= JSON.parse(studentJson);
console.log(studentFromJson);
console.log(student);

// Part three//
// In this part i will demonstrate destructuring of objects and arrays.//
const {name: studentName, courses} = student;
console.log(studentName); 
console.log(courses); 

const scores = [85, 90, 78, 92, 88];
const [firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore); 


// Part four//
// In this part i will demonstrate cloning an object and modifying it.//


const clonedStudent = {...student};
console.log(clonedStudent);
clonedStudent.graduationYear = 2027;
console.log(clonedStudent);

const newCourses = [...student.courses, "Art", "Music"];
console.log(newCourses);
const updatedStudent = {...student, courses: newCourses};
console.log(updatedStudent);  


// Part five//
// In this part i will demonstrate adding methods to an object.//
// I will also demonstrate how to use the methods to manipulate the object.//

student.addCourse = function(course) {
    this.courses.push(course);
}
student.addCourse("Geography");
console.log(student.courses);


student.totalCourses = function() {
    return this.courses.length;
}
console.log(student.totalCourses()); 

// Bonus part//
// In this part i will demonstrate how to calculate the average score from an array of scores.//
// I will also demonstrate how to use the reduce method to calculate the average score.//
const averageScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;
console.log(averageScore); 















