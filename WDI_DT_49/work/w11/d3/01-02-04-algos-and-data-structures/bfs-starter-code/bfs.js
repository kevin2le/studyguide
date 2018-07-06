/*

Implement a breadth first search algorithm that finds the shortest path between
a source node and each other node in a undirected, unweighted graph. Use the
queue and graph below to do this.

The breadthFirstSearch(source) method takes a string as a parameter which is the value associated 
with the source node and returns an object. The keys of this object are each node value in the graph. 
The values of the object are the distances from the source node to that respective node. 
An example of the output is as follows for a search with 'A' being the source node:

  output: {'A': 0, 'B': 1, 'C': 2, 'D': 3}

*/

const assert = require('assert')

// Graph is an undirected, unweighted graph 
class Graph {
	
	constructor() {
		this.nodes = {}
	}
	
	addNode(value) {
		this.nodes[value] = [] 	
	}

	addEdge(fromNode, toNode) {
		this.nodes[fromNode].push(toNode)
		this.nodes[toNode].push(fromNode)
    }
    
    breadthFirstSearch(source) {
        // Write code here
    }

}

class Queue {

    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }
    
    dequeue() {
      return this.items.shift();
    }

    // returns true if empty 
    // returns false if not empty
    isEmpty() {
        return !(!!this.items.length)
    }

}

/*

    Below we test breadth-first search

*/

graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');
graph.addNode('G');
graph.addNode('H');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'B');
graph.addEdge('B', 'E');
graph.addEdge('D', 'E');
graph.addEdge('B', 'C');
graph.addEdge('B', 'F');
graph.addEdge('E', 'F');
graph.addEdge('F', 'G');
graph.addEdge('G', 'H');

// Assertions for BFS. Comment out the 3 lines below to test function
//assert(graph.breadthFirstSearch('C')['H'] === 4, 'BFS not correct')
//assert(graph.breadthFirstSearch('A')['A'] === 0, 'BFS not correct');
//assert(graph.breadthFirstSearch('B')['G'] === 2, 'BFS not correct');