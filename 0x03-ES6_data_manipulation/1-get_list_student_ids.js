export default function getListStudentIds(objArr) {
  if (Array.isArray(objArr)) {
    return objArr.map((x) => x.id);
  }

  return [];
}
