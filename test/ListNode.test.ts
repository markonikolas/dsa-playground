import { describe, expect, test } from '@jest/globals';

import { ListNode } from '../src/Abstract';
import { DoublyListNode, SinglyListNode } from '../src/DataStructures';

describe('abstract ListNode should exist', () => {
	class TestNode<T> extends ListNode<T> {}

	const testNode = new TestNode('test');

	test('should exist', async () => expect(ListNode).toBeDefined());

	test('should be extendable', async () => expect(testNode).toBeDefined());
});

describe('SinglyListNode should exist', () => {
	const singlyListNode = new SinglyListNode(1);

	test('SinglyListNode should be defined', async () => expect(singlyListNode).toBeDefined());

	test('SinglyListNode should have data prop', async () => expect(singlyListNode.data).toBeDefined());
});

describe('DoublyListNode should exist', () => {
	const doublyListNode = new DoublyListNode(1);

	test('DoublyListNode should be defined', async () => expect(doublyListNode).toBeDefined());

	test('DoublyListNode should have data prop', async () => expect(doublyListNode.data).toBeDefined());
});
