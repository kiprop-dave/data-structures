// Implementation of a doubly list

class DoublyList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = {
            value: value,
            next: null,
            previous: this.tail
        };

        if(this.tail){
            this.tail.next = newNode;
        }
        
        this.tail = newNode;

        if(!this.head){
            this.head = newNode;
        }
    }

    prepend(value){
        const newNode = {
            value: value,
            next: this.head,
            previous: null
        };

        if(this.head){
            this.head.previous = newNode;
        }

        this.head = newNode;
    }

    find(value){
        if(!this.head){
            return null;
        }

        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    delete(value){
        if(!this.head){
            return null;
        }

        while(this.head && this.head.value === value){
            this.head = this.head.next;
        }

        if(this.tail.value === value){
            this.tail.previous.next = null;
        }

        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value === value){
                currentNode.next.next.previous = currentNode;
                currentNode.next = currentNode.next.next;
            }else{
                currentNode = currentNode.next;
            }
        }


    }

    insertAfter(value, node){
        const after = this.find(node);

        if(after){
            const newNode = {value: value, next: after.next, previous: after};
            after.next = newNode;
        }
    }

    reverse(){ // method to reverse the list
        if(!this.head){
            return null;
        }
        let currentNode = this.tail;
        
        while(currentNode){
            let next = currentNode.next;
            currentNode.next = currentNode.previous;
            currentNode.previous = next;

            currentNode = currentNode.next;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    toArray(){
        const elements = [];

        let currentNode = this.head;
        while(currentNode){
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return elements;
    }
}

const dataSet = [1,2,3,4,5,6,7,8,9,10,11,12];
const doublyTest = new DoublyList()

for (const el of dataSet){
    doublyTest.append(el);
}
// doublyTest.insertAfter('inserted here','another')
console.log(doublyTest.toArray());
doublyTest.reverse();

console.log(doublyTest.toArray());
// console.log(doublyTest.find(true))