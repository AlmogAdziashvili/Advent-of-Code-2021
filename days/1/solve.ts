import { exampleInput, puzzleInput } from "./puzzle-input";
import { assert } from 'chai';
import _ from 'lodash';

export const solve1 = (_arr: any[]): any => {
	const arr = [..._arr];
	const isGreaterThanPrevious = (_, index, arr) => index > 0 && arr[index] > arr[index - 1];
	return arr.filter(isGreaterThanPrevious).length;
};

export const solve2 = (_arr: any[]): any => {
	const arr = [..._arr];
	const arrGroupsOfThreeConsecutiveItems = _.zip(arr, _.drop(arr), _.drop(arr, 2));
	const arrSums = arrGroupsOfThreeConsecutiveItems.map(_.sum);
	return solve1(arrSums);
};

const processInput = (input: string): any => {
	const n =
		input.split('\n')
			.map(n => n.trim())
			.filter((v) => !!v)
			.map(Number);
	return n;
};

describe.skip('Part 1', () => {
	it('Test Case 1', () => {
		const result = solve1(processInput(exampleInput));
		result; //?
		assert.deepEqual(result, 7);
	});

	it('Result', () => {
		const result = solve1(processInput(puzzleInput));
		result; //?
		assert.deepEqual(result, null);
	});
});

describe.skip('Part 2', () => {
	it('Test Case 1', () => {
		const result = solve2(processInput(exampleInput));
		result; //?
		assert.deepEqual(result, 5);
	});

	it('Result', () => {
		const result = solve2(processInput(puzzleInput));
		result; //?
		assert.deepEqual(result, null);
	});
});

