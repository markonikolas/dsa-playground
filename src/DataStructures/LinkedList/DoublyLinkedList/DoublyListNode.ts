import { IPrevNode } from '../../../Interfaces/Accessors';
import { SinglyListNode } from '../SinglyLinkedList/SinglyListNode';

export class DoublyListNode<T> extends SinglyListNode<T> implements IPrevNode<T> {

    constructor(
        protected _data: T, 
        protected _next: DoublyListNode<T> | null = null,
        protected _prev: DoublyListNode<T> | null = null
        ) {
            super(_data, _next);
            this._prev = _prev;
    }

    get prev(): DoublyListNode<T> | null {
        return this._prev;
    }

    set prev(prev: DoublyListNode<T> | null) {
        this._prev = prev;
    }
}
