/*eslint-disable*/
function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter(student => student.location === city);
  const result = cityStudents.map(student => {
    const studentCopy = { ...student };
    let foundGrade = false;
    for (const gradeObj of newGrades) {
      if (gradeObj.studentId === student.id) {
        studentCopy.grade = gradeObj.grade;
        foundGrade = true;
        break;
      }
    }
    
    if (!foundGrade) {
      studentCopy.grade = 'N/A';
    }
    
    return studentCopy;
  });
  
  return result;
}

export default updateStudentGradeByCity;