import NodeClass from "./Node.js";

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  head() {
    if (this.headNode) {
      return this.headNode.value;
    } else {
      return undefined;
    }
  }

  append(value) {
    const nextNode = new NodeClass(value);
    if (this.headNode === null) {
      this.headNode = nextNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = nextNode;
    }
  }

  prepend(value) {
    const newFirstNode = new NodeClass(value);
    const currentFirstNode = this.headNode;
    if (currentFirstNode !== null) {
      this.headNode = newFirstNode;
      newFirstNode.nextNode = currentFirstNode;
    } else {
      this.headNode = newFirstNode;
    }
  }

  toString() {
    let returnStr = "";
    if (!this.headNode) {
      return returnStr;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        returnStr += `(${current.value}) -> `;
        current = current.nextNode;
      }
      returnStr += `(${current.value}) -> null`;
      return returnStr;
    }
  }

  size() {
    let size = 0;
    let current = this.headNode;
    while (current) {
      size++;
      current = current.nextNode;
    }
    return size;
  }

  tail() {
    if (!this.headNode) {
      return undefined;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current.value;
    }
  }

  at(index) {
    let i = 0;
    let current = this.headNode;
    while (current && i <= index) {
      if (i === index) {
        return current.value;
      }
      i++;
      current = current.nextNode;
    }
    return undefined;
  }

  pop() {
    if (this.headNode) {
      let currentHeadNode = this.headNode;
      this.headNode = currentHeadNode.nextNode;
      return currentHeadNode.value;
    }
    return undefined;
  }

  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.headNode;
    let i = 0;
    while (current) {
      if (current.value === value) {
        return i;
      }
      i++;
      current = current.nextNode;
    }
    return -1;
  }

  insertAt(index, ...values) {
    const listSize = this.size();
    if (index === 0 || index > listSize - 1) {
      throw new RangeError();
    } else {
      let current = this.headNode;
      let i = 0;
      while (i !== index) {
        current = current.nextNode;
        i++;
      }
      const detachedNode = current.nextNode;
      for (let j = 0; j < values.length; j++) {
        let currentValueNode = new NodeClass(values[j]);
        current.nextNode = currentValueNode;
        current = current.nextNode;
      }
      current.nextNode = detachedNode;
    }
  }
}

export default LinkedList;
