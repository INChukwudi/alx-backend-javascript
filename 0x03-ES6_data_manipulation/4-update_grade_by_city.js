export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (Array.isArray(studentsList)) {
    return studentsList.filter((x) => x.location === city)
      .map((x) => {
        const y = { ...x };
        const gradeObject = newGrades.filter((n) => n.studentId === y.id);
        if (gradeObject.length === 0) {
          y.grade = 'N/A';
        } else {
          y.grade = gradeObject[0].grade;
        }
        return y;
      });
  }

  return [];
}
