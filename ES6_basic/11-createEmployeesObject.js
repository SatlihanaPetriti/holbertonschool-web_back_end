export default function createEmployeesObject(departmentName, employees) {
return {
    [departmentName]: employees,
  };
}
// Receives:

// departmentName → a string

// employees → an array of strings

// Returns an object

// The key (property name) of the object must be the value of departmentName

// The value of that key must be the employees array