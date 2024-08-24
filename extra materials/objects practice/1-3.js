// Objective: Filter an array of objects based on a specific condition.
const employees = [
  { id: 1, name: "Alice", department: "Engineering" },
  { id: 2, name: "Bob", department: "Marketing" },
  { id: 3, name: "Charlie", department: "Engineering" },
];

const engineeringEmployees = filterByDepartment("Engineering");
console.log("Engineering Employees:", engineeringEmployees);

function filterByDepartment(dept) {
  // const foundEmployees = employees.filter((element) => element.department === dept);
  // return foundEmployees;
  const arr = [];
  for (element of employees) {
    if (element.department === dept) {
      arr.push(element);
    }
  }
  return arr;
}
