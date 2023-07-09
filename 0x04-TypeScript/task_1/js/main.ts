// Teacher interface
interface Teacher {
    readonly firstname: string;
    readonly lastname: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: boolean | string | number;
}

// Extending the Teacher class
interface Directors extends Teacher {
    numberOfReports: number;
}

//  Print Teacher Function Interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

//  Printing teachers
const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface StudentInterface {
    firstname: string;
    lastname: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstname: string, lastname: string): StudentInterface;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstname;
    }
}
