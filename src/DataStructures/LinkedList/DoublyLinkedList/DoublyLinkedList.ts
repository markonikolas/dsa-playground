import { SinglyLinkedList } from '../SinglyLinkedList/SinglyLinkedList';
import { DoublyListNode } from './DoublyListNode';

export class DoublyLinkedList<T> extends SinglyLinkedList<T> {
    constructor(protected _head: DoublyListNode<T> | null = null) {
        super(_head);
    }

    get head(): DoublyListNode<T> | null {
        return this._head;
    }

    set head(node: DoublyListNode<T> | null) {
        this._head = node;
    }

    public append(node: DoublyListNode<T>): DoublyListNode<T> {

        if (!this.head) {
            this.head = node;
            return this.head;
        }

        const lastListNode = this.getLast(this.head) as DoublyListNode<T>;

        node.prev = lastListNode;
        lastListNode.next = node;

        return node;
    }

    public prepend(node: DoublyListNode<T>): DoublyListNode<T> {
        this.head!.prev = node;

        const newHead = super.prepend(node) as DoublyListNode<T>;

        return newHead;
    }

    public insert(node: DoublyListNode<T>, prev: DoublyListNode<T>): DoublyListNode<T> {

        if (!node) throw new Error('You need to provide the node to insert.');
        
        node.prev = prev;
        node.next = prev.next;
        prev.next = node;

        return node;
    }
}
