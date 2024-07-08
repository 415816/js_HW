const characters = [
    { name: "Barney", age: 36 },
    { name: "Fred", age: 40 },
    { name: "Jack", age: 50 },
];

// 1. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
characters.forEach(character => {
    Object.keys(character).forEach(key => {
        console.log(key);
    });
});

// 2. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
characters.forEach(character => {
    Object.values(character).forEach(value => {
        console.log(value);
    });
});

// 3. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
characters.forEach(character => {
    for(const [key, value] of Object.entries(character)) {
		console.log(`key = ${key}, value = ${value}`);
	}
});

// 4. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
characters.forEach(character => {
    for (const key in character) {
        console.log(`key = ${key}, value = ${character[key]}`);
    }
});

// 5. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const qa = {
    name: "John",
    age: 30,
    salary: 5000,
    getInfo: function () {
        return `Hello, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}`;
    },
};

console.log(qa.getInfo());
