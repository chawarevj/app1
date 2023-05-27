//  3rd question 
 //   Abstraction is hiding the unnecessary details from the users.
  //  Implement an example on your own for abstraction where you want show only relevant details of the object to the user
   // Should be different from the live session



class cricketer {
    constructor(n,s) {
        this.name = n
        this.country = s
        this.shot = []
    }
    learnskill(shot) {
        this.shot.push(shot)
    }
}

let player = new cricketer("virat", "india")
player.learnskill("cover drive")
player.learnskill("hook")
console.log(player)

