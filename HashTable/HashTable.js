class HashTable {
    //generate a basic hash table
    constructor(size = 53) {
        this.arr = new Array(size);
    }

    //hash function
    _hash(val) {
        let str = val.toString();
        let total = 0;
        for (let i = 0; i < str.length; i++) {
            total += str.charCodeAt(i) - 96;
        }
        return total % this.arr.length;
    }

    //set value only 
    set(val) {
        let index = this._hash(val);
        if (!this.arr[index]) {
            this.arr[index] = [];
        }
        this.arr[index].push(val);
        return this;
    }

    //get value only
    get(val) {
        let index = this._hash(val);
        if (this.arr[index]) {
            for (let i = 0; i < this.arr[index].length; i++) {
                if (this.arr[index][i] === val) {
                    return this.arr[index][i];
                }
            }
        }
        return undefined;
    }

}

let hashTable = new HashTable();
hashTable.set("hello");
hashTable.set("world");
hashTable.set("hello");
hashTable.set("world");
hashTable.set("hello");
hashTable.set("u");
hashTable.set("i");
hashTable.set("o");
hashTable.set("me");

console.log(hashTable.get("fuck"));
