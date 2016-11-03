// Linked List Data Structure

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    listNode(content) {
        this.content = content;
        this.next = null;
        this.previous = null;
    }

    add(content) {
        let listNode = new this.listNode(content);

        if (this._length) {
            this._tail.next = listNode;
            listNode.previous = this._tail;
            this._tail = listNode;
        } else {
            this._head = listNode;
            this._tail = listNode;
        }

        this._length++;

        return listNode;
    }

    insertAt(content, position) {
        // TODO: insert node in specific position
    }

    searchFor(content) {
        // TODO: search for node via its content
    }

    searchAt(position) {
        if (position < 0 || position > this._length -1 || !this._length) return null;

        if (position === 0) {
            return this._head;
        }

        if (position === this._length -1) {
            return this._tail;
        }

        let count = 0;
        let currentHead = this._head;

        while (count < position) {
            count++;
            currentHead = currentHead.next;
        }

        return currentHead;
    }

    removeAt(position) {
        if (position < 0 || position > this._length -1 || !this._length) return null;

        if (position === 0) {
            let nodeToBeDeleted = this._head;
            this._head = this._head.next;
            this._head.previous = null;
            this._length--;

            return nodeToBeDeleted;
        }

        if (position === this._length -1) {
            let nodeToBeDeleted = this._tail;
            this._tail = this._tail.previous;
            this._tail.next = null;
            this._length--;

            return nodeToBeDeleted;
        }

        let count = 0;
        let nodeToBeDeleted = null;
        let nodeBeforeDeleted = null;
        let nodeAfterDeleted = null;
        let currentHead = this._head;

        while (count < position) {
            count++;
            currentHead = currentHead.next;
        }

        nodeToBeDeleted = currentHead;
        nodeBeforeDeleted = currentHead.previous;
        nodeAfterDeleted = currentHead.next;

        nodeBeforeDeleted.next = nodeAfterDeleted;
        nodeAfterDeleted.previous = nodeBeforeDeleted;
        this._length--;

        return nodeToBeDeleted;
    }
}

const myList = new LinkedList();
