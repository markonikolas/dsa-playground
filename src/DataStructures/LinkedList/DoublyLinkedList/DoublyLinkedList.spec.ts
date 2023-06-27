import { describe, expect, it } from '@jest/globals';

import { DoublyListNode, DoublyLinkedList } from '.';

type ListNodeType = string | number;

let list: DoublyLinkedList<ListNodeType> = new DoublyLinkedList();

describe('DoublyLinkedList', () => {
	const node1 = new DoublyListNode(1);
	const node2 = new DoublyListNode(2);
	const node3 = new DoublyListNode(3);
	const node4 = new DoublyListNode(4);
	const node5 = new DoublyListNode(5);

	it('can be an empty list', () => expect(list.head).toBeNull());

	it('can append a node', () => {
		list.append(node1);
		list.append(node2);
		list.append(node3)

		const tail = list.search(3);

		expect(list.head).toEqual(node1);
		expect(tail).toHaveProperty('prev');
		expect(list.head!.prev).toBeNull();
		expect(tail!.next).toBeNull();
	});

	it('can prepend a node', () => {
		list.prepend(node4);
		list.prepend(node5);

		const n4 = list.search(4) as DoublyListNode<number>;

		expect(list.head).toEqual(node5)
		expect(list.head?.prev).toBeNull();
		expect(n4.prev).toEqual(node5);
	});

	it('can insert a node', () => {
		const number = new DoublyListNode(17);
		const string = new DoublyListNode('test');

		expect(list.insert(number, node2));
		expect(list.insert(string, node4));
	});

	it('can search for a node by contents', () => {
		expect(list.search(1)).toBe(node1);
		expect(list.search(2)).toBe(node2);
		expect(list.search(3)).toBe(node3);
		expect(list.search(4)).toBe(node4);
		expect(list.search(5)).toBe(node5);
	});
});