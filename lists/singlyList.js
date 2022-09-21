// This is an implementation of singlylinked list

class LinkedList{
    constructor(){ // function that is called immediately when the class is instantiated
        this.head = null; // first element of the list
        this.tail = null; // last element of the list // both are null at first because the list is empty
    }

    append(value){ // method to add a new element(node) to the list
        const newNode = {
            value: value, // value of the element
            next: null // pointer to the next element, it's null because the last value doesn't point to anything
        }
        if(this.tail) { // This will only run if there was a already a tail, otherwise it just updates the tail to be the newNode
            this.tail.next = newNode; // add a pointer to the previous last element to point to the new node
        }
        this.tail = newNode; // make the new node the last element
        if(!this.head){ // if the list was emplty prior, the head would also be the tail
            this.head = newNode
        }
    }

    prepend(value){
        const newNode = { // initialise the new node with its next property pointing to the previous head
            value: value,
            next: this.head
        };
        this.head = newNode // Update the head to the new node
        if(!this.tail){ // if it was empty, make it the tail
            this.tail = newNode
        }
    }

    find(value){
        if(!this.head){  // If the list is empty,return null
            return null;
        }

        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === value){
                return currentNode; // It will return if it finds the first value
            }
            currentNode = currentNode.next
        }

        return null;
    }

    insertAfter(value, after){
        const existingNode = this.find(after) // check if the after value exists

        if(existingNode){
            const newNode = {value: value, next: existingNode.next} // insert the new element after 
            existingNode.next = newNode // update the next property of after to point to new value
        }
    }

    delete(value){
        if(!this.head){ // if the list is empty return null
            return;
        }

        while(this.head && this.head.value === value){ // this loop will run if the head is the one to be deleted. It will loop until the condition becomes falsy
            this.head = this.head.next
        }

        let currentNode = this.head // initialize the loop
        while(currentNode.next){ // run if there is a next property 
            if(currentNode.next.value === value){ // if the next object has a value of the parameter passed, make it point to the one after that
                currentNode.next = currentNode.next.next
            }else{ // continue through the list
                currentNode = currentNode.next
            }
        }

        if(this.tail.value === value){ // this will run if the tail is the one to be deleted
            this.tail = currentNode
        }
    }

    toArray(){ // This is amethod to convert the linked list to an array
        const allElements = [] // initialize an empty array to store the values of the linked list

        let currentNode = this.head // store the head of the list
        while(currentNode){ //Only run when there is a currentNode
            allElements.push(currentNode) // push elemnt to the array
            currentNode = currentNode.next // update the current node to the next pointer
        }

        return allElements
    }

}

const listTest = new LinkedList()
listTest.append('David')
listTest.append(1)
listTest.append('David')
listTest.append(true)
listTest.append('David')
listTest.append(13.8)
listTest.append('David')
listTest.prepend(12)
// listTest.insertAfter('David',12)
// listTest.delete('David')
// listTest.delete(13.8)
// listTest.delete(12)

console.log(listTest.find('David'))
