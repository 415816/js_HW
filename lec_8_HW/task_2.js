const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ],
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ],
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ],
    },
];

// 1. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function printEnterprisesWithDepartments() {
    enterprises.forEach(enterprise => {
        const totalEmployees = enterprise.departments.reduce((sum, department) => sum + department.employees_count, 0);
        console.log(`${enterprise.name} (${totalEmployees || "нет"} сотрудников)`);
        enterprise.departments.forEach(department => {
            console.log(`- ${department.name} (${department.employees_count || "нет"} сотрудников)`);
        });
    });
}

// printEnterprisesWithDepartments();

// 2. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getEnterpriseName(identifier) {
    for (const enterprise of enterprises) {
        for (const department of enterprise.departments) {
            if (department.id === identifier || department.name === identifier) {
                return enterprise.name;
            }
        }
    }
    throw new Error("Department not found");
}

// console.log(getEnterpriseName(4));
// console.log(getEnterpriseName("Отдел маркетинга"));

// 3. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getUniqueDepartmentsIds(enterprises) {
    let maxIdEnterprise = 0;
    let maxIdDepartment = 0;
    let maxId = 0;

    enterprises.forEach(enterprise => {
        maxIdEnterprise = Math.max(maxIdEnterprise, enterprise.id);
        enterprise.departments.forEach(department => {
            maxIdDepartment = Math.max(maxIdDepartment, department.id);
        });
        maxId = Math.max(maxId, maxIdEnterprise, maxIdDepartment);
    });
    return maxId + 1;
}

function addEnterprise(name) {
    const newId = getUniqueDepartmentsIds(enterprises);
    enterprises.push({
        id: newId,
        name: name,
        departments: [],
    });
}

// addEnterprise("NewEnterprise_1");
// console.log(enterprises);

// 4. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addDepartment(enterpriseId, departmentName) {
    const enterprise = enterprises.find(enterprise => enterprise.id === enterpriseId);
    if (enterprise) {
        const newId = getUniqueDepartmentsIds(enterprises);
        enterprise.departments.push({
            id: newId,
            name: departmentName,
            employees_count: 0,
        });
    }
}

// addDepartment(1, "NewDepartment_1");
// console.log(enterprises[0].departments);

// 5. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function editEnterprise(enterpriseId, newName) {
    const enterprise = enterprises.find(enterprise => enterprise.id === enterpriseId);
    if (enterprise) {
        enterprise.name = newName;
    }
}

// editEnterprise(1, "NewNameOfEnterprise");
// console.log(enterprises);

// 6. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function editDepartment(departmentId, newName) {
    const department = enterprises.flatMap(e => e.departments).find(department => department.id === departmentId);
    if (department) {
        department.name = newName;
    }
}

// editDepartment(7, "NewNameOfDepartment");
// console.log(enterprises);

// 7. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function deleteEnterprise(enterpriseId) {
    const index = enterprises.findIndex(enterprise => enterprise.id === enterpriseId);
    if (index !== -1) {
        enterprises.splice(index, 1);
    }
}

// deleteEnterprise(9);
// console.log(enterprises);

// 8. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function deleteDepartment(departmentId) {
    for (const enterprise of enterprises) {
        const index = enterprise.departments.findIndex(
            department => department.id === departmentId && department.employees_count === 0,
        );
        if (index !== -1) {
            enterprise.departments.splice(index, 1);
            break;
        }
    }
}

// deleteDepartment(10);
// console.log(enterprises);

// 9. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveEmployees(fromDepartmentId, toDepartmentId) {
    const departments = enterprises.flatMap(e => e.departments);
    const fromDepartment = departments.find(department => department.id === fromDepartmentId);
    const toDepartment = departments.find(department => department.id === toDepartmentId);

    if (fromDepartment && toDepartment && fromDepartment !== toDepartment) {
        toDepartment.employees_count += fromDepartment.employees_count;
        fromDepartment.employees_count = 0;
    }
}

// moveEmployees(2, 3);
// console.log(enterprises);
