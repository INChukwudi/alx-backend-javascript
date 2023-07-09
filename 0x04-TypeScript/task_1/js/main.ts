// Student Interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create instances of Student interface
const student1: Student = {
    firstName: "Chukwudi",
    lastName: "Ike-Nwako",
    age: 40,
    location: "Nigeria",
}

const student2: Student = {
    firstName: "Chu",
    lastName: "Ike",
    age: 40,
    location: "Abuja",
}

// Create a array of those instances
const studentsList: Student[] = [student1, student2];

// Create table element
const table = document.createElement('table');
for (const student of studentsList) {
    // Create Parent Elements
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    // Create Text Nodes
    const nameCellText = document.createTextNode(student.firstName);
    const locationCellText = document.createTextNode(student.location);

    // Append Text Nodes to Cells
    nameCell.appendChild(nameCellText);
    locationCell.appendChild(locationCellText);

    // Append Cells to Table Row
    row.appendChild(nameCell);
    row.appendChild(locationCell);

    // Append Row to the Table
    table.appendChild(row);
}

// Append to body
document.body.appendChild(table);