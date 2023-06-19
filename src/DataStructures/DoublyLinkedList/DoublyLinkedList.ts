import { LinkedList } from '../../Abstract';
import { ILinkedList } from '../../Interfaces/LinkedList';
import { ListNodeType } from '../../types';
import { DoublyListNode } from './DoublyListNode';

export class DoublyLinkedList<T> extends LinkedList<T> implements ILinkedList<T> {
    constructor(head: DoublyListNode<T> | null = null) {
        super(head);
    }

    get head(): ListNodeType<T> | null {
        return this._head;
    }

    set head(node: ListNodeType<T>) {
        this._head = node;
    }

    prepend(node: ListNodeType<T>): ListNodeType<T> {
        throw new Error('Method not implemented.');
    }

    append(node: ListNodeType<T>): ListNodeType<T> {
        throw new Error('Method not implemented.');
    }

    delete(prev: ListNodeType<T>, node: ListNodeType<T>): void {
        throw new Error('Method not implemented.');
    }

    insert(node: ListNodeType<T>, prev: ListNodeType<T>): void {
        throw new Error('Method not implemented.');
    }

    traverse(): string {
        throw new Error('Method not implemented.');
    }

    search(data: T): ListNodeType<T> {
        throw new Error('Method not implemented.');
    }
}
