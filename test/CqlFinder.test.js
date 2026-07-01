"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const CqlFinder_1 = __importDefault(require("../src/util/CqlFinder"));
const testCql_1 = require("./testCql");
describe("cql finder", () => {
    it("should find a term", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.simpleDefinitionCql);
        const cqlResult = cqlAntlr.parse();
        const cqlFinder = new CqlFinder_1.default(cqlResult, []);
        expect(cqlFinder.find("Widget")).toBeFalsy();
    });
});
//# sourceMappingURL=CqlFinder.test.js.map