"use strict"

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    /**
     * Creates a new Node using the given input data and
     * adds it to the end of the LinkedList.
     * @param {any} data Any input value
     */
    append(data) {
        // Create a new node w/ the given data
        const newNode = new Node(data)
        // Add it to the back of the LinkedList by
        // 'traversing' through the linkedList until we find the 
        // last Node

        if(!this.head) {
            this.head = newNode
            return;
        }

        let current = this.head
        while(current.next != null) {
            // "traverse"
            current = current.next
        }
        current.next = newNode
    }

    /**
     * Creates a new Node using the given input data and
     * adds it to the beginning of the LinkedList as the
     * new head.
     * @param {any} data Any input value
     */
    prepend(data) {
        // Create a new node w/ the given data
        const newNode = new Node(data)
        // Add it to the front of the LinkedList
        // By making it the new head
        const oldHead = this.head
        this.head = newNode
        newNode.next = oldHead
    }

    /**
     * Inserts a new node w/ the given data before the n-th
     * node in the LinkedList
     * @param {Number} n The specified index to insert at
     * @param {any} data Any input value
     */
    insertAt(n, data) {
        // Create a new node w/ the given data
        const newNode = new Node(data)
        if(n == 0 || this.head == null) {
            // If you're adding to the head
            let prev = this.head
            this.head = newNode
            this.head.next = prev
            return
        }

        let prev = null
        let current = this.head
        let count = 0

        while(current != null && count < n) {
            prev = current
            current = current.next
            count++
        }

        // After exiting the while loop, our "current" is either at 
        // X or we've traversed past the length of our list
        prev.next = newNode
        newNode.next = current
    }

    /**
     * Remove the n-th node in the LinkedList
     * @param {Number} n The specified index to insert at
     * @returns {Node|Number} Returns the removed node, or -1 if not found
     */
    removeAt(n) {
        // If empty
        if(!this.head) {
            return -1
        }
        // If removing head
        if(n === 0) {
            let removedNode = this.head
            this.head = this.head.next
            return removedNode
        }

        let prev = null
        let current = this.head
        let idx = 0

        while(current.next != null && idx < n) {
            prev = current
            current = current.next
            idx++
        }

        // Remove references to the node
        prev.next = current.next
        return current
    }

    /**
     * Finds the index of the node with the given data
     * @param {any} data The data to search for
     * @returns {Number} Returns the index of the data, or -1 if not found
     */
    findIdx(data) {
        if(!this.head) {
            return -1
        }

        let current = this.head
        let idx = 0
        while(current != null) {
            if(current.data === data) {
                return idx 
            } else {
                current = current.next
                idx++
            }
        }
        return -1
    }

    /**
     * console.logs the contents of the LinkedList
     */
    print() {
        if(!this.head) return;
        let str = ''
        let currentNode = this.head

        while(currentNode != null) {
            str += currentNode.data + ', '
            currentNode = currentNode.next
        }
        console.log(str)
    }
}

const myLinkedList = new LinkedList()
myLinkedList.append('a')
myLinkedList.append('b')
myLinkedList.append('c')
myLinkedList.print() // Should see a, b, c

myLinkedList.prepend('2')
myLinkedList.prepend('1')
myLinkedList.prepend('0')
myLinkedList.print('0') // Should see 0, 1, 2, a, b, c

myLinkedList.insertAt(0, 'zero')
myLinkedList.insertAt(1, 'first')
myLinkedList.insertAt(100, 'last')
myLinkedList.print()

console.log("Removed last:", myLinkedList.pop()) // Should see "last"

console.log(myLinkedList.findIdx('last')) // Should see -1
console.log(myLinkedList.findIdx('first')) // Should see 0
console.log(myLinkedList.findIdx('c')) // Should see 7

myLinkedList.print()
myLinkedList.removeAt(0)
myLinkedList.print()
myLinkedList.removeAt(4)
myLinkedList.print()
myLinkedList.removeAt(100)
myLinkedList.print()


module.exports = {
    LinkedList
}