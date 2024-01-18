// script.js

// Function to add a new task to the table
function add() {
    var nameInput = document.getElementById('nameInput');
    var yearsInput = document.getElementById('yearsInput');
    var salaryInput = document.getElementById('salaryInput');
    var pfInput = document.getElementById('pfInput');
    var taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];

    // Check if all input fields are filled
    if (nameInput.value.trim() !== '' && yearsInput.value && salaryInput.value && pfInput.value) {
        var row = taskList.insertRow();
        var nameCell = row.insertCell(0);
        var yearsCell = row.insertCell(1);
        var salaryCell = row.insertCell(2);
        var pfCell = row.insertCell(3);
        var actionsCell = row.insertCell(4);

        nameCell.textContent = nameInput.value;
        yearsCell.textContent = yearsInput.value;
        salaryCell.textContent = salaryInput.value;
        pfCell.textContent = pfInput.value;

        // Add Edit and Delete buttons
        var editButton = document.createElement('button');
        editButton.appendChild(document.createTextNode('Edit'));
        editButton.onclick = function () {
            editTask(row);
        };

        var deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.onclick = function () {
            deleteTask(row);
        };

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        // Clear the input fields
        nameInput.value = '';
        yearsInput.value = '';
        salaryInput.value = '';
        pfInput.value = '';
    }
}

// Function to edit a task in the table
function editTask(row) {
    var nameCell = row.cells[0];
    var yearsCell = row.cells[1];
    var salaryCell = row.cells[2];
    var pfCell = row.cells[3];

    // Prompt the user for updated values
    var newName = prompt('Enter new name:', nameCell.textContent);
    var newYears = prompt('Enter new years:', yearsCell.textContent);
    var newSalary = prompt('Enter new salary:', salaryCell.textContent);
    var newPF = prompt('Enter new PF amount:', pfCell.textContent);

    // Update the table cells with new values
    if (newName !== null && newYears !== null && newSalary !== null && newPF !== null) {
        nameCell.textContent = newName;
        yearsCell.textContent = newYears;
        salaryCell.textContent = newSalary;
        pfCell.textContent = newPF;
    }
}

// Function to delete a task from the table
function deleteTask(row) {
    var taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];
    taskList.removeChild(row);
}
