//Restricts actions to only push and pop and to view the last top of the stack
class Stack{
  constructor(){
    this.theStack = [];
    this.count = 0;
  }
  push(value){
    this.theStack[this.count] = value;
    this.count++;
    console.log("Pushed: "+value);
  }
  pop(){
    delete this.theStack[this.count];
    this.count--;
    console.log("Pop!!");
  }
  last(){
    console.log("Top item: "+ this.theStack[this.count-1]);
  }
  length(){
    console.log(this.count);
  }
}

let stack = new Stack();
stack.push(5)
stack.push(6)
stack.push(7)
stack.last();
stack.length();
stack.pop();
stack.pop();
stack.last();
stack.length();
