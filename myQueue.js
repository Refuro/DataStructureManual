//Queue implementation, Pretty basic, just a linkedList implementation
class newNode{
  constructor(value){
    this.value = value;
    this.tail = null;
  }
}

class Queue{
  constructor(){
    this.head = null;
  }
  enQueue(value){
    let nNode = new newNode(value);
    if(this.head === null){
      this.head = nNode;
    }
    else{
      let currentNode = this.head;
      while(currentNode.tail){
        currentNode = currentNode.tail;
      }
      currentNode.tail = nNode;
    }
  }
  deQueue(){
    if(!this.head){
      return null;
    }
    else if (!this.head.tail) {
      this.head = null;
      return;
    } else {
      this.head = this.head.tail;
      return;
    }
  }
  top(){
    console.log("Next in queue: " +this.head.value)
  }
}

let queue = new Queue();
queue.enQueue(5);
queue.enQueue(21);
console.log(queue);
queue.deQueue();
console.log(queue);
queue.deQueue();
console.log(queue);
queue.deQueue();
console.log(queue);
queue.enQueue(5);
queue.enQueue(21);
console.log(queue);
queue.top();