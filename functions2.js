let empdetails = function(name, age) {
    this.name = name;
    this.age = age;
    this.getname = function() {
        return this.name
    };
    this.getage = function() {
        return this.age
    };

};

let emp1 = new empdetails('john', 30)
let emp2 = new empdetails('janaki', 40)
console.log(emp1.getname())
console.log(emp2.getage())