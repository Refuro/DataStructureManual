//Christian Spencer, 3/26/22


//This is to be used by my BinarySearchTree implementation
class treeNode {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

//My array implementation, since Javascript does not support overloading the constructor, I haven't allowed a delcaration with parameters yet, but plan to figure out a solution when I have more time
class myArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  //Retrieves data at given index
  get(index){
    return this.data[index];
  }
  //Pushes a value onto the array
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  //This allows you delete the previously added item from the top of the array
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  //This allows you to delete an object by its index
  delete(index){
    if(this.data[index]){
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
    }
  }
  //Shifts the items forward after deletion
  shiftItems(index){
    for (let i = index; i<this.length;i++){
      this.data[i]= this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
    return;
  }
}

//My hashtable implementation, I'm not using my own array class here because I have not yet implemented size declaration, but plan to switch it after I implement that
class myHashTable{
  constructor(size){
    this.data = new Array(size);
  }
//This is the primary hash function
  _hash(key){
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //Sets a key and value
  set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
    return this.data;
  }
  //Gets the value at the given key
  get(key){
    let address = this._hash(key);
    let currentAddress = this.data[address];
    if(this.data[address]){
      for (let i = 0; i < currentAddress.length; i++){
        if(currentAddress[i][0] === key){
          return currentAddress[i][1];
        }
      }
    }
    return undefined;
  }
  //Returns an array of all the hash table contents, o(n^2), could try to improve this later
  keys(){
    const keyArray = [];
    for (let i = 0; i <this.data.length;i++){
      if (this.data[i]){
        for (let j = 0; j< this.data[i].length;j++){
          keyArray.push(this.data[i][j][0]);
        }
      }
    }
    return keyArray;
  }
  
}

//My LinkedList implementation, it's only a singly linked list right now. I'll probably create a second class for doubly-linked list
class myLinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  //This function adds to the linked list at the end
  append(value){
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;    //Note for me, This changes current next to newNode
    this.tail = newNode;         //Then moves the tail forward in the list
    this.length++;
    return this;
  }
  //This function adds to the beginning of a linked list
  prepend(value){
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  //insertion into a linked list
  insert(index, value){
    //checking to make sure it's a valid index
    if (index > this.length){
      return undefined;
    }
    let currentNode = this.head;
    let previousNode = this.head;
    for (let i =1; i!==index;i++){
      previousNode = previousNode.next;
    } 
    for (let i =1; i!==index+1;i++){
      currentNode = currentNode.next;
    } 
    const newNode = {
      value: value,
      next: null
    }
    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return this;
  }
  //Prints out the linked list as an array
  remove(index){
    if (index > this.length){
      return undefined;
    }
    let nextNode = this.head;
    let previousNode = this.head;
    for(let i = 1;i<index+1;i++){
      nextNode = nextNode.next;
    }
    for (let i = 1; i < index;i++){
      previousNode = previousNode.next;
    }
    previousNode.next = nextNode.next;
    this.length--;
    return this;
  }
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
//My first attempt at a binarysearchtree, I still need to work on the remove function, which is a bit more complex here
class myBinarySearchTree{
  constructor(){
    this.root = null;    
  }
  insert(value){
    let newNode = new treeNode(value);
    //initialize the root of the tree
    if(this.root === null){
      this.root = newNode;
      return;
    } else {
      let currentNode = this.root;
      
      while (true) {
        if (value < currentNode.value){
          //left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left
          }
        } else if (value > currentNode.value){
          //right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right
          }          
        }
      }
    } 
  }
  lookup(value){
    if(this.root === null){
      return false
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value){
        currentNode = currentNode.left;
      }
      else if (value > currentNode.value){
        currentNode = currentNode.right;
      }
      else if(currentNode.value === value){
          return currentNode;
        }
      }          
    return false;  
  }    
}
//Used to traverse the BST
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
//Test Functions  
function testMyBinarySearchTree(){
  const tree = new myBinarySearchTree();
  tree.insert(40);
  tree.insert(30);
  tree.insert(50);
  tree.insert(39);
  tree.insert(34);
  console.log(JSON.stringify(traverse(tree.root)))
  console.log(tree.lookup(39));
}
function testMyLinkedList() {
  const linkedList = new myLinkedList(50);
  //Testing the append function
  linkedList.append(5);
  linkedList.append(200);
  console.log(linkedList.printList()); // Expected 50,5,200
  //Testing the prepend function
  linkedList.prepend(125);
  linkedList.prepend(700);
  console.log(linkedList.printList()); // Expected 700,125,50,5,200
  //Testing the insert function
  linkedList.insert(2,245);
  console.log(linkedList.printList()); // Expected 700,125,245,50,5,200
  //Testing the remove function
  linkedList.remove(2);
  console.log(linkedList.printList())  // Expected 700,125,50,5,200
}
function testMyHashTable(){
  let testHash = new myHashTable(10);
  //Testing the setting of key and value pair
  testHash.set('Log',10);
  testHash.set('Slumber',12);
  testHash.set('Dragon', 50);
  console.log(testHash);        //Expected, 3 Data points
  //Testing the get functionality
  console.log(testHash.get('Slumber'));
  console.log(testHash.get('Slumbo')); //Expected, 12, undefined
  //Testing the keys functionality   
  console.log(testHash.keys());  //Expected ['Slumber', 'Dragon', 'Log']
}
function testMyArray() {
  let testArray = new myArray();
  //Testing the push function
  testArray.push('First');
  testArray.push('Second');
  console.log(testArray);       //Expected, Length: 2, data {First, Second}
  //Testing the pop function
  testArray.pop();
  testArray.push('Third');
  testArray.push('Final')
  console.log(testArray);       //Expected, Length: 3, data {First, Third, Fina}
  //Testing Deletion
  testArray.delete(1);
  console.log(testArray);       //Expected, Length: 2, data {First, Final}
}
//testMyArray();
//testMyHashTable();
//testMyLinkedList();
//testMyBinarySearchTree();