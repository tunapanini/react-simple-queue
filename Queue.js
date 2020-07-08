class Queue {
  elements;
  id = 1;

  constructor(...initialElements) {
    this.elements = [];
    initialElements.forEach(value => this.enqueue(value));
  }

  enqueue(value) {
    this.elements.push({ value, id: this.id });
    this.id += 1;
  }

  dequeue() {
    const firstValue = this.peek();
    if (firstValue) this.elements.shift();
    return firstValue;
  }

  peek() {
    return this.elements.length > 0 ? this.elements[0].value : null;
  }
}

export default Queue;
