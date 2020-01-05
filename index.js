// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    get area() {
        return Math.PI * (this.radius ** 2)
    }
    get circumference() {
        return 2 * Math.PI * this.radius
    }
    set diameter(diameter) {
        return this.radius = diameter/2
    }
    set area(area) {
        return this.radius = Math.sqrt(area / Math.PI)
    }
    set circumference(circumference) {
        return this.radius = circumference / (2 * Math.PI)
    }
}