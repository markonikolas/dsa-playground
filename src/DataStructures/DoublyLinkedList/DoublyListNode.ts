import { IData, INextNode, IPrevNode } from '../../Interfaces/Accessors';

import { ListNode } from '../../Abstract';
import { ListNodeType } from '../../types';

export class DoublyListNode<T> extends ListNode<T> implements IData<T>, IPrevNode<T>, INextNode<T> {
    private _prev: DoublyListNode<T> | null = null;

    constructor(data: T) {
        super(data);
    }

    get data(): T | null {
        return this._data;
    }

    set data(data: T | null) {
        this._data = data;
    }

    get prev(): DoublyListNode<T> | null {
        return this._prev;
    }

    set prev(prev: DoublyListNode<T> | null) {
        this._prev = prev;
    }

    get next(): ListNodeType<T> {
        return this._next;
    }

    set next(next: ListNodeType<T>) {
        this._next = next;
    }
}
