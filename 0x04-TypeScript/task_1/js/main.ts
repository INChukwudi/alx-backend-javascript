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

