import { ListNode } from '../../types';
import { IPrevNode } from '../../Interfaces/Accessors';
import { SinglyListNode } from './SinglyListNode';

export class DoublyListNode<T> extends SinglyListNode<T> implements IPrevNode<T> {

    constructor(
        protected _data: T, 
        protected _next: ListNode<T> = null,
        private _prev: ListNode<T> = null,
        ) {
            super(_data, _next);
            this._prev = _prev;
    }

    get prev(): ListNode<T> {
        return this._prev;
    }

    set prev(prev: ListNode<T>) {
        this._prev = prev;
    }
}
