class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    //if dont have first node, make newly created node first
    if (this.first === null) {
      this.first = node;
    }
    //make newly created node the last 
    if(this.last){
      this.last.next = node; 
    }
    //make the new node the last item on the queue
    this.last = node; 
  }

  dequeue() {
    // if this queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    // if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    return this.first.value;

  }

  all() {
    if (this.first === null) return null;
    let current = this.first;
    let result = [current.value];
    while (current.next !== null) {
      current = current.next;
      result.push(current.value);
    }
    console.log(result);
    return result;
    
  }
}

function display(queue) {
  if (queue.first === null) return;
  let builder = '';
  let current = queue.first;
  builder += current.value;
  while (current.next !== null) {
    current = current.next;
    builder += ' -> ' + current.value;
  }
  builder += ' -> tail';
  console.log(builder);
  return;
}

function main() {
  q = new Queue;
  q.enqueue('Dog');
  q.enqueue('Dog2');
  q.enqueue('Dog3');
  q.dequeue();
  q.all();
}

main();

module.exports = Queue
