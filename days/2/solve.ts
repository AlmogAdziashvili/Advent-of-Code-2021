import { exampleInput, puzzleInput } from "./puzzle-input";
import { assert } from 'chai';

export const solve1 = (_arr: any[]): any => {
	const arr = [..._arr];
	let horizontalPosition = 0;
	let depth = 0;
	arr.forEach((line) => {
		const [cmd, _value] = line.split(' ');
		const value = parseInt(_value);
		switch (cmd) {
			case 'forward':
				horizontalPosition += value;
				break;
			case 'up':
				depth -= value;
				break
			case 'down':
				depth += value;
				break;
		}
	});
	return depth * horizontalPosition;
};

export const solve2 = (_arr: any[]): any => {
	const arr = [..._arr];
	let horizontalPosition = 0;
	let depth = 0;
	let aim = 0;
	arr.forEach((line) => {
		const [cmd, _value] = line.split(' ');
		const value = parseInt(_value);
		switch (cmd) {
			case 'forward':
				horizontalPosition += value;
				depth += (aim * value);
				break;
			case 'up':
				aim -= value;
				break
			case 'down':
				aim += value;
				break;
		}
	});
	return depth * horizontalPosition;
};

const processInput = (input: string): any => {
	const n =
		input.split('\n')
			.map(n => n.trim())
			.filter((v) => !!v)
	// .map(Number);

	return n;
};

describe.skip('Part 1', () => {
	it('Test Case 1', () => {
		const result = solve1(processInput(exampleInput));
		result; //?
		assert.deepEqual(result, 150);
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
		assert.deepEqual(result, 900);
	});

	it('Result', () => {
		const result = solve2(processInput(puzzleInput));
		result; //?
		assert.deepEqual(result, null);
	});
});
