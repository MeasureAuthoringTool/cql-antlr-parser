import { cqlListener } from "../generated/cqlListener";
import {
  CodeDefinitionContext,
  CodesystemDefinitionContext,
  IncludeDefinitionContext,
  LibraryDefinitionContext,
  UsingDefinitionContext,
  ValuesetDefinitionContext,
} from "../generated/cqlParser";
import CqlResult from "./dto/CqlResult";
import CqlInclude from "./dto/CqlInclude";
import CqlCodeSystem from "./dto/CqlCodeSystem";
import CqlValueSet from "./dto/CqlValueSet";
import CqlVersionCreator from "./CqlVersionCreator";
import CqlIncludeCreator from "./CqlIncludeCreator";
import CqlCodeSystemCreator from "./CqlCodeSystemCreator";
import CqlValueSystemCreator from "./CqlCodeValueSystemCreator";
import CqlCodeCreator from "./CqlCodeCreator";

export default class CqlAntlrListener implements cqlListener {
  constructor(private cqlResult: CqlResult) {}

  enterLibraryDefinition(ctx: LibraryDefinitionContext): void {
    const cqlVersionCreator = new CqlVersionCreator(ctx);
    this.cqlResult.library = cqlVersionCreator.buildDao();
  }

  enterUsingDefinition(ctx: UsingDefinitionContext): void {
    const cqlVersionCreator = new CqlVersionCreator(ctx);
    this.cqlResult.using = cqlVersionCreator.buildDao();
  }

  enterIncludeDefinition(ctx: IncludeDefinitionContext): void {
    const cqlInclude: CqlInclude | undefined = new CqlIncludeCreator(
      ctx
    ).buildDao();

    if (cqlInclude) {
      this.cqlResult.includes.push(cqlInclude);
    }
  }

  enterCodesystemDefinition(ctx: CodesystemDefinitionContext): void {
    const cqlCodeSystem: CqlCodeSystem | undefined = new CqlCodeSystemCreator(
      ctx
    ).buildDao();

    if (cqlCodeSystem) {
      this.cqlResult.codeSystems.push(cqlCodeSystem);
    }
  }

  enterValuesetDefinition(ctx: ValuesetDefinitionContext): void {
    const cqlValueSet: CqlValueSet | undefined = new CqlValueSystemCreator(
      ctx
    ).buildDao();

    if (cqlValueSet) {
      this.cqlResult.valueSets.push(cqlValueSet);
    }
  }

  enterCodeDefinition(ctx: CodeDefinitionContext): void {
    const cqlCode: CqlValueSet | undefined = new CqlCodeCreator(ctx).buildDao();

    if (cqlCode) {
      this.cqlResult.codes.push(cqlCode);
    }
  }
}
