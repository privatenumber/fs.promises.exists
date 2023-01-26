import path from 'path';
import { describe, expect } from 'manten';
import fsExists from '#fs.promises.exists';

const fixturePath = 'tests/fixture/CASE-SENSITIVE/case-insensitive/file.txt';
const existentPath = {
	relativeShort: fixturePath,
	relative: `./${fixturePath}`,
	absolute: path.resolve(fixturePath),
	caseInsensitive: fixturePath.toUpperCase(),
};

const nonExistenent = {
	file: 'random-non-existent-file',
	directory: 'random-non-existent-dir/random-non-existent-file',
};

describe('basic', ({ test }) => {
	test('exists', async () => {
		const exists = await fsExists(existentPath.relativeShort);
		expect(exists).toBe(true);
	});

	test('doesnt exist', async () => {
		const exists = await fsExists(nonExistenent.file);
		expect(exists).toBe(false);
	});
});

describe('case sensitive', ({ test }) => {
	test('exists - relative path', async () => {
		const exists = await fsExists(existentPath.relative, true);
		expect(exists).toBe(true);
	});

	test('exists - relative path with no ./', async () => {
		const exists = await fsExists(existentPath.relativeShort, true);
		expect(exists).toBe(true);
	});

	test('exists - absolute path', async () => {
		const exists = await fsExists(existentPath.absolute, true);
		expect(exists).toBe(true);
	});

	test('exists - case insensitive', async () => {
		const exists = await fsExists(existentPath.caseInsensitive, true);
		expect(exists).toBe(false);
	});

	test('file doesnt exist', async () => {
		const exists = await fsExists(nonExistenent.file, true);
		expect(exists).toBe(false);
	});

	test('directory doesnt exist', async () => {
		const exists = await fsExists(nonExistenent.directory, true);
		expect(exists).toBe(false);
	});
});

describe('case insensitive', ({ test }) => {
	test('exists - relative path', async () => {
		const exists = await fsExists(existentPath.relative, false);
		expect(exists).toBe(existentPath.relative);
	});

	test('exists - relative path with no ./', async () => {
		const exists = await fsExists(existentPath.relativeShort, false);
		expect(exists).toBe(existentPath.relativeShort);
	});

	test('exists - absolute path', async () => {
		const exists = await fsExists(existentPath.absolute, false);
		expect(exists).toBe(existentPath.absolute);
	});

	test('exists - case insensitive', async () => {
		const exists = await fsExists(existentPath.caseInsensitive, false);
		expect(exists).toBe(existentPath.relativeShort);
	});

	test('file doesnt exist', async () => {
		const exists = await fsExists('file.txt', false);
		expect(exists).toBe(false);
	});

	test('directory doesnt exist', async () => {
		const exists = await fsExists('some-dir/file.txt', false);
		expect(exists).toBe(false);
	});
});
