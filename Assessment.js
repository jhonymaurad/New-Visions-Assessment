const students = [
  {
    _id: { $oid: '5dc194991c9d4400004c640a' },
    name: 'Stuart Dent',
    grade: 6,
    scores: [
      { subject: 'Math', value: 85 },
      { subject: 'English', value: 65 },
      { subject: 'Science', value: 70 },
      { subject: 'Social Studies', value: 95 }
    ]
  },
  {
    _id: { $oid: '5dc1956a1c9d4400004c640c' },
    name: 'Christine Walls',
    grade: 7,
    scores: [
      { subject: 'Math', value: 95 },
      { subject: 'English', value: 80 },
      { subject: 'Science', value: 85 },
      { subject: 'Social Studies', value: 95 }
    ]
  },
  {
    _id: { $oid: '5dc196c71c9d4400004c640d' },
    name: 'Mirza Carney',
    grade: 8,
    scores: [
      { subject: 'Math', value: 55 },
      { subject: 'English', value: 85 },
      { subject: 'Science', value: 75 },
      { subject: 'Social Studies', value: 65 }
    ]
  },
  {
    _id: { $oid: '5dc1971e1c9d4400004c640e' },
    name: 'Ishmael Wade',
    grade: 6,
    scores: [
      { subject: 'Math', value: 50 },
      { subject: 'English', value: 90 },
      { subject: 'Science', value: 95 },
      { subject: 'Social Studies', value: 60 }
    ]
  },
  {
    _id: { $oid: '5dc197461c9d4400004c640f' },
    name: 'Aanya Legge',
    grade: 8,
    scores: [
      { subject: 'Math', value: 75 },
      { subject: 'English', value: 75 },
      { subject: 'Science', value: 75 },
      { subject: 'Social Studies', value: 75 }
    ]
  },
  {
    _id: { $oid: '5dc197651c9d4400004c6410' },
    name: 'Elsie-Rose Ramirez',
    grade: 7,
    scores: [
      { subject: 'Math', value: 65 },
      { subject: 'English', value: 95 },
      { subject: 'Science', value: 100 },
      { subject: 'Social Studies', value: 65 }
    ]
  },
  {
    _id: { $oid: '5dc1979b1c9d4400004c6411' },
    name: 'Reanne Simons',
    grade: 6,
    scores: [
      { subject: 'Math', value: 95 },
      { subject: 'English', value: 75 },
      { subject: 'Science', value: 60 },
      { subject: 'Social Studies', value: 80 }
    ]
  },
  {
    _id: { $oid: '5dc198051c9d4400004c6412' },
    name: 'Amelia-Rose Mullins',
    grade: 7,
    scores: [
      { subject: 'Math', value: 60 },
      { subject: 'English', value: 90 },
      { subject: 'Science', value: 90 },
      { subject: 'Social Studies', value: 85 }
    ]
  },
  {
    _id: { $oid: '5dc198291c9d4400004c6413' },
    name: 'Shae Paterson',
    grade: 8,
    scores: [
      { subject: 'Math', value: 65 },
      { subject: 'English', value: 70 },
      { subject: 'Science', value: 80 },
      { subject: 'Social Studies', value: 65 }
    ]
  },
  {
    _id: { $oid: '5dc1984a1c9d4400004c6414' },
    name: 'Kailan Quintero',
    grade: 6,
    scores: [
      { subject: 'Math', value: 65 },
      { subject: 'English', value: 80 },
      { subject: 'Science', value: 75 },
      { subject: 'Social Studies', value: 60 }
    ]
  },
  {
    _id: { $oid: '5dc198871c9d4400004c6415' },
    name: 'Rahim Williams',
    grade: 7,
    scores: [
      { subject: 'Math', value: 95 },
      { subject: 'English', value: 90 },
      { subject: 'Science', value: 75 },
      { subject: 'Social Studies', value: 70 }
    ]
  },
  {
    _id: { $oid: '5dc199101c9d4400004c6416' },
    name: 'Davey Barrow',
    grade: 8,
    scores: [
      { subject: 'Math', value: 50 },
      { subject: 'English', value: 70 },
      { subject: 'Science', value: 80 },
      { subject: 'Social Studies', value: 65 }
    ]
  },
  {
    _id: { $oid: '5dc199561c9d4400004c6417' },
    name: 'Rosa Cervantes',
    grade: 6,
    scores: [
      { subject: 'Math', value: 70 },
      { subject: 'English', value: 80 },
      { subject: 'Science', value: 90 },
      { subject: 'Social Studies', value: 100 }
    ]
  },
  {
    _id: { $oid: '5dc199731c9d4400004c6418' },
    name: 'Aneeka Leal',
    grade: 7,
    scores: [
      { subject: 'Math', value: 65 },
      { subject: 'English', value: 70 },
      { subject: 'Science', value: 75 },
      { subject: 'Social Studies', value: 80 }
    ]
  },
  {
    _id: { $oid: '5dc199991c9d4400004c6419' },
    name: 'Helin Holder',
    grade: 8,
    scores: [
      { subject: 'Math', value: 80 },
      { subject: 'English', value: 75 },
      { subject: 'Science', value: 70 },
      { subject: 'Social Studies', value: 65 }
    ]
  },
  {
    _id: { $oid: '5dc199ba1c9d4400004c641a' },
    name: 'Zayn Bains',
    grade: 6,
    scores: [
      { subject: 'Math', value: 65 },
      { subject: 'English', value: 95 },
      { subject: 'Science', value: 70 },
      { subject: 'Social Studies', value: 85 }
    ]
  },
  {
    _id: { $oid: '5dc199d71c9d4400004c641b' },
    name: 'Monty Bevan',
    grade: 7,
    scores: [
      { subject: 'Math', value: 75 },
      { subject: 'English', value: 55 },
      { subject: 'Science', value: 80 },
      { subject: 'Social Studies', value: 80 }
    ]
  },
  {
    _id: { $oid: '5dc199f61c9d4400004c641c' },
    name: 'Mia Hanson',
    grade: 8,
    scores: [
      { subject: 'Math', value: 75 },
      { subject: 'English', value: 75 },
      { subject: 'Science', value: 80 },
      { subject: 'Social Studies', value: 60 }
    ]
  },
  {
    _id: { $oid: '5dc19a281c9d4400004c641d' },
    name: 'Ewan Rosario',
    grade: 6,
    scores: [
      { subject: 'Math', value: 60 },
      { subject: 'English', value: 90 },
      { subject: 'Science', value: 55 },
      { subject: 'Social Studies', value: 90 }
    ]
  },
  {
    _id: { $oid: '5dc19a531c9d4400004c641e' },
    name: 'Gino Dickerson',
    grade: 7,
    scores: [
      { subject: 'Math', value: 75 },
      { subject: 'English', value: 70 },
      { subject: 'Science', value: 80 },
      { subject: 'Social Studies', value: 65 }
    ]
  }
];
//=============================================================================================================
// a) groupByGrade() ​ - should take in an array of student objects as a parameter,
// and return these records grouped by the ​grade

const groupByGrade = students => {
  let studentsByGrade = [];
  let six = [];
  let seven = [];
  let eigth = [];

  for (let student of students) {
    switch (student.grade) {
      case 6:
        six.push(student);
        break;
      case 7:
        seven.push(student);
        break;
      case 8:
        eigth.push(student);

      default:
        console.log('student needs a grade');
    }
  }
  studentsByGrade.push(six);
  studentsByGrade.push(seven);
  studentsByGrade.push(eigth);
  return studentsByGrade;
};

const studentsByGrade = groupByGrade(students);

console.log(studentsByGrade);

// =============================================================================================================

// Helper function that takes a student object and return the average
// using the value of each score in each subject
function average(student) {
  let scores = student.scores;
  let sum = 0;

  for (let subject of scores) {
    sum += subject.value;
  }
  return sum / scores.length;
}

// findLowestAverages() ​ - should take in an array of student objects as a parameter,
// and return the student with the lowest score average ​for each grade​.

const findLowestAverages = students => {
  const lowestInEachGrade = []; //will contain 3 student object, one for each grade

  for (let i = 0; i < students.length; i++) {
    let avg = 0;
    let lowestStudent = {};

    for (let j = 0; j < students[i].length; j++) {
      if (avg == 0) {
        lowestStudent = students[i][j];
        lowestStudent['average'] = average(lowestStudent);
        avg = lowestStudent.average;
      }
      if (average(students[i][j]) < avg) {
        lowestStudent = students[i][j];
        lowestStudent['average'] = average(lowestStudent);
        avg = lowestStudent.average;
      }
    }
    lowestInEachGrade.push(lowestStudent);
    avg = 0;
    lowestStudent = {};
  }

  return lowestInEachGrade;
};

console.log(findLowestAverages(studentsByGrade));
