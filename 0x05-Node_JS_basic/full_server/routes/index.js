import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const app = express();

// Homepage Route
app.get('/', AppController.getHomepage);

// Students Route
app.get('/students', StudentsController.getAllStudents);

// Students By Major Route
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default app;
