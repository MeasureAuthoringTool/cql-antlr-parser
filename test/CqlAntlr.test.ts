import { testCql,
  cqlWithSyntaxErrors,
  cqlWithUsedParam,
  cqlWithUsedDefines,
  cqlWithUsedCodeAndCodeSystem,
  cqlWithUsedContext
} from "./testCql";
import CqlAntlr from "../src/CqlAntlr";

describe("test antlr", () => {
  it("parse", () => {
    const cqlAntlr = new CqlAntlr(testCql);

    const cqlResult = cqlAntlr.parse();

    expect(cqlResult.codes.length).toBe(1);
    expect(cqlResult.valueSets.length).toBe(4);
    expect(cqlResult.codeSystems.length).toBe(3);

    expect(cqlResult.parameters.length).toBe(1);

    expect(cqlResult.context?.name).toEqual("Patient");

    expect(cqlResult.expressionDefinitions.length).toEqual(6);
  });

  it("reports syntactical errors", () => {
    const cqlAntlr = new CqlAntlr(cqlWithSyntaxErrors);

    const cqlResult = cqlAntlr.parse();

    expect(cqlResult.codes.length).toBe(1);
    expect(cqlResult.codeSystems.length).toBe(3);
    expect(cqlResult.errors.length).toBe(4);

    expect(cqlResult.errors[0].name).toBe("includess");
    expect(cqlResult.errors[0].message).toContain("extraneous input 'includess' expecting");
    expect(cqlResult.errors[0].start).toEqual({line: 6, position: 180});
    expect(cqlResult.errors[0].stop).toEqual({line: 6, position: 188});

    expect(cqlResult.errors[1].name).toBe("valuesetss");

    expect(cqlResult.errors[2].name).toBe("Interval");
    expect(cqlResult.errors[2].message).toContain("missing {QUOTEDIDENTIFIER, IDENTIFIER, DELIMITEDIDENTIFIER} at 'Interval'");
  });

  it("should recognize valid parameter", () => {
    const cqlAntlr = new CqlAntlr(cqlWithUsedParam);
    const cqlResult = cqlAntlr.parse();
    expect(cqlResult.parameters.length).toEqual(1);
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize used valid define", () => {
    const cqlAntlr = new CqlAntlr(cqlWithUsedDefines);
    const cqlResult = cqlAntlr.parse();
    expect(cqlResult.expressionDefinitions.length).toEqual(2);
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize used valid code and codeSystem", () => {
    const cqlAntlr = new CqlAntlr(cqlWithUsedCodeAndCodeSystem);
    const cqlResult = cqlAntlr.parse();
    expect(cqlResult.codes.length).toEqual(1);
    expect(cqlResult.codeSystems.length).toEqual(1);
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("should recognize used valid context", () => {
    const cqlAntlr = new CqlAntlr(cqlWithUsedContext);
    const cqlResult = cqlAntlr.parse();
    expect(cqlResult.context?.name).toEqual("Patient");
    expect(cqlResult.errors.length).toEqual(0);
  });
});
