import { ListNodeType } from '../../types';
import { IData, INextNode } from '../../Interfaces/Accessors';

import { ListNode } from '../../Abstract';

export class SinglyListNode<T> extends ListNode<T> implements IData<T>, INextNode<T> {

    constructor(data: T) {
        super(data);

    }

    get data(): T | null {
        return this._data;
    }

    set data(data: T | null) {
        this._data = data;
    }

    get next(): ListNodeType<T> | null {
        return this._next;
    }

    set next(next: ListNodeType<T> | null) {
        this._next = next;
    }
}
