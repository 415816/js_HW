// Objective: Transform an array of objects into a new array of objects
// with different properties.
const users = [
  { id: 1, firstName: "Alice", lastName: "Johnson" },
  { id: 2, firstName: "Bob", lastName: "Smith" },
  { id: 3, firstName: "Charlie", lastName: "Brown" },
];

const transformedUsers = transformUsers();
console.log("Transformed Users:", transformedUsers);
/*
Transformed Users: [
  { id: 1, fullName: 'Alice Johnson' },
  { id: 2, fullName: 'Bob Smith' },
  { id: 3, fullName: 'Charlie Brown' }
]
*/

function transformUsers() {
  // const newUsers = [];
  // for (const user of users) {
  //   const newObject = {
  //     id: user.id,
  //     fullName: `${user.firstName} ${user.lastName}`,
  //   };
  //   // newObject["id"] = user.id;
  //   // // newObject["fullName"] = user.firstName + " " + user.lastName;
  //   // newObject["fullName"] = `${user.firstName} ${user.lastName}`;
  //   newUsers.push(newObject);
  // }
  // return newUsers;
  const newUsers = users.map(function (user) {
    // const newObject = {
    return {
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
    };
    // return newObject;
  });
  return newUsers;
}
