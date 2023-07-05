export default function getStudentIdsSum(studentsList) {
  if (Array.isArray(studentsList)) {
    return studentsList.reduce((acc, curr) => acc + curr.id, 0);
  }

  return 0;
}
