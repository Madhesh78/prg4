// Complete the function using object destructuring.

function getStudentDetails(students) {
    const { name, age, grade } = students;
    return `Name: ${name}, Age: ${age}, Grade: ${grade}`;
}

module.exports = getStudentDetails;
