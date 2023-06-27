import { describe, it, expect } from '@jest/globals';

import { SinglyListNode, SinglyLinkedList } from '.';

type ListNodeType = string | number;

let list: SinglyLinkedList<ListNodeType> = new SinglyLinkedList();

describe('SinglyLinkedList', () => {
	const node1 = new SinglyListNode('new node');
	const node2 = new SinglyListNode('another node');
	const node3 = new SinglyListNode('hello world');

	it('can be an empty list', () => expect(list.head).toBeNull());

	it('can append a node', () => {
		list.append(node1);

		expect(list.head).toEqual(node1);
	});

	it('can prepend a node', () => {
		list.prepend(node2);

		expect(list.search('another node')).toEqual(node2);
	});

	it('can insert a node', () => {
		list.insert(node3, node1);

		expect(list.search('hello world')).toEqual(node3);
	});

	it('can search for a node by contents', () => {
		expect(list.search('new node')).toBe(node1);
		expect(list.search('another node')).toBe(node2);
		expect(list.search('hello world')).toBe(node3);
	});

	it('can delete a node', () => {
		list.delete(node1, node2);

		expect(list.search(node1.data)).toBeNull();
	});

	it('has a HEAD node', () => {
		expect(list).toHaveProperty('head');
	});

	it('can traverse the list', () => expect(list.traverse()).toBeTruthy());
});
