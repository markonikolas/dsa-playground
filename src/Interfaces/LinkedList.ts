import { ListNode } from "../types";

export interface ILinkedList<T> {
    /**
     * Add the node to the start of the list.
     */
    prepend(node: ListNode<T>): ListNode<T>;

    /**
     * Add the node to the ent of the list.
     */
    append(node: ListNode<T>): ListNode<T>;

    /**
     * Delete the node from the list.
     */
    delete(prev: ListNode<T>, node: ListNode<T>): void;

    /**
     * Insert the node somewhere in the middle of the list.
     */
    insert(node: ListNode<T>, prev: ListNode<T> | null): void;

    /**
     * Traverse the list.
     */
    traverse(): string;

    /**
     * Search the list data.
     */
    search(data: T): ListNode<T> | null;
}