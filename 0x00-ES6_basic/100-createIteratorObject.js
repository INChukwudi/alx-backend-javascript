export default function createIteratorObject(report) {
  const employeeArray = [];
  for (const department in report.allEmployees) {
    if (typeof department === 'string') {
      for (const employee of report.allEmployees[department]) {
        employeeArray.push(employee);
      }
    }
  }
  return employeeArray;
}
