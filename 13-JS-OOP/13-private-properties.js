class Engineer {
    #haveDegree = true;

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    // ecapsulation
    // provide getters: only get/read/retreive access granted
    // provide setters: only write/updat access is granted
    getHaveDegree() {
        return this.#haveDegree
    }
    setHaveDegree(bool) {
        this.#haveDegree = bool;
    }

}




const e1 = new Engineer('John', 'Doe');
const e2 = new Engineer('Alex', 'Smith');

console.log(e1);
console.log(e2);

// private access
// console.log(e1.#haveDegree); 
console.log(e1.getHaveDegree()); // true






