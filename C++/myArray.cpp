#include<stdlib.h>
class myArray{
	public:
	int length;
	int *data, *buffer;
	myArray(){
		length = 1;
		data = (int*)malloc((length)*sizeof(int));
	};
	/*
	myArray(int length){
		int length = length;
		int data[length] = {};
	}
	*/
	int get(int index){
		return data[index];
	}

	void push(int nData){
		data[length-1] = nData;
		length++;
		buffer = (int*)malloc(length*sizeof(int));
		buffer = data;
		free(data);
		data = buffer;
		buffer = NULL;
	}

	void pop(){
		//data[length-1] = NULL;
		length--;
		buffer = (int*)malloc(length*sizeof(int));
		buffer = data;
		free(data);
		data = buffer;
		buffer = NULL;
	}

	void del(int index){
		for(int i = index; i < length; i++){
			data[i] = data[i+1];
		}
		pop();
	}

	int srch(int item){
		for(int i = 0; i < length; i++){
			if(data[i] == item) return i;
        }
        return -1;
	}
};

int main(){
    myArray numbers;
    for(int i = 1; i <10; i++){
        numbers.push(i);
    }
    numbers.srch(3);
    numbers.pop();

    return 0;


}