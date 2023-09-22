import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase('./database.csv');

      response.status(200);
      response.write('This is the list of our students');
      const sortedFields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      for (const field of sortedFields) {
        const students = data[field];
        const count = students.length;
        response.write(`\nNumber of students in ${field}: ${count}. List: ${students.join(', ')}`);
      }

      response.end();
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase('./database.csv');
      const students = data[major] || [];

      response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
