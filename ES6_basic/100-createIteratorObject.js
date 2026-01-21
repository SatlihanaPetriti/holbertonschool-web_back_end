export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).flat();
}
// write a function called createIteratorObject that:

// Receives a report object

// The report object comes from createReportObject

// Goes through every employee in every department

// Returns an iterator (or iterable list) of all employees