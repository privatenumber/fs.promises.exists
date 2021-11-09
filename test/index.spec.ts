import { test } from 'uvu';
import * as assert from 'uvu/assert'; // eslint-disable-line node/file-extension-in-import
import fsExists from '../src/index';

test('exists', async () => {
	const exists = await fsExists('./package.json');
	assert.is(exists, true);
});

test('doesn\'t exist', async () => {
	const exists = await fsExists('./random-non-existent-file');
	assert.is(exists, false);
});

test('case-sensitive: doesn\'t exist', async () => {
	const exists = await fsExists('PACKAGE.json', true);
	assert.is(exists, false);
});

test('case-sensitive: exists', async () => {
	const exists = await fsExists('package.json', true);
	assert.is(exists, true);
});

test('case-insensitive: exist 1', async () => {
	const exists = await fsExists('PACKAGE.json', false);
	assert.is(exists, 'package.json');
});

test('case-insensitive: exists 2', async () => {
	const exists = await fsExists('package.json', false);
	assert.is(exists, 'package.json');
});

test('case-insensitive: doesn\'t exists', async () => {
	const exists = await fsExists('random-non-existent-file.json', false);
	assert.is(exists, false);
});

test.run();
