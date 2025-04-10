// PArt one//
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
const studentJson = JSON.stringify(student);
console.log(studentJson);

const studentFromJson= JSON.parse(studentJson);
console.log(studentFromJson);
console.log(student);

// Part three//
const {name: studentName, courses} = student;
console.log(studentName); 
console.log(courses); 

const scores = [85, 90, 78, 92, 88];
const [firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore); 






