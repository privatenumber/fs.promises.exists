const { promises } = require('fs');

const fsExists = async filePath => promises.access(
	filePath,
).then(() => true, () => false);

module.exports = fsExists;
