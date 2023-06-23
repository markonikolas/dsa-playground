import { describe, expect, test } from '@jest/globals';

import { SinglyListNode } from './SinglyListNode';
import { SinglyLinkedList } from './SinglyLinkedList';

describe('SinglyLinkedList should exist', () => {
	const node1 = new SinglyListNode('new node');
	const node2 = new SinglyListNode('another node');
	const node3 = new SinglyListNode('hello world');

	let singlyLinkedList = new SinglyLinkedList();

	test('can be an empty list', () => expect(singlyLinkedList.head).toBeNull());

	test('can append a node', () => {
		singlyLinkedList.append(node1);

		expect(singlyLinkedList.head).toStrictEqual(node1);
	});

	test('can search for a node by contents', () => {
		expect(singlyLinkedList.search('new node')).toBe(node1);
	});

	test('can prepend a node', () => {
		singlyLinkedList.prepend(node2);

		expect(singlyLinkedList.search('another node')).toEqual(node2);
	});

	test('can insert a node', () => {
		singlyLinkedList.insert(node3, node1);

		expect(singlyLinkedList.search('hello world')).toEqual(node3);
	});

	test('can delete a node', () => {
		singlyLinkedList.delete(node1, node2);

		expect(singlyLinkedList.search(node1.data)).toBeNull();
	});

	test('has a HEAD node', () => {
		expect(singlyLinkedList).toHaveProperty('head');
	});

	test('can traverse the list', () => expect(singlyLinkedList.traverse()).toBeTruthy());
});
