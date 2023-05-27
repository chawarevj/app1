// -------->
// 2nd question 
   // Think of an online payment portal where you don't want to disclose the user data to all.
   // Implement one using encapsulation for the same. Use getters and setters


class User {
    constructor(n,r)
    {
        // this.name=n
        var cardno;
        var pin;

    }

    getcardno() 
    { return this.cardno}

    setcardno(value)
    {
        this.cardno =value;
    }
    getpin()
    {
        return this.pin;
    }
    setpin(value)
    {
        this.pin = value;
    }
}

let e1 = new User();
e1.setcardno("99999999")
e1.setpin("10")
console.log(e1.getcardno());
console.log(e1.getpin());

