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

    toArray(){
        const elements = [];

        let currentNode = this.head;
        while(currentNode){
            elements.push(currentNode);
            currentNode = currentNode.next;
        }

        return elements;
    }
}

const doublyTest = new DoublyList()
doublyTest.append(1)
doublyTest.append(2)
doublyTest.append('another')
doublyTest.append(true)
doublyTest.append('David')
doublyTest.prepend('first')
// doublyTest.delete('David')
doublyTest.insertAfter('inserted here','another')

console.log(doublyTest.toArray())
// console.log(doublyTest.find(true))