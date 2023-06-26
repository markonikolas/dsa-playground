import { describe, expect, it } from '@jest/globals';

import { SinglyListNode } from './SinglyListNode';
import { SinglyLinkedList } from './SinglyLinkedList';
import { DoublyListNode } from './DoublyListNode';
import { DoublyLinkedList } from './DoublyLinkedList';

describe('SinglyLinkedList', () => {
	const node1 = new SinglyListNode('new node');
	const node2 = new SinglyListNode('another node');
	const node3 = new SinglyListNode('hello world');

	let linkedList = new SinglyLinkedList();

	it('can be an empty list', () => expect(linkedList.head).toBeNull());

	it('can append a node', () => {
		linkedList.append(node1);

		expect(linkedList.head).toEqual(node1);
	});

	it('can prepend a node', () => {
		linkedList.prepend(node2);

		expect(linkedList.search('another node')).toEqual(node2);
	});

	it('can insert a node', () => {
		linkedList.insert(node3, node1);

		expect(linkedList.search('hello world')).toEqual(node3);
	});

	it('can search for a node by contents', () => {
		expect(linkedList.search('new node')).toBe(node1);
		expect(linkedList.search('another node')).toBe(node2);
		expect(linkedList.search('hello world')).toBe(node3);
	});

	it('can delete a node', () => {
		linkedList.delete(node1, node2);

		expect(linkedList.search(node1.data)).toBeNull();
	});

	it('has a HEAD node', () => {
		expect(linkedList).toHaveProperty('head');
	});

	it('can traverse the list', () => expect(linkedList.traverse()).toBeTruthy());
});

describe('DoublyLinkedList', () => {
	const node1 = new DoublyListNode(1);
	const node2 = new DoublyListNode(2);
	const node3 = new DoublyListNode(3);

	const linkedList = new DoublyLinkedList();

	it('can be an empty list', () => expect(linkedList.head).toBeNull());	
});