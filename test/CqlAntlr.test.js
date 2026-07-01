"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testCql_1 = require("./testCql");
const src_1 = require("../src");
describe("test antlr", () => {
    it("parse empty CQL", () => {
        const cqlResult = new src_1.CqlAntlr("").parse();
        expect(cqlResult.codes.length).toBe(0);
        expect(cqlResult.valueSets.length).toBe(0);
        expect(cqlResult.codeSystems.length).toBe(0);
        expect(cqlResult.parameters.length).toBe(0);
        expect(cqlResult.expressionDefinitions.length).toEqual(0);
    });
    it("parse blank CQL", () => {
        const cqlResult = new src_1.CqlAntlr("  ").parse();
        expect(cqlResult.codes.length).toBe(0);
        expect(cqlResult.valueSets.length).toBe(0);
        expect(cqlResult.codeSystems.length).toBe(0);
        expect(cqlResult.parameters.length).toBe(0);
        expect(cqlResult.expressionDefinitions.length).toEqual(0);
    });
    it("parse simple Fhir CQL Definition", () => {
        var _a, _b;
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.simpleDefinitionCql);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.usings.length).toBe(2);
        expect((_a = cqlResult.usings[0]) === null || _a === void 0 ? void 0 : _a.name).toBe("QICore");
        expect((_b = cqlResult.usings[1]) === null || _b === void 0 ? void 0 : _b.name).toBe("FHIR");
        expect(cqlResult.codes.length).toBe(0);
        expect(cqlResult.valueSets.length).toBe(0);
        expect(cqlResult.codeSystems.length).toBe(0);
        expect(cqlResult.parameters.length).toBe(0);
        expect(cqlResult.expressionDefinitions.length).toEqual(6);
        cqlResult.expressionDefinitions.forEach((def) => {
            expect(def.name).toBeDefined();
        });
    });
    it("Can now parse comments and associate them with functions", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.simpleDefinitionCql);
        const cqlResult = cqlAntlr.parse();
        const expressions = cqlResult.expressionDefinitions;
        expect(expressions.length).toEqual(6);
        expect(cqlResult.expressionDefinitions[0].comment).toEqual("ehnicity comment");
        expect(cqlResult.expressionDefinitions[1].comment).toEqual("multi line");
        expect(cqlResult.expressionDefinitions[2].comment).toEqual("@author: john doe\n@description: this is Numerator");
        expect(cqlResult.expressionDefinitions[3].comment).toEqual(undefined);
        expect(cqlResult.expressionDefinitions[4].comment).toEqual("multiline comment outside of a function with multiple\nrows");
        expect(cqlResult.expressionDefinitions[5].comment).toEqual("comment outside of function\nnext line comment");
    });
    it("parse fhir cql", () => {
        var _a;
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.fhirTestCql);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.codes.length).toBe(1);
        expect(cqlResult.valueSets.length).toBe(4);
        expect(cqlResult.codeSystems.length).toBe(3);
        expect(cqlResult.parameters.length).toBe(1);
        expect((_a = cqlResult.context) === null || _a === void 0 ? void 0 : _a.name).toEqual("Patient");
        expect(cqlResult.expressionDefinitions.length).toEqual(8);
        cqlResult.expressionDefinitions.forEach((def) => {
            expect(def.name).toBeDefined();
        });
        expect(cqlResult.retrieves.length).toEqual(1);
    });
    it("parse qdm cql", () => {
        var _a;
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.qdmTestCql);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.usings.length).toBe(1);
        expect((_a = cqlResult.usings[0]) === null || _a === void 0 ? void 0 : _a.name).toBe("QDM");
        expect(cqlResult.valueSets.length).toBe(2);
        expect(cqlResult.valueSets[0].name).toBe("\"Adolescent depression screening assessment\"");
        expect(cqlResult.valueSets[0].version).toBeUndefined();
        expect(cqlResult.valueSets[1].name).toBe("\"Adolescent depression screening assessment with version\"");
        expect(cqlResult.valueSets[1].version).toBe("'urn:hl7:version:20240307'");
    });
    it("reports syntactical errors", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.cqlWithSyntaxErrors);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.codes.length).toBe(1);
        expect(cqlResult.codeSystems.length).toBe(3);
        expect(cqlResult.errors.length).toBe(3);
        expect(cqlResult.errors[0].name).toBe("includess");
        expect(cqlResult.errors[0].message).toContain("extraneous input 'includess' expecting");
        expect(cqlResult.errors[0].start).toEqual({ line: 6, position: 0 });
        expect(cqlResult.errors[0].stop).toEqual({ line: 6, position: 9 });
        expect(cqlResult.errors[1].name).toBe("valuesetss");
        expect(cqlResult.errors[2].name).toBe("Interval");
        expect(cqlResult.errors[2].message).toContain("missing {QUOTEDIDENTIFIER, IDENTIFIER, DELIMITEDIDENTIFIER} at 'Interval'");
    });
    it("should recognize valid parameter", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.cqlWithUsedParam);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.parameters.length).toEqual(1);
        expect(cqlResult.errors.length).toEqual(0);
    });
    it("should recognize used valid define", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.cqlWithUsedDefines);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.expressionDefinitions.length).toEqual(2);
        expect(cqlResult.errors.length).toEqual(0);
    });
    it("should recognize used valid code and codeSystem", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.cqlWithUsedCodeAndCodeSystem);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.codes.length).toEqual(1);
        expect(cqlResult.codeSystems.length).toEqual(1);
        expect(cqlResult.errors.length).toEqual(0);
    });
    it("should recognize used valid context", () => {
        var _a;
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.cqlWithUsedContext);
        const cqlResult = cqlAntlr.parse();
        expect((_a = cqlResult.context) === null || _a === void 0 ? void 0 : _a.name).toEqual("Patient");
        expect(cqlResult.errors.length).toEqual(0);
    });
    it("should recognize cql 1.5 specific fluent functions", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.cqlFluentFunctions);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.errors.length).toEqual(0);
    });
    it("should recognize cql 1.5 Related Context Retrieve", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.relatedContextRetrieve);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.errors.length).toEqual(0);
    });
    it("should recognize cql 1.5 aggregate clause", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.aggregateQuery);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.errors.length).toEqual(0);
    });
    it("test define with no name", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.cqlDefineWithNoName);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.errors.length).toEqual(1);
        expect(cqlResult.errors[0].message).toEqual("Definition is missing a name.");
    });
    it("test define with key words", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.cqlDefineWithKeyWord);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.errors.length).toEqual(1);
        expect(cqlResult.errors[0].message).toEqual("Definition names must not be a reserved word.");
    });
    it("test code with no system", () => {
        const cqlAntlr = new src_1.CqlAntlr(testCql_1.missingCodeSystemCql);
        const cqlResult = cqlAntlr.parse();
        expect(cqlResult.errors.length).toEqual(1);
        expect(cqlResult.errors[0].message).toEqual("code statement requires a codesystem reference. Please add a 'from' clause to your statement.");
    });
});
//# sourceMappingURL=CqlAntlr.test.js.map