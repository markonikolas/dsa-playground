import { beforeAll, describe, expect, it } from '@jest/globals';

import { SinglyListNode } from './SinglyListNode';
import { SinglyLinkedList } from './SinglyLinkedList';
import { DoublyListNode } from './DoublyListNode';
import { DoublyLinkedList } from './DoublyLinkedList';

let singly: SinglyLinkedList<string>, doubly: DoublyLinkedList<number>;

beforeAll(() => {
	singly = new SinglyLinkedList();
	doubly = new DoublyLinkedList();
});

describe('SinglyLinkedList', () => {
	const node1 = new SinglyListNode('new node');
	const node2 = new SinglyListNode('another node');
	const node3 = new SinglyListNode('hello world');

	it('can be an empty list', () => expect(singly.head).toBeNull());

	it('can append a node', () => {
		singly.append(node1);

		expect(singly.head).toEqual(node1);
	});

	it('can prepend a node', () => {
		singly.prepend(node2);

		expect(singly.search('another node')).toEqual(node2);
	});

	it('can insert a node', () => {
		singly.insert(node3, node1);

		expect(singly.search('hello world')).toEqual(node3);
	});

	it('can search for a node by contents', () => {
		expect(singly.search('new node')).toBe(node1);
		expect(singly.search('another node')).toBe(node2);
		expect(singly.search('hello world')).toBe(node3);
	});

	it('can delete a node', () => {
		singly.delete(node1, node2);

		expect(singly.search(node1.data)).toBeNull();
	});

	it('has a HEAD node', () => {
		expect(singly).toHaveProperty('head');
	});

	it('can traverse the list', () => expect(singly.traverse()).toBeTruthy());
});

describe('DoublyLinkedList', () => {
	const node1 = new DoublyListNode(1);
	const node2 = new DoublyListNode(2);
	const node3 = new DoublyListNode(3);
	const node4 = new DoublyListNode(4);
	const node5 = new DoublyListNode(5);

	it('can be an empty list', () => expect(doubly.head).toBeNull());

	it('can append a node', () => {
		doubly.append(node1);
		doubly.append(node2);
		doubly.append(node3)

		const tail = doubly.search(3);

		expect(doubly.head).toEqual(node1);
		expect(tail).toHaveProperty('prev');
		expect(doubly.head!.prev).toBeNull();
		expect(tail!.next).toBeNull();
	});

	it('can prepend a node', () => {
		doubly.prepend(node4);
		doubly.prepend(node5);

		const n4 = doubly.search(4) as DoublyListNode<number>;

		expect(doubly.head).toEqual(node5)
		expect(doubly.head?.prev).toBeNull();
		expect(n4.prev).toEqual(node5);
	});

	it('can search for a node by contents', () => {
		expect(doubly.search(1)).toBe(node1);
		expect(doubly.search(2)).toBe(node2);
		expect(doubly.search(3)).toBe(node3);
		expect(doubly.search(4)).toBe(node4);
		expect(doubly.search(5)).toBe(node5);
	});
});