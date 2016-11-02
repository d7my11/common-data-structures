// Stack Data Structure

class Stack {

    constructor() {
        this._position = -1;
        this._stack = [];
    }

    top() {
        return this._position;
    }

    pop() {
        if (this._position < 0) return;

        let current = this._stack[this._position];
        delete this._stack[this._position];
        this._position--;

        return current;
    }

    push(item) {
        this._position++;
        this._stack[this._position] = item;
    }
}

const myStack = new Stack()
