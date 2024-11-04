//@ts-check
/*
  Copyright: (c) 2018-2020, Smart-Tech Controle e Automação
  GNU General Public License v3.0+ (see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt)
*/

/**
 * @class
 * @name MID0038
 * @param {object} MID0040_1_5 REV. 1-5
 * 
 * @param {object} MID0040_6_7 REV. 6-7 [(REV. 5) +] 
 * @param {string} MID0040_6_7.toolNumber
 */

const helpers = require("../helpers.js");
const serializerField = helpers.serializerField;
const serializerKey = helpers.serializerKey;

function parser(msg, opts, cb) {
    let buffer = msg.payload;
    msg.payload = buffer.toString("ascii");
    cb(null, msg);
}

function serializer(msg, opts, cb) {
    let buf;
    let statusprocess = false;

    let position = {
        value: 0
    };

    msg.revision = msg.revision || 1;

    switch (msg.revision) {
        case 6:
        case 7:

            buf = Buffer.alloc(6);

            position.value = buf.length;

            statusprocess = serializerField(msg, buf, "toolNumber", "number", 4, position, cb) &&
                serializerKey(msg, buf, 1, 2, position, cb);

            if (!statusprocess) {
                return;
            }

            msg.payload = buf;

            cb(null, msg);

            break;

        case 1:
        case 2:
        case 3:
        case 4:
        case 5:

            buf = Buffer.from("");

            msg.payload = buf;

            cb(null, msg);

            break;

        default:
            cb(new Error(`[Serializer MID${msg.mid}] invalid revision [${msg.revision}]`));
            break;
    }
}

function revision() {
    return [1, 2, 3, 4, 5, 6, 7];
}

module.exports = {
    parser,
    serializer,
    revision
};