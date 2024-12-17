import {
  simpleDefinitionCql,
  fhirTestCql,
  qdmTestCql,
  cqlWithSyntaxErrors,
  cqlWithUsedParam,
  cqlWithUsedDefines,
  cqlWithUsedCodeAndCodeSystem,
  cqlWithUsedContext,
  cqlFluentFunctions,
  relatedContextRetrieve,
  aggregateQuery,
  cqlDefineWithNoName,
} from "./testCql";
import { CqlAntlr } from "../src";
import CqlResult from "../src/dto/CqlResult";

describe("test antlr", () => {
  it("parse empty CQL", () => {
    const cqlResult = new CqlAntlr("").parse();
    expect(cqlResult.codes.length).toBe(0);
    expect(cqlResult.valueSets.length).toBe(0);
    expect(cqlResult.codeSystems.length).toBe(0);
    expect(cqlResult.parameters.length).toBe(0);
    expect(cqlResult.expressionDefinitions.length).toEqual(0);
  });

  it("parse blank CQL", () => {
    const cqlResult = new CqlAntlr("  ").parse();
    expect(cqlResult.codes.length).toBe(0);
    expect(cqlResult.valueSets.length).toBe(0);
    expect(cqlResult.codeSystems.length).toBe(0);
    expect(cqlResult.parameters.length).toBe(0);
    expect(cqlResult.expressionDefinitions.length).toEqual(0);
  });

  it("parse simple Fhir CQL Definition", () => {
    const cqlAntlr = new CqlAntlr(simpleDefinitionCql);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.usings.length).toBe(2);
    expect(cqlResult.usings[0]?.name).toBe("QICore");
    expect(cqlResult.usings[1]?.name).toBe("FHIR");
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
    const cqlAntlr = new CqlAntlr(simpleDefinitionCql);
    const cqlResult: CqlResult = cqlAntlr.parse();
    const expressions = cqlResult.expressionDefinitions;
    expect(expressions.length).toEqual(6);
    expect(cqlResult.expressionDefinitions[0].comment).toEqual(
      "ehnicity comment"
    );
    expect(cqlResult.expressionDefinitions[1].comment).toEqual("multi line");
    expect(cqlResult.expressionDefinitions[2].comment).toEqual(
      "@author: john doe\n@description: this is Numerator"
    );
    expect(cqlResult.expressionDefinitions[3].comment).toEqual(undefined);
    expect(cqlResult.expressionDefinitions[4].comment).toEqual(
      "multiline comment outside of a function with multiple\nrows"
    );
    expect(cqlResult.expressionDefinitions[5].comment).toEqual(
      "comment outside of function"
    );
  });
  it("parse fhir cql", () => {
    const cqlAntlr = new CqlAntlr(fhirTestCql);

    const cqlResult: CqlResult = cqlAntlr.parse();

    expect(cqlResult.codes.length).toBe(1);
    expect(cqlResult.valueSets.length).toBe(4);
    expect(cqlResult.codeSystems.length).toBe(3);

    expect(cqlResult.parameters.length).toBe(1);

    expect(cqlResult.context?.name).toEqual("Patient");

    expect(cqlResult.expressionDefinitions.length).toEqual(8);
    cqlResult.expressionDefinitions.forEach((def) => {
      expect(def.name).toBeDefined();
    });
    expect(cqlResult.retrieves.length).toEqual(1);
  });

  it("parse qdm cql", () => {
    const cqlAntlr = new CqlAntlr(qdmTestCql);
    const cqlResult: CqlResult = cqlAntlr.parse();

    expect(cqlResult.usings.length).toBe(1);
    expect(cqlResult.usings[0]?.name).toBe("QDM");
    expect(cqlResult.valueSets.length).toBe(2);
    expect(cqlResult.valueSets[0].name).toBe(
      '"Adolescent depression screening assessment"'
    );
    expect(cqlResult.valueSets[0].version).toBeUndefined();
    expect(cqlResult.valueSets[1].name).toBe(
      '"Adolescent depression screening assessment with version"'
    );
    expect(cqlResult.valueSets[1].version).toBe("'urn:hl7:version:20240307'");
  });

  it("reports syntactical errors", () => {
    const cqlAntlr = new CqlAntlr(cqlWithSyntaxErrors);

    const cqlResult: CqlResult = cqlAntlr.parse();

    expect(cqlResult.codes.length).toBe(1);
    expect(cqlResult.codeSystems.length).toBe(3);
    expect(cqlResult.errors.length).toBe(3);

    expect(cqlResult.errors[0].name).toBe("includess");
    expect(cqlResult.errors[0].message).toContain(
      "extraneous input 'includess' expecting"
    );
    expect(cqlResult.errors[0].start).toEqual({ line: 6, position: 0 });
    expect(cqlResult.errors[0].stop).toEqual({ line: 6, position: 9 });

    expect(cqlResult.errors[1].name).toBe("valuesetss");

    expect(cqlResult.errors[2].name).toBe("Interval");
    expect(cqlResult.errors[2].message).toContain(
      "missing {QUOTEDIDENTIFIER, IDENTIFIER, DELIMITEDIDENTIFIER} at 'Interval'"
    );
  });

  it("should recognize valid parameter", () => {
    const cqlAntlr = new CqlAntlr(cqlWithUsedParam);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.parameters.length).toEqual(1);
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize used valid define", () => {
    const cqlAntlr = new CqlAntlr(cqlWithUsedDefines);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.expressionDefinitions.length).toEqual(2);
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize used valid code and codeSystem", () => {
    const cqlAntlr = new CqlAntlr(cqlWithUsedCodeAndCodeSystem);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.codes.length).toEqual(1);
    expect(cqlResult.codeSystems.length).toEqual(1);
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize used valid context", (): void => {
    const cqlAntlr = new CqlAntlr(cqlWithUsedContext);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.context?.name).toEqual("Patient");
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize cql 1.5 specific fluent functions", (): void => {
    const cqlAntlr = new CqlAntlr(cqlFluentFunctions);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize cql 1.5 Related Context Retrieve", (): void => {
    const cqlAntlr = new CqlAntlr(relatedContextRetrieve);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize cql 1.5 aggregate clause", (): void => {
    const cqlAntlr = new CqlAntlr(aggregateQuery);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("test define with no name", (): void => {
    const cqlAntlr = new CqlAntlr(cqlDefineWithNoName);
    const cqlResult: CqlResult = cqlAntlr.parse();
    expect(cqlResult.errors.length).toEqual(1);
    expect(cqlResult.errors[0].message).toEqual(
      "Definition is missing a name."
    );
  });
});
