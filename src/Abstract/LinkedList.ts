import { ListNodeType } from "../types";

export abstract class LinkedList<T> {
    protected _head: ListNodeType<T>;

    constructor(head: ListNodeType<T>) {
        this._head = head;
    }
}