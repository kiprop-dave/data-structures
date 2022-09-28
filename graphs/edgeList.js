// We can represent graphs using an edges list and a vertices list
// However, it's not very efficient doing common operations like checking connection

class EdgeList{
    constructor(){
        this.vertices = [];
        this.edgeList = [];
    }

    addVertex(vertex){
        this.vertices.push(vertex);

        const newEdge = {
            edges: []
        }
        this.edgeList.push(newEdge);
    }

    findIndex(vertex){
        return this.vertices.findIndex(item => item === vertex);
    }

    addEdge(vertex1,vertex2){
        const vIndex1 = this.findIndex(vertex1);
        const vIndex2 = this.findIndex(vertex2);
        this.edgeList[vIndex1].edges.push(vertex2);
        this.edgeList[vIndex2].edges.push(vertex1);
    }

}


const vertices = ['A','B','C','D','E','F','G','H'];
const edges = [
    ['A','B'],
    ['A','C'],
    ['A','D'],
    ['B','E'],
    ['B','F'],
    ['C','G'],
    ['D','H'],
    ['E','H'],
    ['F','H'],
    ['G','H']
]

const edgeList = new EdgeList();
vertices.forEach(vertex => edgeList.addVertex(vertex));
edges.forEach(edgePair => edgeList.addEdge(edgePair[0],edgePair[1]));
console.log(edgeList.edgeList);

