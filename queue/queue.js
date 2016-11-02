// Queue Data Structure

class Queue {

    constructor() {
        this._holder = [];
        this._position = 0;
    }

    enqueue(item) {
        this._holder[this._position] = item;
        this._position++;

        return item;
    }

    dequeue() {
        if (!this._position) return null;

        let current = this._holder[0];
        this._holder = this._holder.slice(1);
        this._position--;

        return current;
    }

    peek() {
        return this._holder[this._position -1];
    }
}

const myQueue = new Queue();
