// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.count;
    }

    get perimeter() {
        let sum = this.sides.reduce(function(a, b){
            return a + b;
        }, 0);

        return sum;
         
    }
}

class Triangle extends Polygon {

    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 3) return;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }
  
  class Square extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  
    get area() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
      return this.sides[0] * this.sides[0]
    }
  }
