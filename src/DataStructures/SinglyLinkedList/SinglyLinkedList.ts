import { ListNodeType } from '../../types';
import { ILinkedList } from '../../Interfaces/LinkedList';

import { LinkedList } from '../../Abstract';
import { SinglyListNode } from './SinglyListNode';

export class SinglyLinkedList<T> extends LinkedList<T> implements ILinkedList<T> {
    constructor(head: SinglyListNode<T>) {
        super(head);
    }

    get head(): ListNodeType<T> | null {
        return this._head;
    }

    set head(head: ListNodeType<T> | null) {
        this._head = head;
    }

    private getLast(node: ListNodeType<T>): ListNodeType<T> {
        return node?.next ? this.getLast(node.next) : node;
    }

    public prepend(node: ListNodeType<T>): ListNodeType<T> {
        if (!node) return node;

        if (!this.head) {
            this.head = node;
            return this.head;
        }

        node.next = this.head;
        this.head = node;

        return this.head;
    }

    public append(node: ListNodeType<T>): ListNodeType<T> {
        if (!this.head) {
            this.head = node;
            return this.head;
        }

        const lastListNode = this.getLast(this.head);

        lastListNode!.next = node;

        return lastListNode;
    }

    public insert(node: ListNodeType<T>, prev: ListNodeType<T>): void {

        if (!node) throw new Error('You need to provide the node to insert.');

        if (!prev) {
            this.prepend(node);
            return;
        }

        node.next = prev.next;
        prev.next = node;
    }

    public delete(node: SinglyListNode<T>, prev: SinglyListNode<T> | null): void {
        if (!this.head) throw ReferenceError('The list is empty.');

        if (!prev) {
            this.head = node.next;
            return;
        }

        prev.next = node.next;
    }

    public traverse(): string {
        let current: ListNodeType<T> | null = this.head;
        let out = '';

        if (!current) {
            return '<empty list>';
        }

        while (current) {
            if (current === this.head) {
                out += `[ HEAD: ${current.data} ]`;
            } else if (!current.next) {
                out += `[ TAIL: ${current.data} ]`;
            } else {
                out += `[ ${current.data} ] `;
            }

            if (current.next) out += ' -> ';

            current = current.next;
        }

        return out;
    }

    public search(data: T): ListNodeType<T> | null {
        let current = this.head;

        while (current) {
            if (data === current.data) {
                return current;
            }

            current = current.next;
        }

        return null;
    }
}
