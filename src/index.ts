import { SinglyListNode, SinglyLinkedList } from './DataStructures';

const node = new SinglyListNode<number>(1);
const anotherNode = new SinglyListNode<number>(2);
const list = new SinglyLinkedList<number>(node);

const evenMoreNodes = new SinglyListNode<number>(3);
const lastNode = new SinglyListNode<number>(4);

list.append(anotherNode)
list.append(lastNode)
list.prepend(evenMoreNodes)
list.delete(anotherNode, evenMoreNodes)

list.traverse();