import path from 'path';
import { suite, Test } from 'uvu';
import * as assert from 'uvu/assert'; // eslint-disable-line node/file-extension-in-import
import fsExists from '../src/index';

// https://github.com/lukeed/uvu/issues/43
function describe(name: string, function_: (test: Test) => void) {
	const s = suite(name);
	function_(s);
	s.run();
}

const fixturePath = 'test/fixture/CASE-SENSITIVE/case-insensitive/file.txt';
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

describe('basic', (test) => {
	test('exists', async () => {
		const exists = await fsExists(existentPath.relativeShort);
		assert.is(exists, true);
	});

	test('doesnt exist', async () => {
		const exists = await fsExists(nonExistenent.file);
		assert.is(exists, false);
	});
});

describe('case sensitive', (test) => {
	test('exists - relative path', async () => {
		const exists = await fsExists(existentPath.relative, true);
		assert.is(exists, true);
	});

	test('exists - relative path with no ./', async () => {
		const exists = await fsExists(existentPath.relativeShort, true);
		assert.is(exists, true);
	});

	test('exists - absolute path', async () => {
		const exists = await fsExists(existentPath.absolute, true);
		assert.is(exists, true);
	});

	test('exists - case insensitive', async () => {
		const exists = await fsExists(existentPath.caseInsensitive, true);
		assert.is(exists, false);
	});

	test('file doesnt exist', async () => {
		const exists = await fsExists(nonExistenent.file, true);
		assert.is(exists, false);
	});

	test('directory doesnt exist', async () => {
		const exists = await fsExists(nonExistenent.directory, true);
		assert.is(exists, false);
	});
});

describe('case insensitive', (test) => {
	test('exists - relative path', async () => {
		const exists = await fsExists(existentPath.relative, false);
		assert.is(exists, existentPath.relative);
	});

	test('exists - relative path with no ./', async () => {
		const exists = await fsExists(existentPath.relativeShort, false);
		assert.is(exists, existentPath.relativeShort);
	});

	test('exists - absolute path', async () => {
		const exists = await fsExists(existentPath.absolute, false);
		assert.is(exists, existentPath.absolute);
	});

	test('exists - case insensitive', async () => {
		const exists = await fsExists(existentPath.caseInsensitive, false);
		assert.is(exists, existentPath.relativeShort);
	});

	test('file doesnt exist', async () => {
		const exists = await fsExists('file.txt', false);
		assert.is(exists, false);
	});

	test('directory doesnt exist', async () => {
		const exists = await fsExists('some-dir/file.txt', false);
		assert.is(exists, false);
	});
});
