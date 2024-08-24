const libraries = [
  {
    id: 1,
    name: "Central Library",
    sections: [
      {
        id: 2,
        name: "Science Fiction",
        books_count: 30,
      },
      {
        id: 3,
        name: "Mystery",
        books_count: 25,
      },
      {
        id: 4,
        name: "Non-Fiction",
        books_count: 40,
      },
    ],
  },
  {
    id: 5,
    name: "Community Library",
    sections: [
      {
        id: 6,
        name: "Children's Books",
        books_count: 15,
      },
      {
        id: 7,
        name: "Romance",
        books_count: 20,
      },
      {
        id: 8,
        name: "History",
        books_count: 10,
      },
    ],
  },
  {
    id: 9,
    name: "University Library",
    sections: [
      {
        id: 10,
        name: "Textbooks",
        books_count: 100,
      },
    ],
  },
];

/*
Tasks:
1. Display all libraries and their sections, including the number of books in each section and the total number of books in each library.

Central Library (95 books)
- Science Fiction (30 books)
- Mystery (25 books)
- Non-Fiction (40 books)

Community Library (45 books)
- Children's Books (15 books)
- Romance (20 books)
- History (10 books)

University Library (100 books)
- Textbooks (100 books)

2. Write a function that takes one argument (section ID or section name) and returns the name of the library to which the section belongs.
getLibraryName(4) // Central Library
getLibraryName("Romance") // Community Library


3. Write a function to add a new library. The function should accept the name of the library as an argument.
addLibrary("New Library")

4. Write a function to add a section to a library. The function should accept the library ID and the name of the section as arguments.
addSection(1, "New Section")

5. Write a function to edit the name of a library. The function should accept the library ID and the new name of the library as arguments.
editLibrary(1, "New Library Name")

6. Write a function to edit the name of a section. The function should accept the section ID and the new name of the section as arguments.
editSection(7, "New Section Name")

7. Write a function to delete a library. The function should accept the library ID as an argument.
deleteLibrary(1)

8. Write a function to delete a section. The function should accept the section ID as an argument. A section can only be deleted if it has no books.
deleteSection(3)

9. Write a function to transfer books between sections within the same library. The function should accept two section IDs (from which the books will be transferred and to which they will be transferred) as arguments.
transferBooks(2, 3)
*/

// 2. Write a function that takes one argument (section ID or section name) and returns the name of the library to which the section belongs.
// getLibraryName(4) // Central Library
// getLibraryName("Romance") // Community Library

// function getLibraryName(idOrName) {
//   for (const library of libraries) {
//     const sections = library.sections;
//     for (const section of sections) {
//       if (section.name === idOrName || section.id === idOrName) {
//         return library.name;
//       }
//     }
//   }
// }

// console.log(getLibraryName("History"));
// console.log(getLibraryName(9));
// console.log(getLibraryName(25));

// function getLibraryName(idOrName) {
//   for (const library of libraries) {
//     const foundSection = library.sections.find((section) => section.name === idOrName || section.id === idOrName);
//     if (foundSection) {
//       return library.name;
//     }
//   }
// }

function getLibraryName(idOrName) {
  const foundLibrary = getLibraryBySection(idOrName);
  return foundLibrary.name;
}

function getLibraryBySection(idOrName) {
  const foundLibrary = libraries.find((library) => {
    const foundSection = library.sections.find((section) => section.name === idOrName || section.id === idOrName);
    return foundSection;
  });
  if (!foundLibrary) throw new Error("No such library");
  return foundLibrary;
}

// 3. Write a function to add a new library. The function should accept the name of the library as an argument.
// addLibrary("New Library")

function addLibrary(name) {
  const newLibrary = {
    id: getNewId(),
    name,
    sections: [],
  };
  libraries.push(newLibrary);
}
addLibrary("New Library");
// console.log(libraries);

// function getNewId() {
//   let id = 0;
//   for (const library of libraries) {
//     if (library.id > id) id = library.id;
//     for (section of library.sections) {
//       if (section.id > id) id = section.id;
//     }
//   }
//   return id + 1;
// }

function getNewId() {
  let id = 0;
  libraries.forEach((library) => {
    if (library.id > id) id = library.id;
    library.sections.forEach((section) => {
      if (section.id > id) id = section.id;
    });
  });
  return id + 1;
}

// {
//   id: 1,
//   name: "Central Library",
//   sections: [
//     {
//       id: 2,
//       name: "Science Fiction",
//       books_count: 30,
//     },
//   ],
// }

// 4. Write a function to add a section to a library. The function should accept the library ID and the name of the section as arguments.
// addSection(1, "New Section")

function addSection(libraryId, sectionName) {
  const library = getLibraryById(libraryId);
  const newSection = generateNewSection(sectionName);
  library.sections.push(newSection);
}

addSection(11, "New Section");
console.log(JSON.stringify(libraries));

function getLibraryById(libraryId) {
  const foundLibrary = libraries.find((library) => library.id === libraryId);
  if (!foundLibrary) throw new Error("Nu such library");
  return foundLibrary;
}

function generateNewSection(sectionName) {
  return {
    id: getNewId(),
    name: sectionName,
    books_count: 0,
  };
}
