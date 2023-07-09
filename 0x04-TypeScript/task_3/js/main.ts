/// <reference path = "crud.d.ts" />
import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud"

// row element to be added
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

// row id after adding the row element
const newRowID: RowID = CRUD.insertRow(row);

// creating the row element to be updated
const updatedRow: RowElement = { ...row };
updatedRow.age = 23;

// get the updated rowId after performing an update operation
const updatedRowId = CRUD.updateRow(newRowID, updatedRow);

// delete the row
CRUD.deleteRow(updatedRowId);