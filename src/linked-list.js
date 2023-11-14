class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToTail(value) {
    const addNode = new Node(value)
    const formerTail = this.tail
    this.tail = addNode
    if (formerTail) {
      formerTail.next = addNode
      addNode.previous = formerTail
    } else {
      this.head = addNode
    }
  }

  addToHead(value) {
    const addNode = new Node(value)
    const formerHead = this.head
    this.head = addNode
    if (formerHead) {
      formerHead.previous = addNode
      addNode.next = formerHead
    } else {
      this.head = addNode
    }
  }

  removeHead() {
    const removedHead = this.head
    if (!removedHead) {
      return null
    }
    if (removedHead.next) {
      this.head = removedHead.next
      this.head.previous = null
    } else {
      this.head = null
      this.tail = null
    }

    return removedHead.value;
  }
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return null
    }
    if (removedTail.previous) {
      this.tail = removedTail.previous
      this.tail.next = null
    } else {
      this.head = null
      this.tail = null
    }

    return removedTail.value;
  }
  search(comparator) {
    if (typeof comparator === 'string') {
      const comparatorString = comparator
      comparator = (elementValue) => comparatorString === elementValue
    }
    let currentNode = this.head
    while (currentNode !== null) {
      if (comparator(currentNode.value)) return currentNode.value
      currentNode = currentNode.next
    }
    return null
  }
}

module.exports = {
  Node,
  LinkedList
}
