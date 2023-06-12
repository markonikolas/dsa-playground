import { LinkedList } from '../../Abstract';
import { DoublyListNode } from './DoublyListNode';

export class DoublyLinkedList<T> extends LinkedList<T> {
    constructor(head: DoublyListNode<T>) {
        super(head);
    }
}