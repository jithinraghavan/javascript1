class animal {
    constructor(name) {
        this.name = name
    }
    eats() {
        console.log(this.name + ' eats food')
    }
}

class aliggator extends animal {

    eats() {
        super.eats()
        console.log(this.name + ' eats fish')
    }
}
let mur = new aliggator('murphy')
mur.eats();