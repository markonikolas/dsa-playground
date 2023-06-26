import { ListNode } from '../../types';

import { SinglyLinkedList } from './SinglyLinkedList';

export class DoublyLinkedList<T> extends SinglyLinkedList<T> {
    constructor(protected _head: ListNode<T> | null = null) {
        super(_head);
    }
}
