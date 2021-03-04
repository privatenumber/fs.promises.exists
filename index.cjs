const fs = require('fs');

const fsExists = async filePath => fs.promises.access(
	filePath,
	fs.constants.F_OK,
).then(() => true, () => false);

module.exports = fsExists;
