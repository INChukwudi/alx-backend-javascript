// DirectorInterface extending the ExpectedMethods interface
interface DirectorInterface {
    workDirectorTasks(): string;
    workFromHome(): string;
    getCoffeeBreak(): string;
}

// TeacherInterface extending the ExpectedMethods interface
interface TeacherInterface {
    workTeacherTasks(): string;
    workFromHome(): string;
    getCoffeeBreak(): string;
}

class Director implements DirectorInterface {
    getCoffeeBreak(): string {
        return 'Working from home';
    }

    workDirectorTasks(): string {
        return 'Getting a coffee break';
    }

    workFromHome(): string {
        return 'Getting to director tasks';
    }

}

class Teacher implements TeacherInterface {
    getCoffeeBreak(): string {
        return 'Cannot work from home';
    }

    workTeacherTasks(): string {
        return 'Cannot have a break';
    }

    workFromHome(): string {
        return 'Getting to work';
    }

}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    if (!Number.isNaN(salary) && salary < 500) {
        return new Teacher();
    }

    return new Director();
}

// function to check if employee is a Director instance
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// function to execute methods based on the type of the employee passed in
function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
        return;
    }

    (employee as Teacher).workTeacherTasks();
}

// subjects type
type Subjects = 'Math' | 'History';

// teachClass function that returns the class for today
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') return 'Teaching Math';

    return 'Teaching History';
}

