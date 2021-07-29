import testCql from "./testCql";
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

    console.log(JSON.stringify(cqlResult, null, 2));
  });
});
