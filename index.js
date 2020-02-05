class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
      return this.sides.length
  }

  get perimeter(){
      return this.sides.reduce((total, side) => total + side)
  }
}

class Triangle extends Polygon {
  get isValid(){
      if((this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[1] + this.sides[2]) > this.sides[0] && (this.sides[2] + this.sides[0]) > this.sides[1]){
          return true
      } else {
          return false
      }
  }
}

class Square extends Polygon {
  get isValid(){
      if(this.perimeter / this.countSides == this.sides[0]) {
          return true
      } else {
          return false
      }
  }

  get area(){
      if(this.isValid){
          return this.sides[0] * this.sides[0]
      }
  }
}