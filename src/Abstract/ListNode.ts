import { SinglyListNode, DoublyListNode } from '../DataStructures';

export abstract class ListNode<T> {
    protected _data: T | null = null;
    protected _next: SinglyListNode<T> | DoublyListNode<T> | null = null;

    constructor(data: T) {
        this._data = data;
    }
}