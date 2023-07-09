// Interface bearing the expected methods
interface EmployeeExpectedMethods {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// DirectorInterface extending the ExpectedMethods interface
interface DirectorInterface extends EmployeeExpectedMethods { }

// TeacherInterface extending the ExpectedMethods interface
interface TeacherInterface extends EmployeeExpectedMethods { }

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

    workDirectorTasks(): string {
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