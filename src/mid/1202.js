//@ts-check
/*
  Copyright: (c) 2018-2020, Smart-Tech Controle e Automação
  GNU General Public License v3.0+ (see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt)
*/


const helpers = require("../helpers.js");
const processParser = helpers.processParser;
const processDataFields = helpers.processDataFields;

const rev1Keys = [
    ['totalMessageNum', 'number', 3],
    ['messageNumber', 'number', 3],
    ['resultId', 'string', 10],
    ['objectId', 'number', 4],
    ['dataFieldsNumber', 'number', 3],
];

const revisionKeys = [rev1Keys];

function parser(msg, opts, cb) {
    let buffer = msg.payload;
    msg.payload = {};

    let status = true;

    let position = {
        value: 0
    };

    let revision = msg.revision || 1;

    const keys = revisionKeys[revision - 1];

    if (!keys) {
        cb(new Error(`[Parser MID${msg.mid}] invalid revision [${msg.revision}]`));
        return;
    }

    for (let i = 0; i < 5; i++) {
        const key = keys[i];
        status =
            status &&
            processParser(msg, buffer, key[0], key[1], key[2], position, cb);
    }

    status =
    status && processDataFields(msg, buffer, "fields", msg.payload.dataFieldsNumber, position, cb)

    if (status) {
        cb(null, msg);
    }
}

function revision() {
    return [1];
}


module.exports = {
    parser,
    revision,
};
