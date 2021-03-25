import {expect} from "chai";
import testCql from "./testCql";
import CqlAntlr from "../src/antlr/CqlAntlr";


describe("test antlr", function () {
    it("parse", function () {
        const cqlAntlr = new CqlAntlr(testCql);

        const cqlResult = cqlAntlr.parse();

        console.log(JSON.stringify(cqlResult, null, 2));

        expect(cqlResult.codes.length).to.equal(1);
        expect(cqlResult.valueSets.length).to.equal(3);
        expect(cqlResult.codeSystems.length).to.equal(3);

    });

});

