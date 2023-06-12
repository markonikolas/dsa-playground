import { SinglyListNode, SinglyLinkedList, DoublyListNode, DoublyLinkedList } from './DataStructures';

export type LinkedListType<T> = DoublyLinkedList<T> | SinglyLinkedList<T> | null;
export type ListNodeType<T> = SinglyListNode<T> | DoublyListNode<T> | null;