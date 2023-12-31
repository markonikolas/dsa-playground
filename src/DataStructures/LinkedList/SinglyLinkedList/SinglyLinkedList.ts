import { ListNode } from '../../../types';
import { ILinkedList } from '../../../Interfaces/LinkedList';
import { IHeadNode } from '../../../Interfaces/Accessors';
import { SinglyListNode } from '.';

export class SinglyLinkedList<T> implements ILinkedList<T>, IHeadNode<T> {
    constructor(protected _head: SinglyListNode<T> | null = null) {
        /**
         * Head of the linked list.
         */
        this._head = _head;
    }
    
    /**
     * Get the head of the list.
     */
    get head(): ListNode<T> | null {
        return this._head;
    }

    /**
     * Set the new head of the list.
     */
    set head(node: ListNode<T> | null) {
        this._head = node;
    }
   
    /**
     * Get the last node of the list.
     * 
     */
    protected getLast(node: ListNode<T>): ListNode<T> {
        return node?.next ? this.getLast(node.next) : node;
    }

    public prepend(node: SinglyListNode<T>): SinglyListNode<T> {
        if (!node) throw new Error('You need to provide the node to prepend.');

        if (!this.head) {
            this.head = node;
            return this.head;
        }

        node.next = this.head;
        this.head = node;

        return this.head;
    }

    public append(node: SinglyListNode<T>): SinglyListNode<T> {
        if (!this.head) {
            this.head = node;
            return this.head;
        }

        const lastListNode = this.getLast(this.head) as SinglyListNode<T>;

        lastListNode!.next = node;

        return lastListNode;
    }

    public insert(node: SinglyListNode<T>, prev: SinglyListNode<T>): void {

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

        if(!node) throw ReferenceError('The node to delete isn\' t provided');

        if (!prev) {
            this.head = node.next;
            return;
        }

        prev.next = node.next;
    }

    public traverse(): string {
        let current: ListNode<T> = this.head;
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

    public search(data: T): ListNode<T> | null {
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
