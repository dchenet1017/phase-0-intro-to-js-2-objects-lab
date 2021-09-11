// Write your solution in this file!

const employee = {
    name: `Sam`,
    streetAddress: `11 broadway`
};

function updateEmployeeWithKeyAndValue (employee,key, value) {
    return Object.assign ({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {

    const newobj = Object.assign({}, employee);
    
    delete newobj[key];

    return newobj;

}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee [key];

    return employee;
}