import { IData } from '../../Interfaces/Accessors';

import { ListNode } from '../../Abstract';

export class DoublyListNode<T> extends ListNode<T> implements IData<T> {
    public prev: DoublyListNode<T> | null = null;
    public next: DoublyListNode<T> | null = null;

    constructor(data: T) {
        super(data);
    }

    get data(): T | null {
        return this._data;
    }

    set data(data: T | null) {
        this._data = data;
    }
}
