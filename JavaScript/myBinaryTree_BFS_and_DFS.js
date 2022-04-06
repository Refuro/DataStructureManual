//My Queue to be used in the BFS Algorithm, Tree starts at line 64
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
    return this.head.value;
  }
  empty(){
    if (this.head===null){
      return 1
    }
    return 0;
  }
}








class treeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  } 
}

class Tree{
  constructor(){
    this.root = null
  }
  insert(value){
    let newNode = new treeNode(value);
    if (this.root === null){
      this.root = newNode;
      return;
    }
    else{
      let currentNode = this.root;
      while(true){
        //Here we decide where we'd like to throw our next value
        if (value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value){
          if(!currentNode.right){
            currentNode.right = newNode;
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
      
  }
}



//Searching Algorithm time



//Depth First - Stack Based
//It worked first try :D
function DFS(value, tree){
  if(!tree.root){return "Tree is empty"}
  let stack = [];  
  let currentNode = tree.root;
  while(true){
    //Check if value is what we're searching for
    if(currentNode.value === value){
      return currentNode;
    }
    //Add to stack 
    if(currentNode.right){
      stack.push(currentNode.right);
    }
    if(currentNode.left){
      stack.push(currentNode.left);
    }
    //Setup next node
    if(stack.length === 0){
      console.log('Not Found');
      return;
    }
    currentNode = stack[stack.length-1];
    stack.pop()
  }
}

//Breadth First - Queue Based
//Going to pull in my queue from another project so I don't have to reprogram one
//Had to adjust some stuff on my original queue, but it works now. Happy with
//How this turned out.
function BFS(value, tree){
 if(!tree.root){return "Tree is empty"}
  let que = new Queue();  
  let currentNode = tree.root;
  while(true){
    //Check if value is what we're searching for
    if(currentNode.value === value){
      return currentNode;
    }
    //Add to que
    if(currentNode.left){
      que.enQueue(currentNode.left);
    }
    if(currentNode.right){
      que.enQueue(currentNode.right);
    }
    //Setup next node
    if(que.empty()){
      console.log('Not Found');
      return;
    }
    currentNode = que.top();
    que.deQueue();
  }
}


let ntree = new Tree();
ntree.insert(12);
ntree.insert(16);
ntree.insert(4);
ntree.insert(6);
ntree.insert(2);
ntree.insert(28);
console.log(BFS(28,ntree));
