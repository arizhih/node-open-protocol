//@ts-check
/*
  Copyright: (c) 2018-2020, Smart-Tech Controle e Automação
  GNU General Public License v3.0+ (see LICENSE or https://www.gnu.org/licenses/gpl-3.0.txt)
*/



const {
    expect
} = require('chai');

const MID = require('../src/mid/1202.js');

describe("MID 1202", () => {
    it("parser rev 1", (done) => {

        let msg = {
            mid: 1202,
            revision: 1,
            payload: Buffer.from("0020020000040005000103401000001020000000101001016040000000FF_screw  10*280010020010200000001010390010200000001014000010100000000014010320700000000000000200000000000000000002000001421032070000000000000020000000000000000000000000142200102000000030130100102000000010120500102000000010200000503001000025.00020010040300100001.190200200503001000030.000200300503001000020.000201100803050000081926.4302170006032000000120.00050000010200000012050030010100000011051010040300100010.8205112006030500001180.01051700040320000013.01050000020200000021205003001010000002105101005030010002-0.04051120040305000020.20051700040320000023.00050000010200000031050010320700000030000000200000000000000000002000005002007040000003Rundown0500300101000000300500403207000000300000002000000000000000000000000051010040300100031.190511200803050000381926.4305170006032000003113.94")
        };

        MID.parser(msg, {}, (err, data) => {

            if (err) {
                console.log(err);
            }

            expect(data).to.be.deep.equal({
                mid: 1202,
                payload: {
                    dataFieldsNumber: 34,
                    fields: [
                        {
                            dataType: 2,
                            dataValue: "1",
                            length: 1,
                            parameterID: "01000",
                            parameterName: "Tightening program Number",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 4,
                            dataValue: "FF_screw  10*280",
                            length: 16,
                            parameterID: "01001",
                            parameterName: "Tightening program Name",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 2,
                            dataValue: "1",
                            length: 1,
                            parameterID: "01002",
                            parameterName: "Control Tightening program Strategy",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 2,
                            dataValue: "1",
                            length: 1,
                            parameterID: "01039",
                            parameterName: "Result type",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 1,
                            dataValue: "0",
                            length: 1,
                            parameterID: "01400",
                            parameterName: "Tightening Status",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 7,
                            dataValue: "00000002000000000000000000020000",
                            length: 32,
                            parameterID: "01401",
                            parameterName: "Tightening error codes",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 7,
                            dataValue: "00000002000000000000000000000000",
                            length: 32,
                            parameterID: "01421",
                            parameterName: "Primary Error",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 2,
                            dataValue: "3",
                            length: 1,
                            parameterID: "01422",
                            parameterName: "Failing Step",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 2,
                            dataValue: "1",
                            length: 1,
                            parameterID: "01301",
                            parameterName: "Bolt Number",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 2,
                            dataValue: "1",
                            length: 1,
                            parameterID: "01205",
                            parameterName: "Tool number",
                            stepNumber: 0,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 3,
                            dataValue: "25.00",
                            length: 5,
                            parameterID: "02000",
                            parameterName: "Torque, final target",
                            stepNumber: 0,
                            unit: "001",
                            unitName: "N-m",
                        }, {
                            dataType: 3,
                            dataValue: "1.19",
                            length: 4,
                            parameterID: "02001",
                            parameterName: "Torque, measured value",
                            stepNumber: 0,
                            unit: "001",
                            unitName: "N-m",
                        }, {
                            dataType: 3,
                            dataValue: "30.00",
                            length: 5,
                            parameterID: "02002",
                            parameterName: "Torque, final upper limit",
                            stepNumber: 0,
                            unit: "001",
                            unitName: "N-m",
                        }, {
                            dataType: 3,
                            dataValue: "20.00",
                            length: 5,
                            parameterID: "02003",
                            parameterName: "Torque, final lower limit",
                            stepNumber: 0,
                            unit: "001",
                            unitName: "N-m",
                        }, {
                            dataType: 3,
                            dataValue: "81926.43",
                            length: 8,
                            parameterID: "02011",
                            parameterName: "Angle, measured value",
                            stepNumber: 0,
                            unit: "050",
                            unitName: "°",
                        }, {
                            dataType: 3,
                            dataValue: "120.00",
                            length: 6,
                            parameterID: "02170",
                            parameterName: "Elapsed time",
                            stepNumber: 0,
                            unit: "200",
                            unitName: "s",
                        }, {
                            dataType: 2,
                            dataValue: "2",
                            length: 1,
                            parameterID: "05000",
                            parameterName: "Tightening step strategy",
                            stepNumber: 1,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 1,
                            dataValue: "1",
                            length: 1,
                            parameterID: "05003",
                            parameterName: "Step Status",
                            stepNumber: 1,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 3,
                            dataValue: "0.82",
                            length: 4,
                            parameterID: "05101",
                            parameterName: "Step Torque, measured value",
                            stepNumber: 1,
                            unit: "001",
                            unitName: "N-m",
                        }, {
                            dataType: 3,
                            dataValue: "180.01",
                            length: 6,
                            parameterID: "05112",
                            parameterName: "Step Angle, measured value",
                            stepNumber: 1,
                            unit: "050",
                            unitName: "°",
                        }, {
                            dataType: 3,
                            dataValue: "3.01",
                            length: 4,
                            parameterID: "05170",
                            parameterName: "Step Elapsed Time",
                            stepNumber: 1,
                            unit: "200",
                            unitName: "s",
                        }, {
                            dataType: 2,
                            dataValue: "12",
                            length: 2,
                            parameterID: "05000",
                            parameterName: "Tightening step strategy",
                            stepNumber: 2,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 1,
                            dataValue: "1",
                            length: 1,
                            parameterID: "05003",
                            parameterName: "Step Status",
                            stepNumber: 2,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 3,
                            dataValue: "-0.04",
                            length: 5,
                            parameterID: "05101",
                            parameterName: "Step Torque, measured value",
                            stepNumber: 2,
                            unit: "001",
                            unitName: "N-m",
                        }, {
                            dataType: 3,
                            dataValue: "0.20",
                            length: 4,
                            parameterID: "05112",
                            parameterName: "Step Angle, measured value",
                            stepNumber: 2,
                            unit: "050",
                            unitName: "°",
                        }, {
                            dataType: 3,
                            dataValue: "3.00",
                            length: 4,
                            parameterID: "05170",
                            parameterName: "Step Elapsed Time",
                            stepNumber: 2,
                            unit: "200",
                            unitName: "s",
                        }, {
                            dataType: 2,
                            dataValue: "1",
                            length: 1,
                            parameterID: "05000",
                            parameterName: "Tightening step strategy",
                            stepNumber: 3,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 7,
                            dataValue: "00000002000000000000000000020000",
                            length: 32,
                            parameterID: "05001",
                            parameterName: "Step error codes",
                            stepNumber: 3,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 4,
                            dataValue: "Rundown",
                            length: 7,
                            parameterID: "05002",
                            parameterName: "Step name",
                            stepNumber: 3,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 1,
                            dataValue: "0",
                            length: 1,
                            parameterID: "05003",
                            parameterName: "Step Status",
                            stepNumber: 3,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 7,
                            dataValue: "00000002000000000000000000000000",
                            length: 32,
                            parameterID: "05004",
                            parameterName: "Step Primary Error",
                            stepNumber: 3,
                            unit: "000",
                            unitName: "No unit",
                        }, {
                            dataType: 3,
                            dataValue: "1.19",
                            length: 4,
                            parameterID: "05101",
                            parameterName: "Step Torque, measured value",
                            stepNumber: 3,
                            unit: "001",
                            unitName: "N-m",
                        }, {
                            dataType: 3,
                            dataValue: "81926.43",
                            length: 8,
                            parameterID: "05112",
                            parameterName: "Step Angle, measured value",
                            stepNumber: 3,
                            unit: "050",
                            unitName: "°",
                        }, {
                            dataType: 3,
                            dataValue: "113.94",
                            length: 6,
                            parameterID: "05170",
                            parameterName: "Step Elapsed Time",
                            stepNumber: 3,
                            unit: "200",
                            unitName: "s",
                        }
                    ],
                    resultId: "0000040005",
                    messageNumber: 2,
                    totalMessageNum: 2,
                    objectId: 1,
    
                },
                revision: 1,
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