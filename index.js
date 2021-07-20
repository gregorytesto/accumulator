let studentsArr = [
    {
      "name": "Leanne Graham",
      "GPA": 3.7,
      "role": "Student"
    },
    {
      "name": "Ervin Howell",
      "GPA": 2.9,
      "role": "Hall Monitor"
    },
    {
      "name": "Clementine Bauch",
      "GPA": 3.4,
      "role": "Teacher's Assistant"
    },
    {
      "name": "Patricia Lebsack",
      "GPA": 4.0,
      "role": "Student"
    },
    {
      "name": "John Dietrich",
      "GPA": 3.7,
      "role": "Hall Monitor"
    },
    {
      "name": "Dennis Schulist",
      "GPA": 3.0,
      "role": "Teacher's Assistant"
    }
];

/**
 * 
 */

function stringNames(students){

}
stringNames(studentsArr);

/**
 * 
 */

function arrayNames(students){

}
arrayNames(studentsArr);

/**
 * 
 */

function findByName(students, name){

}
findByName(studentsArr, "Clementine Bauch");

/**
 * 
 */

function findAverageGPA(students){

}
findAverageGPA(studentsArr);

/**
 * 
 */

function filterByRole(students, role){

}
filterByRole(studentsArr, "Hall Monitor");

// Name Combine String > "Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, John Dietrich, Dennis Schulist"
// Name Map Return array of names > ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "John Dietrich", "Dennis Schulist"]
// Name Find return student with given name > { "name": "Clementine Bauch", "GPA": 3.4, "role": "Teacher's Assistant" }
// GPA- Average > 3.45
// Role Filter
// > [
//     {
//         "name": "Ervin Howell",
//         "GPA": 2.9,
//         "role": "Hall Monitor"
//     },{
//         "name": "John Dietrich",
//         "GPA": 3.7,
//         "role": "Hall Monitor"
//   }
// ]
