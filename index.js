//Christian Spencer, 3/26/22

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
    
  }
  
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

testMyHashTable();