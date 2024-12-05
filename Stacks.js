class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

class Stack {
    constructor(top=null) {
        this.top = top;
    }
    isEmpty() {
        return this.top === null;
    }
    push(data) {
        const newItem = new Node(data)
        newItem.next = this.top;
        this.top = newItem
    }
    peek() {
        if (this.isEmpty()){
            throw new Error("Stack is empty")
        }
        return this.top
    }
    pop() {
        //check top , send error
        if (this.isEmpty()) {
            throw new Error("The stack is empty")
        }
        // save this.top temp
        let temp = this.top

        // this.top = this.top.next
        this.top = this.top.next

        // temp.next = null
        temp.next = null

        // return temp
        return temp
    }
}


const stack = new Stack()

console.log("is Stack empty \n", stack.isEmpty())

for (let i = 0; i < months.length; i++) {
    stack.push(months[i]);
}



const { inspect } = require("util")

// TEST STACK
// console.log("peek\n", stack.peek(), "December")
// const removedTopOfStack = stack.pop()
// console.log ("removed from top\n", removedTopOfStack, "December")
// console.log("peek after pop\n", stack.peek())

// console.log(inspect(stack, {colors:true, depth:12}))
// console.log("is Stack empty \n", stack.isEmpty(), stack)

// stack.push("January")

// console.log("is Stack empty \n", stack.isEmpty(), stack)

// stack.push("February")

// console.log(stack)


