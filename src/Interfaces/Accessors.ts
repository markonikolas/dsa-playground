import { ListNodeType } from "../types";

export interface IData<T> {
    get data(): T | null;
    set data(data: T | null);
}

export interface INextNode<T> {
    get next(): ListNodeType<T> | null;
    set next(next: ListNodeType<T> | null);
}

export interface IPrevNode<T> {
    get prev(): ListNodeType<T> | null;
    set prev(prev: ListNodeType<T> | null);
}