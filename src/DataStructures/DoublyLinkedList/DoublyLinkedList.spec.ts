import { describe, test, expect } from '@jest/globals';

import { DoublyListNode } from './DoublyListNode';
import { DoublyLinkedList } from './DoublyLinkedList';

describe('DoublyLinkedList should exist', () => {
	const node1 = new DoublyListNode('node');
	const node2 = new DoublyListNode([1, 2, 3]);
	const node3 = new DoublyListNode(10);

	let doublyLinkedList = new DoublyLinkedList();

	test('can be an empty list', () => expect(doublyLinkedList.head).toBeNull());

	test('can append a node', () => {
		doublyLinkedList.append(node1);

		expect(doublyLinkedList.head).toStrictEqual(node1);
	});
});