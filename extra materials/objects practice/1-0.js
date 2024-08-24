//Создайте массив объектов, составленный из следующих массивов

const names = ["Anatoly", "Maria", "Pavel", "Svetlana"];
const salaries = [1000, 2000, 500, 0];
const jobs = ["AQA", "Developer", "DevOps", "QA"];

// const getEmployees = (names = [], salaries = [], jobs = []) => {
//   // implement
//   const result = [];
//   for (let i = 0; i < names.length; i++) {
//     const object = {
//       name: names[i],
//       salary: salaries[i],
//       job: jobs[i],
//     };
//     result.push(object);
//   }
//   return result;
// };

const getEmployees = (names, salaries = [], jobs = []) => {
  // implement
  const result = names.map((name, index, array) => {
    return {
      name: name,
      salary: salaries[index],
      jobs: jobs[index],
    };
  });
  return result;
};

const result = getEmployees(names, salaries, jobs);
console.log(result);
/*
[
  { name: 'Anatoly', salary: 1000, job: 'AQA' },
  { name: 'Maria', salary: 2000, job: 'Developer' },
  { name: 'Pavel', salary: 500, job: 'DevOps' },
  { name: 'Svetlana', salary: 0, job: 'QA' }
]
*/
