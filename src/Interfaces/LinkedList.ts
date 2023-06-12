import { ListNodeType } from "../types";

export interface ILinkedList<T> {
    /**
     * Gets the head of the list.
     */
    get head(): ListNodeType<T> | null;

    /**
     * Sets the head of the list to node provided
     */
    set head(node: ListNodeType<T> | null);

    /**
     * Add the node to the start of the list.
     */
    prepend(node: ListNodeType<T>): ListNodeType<T>;

    /**
     * Add the node to the ent of the list.
     */
    append(node: ListNodeType<T>): ListNodeType<T>;

    /**
     * Delete the node from the list.
     */
    delete(prev: ListNodeType<T>, node: ListNodeType<T>): void;

    /**
     * Insert the node somewhere in the middle of the list.
     */
    insert(node: ListNodeType<T>, prev: ListNodeType<T> | null): void;

    /**
     * Traverse the list.
     */
    traverse(): string;

    /**
     * Search the list data.
     */
    search(data: T): ListNodeType<T> | null;
}