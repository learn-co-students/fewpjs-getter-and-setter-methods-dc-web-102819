// Add your Circle class here

class Cicle {

    constructor(radius) {
        this.radius = radius 
    }

    get diameter() {
        let diameter = this.radius * 2 
    }

    get circumference() {
        let circumference = Math.PI * this.diameter
    }

    get area() {
        let area = Math.PI * (this.radius * this.radius )
    }

    set diameter(diameter) {
        this._diameter = diameter 
    }

    set circumference(circumference) {
        this._circumference = circumference
    }

    set area(area) {
        this._area = area 
    }



}
