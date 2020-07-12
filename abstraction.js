function employee(name, age, basesalary) {
    this.name = name
    this.age = age
    this.basesalary = basesalary
    let monthlybonus = 1000

    let calc = function() {
        this.finalsalary = basesalary + monthlybonus
        console.log('final salary ' + finalsalary)
    }

    this.getempdetails = function() {
        console.log('name ' + this.name + ' age ' + this.age)
        calc()
    }

}

let emp1 = new employee('john', 30, 20000)
emp1.getempdetails();