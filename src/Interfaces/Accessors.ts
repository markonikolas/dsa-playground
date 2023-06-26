import { ListNode } from "../types";

export interface IPrevNode<T> {
    /**
     * Gets previous node in the list.
     */
    get prev(): ListNode<T> | null;

    /**
     * Sets previous node in the list.
     */
    set prev(prev: ListNode<T> | null);
}

export interface IHeadNode<T> {
    /**
     * Gets the head of the list.
     */
    get head(): ListNode<T> | null;

    /**
     * Sets the head of the list to node provided
     */
    set head(node: ListNode<T> | null);
}