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

class myHashTable{
  constructor(size){
    this.size = size;

  }
}

function testMyArray() {
  let testArray = new myArray();
  //Testing the push function
  testArray.push('First');
  testArray.push('Second');
  console.log(testArray); //Expected, Length: 2, data {First, Second}
  //Testing the pop function
  testArray.pop();
  testArray.push('Third');
  testArray.push('Final')
  console.log(testArray);       //Expected, Length: 3, data {First, Third, Fina}
  //Testing Deletion
  testArray.delete(1);
  console.log(testArray);       //Expected, Length: 2, data {First, Final}
}
