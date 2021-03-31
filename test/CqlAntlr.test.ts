import testCql from "./testCql";
import CqlAntlr from "../src/CqlAntlr";

describe("test antlr", () => {
  it("parse", () => {
    const cqlAntlr = new CqlAntlr(testCql);

    const cqlResult = cqlAntlr.parse();

    expect(cqlResult.codes.length).toBe(1);
    expect(cqlResult.valueSets.length).toBe(4);
    expect(cqlResult.codeSystems.length).toBe(3);
  });
});
