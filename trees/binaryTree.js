// binary tree

class BinaryTree{
    constructor(){
        this.root = null;
    }

    add(value){
        const newNode = {
            value: value,
            left: null,
            right: null
        }

        if(!this.root){
            this.root = newNode;
            return;
        }else{
            let currentNode = this.root;
            while(currentNode){
                if(value >= currentNode.value){
                    if(currentNode.right === null){
                        currentNode.right = newNode;
                        return
                    }else{
                        currentNode = currentNode.right;
                    }
                }else{
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        return
                    }else{
                        currentNode = currentNode.left;
                    }
                }
            }
        }
        
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

    deletion(value){
        const isThere = this.contains(value);
        if(isThere){

        }
    }
}

const treeTest = new BinaryTree()

treeTest.add(50);
treeTest.add(30);
treeTest.add(99);
treeTest.add(4);
treeTest.add(41);
treeTest.add(33);
treeTest.add(73);
treeTest.add(160)
treeTest.add(42);
treeTest.add(25);

// console.log(treeTest.contains(30))

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

// const postTraversal = postOrder(treeTest.root);
// console.log(postTraversal)
// const inOrderTrav = inOrder(treeTest.root);
// console.log(inOrderTrav);
// const preOrderTrav = preOrder(treeTest.root);
// console.log(preOrderTrav);
