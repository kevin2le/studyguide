# Introduction to Algorithms and Data Structures

By the end of this lecture you should be able to:

* Use recursion to solve simple iterative and branching problems
* Implement Bubble sort and Insertion sort
* Understand the basic make-up of a graph 
* Understand how to implement breadth-first search on a graph

## Recursion 

A **recursive function** is one that calls itself. Recursive functions can accomplish much of what iterating can do.

Every recursive function must include these two parts: 

1. **base case** - You need to tell your function when it should no longer call itself or it will continue calling itself forever resulting in an infinite loop!
2. **recursive step** - The step where you call your function 

### Example 1:  Factorial 

The factorial of a number is the product of all numbers up to that number. 

For example, 5! is equal to 5 * 4 * 3 * 2 * 1 = 120

Let's write an algorithm to recursively compute a factorial of some integer.

**Quiz**: What is our base case?

**Quiz**: What is our recursive step?

Ok now that we have our recursive step and base case lets write our algorithm: 

```js
function factorial(x) {
    if (x === 1) {
        return x
    } 
    return x * factorial(x-1)  
}

factorial(3)
```

Let's paste this into Chrome DevTools `Snippets` to see what the call stack looks like when we run this code. The **call stack** is a stack that records function calls. When a function is returned it is popped off the stack. Each one of our `recursive` calls to factorial places `factorial` onto the stack.

### Example 2: recursiveForEach 

We stated earlier that we could express all iterative functions in a recursive way. Let's write `forEach` recursively. Here is the code below:

```js
function recursiveForEach(inp, out, index, cb) {
        if (index === inp.length) {
                return out
        }
        out.push(cb(inp[index]))
        return recursiveForEach(inp, out, index+1, cb)
}

recursiveForEach([1,2,3], [], 0, (x) => x + 1) //=> [2,3,4]
```

We pass `recursiveForEach` an input array, an empty array, a starting index and a callback. It returns to us the result of applying `cb` to each element in `inp`.

**Quiz**: What's the base case? What's the recursive step?

> Exercise A1 (15 mins): Write an algorithm called `sumDigits` that takes a non-negative integer as input and returns the sum of the integers. Do this exercise recursively. The following may be useful:

```js
198 % 10 //=>  8 
Math.floor(198/10) //=> 19
```

You can use `Math.floor` to remove the rightmost digit (`Math.floor(198/10)` becomes `19`) and you can use modular arithmetic (`%`) to get the rightmost digit.

>Exercise A2 (15 minutes): Write an algorithm called `pow` that takes a number and raises it to a power. For example `pow(2,3)` should return 8 because 2^3 = 2 * 2 * 2. 

## Sorting Algorithms 

Consider the problem: Given a list of integers like `[1,6,2,4,3,8,9]` write an algorithm that sorts these integers in ascending order `[1,2,3,4,6,8,9]`.

Algorithms the solve the problem above are known as **sorting algorithms**. We are going to study two common sorting algorithms: 

* Bubble sort 
* Insertion sort 

### Bubble sort

Bubble sort is a sorting algorithm that repeatedly steps through an array of numbers, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

![bubblesort](./images/bubble-sort.gif)

>Exercise B (15 minutes): Implement Bubble sort. This should be a function called `bubbleSort` that takes an array of integers as input and returns the array of integers in sorted order.

### Insertion sort

Insertion sort is best explained via video. Let's [watch](https://www.youtube.com/watch?v=DFG-XuyPYUQ).

![inertionsort](./images/insertion.gif)

>Exercise C (15 minutes): Implement Insertion sort. This should be a function called `insertionSort` that takes an array of integers as input and returns the array of integers in sorted order.

## Graphs and Their Algorithms

Graphs are a very useful data structure. They can be used to model social networks, computer network or even roads in a city. This part of the lecture will discuss the fundamentals of graphs.

### What is a Graph 

Graphs are a data structure comprised entirely of only two components:

* Edges
* Nodes or Vertices

<img src="https://docs.google.com/drawings/d/1BX3LCUb9Z-dHS25zc2RKo4nDbMt4S3A85cUYh53r91A/pub?w=527&amp;h=347">

Figure 1. A undirected, unweighted graph.

A graph can either be **directed** or **undirected**. A undirected graph has unordered vertices. This means that one can traverse an undirected graph in any order. Figure 1 is an undirected graph. A directed graph enforces some ordering with respect to traversal. You can only move from the tail to the head of a directed graph edge arrow. For example, in Figure 2 the only way to go from node *a* to node *c* is through nodes b and d. You can think of this as a one-way street.

A graph can also have a *weight* associated with each edge. This weight is typically an integer. It is simply the cost of traveling from one node to the next node.

<img src="https://docs.google.com/drawings/d/1tIer7LchDYoMjXKGDQqSeBjznAXETpRHfnOZrnyxdlc/pub?w=551&amp;h=289">

Figure 2. A weighted, directed, cyclic graph.

A **cycle** is a path on a graph that when followed returns you to where the path began. Figure 2 is a cyclic graph. 

The **distance** between two nodes in a graph is a measure of how close two nodes are to one another. For an unweighted graph the distance is simply how many edges are between two nodes. For a weighted graph, the distance is the sum of edge weights between two nodes. In Figure 2 the distance from node c to node a is 16 and the distance from node *a* to node *d* is 19.

### Representing a Graph with an Adjacency List 

The adjacency representation of a graph and its edges utilizes an array to store edges in a graph. In this representation each node has associated with it, an array of the edges it is connected to. For example an adjacency array representation of the graph in Figure 1 would look like this in pseudocode:

```
node 1 = [node 2, node 4]
node 2 = [node 1, node 3]
node 3 = [node 2, node 4]
node 4 = [node 1, node 4]
```

#### JavaScript Implementation of a Graph 

Below is an undirected, unweighted graph written in JavaScript.

```js
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

}

const g1 = new Graph 

g1.addNode('A')
g1.addNode('B')
g1.addNode('C')
g1.addNode('D')
g1.addNode('E')

g1.addEdge('A', 'B')
g1.addEdge('B', 'D')
g1.addEdge('B', 'C')
g1.addEdge('D', 'E')
```

>Exercise D (10 minutes): Write a method on `Graph` called `removeEdge` that removes an edge between two nodes. The `removeEdge` function should take the names of two nodes as argument (e.g., `removeEdge('A', 'B')`).


### Breadth-First Search and Greedy Algorithms

The breadth-first search algorithm is a greedy shortest path algorithm. A greedy algorithm is an algorithm that chooses the locally optimal choice at each stage to get the globally optimal solution. This is a general class of algorithms.

### Finding the Shortest Path

The shortest path problem is as follows: given a graph and a starting node, find the shortest path from that node to every other node. 

#### Description of Breadth-First Search

A breadth-first search algorithm is initially provided a starting node. We will call this initial node the **source node**. The central idea behind breadth-first graph traversal is that the algorithm works by first visiting all the nodes that are connected to the source node before it traverses any other nodes. This logic is repeated for the nodes that are connected to the source node and so on, until all nodes are visited.

<img src="https://docs.google.com/drawings/d/1VSgfupN7JEoadaIQEbl17E6oE3Y_1hU_cbCXfKeXiak/pub?w=915&amp;h=596">


Figure 4. Representation of breadth-first graph traversal. The initial graph appears in the top left. The blue nodes represent those that the algorithm has not yet traversed, while the red nodes represent those that the algorithm has already traversed. The breadth-first algorithm traverses the algorithm in layers. Each layer is composed of nodes that are the same distance away from the source node.

To implement breadth-free search you can use a queue. Here is some pseudocode for the breadth-first search algorithm.

```
function breadth-first(graph, source node)
    put the source node onto the queue
    while queue is not empty
        dequeue
        visit that the dequeued node
        put the children of the dequeued node in the queue
```

Now watch <a href="https://www.youtube.com/watch?v=bIA8HEEUxZI">this</a> video explaining breadth-first graph traversal. 

>Exercise E (30 minutes). Implement the `breadthFirstSearch(source)` method on the `Graph` class. The `breadthFirstSearch` method should take a string as input which uniquely identifies a node on a graph. It should return an object where each property is a node in the graph and the value is the distance from the source node to that node. Write this in the `bfs-starter-code/bfs.js` file.

## Conclusion 

We just covered *a lot* of ground. The concepts and algorithms we just covered are fundamental ideas in Computer Science. Besides potentially being asked these problems in technical interviews knowing these concepts can make you a better programming. Many problems can be reduced to problems that can be expressed with a graph algorithm. If you want to learn more about this topic I suggest reading *Introduction to Algorithms* by CLRS or [this](https://www.coursera.org/learn/algorithms-part1) course on Coursera.
