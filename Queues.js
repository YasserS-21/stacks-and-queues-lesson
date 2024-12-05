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
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }
    isEmpty() {
        return this.first == null 
    }
    enqueue(data) {
        let newItem = new Node(data);
        if (this.isEmpty()) {
            this.first = newItem;
            this.last = newItem;
        } else {
            this.last.next = newItem
            this.last = newItem;
        }
        return ++this.size
    }
    dequeue() {
        if (this.isEmpty()){
            throw new Error("The queue is empty")
        }
        const temp = this.first
        if (this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.data;
    }
    peek() {
        if (this.isEmpty()){
            throw new Error("The queue is empty")
        }
        return this.first;
    }
}

let queue = new Queue();


for (let i = 0; i < months.length; i++) {
    queue.enqueue(months[i]);
  }
  const {inspect} = require("util")
  
/* test queue
    console.log(inspect(queue, { colors: true, depth: 12 }));
    console.log(queue.first)
    console.log(queue.last)
    console.log(queue.isEmpty())
    console.log("peek", queue.peek()); // January
    const firstItem = queue.dequeue();
    console.log("first item", firstItem); // January
    console.log("peek after dequeue", queue.peek()); //Febuary
    console.log(inspect(queue, { colors: true, depth: 12 }));
*/
  