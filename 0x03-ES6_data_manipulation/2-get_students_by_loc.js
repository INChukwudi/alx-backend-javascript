export default function getStudentsByLocation(studentList, city) {
  if (Array.isArray(studentList)) {
    return studentList.filter((x) => x.location === city);
  }

  return [];
}
