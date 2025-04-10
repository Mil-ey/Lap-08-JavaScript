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

