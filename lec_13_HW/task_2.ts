// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:
//   - constructor должен принимать необзятельный массив объектов соответствующего типа.
//     Если массив пришел - объекты запушить в хранилище.
//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
//     Если на вход подан объект с айди - запушить его в хранилище
//     Для типизации используйте Utility Types
//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т.
//   - remove, принимающий на вход id и удаляющий объект из массива
//   - getById(id), возвращающий объект по айди если найден
//   - getAll(), возвращает все объекты в хранилище
//   storage.add({ id: 1, name: 'Anatoly', age: 33 }); // valid
//   storage.add({ name: 'Elena', age: 25 }); // valid, created with id === 2

//   storage.update({ id: 1, name: 'Egor' });
//   storage.update({ id: 2, name: 'Tatiana', age: 33 });

//   console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
//   console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]

//   storage.remove(2);

//   console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }]

class Storage1<T extends { id: number }> {
    private storage: T[] = [];
    private nextId: number = 1;

    constructor(arr?: T[]) {
        if (arr) {
            this.storage = arr;
            this.nextId = Math.max(...arr.map(item => item.id), 0) + 1;
        }
    }

    add(obj: T): void;
    add(obj: Omit<T, "id">): void;
    add(obj: T | Omit<T, "id">): void {
        if ("id" in obj) {
            this.storage.push(obj as T);
        } else {
            const newObj = { ...obj, id: this.nextId } as T;
            this.storage.push(newObj);
            this.nextId++;
        }
    }

    update(obj: Partial<T> & { id: number }): void {
        const index = this.storage.findIndex(el => el.id === obj.id);
        if (index !== -1) {
            this.storage[index] = { ...this.storage[index], ...obj };
        }
    }

    remove(id: number): void {
        this.storage = this.storage.filter(el => el.id !== id);
    }

    getById(id: number): T | undefined {
        return this.storage.find(el => el.id === id);
    }

    getAll(): T[] {
        return this.storage;
    }
}

