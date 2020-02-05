// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function (perimeter, side) { return perimeter + side })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides != 3) return false;
        const [side1, side2, side3] = this.sides
        return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides.length != 4) return false;
        return this.perimeter / this.countSides == this.sides[0]
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2
        }
    }
}