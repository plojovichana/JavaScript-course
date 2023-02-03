//1.

// const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// const words = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
// function filter_Geese(str, geese) {
//     return str.filter(string => !geese.includes(string));
//   }

//   const filtriraneReci = filter_Geese(words, geese);
//   console.log(filtriraneReci); 




//2.


const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 50] }
  ];

  
  const averageScore = scores => scores.reduce((a, b) => a + b) / scores.length;
  
  students.forEach(student => {
    const avg = averageScore(student.scores);
  });
  
  const highPerformingStudents = students.filter(student => averageScore(student.scores) > 90);
  
  const result = highPerformingStudents.map(student => ({
    name: student.name,
    average: averageScore(student.scores)
  }));
  
  console.log(result);

