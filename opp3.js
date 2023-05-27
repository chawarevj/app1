//  1st question 
//    Build an inheritance model of your family tree using class constructor.
//    Build an inheritance model of cat family using class constructor.

class family 
{
 constructor(c,g,a)
 {
     this.city = c;
     this.gender = g;
     this.age = a;
 }
}
class son extends family
{
    constructor(c,g,a,n)
    {
    super(c,g,a)
    this.name = n
    }
}
class uncle extends family 
{
 constructor(c,g,a,n)
    {
    super(c,g,a)
    this.name = n
    }

}

let fam = new son ("Delhi", "Male", "40", "Ajay")
let fam1 = new uncle("Pune","male", "35", "rahul")
console.log(fam1)


//    1b

class Cat {
 constructor() {
     this.tail = true;
     this.fur = true;
     this.legs = 4;
     
 }
}

class Lion extends Cat {
 constructor(s, c,l ) {
     super();
     this.lifespan = l
     this.speed = s;
     this.colour = c;
 }
}

class Tiger extends Cat {
 constructor(s, c,l ) {
     super();
     this.lifespan = l
     this.speed = s;
     this.colour = c;
 }
}

let jungle = new Lion('120km/h', 'brown', "12yr");
console.log(jungle);

