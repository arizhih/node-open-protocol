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
    ['timeStamp', 'string', 19],
    ['resultStatus', 'number', 1],
    ['operationType', 'number', 2],
    ['objectsNumber', 'number', 3],
    //objects
    ['dataFieldsNumber', 'number', 3],
    //fields
];

// these repeat for each numberOfBolts, starting at parameter number 8
const rev1ObjectsKeys = [
    ["objectId", "number", 4],
    ["onjectStatus", "number", 1]
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

    for (let i = 0; i < 7; i++) {
        const key = keys[i];
        status =
            status &&
            processParser(msg, buffer, key[0], key[1], key[2], position, cb);
    }

    // these parameters repeats for each numberOfBolts
    msg.payload.objects = [];
    for (let objectsNumber = 0; objectsNumber < msg.payload.objectsNumber; objectsNumber++) {
        // let's fake a message for the parsing, so we can get it's payload
        // and copy to the real message later
        let objectsNumberPart = {
            mid: msg.mid,
            payload: {}
        }

        // parse items
        for (let i = 0; i < rev1ObjectsKeys.length; i++) {
            const key = rev1ObjectsKeys[i];
            status = status &&
                processParser(objectsNumberPart, buffer, key[0], key[1], key[2], position, cb);
        }

        if (!status) return; //we've already failed, return

        //copy from fake message to real one
        msg.payload.objects.push(objectsNumberPart.payload);
    }


    status =
    status &&
    processParser(msg, buffer, keys[7][0], keys[7][1], keys[7][2], position, cb);

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
