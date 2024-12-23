class Person {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    getAddress() {
        return 'I live in ' + this.address;
    }
}

const test = new Person('tran minh quan', 'viet nam')
console.log("check test:", test);
console.log("check address:", 
    test.getAddress());
