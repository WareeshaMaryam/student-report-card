
// to Array of all students.

const students = [
    {
        name: "Warisha",
        id: "001",
        class: "10th Grade",
        subjects: [
            { subjectName: "Physics", marks: 95 },
            { subjectName: "Chemistry", marks: 85 },
            { subjectName: "Science", marks: 80 }
        ]
    },
    {
        name: "Arisha Rubab",
        id: "002",
        class: "10th Grade",
        subjects: [
            { subjectName: "Physics", marks: 90 },
            { subjectName: "Chemistry", marks: 80 },
            { subjectName: "Science", marks: 70 }
        ]
    },
    {
        name: "Shujat Abbas",
        id: "003",
        class: "10th Grade",
        subjects: [
            { subjectName: "Physics", marks: 2 },
            { subjectName: "Chemistry", marks: 12 },
            { subjectName: "Science", marks: 11 }
        ]
    },
    {
        name: "Sufiyan",
        id: "004",
        class: "10th Grade",
        subjects: [
            { subjectName: "Physics", marks: 5 },
            { subjectName: "Chemistry", marks: 15 },
            { subjectName: "Science", marks: 16 }
        ]
    },
    {
        name: "Areeba",
        id: "005",
        class: "10th Grade",
        subjects: [
            { subjectName: "Physics", marks: 34 },
            { subjectName: "Chemistry", marks: 35 },
            { subjectName: "Science", marks: 55 }
        ]
    },
    {
        name: "Ali",
        id: "006",
        class: "10th Grade",
        subjects: [
            { subjectName: "Physics", marks: 45 },
            { subjectName: "Chemistry", marks: 55 },
            { subjectName: "Science", marks: 60 }
        ]
    }
];



//total marks of each student
function totalMarks(subjects) {
    let total = 0;
    for (let i = 0; i < subjects.length; i++) {
        total += subjects[i].marks;
    }
    return total;
}



// percentage of each student according total marks
function percentage(subjects) {
    return (totalMarks(subjects) / (subjects.length * 100)) * 100;
}


// Grade of each student according percentafe
function grade(percentage) {
    if (percentage >= 80) return "A+";
    else if (percentage >= 70) return "A";
    else if (percentage >= 60) return "B";
    else if (percentage >= 50) return "C";
    else return "Fail";
}



// //perform loop for students one by one according user input
const inputName = prompt(`Enter your name:`);
const inputId = prompt(`Enter your student ID:`);

let student = null;
for (let i = 0; i < students.length; i++) {
    if ((students[i].name === inputName) && students[i].id === inputId) {
        student = students[i];
        break;
    }
}



//Now print it
let result = document.getElementById('report');
if (student) {
    const studentPercentage = percentage(student.subjects);
    const message = `
Student Report Card:
Name: ${student.name}
ID: ${student.id}
Class: ${student.class || 'N/A'}
Total Marks: ${totalMarks(student.subjects)}
Percentage: ${studentPercentage.toFixed(2)}%
Grade: ${grade(studentPercentage)}
    `;
    result.innerText = message;
} else {
    alert("Error: Student not found. Please check the name and ID.");
}

 