class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head) return undefined

        let temp = this.head
        let pre = this.head

        while (temp.next){
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length--

        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
         } else {
            newNode.next = this.head
            this.head = newNode
         }
         this.length++
         return this
    }

    shift() {
        if(!this.head) return undefined

        const firstElement = this.head.value
        const temp = this.head
        this.head = temp.next
        this.length--
        return firstElement
    }

    // shift() {
    //     if(!this.head) return null
    //     const temp = this.head
    //     this.head = this.head.next
        
    //     this.length--
        
    //     if(this.length === 0) {
    //         this.tail = this.head
    //         this.tail.next = null
    //     }
        
    //     return temp
    // }

    printList() {
        let temp = this.head
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }

    getHead() {
        if (this.head === null) {
            console.log('Head: null')
        } else {
            console.log('Head: ' + this.head.value)
        }
    }

    getTail() {
        if (this.head === null) {
            console.log('Tail: null')
        } else {
            console.log('Tail: ' + this.tail.value)
        }
    }

    getLength() {
        console.log('Length: ' + this.length)
    }
}

let myLinkedList = new LinkedList(4)
myLinkedList.push(7)
myLinkedList.unshift(9)
const first = myLinkedList.shift()
console.log(first)
myLinkedList.getHead()
myLinkedList.getTail()
myLinkedList.getLength()
console.log('\nLinked List:')
myLinkedList.printList()

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/

/*
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }




This code defines two classes in JavaScript: Node and LinkedList. These classes are used to create a singly linked list data structure. Let's break down each part of the code:



The Node class:

The Node class represents the elements in the linked list. Each node has two properties: value and next.

The constructor function is called when a new instance of the Node class is created. It takes one argument, value, which will be the value of the node.

this.value = value; assigns the value passed as an argument to the value property of the Node instance.

this.next = null; initializes the next property of the node as null. The next property will be used to store a reference to the next node in the linked list.

The LinkedList class:

The LinkedList class represents the linked list itself. It has three properties: head, tail, and length.

The constructor function is called when a new instance of the LinkedList class is created. It takes one argument, value, which will be the value of the first node in the list.

const newNode = new Node(value); creates a new instance of the Node class with the given value and assigns it to the variable newNode.

this.head = newNode; assigns the newly created node to the head property of the LinkedList instance. The head represents the first node in the list.

this.tail = this.head; assigns the head node to the tail property of the LinkedList instance. The tail represents the last node in the list. Since there is only one node at this point, the head and tail are the same.

this.length = 1; initializes the length property of the linked list to 1, as there is only one node in the list.





Code with inline comments:



// Define the Node class for the singly linked list
class Node {
    // Constructor for the Node class, takes a value as an argument
    constructor(value){
        // Assign the value to the 'value' property of the Node instance
        this.value = value;
        // Initialize the 'next' property to null, which will 
        // store a reference to the next node in the list
        this.next = null;
    }
}
 
// Define the LinkedList class for the singly linked list
class LinkedList {
    // Constructor for the LinkedList class, takes a value 
    // as an argument to create the first node in the list
    constructor(value) {
        // Create a new Node instance with the given value 
        // and assign it to the variable 'newNode'
        const newNode = new Node(value);
        // Set the 'head' property of the LinkedList instance 
        // to the newly created node (the first node in the list)
        this.head = newNode;
        // Set the 'tail' property of the LinkedList instance to the head node 
        // (the last node in the list, since there is only one node at this point)
        this.tail = this.head;
        // Initialize the 'length' property of the LinkedList instance 
        // to 1, as there is only one node in the list
        this.length = 1;
    }
}
*/
