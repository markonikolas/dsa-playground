import { DoublyListNode, SinglyListNode } from '../DataStructures/LinkedList';

export interface IPrevNode<T> {
    /**
     * Gets previous node in the list.
     */
    get prev(): DoublyListNode<T> | null;

    /**
     * Sets previous node in the list.
     */
    set prev(prev: DoublyListNode<T> | null);
}

export interface IHeadNode<T> {
    /**
     * Gets the head of the list.
     */
    get head(): SinglyListNode<T> | null;

    /**
     * Sets the head of the list to node provided
     */
    set head(node: SinglyListNode<T> | null);
}