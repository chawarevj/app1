 //  4th question Implement an example of your own to show Polymorphism.
class game {
    run() {
        console.log("I love sports")
    }
}

class cricket extends game {
    run() {
        console.log("i love cricket")
    }
}

class football extends game {
     
        // console.log("i love football")
    
}

let a = new game()
let b = new cricket()
let c = new football()

c.run()