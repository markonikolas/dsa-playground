import { describe, expect, test } from '@jest/globals';
import { SinglyLinkedList, SinglyListNode } from '../src/DataStructures';

describe('SinglyLinkedList should exist', () => {
	const node1 = new SinglyListNode('new node');
	const node2 = new SinglyListNode('another node');
	const node3 = new SinglyListNode('hello world');

	let singlyLinkedList = new SinglyLinkedList();

	test('can be an empty list', async () => expect(singlyLinkedList.head).toBeNull());

	test('can append a node', async () => {
		singlyLinkedList.append(node1);

		expect(singlyLinkedList.head).toStrictEqual(node1);
	});

	test('can prepend a node', async () => {
		singlyLinkedList.prepend(node2);

		expect(singlyLinkedList.search('another node')).toEqual(node2);
	});

	test('can insert a node', async () => {
		singlyLinkedList.insert(node3, node1);

		expect(singlyLinkedList.search('hello world')).toEqual(node3);
	});

	test('can delete a node', async () => {
		singlyLinkedList.delete(node1, node2);

		expect(singlyLinkedList.search(node1.data)).toBeNull();
	});

	test('has a HEAD node', async () => {
		expect(singlyLinkedList.head).toBeDefined();
	});
});
