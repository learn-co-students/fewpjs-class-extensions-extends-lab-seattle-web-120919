// Your code here


class Polygon {
    constructor (sides) {
        this.sides = sides

    }

    get countSides() {
       let count = this.sides.length
       return count;
    }

    get perimeter() {
        console.log(this.sides)
       return this.sides.reduce((a, b) => a + b, 0)
       
    }
}

class Triangle extends Polygon {

    get isValid() {
        // if ( !Array.isArray(this.sides)) return;
        // if (this.count !==3) return;
        let sideOne = this.sides[0]
        let sideTwo = this.sides[1]
        let sideThree = this.sides[2]
        if ((sideOne + sideTwo) < sideThree) {
            return false;
        } else if ((sideOne + sideThree) < sideTwo) {
            return false; 
        } else if ((sideTwo + sideThree) < sideOne) {
            return false;
        }  else {
            return true;
        }
    }
}

class Square extends Polygon {

    get isValid() {
        // if ( !Array.isArray(this.sides)) return;
        // if (this.count !==4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return (side1 === side2 && side1 === side3 && side1 === side4) 
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}

