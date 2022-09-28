// This approach improves the time complexity but increases space complexity
// It's good when the graph is dense. However, most in most use cases the graph is scarce

class AdjacencyMatrix{
    constructor(){
        this.vertices = [];
        this.adjMatrix = [];
    }

    addVertex(vertex){
        this.vertices.push(vertex);
        this.adjMatrix.push([]);
        for(let i = 0; i < this.adjMatrix.length; i++){
            if(i === 0){
                this.adjMatrix[0].push(0);
            }else{
                const prevIndex = this.adjMatrix[i-1]
                this.adjMatrix[i] = [...prevIndex];
            }
        }
    }

    addEdge(vertex1,vertex2){ // adds an edge between two vertices
        const vIndex1 = this.vertices.findIndex(item => item === vertex1);
        const vIndex2 = this.vertices.findIndex(item => item === vertex2);
        this.adjMatrix[vIndex1][vIndex2] = 1;
        this.adjMatrix[vIndex2][vIndex1] = 1;
    }
    
    isConnected(vertex1,vertex2){
        const vIndex1 = this.vertices.findIndex(item => item === vertex1);
        const vIndex2 = this.vertices.findIndex(item => item === vertex2);
        if(this.adjMatrix[vIndex1][vIndex2] === 1){
            return true;
        }else{
            return false;
        }
    }
}

const vertices = ['A','B','C','D','E','F','G','H','I']; // add vertex here
const edges = [ // add edge here
    ['A','B'],
    ['A','C'],
    ['A','D'],
    ['B','E'],
    ['B','F'],
    ['C','G'],
    ['D','H'],
    ['E','H'],
    ['F','H'],
    ['G','H'],
    ['H','I'],
    ['F','I']
];
const adjMatrix = new AdjacencyMatrix();
vertices.forEach(vertex => adjMatrix.addVertex(vertex)); // add vertices to the matrix
edges.forEach(edgePair => adjMatrix.addEdge(edgePair[0],edgePair[1]));
// adjMatrix.addVertex('I');

// console.log(adjMatrix.adjMatrix[7]);
// console.log(adjMatrix.isConnected('A','G'));
console.log(adjMatrix.adjMatrix);