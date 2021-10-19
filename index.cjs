const fs = require('fs');

const fsExists = async filePath => fs.promises.access(
	filePath,
).then(() => true, () => false);

module.exports = fsExists;
