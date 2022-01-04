import CqlAntlr from "../src/CqlAntlr";
import CqlExpressionVisitor from "../src/CqlExpressionVisitor";
import CqlInclude from "../src/dto/CqlInclude";
import CqlValueSet from "../src/dto/CqlValueSet";
import {ExpressionDefinitionContext} from "../generated";
import {CqlResult} from "../src";


const testDefineWithAlias = `define "Antithrombotic Not Given at Discharge":
    ["MedicationRequest": medication in "Antithrombotic Therapy"] NoAntithromboticDischarge
    where NoAntithromboticDischarge.doNotPerform is true
            and (NoAntithromboticDischarge.reasonCode in "Medical Reason"
                or NoAntithromboticDischarge.reasonCode in "Patient Refusal")
      //Note: expressed as an or with equivalence semantics pending resolution of potential CQL issue.
      and exists (NoAntithromboticDischarge.category C where FHIRHelpers.ToConcept(C) ~ Global."Community" or FHIRHelpers.ToConcept(C) ~ Global."Discharge")
      and NoAntithromboticDischarge.status = 'completed'
      and NoAntithromboticDischarge.intent = 'order'        
`;


const sdeDefine = `define "SDE Sex":
  SDE."SDE Sex"'        
`;

const sdeValueset = `define "Antithrombotic Not Given at Discharge":
  ["MedicationRequest": medication in "Antithrombotic Therapy"] NoAntithromboticDischarge
    where NoAntithromboticDischarge.doNotPerform is true
      and (NoAntithromboticDischarge.reasonCode in "Medical Reason"
        or NoAntithromboticDischarge.reasonCode in "Patient Refusal")
      //Note: expressed as an or with equivalence semantics pending resolution of potential CQL issue.
      and exists (NoAntithromboticDischarge.category C where FHIRHelpers.ToConcept(C) ~ Global."Community" or FHIRHelpers.ToConcept(C) ~ Global."Discharge")
      and NoAntithromboticDischarge.status = 'completed'
      and NoAntithromboticDischarge.intent = 'order' 
`;

function createInclude(called: string): CqlInclude {
  const cqlInclude = {} as CqlInclude;
  cqlInclude.called = called;
  cqlInclude.hits = 0;
  return cqlInclude;
}

function createValueSet(name: string): CqlValueSet {
  const cqlValueSet = {} as CqlValueSet;
  cqlValueSet.name = name;
  cqlValueSet.hits = 0;
  return cqlValueSet;
}

function createAntlrContext(cql: string): ExpressionDefinitionContext {
  const cqlAntlr = new CqlAntlr(cql);
  const parser = cqlAntlr.buildParser();
  return parser.expressionDefinition();
}

describe("test visitor", () => {
  it("parse alias and value sets with no errors", () => {
    const cqlResult = CqlAntlr.initCqlResult();
    cqlResult.includes.push(createInclude("FHIRHelpers"));
    cqlResult.includes.push(createInclude("Global"));

    cqlResult.valueSets.push(createValueSet("\"Patient Refusal\""))
    cqlResult.valueSets.push(createValueSet("\"Medical Reason\""))
    cqlResult.valueSets.push(createValueSet("\"Antithrombotic Therapy\""))

    const cqlExpressionVisitor = new CqlExpressionVisitor(cqlResult);
    cqlExpressionVisitor.visit(createAntlrContext(testDefineWithAlias));
    expect(cqlResult.errors.length).toEqual(0);
  });

  it("parse alias with errors", () => {
    const cqlResult: CqlResult = CqlAntlr.initCqlResult();

    const v = new CqlExpressionVisitor(cqlResult);
    v.visit(createAntlrContext(testDefineWithAlias));

    expect(cqlResult.errors.length).toEqual(7);
  });

  it("parse sde with errors", () => {
    const cqlResult = CqlAntlr.initCqlResult();

    const v = new CqlExpressionVisitor(cqlResult);
    v.visit(createAntlrContext(sdeDefine));

    expect(cqlResult.errors.length).toEqual(1);
  });

  it("parse sde no errors", () => {
    const cqlResult = CqlAntlr.initCqlResult();
    cqlResult.includes.push(createInclude("FHIRHelpers"));
    cqlResult.includes.push(createInclude("Global"));

    cqlResult.includes.push(createInclude("SDE"));
    const v = new CqlExpressionVisitor(cqlResult);
    v.visit(createAntlrContext(sdeDefine));

    expect(cqlResult.errors.length).toEqual(0);
  });


  it("parse valueset with no errors", () => {
    const cqlResult = CqlAntlr.initCqlResult();
    cqlResult.includes.push(createInclude("FHIRHelpers"));
    cqlResult.includes.push(createInclude("Global"));

    cqlResult.valueSets.push(createValueSet("\"Patient Refusal\""))
    cqlResult.valueSets.push(createValueSet("\"Medical Reason\""))
    cqlResult.valueSets.push(createValueSet("\"Antithrombotic Therapy\""))

    const v = new CqlExpressionVisitor(cqlResult);
    v.visit(createAntlrContext(sdeValueset));

    expect(cqlResult.errors.length).toEqual(0);
  });

});
