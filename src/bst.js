class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  insert(value) {
    if (value === this.value) {
      return;
    }
    const direction = value < this.value ? 'left' : 'right'
    if (this[direction]) {
      this[direction].insert(value)
    } else {
      this[direction] = new BinarySearchTree(value)
    }
    this.magnitude++
  }

  size() {
    return this.magnitude;
  }

  contains(value) {
    if (this.value === value) {
      return true
    }
    const direction = value < this.value ? 'left' : 'right'
    if (this[direction]) {
      return this[direction].contains(value)
    } else {
      return false;
    }
  }

  depthFirstForEach(callback, order = 'in-order') {
    if (order === 'pre-order') {
      callback(this.value)
    }

    if (this.left) {
      this.left.depthFirstForEach(callback, order)
    }

    if (order === 'in-order') {
      callback(this.value)
    }

    if (this.right) {
      this.right.depthFirstForEach(callback, order)
    }

    if (order === 'post-order') {
      callback(this.value)
    }

  }
  breadthFirstForEach(callback) {
    const queue = [this] // this is the first node (root)

    while (queue.length) {
      const nodeToProcess = queue.shift()
      if (nodeToProcess.left) {
        queue.push(nodeToProcess.left)
      }

      if (nodeToProcess.right) {
        queue.push(nodeToProcess.right)
      }

      callback(nodeToProcess.value)
    }
  }
}

module.exports = BinarySearchTree
