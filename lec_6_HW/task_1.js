const getEmployeeInfo = employeeName => {
    let employeeInfo = [];
    const names = ["Kristine", "Jane", "Mary", "Tatiana", "Anna"];
    const salaries = [2000, 3000, 2500, 4000, 5000];

    if (names.includes(employeeName)) {
        employeeInfo.push(employeeName, salaries[names.indexOf(employeeName)]);
    } else {
        employeeInfo.push(null); // OR employeeInfo = null; ?
    }
	return employeeInfo;
};

console.log(getEmployeeInfo("Tatian"));