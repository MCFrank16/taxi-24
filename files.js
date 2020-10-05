const { readFile, writeFile } = require('fs').promises;
const { resolve, join } = require('path');
const log = require('./source/helper/logger');


/**
 * this functions below generates db files in case they are unavailable
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and message.
 */

const read = async (filePath) => {
  try {
    await readFile(filePath);
    return true;
  } catch {
    return false;
  }
};

const write = async (filePath) => {
  try {
    const file = await read(filePath);
    if (!file) await writeFile(filePath, '');
  } catch (error) {
    log.error(error);
  }
};
const generateFiles = (...files) => {
  for (const i of files) {
    const filePath = join(resolve(process.cwd()), `/source/models/${i}`);
    write(filePath);
  }
};

generateFiles('dev.db', 'test.db', 'prod.db');
