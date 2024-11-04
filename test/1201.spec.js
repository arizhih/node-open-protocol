//@ts-check
/*
  Copyright: (c) 2018-2020, Smart-Tech Controle e Automação
  GNU General Public License v3.0+ (see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt)
*/



const {
    expect
} = require('chai');

const MID = require('../src/mid/1201.js');

describe("MID 1201", () => {

    it("parser rev 1", (done) => {

        let msg = {
            mid: 1201,
            revision: 1,
            payload: Buffer.from("00200100000400032024-10-29:14:01:410010010001000300003017040000000Virtual Station 101504001020000000101505007040000000FF_Test")
        };

        MID.parser(msg, {}, (err, data) => {

            if (err) {
                console.log(err);
            }

            expect(data).to.be.deep.equal({
                mid: 1201,
                revision: 1,
                payload: {
                    dataFieldsNumber: 3,
                    fields: [{
                        dataType: 4,
                        dataValue: "Virtual Station 1",
                        length: 17,
                        parameterID: "00003",
                        parameterName: "Station Name",
                        stepNumber: 0,
                        unit: "000",
                        unitName: "No unit",
                    },
                    {
                        dataType: 2,
                        dataValue: "1",
                        length: 1,
                        parameterID: "01504",
                        parameterName: "Sync Group ID",
                        stepNumber: 0,
                        unit: "000",
                        unitName: "No unit",
                    },
                    {
                        dataType: 4,
                        dataValue: "FF_Test",
                        length: 7,
                        parameterID: "01505",
                        parameterName: "Sync Group Name",
                        stepNumber: 0,
                        unit: "000",
                        unitName: "No unit",
                    }
                    ],
                    messageNumber: 1,
                    objects: [
                        {
                            objectId: 1,
                            onjectStatus: 0
                        }
                    ],
                    objectsNumber: 1,
                    operationType: 1,
                    resultId: "0000040003",
                    resultStatus: 0,
                    timeStamp: "2024-10-29:14:01:41",
                    totalMessageNum: 2
                }
            });

            done();
        });
    });


    it("Should return error, parser with invalid revision", (done) => {

        let msg = {
            mid: 61,
            revision: 12,
            payload: Buffer.from("")
        };

        MID.parser(msg, {}, (err, data) => {
            expect(err).to.be.an('error');
            done();
        });
    });

    it("Should return array revision", (done) => {

        let revisions = MID.revision();

        expect(revisions).to.have.lengthOf(1);
        done();

    });
});