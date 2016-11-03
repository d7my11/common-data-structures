// Tree Data Structure

class Tree {
    constructor(data) {
        this._root = new this.treeNode(data);
    }

    treeNode(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }

    depthSearch(callback) {
        (function getNode(currentRoot){
          let length = currentRoot.children.length;
            for (let i = 0; i < length; i++) {
                getNode(currentRoot.children[i]);
            }

            callback(currentRoot);
        })(this._root);
    }

    breadthSearch(callback) {
        // TODO: implement Breadth-First Search using Queue
    }

    contains(callback, searchType) {
        searchType.call(this, callback);
    }

    add(data, parentData, searchType) {
        let child = new this.treeNode(data);
        let childParent = null;

        let childCallback = function (node) {
            if (node.data === parentData) {
                childParent = node;
            }
        }

        this.contains(childCallback, this.depthSearch);

        if (childParent) {
            childParent.children.push(child);
            child.parent = childParent;
        } else {
            return null;
        }
    }

    remove(data, parentData, searchType) {
        let tree = this;
        let parent = null;
        let childToRemove = null;
        let index;

        let getParent = function (node) {
            if (node.data == parentData) {
                parent = node;
            }
        };

        this.contains(getParent, this.depthSearch);

        if (!parent || !parent.children.length) return null;
        index = parent.children.findIndex((child) => {return data == child.data});

        if (index === -1) return null;
        childToRemove = parent.children.splice(index, 1);

        return childToRemove;
    }
}

module.exports = Tree;
