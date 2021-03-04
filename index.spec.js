import { test } from 'uvu';
import * as assert from 'uvu/assert'; // eslint-disable-line node/file-extension-in-import
import fsExists from './index.js';

test('exists', async () => {
	const exists = await fsExists('./package.json');
	assert.is(exists, true);
});

test('doesn\'t exist', async () => {
	const exists = await fsExists('./random-non-existent-file');
	assert.is(exists, false);
});

test.run();
