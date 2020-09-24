// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0 ){
            this.front = newNode;
            this.back = newNode;
            this.length++
        } else if (this.length === 1){
            this.back = newNode
            this.back.next = this.front
            this.front.next = this.back
            this.length++
        } else {
            this.back = newNode;
            this.length++
        }
        return this.length
    }

    dequeue(){

    }

    size(){
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;
