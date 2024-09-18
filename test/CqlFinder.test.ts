import { CqlAntlr, CqlResult } from "../src";
import CqlFinder from "../src/util/CqlFinder";
import { simpleDefinitionCql } from "./testCql";

describe("cql finder", () => {
    it("should find a term", () => {
        const cqlAntlr = new CqlAntlr(simpleDefinitionCql);

        const cqlResult: CqlResult = cqlAntlr.parse();
        const cqlFinder:CqlFinder = new CqlFinder(cqlResult, []);

        expect(cqlFinder.find("Widget")).toBeFalsy();
    });
});