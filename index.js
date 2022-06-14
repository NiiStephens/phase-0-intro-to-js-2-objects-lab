// Write your solution in this file!
const employee = {
     name: 'Kekeli'
     streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObject = { ...employee, ...{[key]: value}}
    return newObject;
}

function destructivelyUpdateEmployeeWithTheKeyAndValue(employee, key, value) {
    employee [key] = value
    return employee
}

function deleteFromEmployeeByKey (employee, key) {
    let clear = {...employee}
    delete clear[key]
    return clear;
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee [key]
    return employee;
}
