// binary tree

class BinaryTree{
    constructor(){
        this.root = null;
    }

    add(value){
        const newNode = {
            value: value,
            left: null,
            right: null,
            parentNode: null
        }

        if(!this.root){
            this.root = newNode;
            return;
        }else{
            let currentNode = this.root;
            while(currentNode){
                if(value >= currentNode.value){
                    if(currentNode.right === null){
                        newNode.parentNode = currentNode;
                        currentNode.right = newNode;
                        return
                    }else{
                        currentNode = currentNode.right;
                    }
                }else{
                    if(currentNode.left === null){
                        newNode.parentNode = currentNode;
                        currentNode.left = newNode;
                        return
                    }else{
                        currentNode = currentNode.left;
                    }
                }
            }
        }
        
    }
    
    size(){
        const treeSize = inOrder(this.root)
        return treeSize.length;
    }

    contains(value){ // check if a value is in the tree
        if(this.root.value === value){
            return {
                isPresent: true,
                node: this.root
            }
        }

        let currentNode = this.root;
        while(currentNode){
            if(value > currentNode.value){
                currentNode = currentNode.right;
            }else if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if(currentNode.value === value){
                return {
                    isPresent: true,
                    node: currentNode
                }
            }
        }
        return false;
    }

    deletion(value){ // method to delete a node
        const isThere = this.contains(value);
        if(isThere){
            if(isThere.node.left === null && isThere.node.right === null){ //deleting a leaf
                if(isThere.node.parentNode.left !==null && isThere.node.parentNode.left.value === value){ 
                    isThere.node.parentNode.left = null;
                }
                if(isThere.node.parentNode.right !==null && isThere.node.parentNode.right.value === value){
                    isThere.node.parentNode.right = null;
                }
            }
            if(isThere.node.left !== null && isThere.node.right === null){ // deleting node with one left child
                if(isThere.node.parentNode.left !==null && isThere.node.parentNode.left.value === value){
                    isThere.node.left.parentNode = isThere.node.parentNode;
                    isThere.node.parentNode.left = isThere.node.left;
                }
                if(isThere.node.parentNode.right !==null && isThere.node.parentNode.right.value === value){
                    isThere.node.left.parentNode = isThere.node.parentNode;
                    isThere.node.parentNode.right = isThere.node.left;
                }
            }
            if(isThere.node.right !== null && isThere.node.left === null){ // deleting node with one right child
                if(isThere.node.parentNode.left !==null && isThere.node.parentNode.left.value === value){
                    isThere.node.right.parentNode = isThere.node.parentNode;
                    isThere.node.parentNode.left = isThere.node.right;
                }
                if(isThere.node.parentNode.right !==null && isThere.node.parentNode.right.value === value){
                    isThere.node.right.parentNode = isThere.node.parentNode;
                    isThere.node.parentNode.right = isThere.node.right;
                }
            }
            if(isThere.node.right !== null && isThere.node.left !== null){ // deleting node with left and right children
                const minNode = this.findMin(isThere.node.right);
                if(minNode.right === null){

                    minNode.parentNode.left = minNode.right;
                    minNode.left = isThere.node.left;
                    minNode.right = isThere.node.right;
                    minNode.parentNode = isThere.node.parentNode;
                    if(isThere.node.parentNode !== null && isThere.node.parentNode.left.value === isThere.node.value){
                        isThere.node.parentNode.left = minNode;
                    }
                    if(isThere.node.parentNode !== null && isThere.node.parentNode.right.value === isThere.node.value){
                        isThere.node.parentNode.right = minNode;
                    }
                    isThere.node.left.parentNode = minNode;
                    isThere.node.right.parentNode = minNode;
                    isThere.node = minNode;
                }
                if(minNode.right !== null){
                    if(isThere.node.parentNode !== null && isThere.node.parentNode.left.value === isThere.node.value){
                        isThere.node.parentNode.left = minNode;
                    }
                    if(isThere.node.parentNode !== null && isThere.node.parentNode.right.value === isThere.node.value){
                        isThere.node.parentNode.right = minNode;
                    }
                    minNode.left = isThere.node.left;
                    minNode.parentNode = isThere.node.parentNode;
                    isThere.node.left.parentNode = minNode;
                }
            }
        }else{
            return 'Value not present';
        }
    }

    findMin(node){ // method to find the minimum node
        if(node === null){
            return null;
        }
        
        let currentNode = node;
        while(currentNode.left !==null){
            currentNode = currentNode.left;
        }
        return currentNode;

    }

    findMax(node){ // method to find the maximum node
        if(node === null){
            return null;
        }
        let currentNode = node;
        while(currentNode.right !== null){
            currentNode = currentNode.right
        }

        return currentNode;
    }
}

const data = [20,30,10,15,17,40,45,5,3,19,35,46,50,55,49];
const treeTest = new BinaryTree()

// treeTest.add(50);
// treeTest.add(30);
// treeTest.add(99);
// treeTest.add(4);
// treeTest.add(41);
// treeTest.add(33);
// treeTest.add(73);
// treeTest.add(160)
// treeTest.add(42);
// treeTest.add(25);
// treeTest.add(31);
// treeTest.add(150)
// treeTest.add(43)

for (const i of data){
    treeTest.add(i);
}

// console.log(treeTest.size());
// console.log(treeTest.findMax(treeTest.root))

// console.log(treeTest.root)
// treeTest.deletion(25);
// treeTest.deletion(41);
// console.log(treeTest.contains(41))

function postOrder(node){ // post-Order traversal
    if(node === null){
        return []
    }
    const elements = [];

    if(node.left !== null){
        elements.push(...inOrder(node.left))
    }
    
    if(node.right !==null){
        elements.push(...inOrder(node.right))
    }
    elements.push(node.value);

    return elements;
}

function inOrder(node){ // in-order traversal
    if(node === null){
        return [];
    }

    const elements = [];

    if(node.left !== null){
        elements.push(...inOrder(node.left))
    }
    elements.push(node.value)

    if(node.right !==null){
        elements.push(...inOrder(node.right))
    }
    return elements;
}

function preOrder(node){ // pre-order traversal
    if(node === null){
        return [];
    }
    const elements = [];

    elements.push(node.value)
    if(node.left !== null){
        elements.push(...inOrder(node.left))
    }

    if(node.right !==null){
        elements.push(...inOrder(node.right))
    }
    return elements;
}

function levelOrder(node){  // level order or breadth first search
    if(node === null){
        return [];
    }
    const queue = [];
    
    queue.push(node);
    
    const elements = [];

    while(queue.length !== 0){
        const firstInQueue = queue.shift();
        elements.push(firstInQueue.value);

        if(firstInQueue.left !==null){
            queue.push(firstInQueue.left);
        }

        if(firstInQueue.right !== null){
            queue.push(firstInQueue.right);
        }
    }
    return elements;
}

// const postTraversal = postOrder(treeTest.root);
// console.log(postTraversal)
// const inOrderTrav = inOrder(treeTest.root);
// console.log(inOrderTrav);
// const preOrderTrav = preOrder(treeTest.root);
// console.log(preOrderTrav);
// const level = levelOrder(treeTest.root);
// console.log(level);
