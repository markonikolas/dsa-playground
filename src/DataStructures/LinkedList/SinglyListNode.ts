import { ListNode } from '../../types';

export class SinglyListNode<T> {

    constructor(protected _data: T, protected _next: ListNode<T> | null = null) {
        this._data = _data;
    }

    get data(): T {
        return this._data;
    }

    set data(data: T) {
        this._data = data;
    }

    get next(): ListNode<T> | null {
        return this._next;
    }

    set next(next: ListNode<T> | null) {
        this._next = next;
    }
}
