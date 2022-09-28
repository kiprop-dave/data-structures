// used in most use cases

class AdjacencyList {
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    addVertex(vertex){
        this.adjList.set(vertex,[]);
    }

    addEdge(vertex1,vertex2){
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1);
    }

    deleteVertex(vertex){
        const vertexEdges = this.adjList.get(vertex);

        for(const vedge of vertexEdges){
            const newEdgeList = this.adjList.get(vedge).filter(item => item !== vertex);
            this.adjList.set(vedge,newEdgeList);
        }
        this.adjList.delete(vertex);
        this.noOfVertices = this.noOfVertices - 1;
    }

    deleteEdge(vertex1,vertex2){
        const newVertex1 = this.adjList.get(vertex1).filter(item => item !== vertex2);
        const newVertex2 = this.adjList.get(vertex2).filter(item => item !== vertex1);
        this.adjList.set(vertex1,newVertex1);
        this.adjList.set(vertex2,newVertex2);
    }

    bfs(vertex, target){ // method for breadth first search
        const visitedVertex = new Set(); // keeps track of the visited vertices
        const queue = [vertex];

        while(queue.length > 0){
            const firstElement = queue.shift();
            const edges = this.adjList.get(firstElement);

            for(const edge of edges){
                console.log(edge);
                if(edge === target){
                    // return `found ${edge}`;
                    console.log(`found ${edge}`);
                }
                if(!visitedVertex.has(edge)){
                    visitedVertex.add(edge);
                    queue.push(edge);
                }
            }
        }
    }

    dfs(vertex,target,visitedVertex = new Set()){ // method for depth first search
        console.log(vertex);
        visitedVertex.add(vertex);

        const edges = this.adjList.get(vertex);
        for(const edge of edges){
            if(edge === target){
                console.log(`found ${edge}`);
                // return `found ${edge}`;
                return;
            }

            if(!visitedVertex.has(edge)){
                this.dfs(edge,target, visitedVertex);
            }
        }
    }
    
    printGraph(){
        const getKeys = this.adjList.keys(); // gets the vertices

        const allElements = [];
        for(const vertex of getKeys){
            const getList = this.adjList.get(vertex);

            let edges = '';

            for(const edge of getList){
                edges += edge + ' ';
            }
            allElements.push(`${vertex} -> ${edges}`);
        }
        return allElements;
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
const adjacencyList = new AdjacencyList(8);

vertices.forEach(vertex => adjacencyList.addVertex(vertex));
edges.forEach(edgePair => adjacencyList.addEdge(edgePair[0],edgePair[1]));


console.log(adjacencyList);
// console.log(adjacencyList.deleteEdge('A','B'));
adjacencyList.deleteVertex('A');
console.log(adjacencyList);
// console.log(adjacencyList.printGraph());
// console.log(adjacencyList.bfs('C','B'));
// console.log(adjacencyList.dfs('A','H'));



// const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
// const routes = [
//     ['PHX', 'LAX'],
//     ['PHX', 'JFK'],
//     ['JFK', 'OKC'],
//     ['JFK', 'HEL'],
//     ['JFK', 'LOS'],
//     ['MEX', 'LAX'],
//     ['MEX', 'BKK'],
//     ['MEX', 'LIM'],
//     ['MEX', 'EZE'],
//     ['LIM', 'BKK'],
// ];
// const adjList = new AdjacencyList(11);
// airports.forEach(airport => adjList.addVertex(airport));
// routes.forEach((route => adjList.addEdge(route[0],route[1])))
// console.log(adjList.bfs('PHX','BKK'));