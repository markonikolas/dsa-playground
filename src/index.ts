import { DoublyListNode, DoublyLinkedList } from './DataStructures';

const ll = new DoublyLinkedList();

ll.append(new DoublyListNode(1));
ll.append(new DoublyListNode(2));
ll.append(new DoublyListNode(3));

const out = ll.traverse();
console.log(out);