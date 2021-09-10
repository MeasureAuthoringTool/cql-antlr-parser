import {
  CodeDefinitionContext,
  CodesystemDefinitionContext,
  ContextDefinitionContext,
  cqlListener,
  ExpressionDefinitionContext,
  IncludeDefinitionContext,
  LibraryDefinitionContext,
  ParameterDefinitionContext,
  UsingDefinitionContext,
  ValuesetDefinitionContext
} from "../generated";
import CqlResult from "./dto/CqlResult";
import CqlInclude from "./dto/CqlInclude";
import CqlCodeSystem from "./dto/CqlCodeSystem";
import CqlValueSet from "./dto/CqlValueSet";
import CqlVersionCreator from "./CqlVersionCreator";
import CqlIncludeCreator from "./CqlIncludeCreator";
import CqlCodeSystemCreator from "./CqlCodeSystemCreator";
import CqlValueSetSystemCreator from "./CqlCodeValueSystemCreator";
import CqlCodeCreator from "./CqlCodeCreator";
import CqlParameterCreator from "./CqlParameterCreator";
import CqlParameter from "./dto/CqlParameter";
import CqlContextCreator from "./CqlContextCreator";
import CqlExpressionDefinition from "./dto/CqlExpressionDefinition";
import CqlExpressionDefinitionCreator from "./CqlExpressionDefinitionCreator";
import CqlExpressionVisitor from "./CqlExpressionVisitor";
import {CqlCode} from "./dto";

export default class CqlAntlrListener implements cqlListener {
  constructor(private cqlResult: CqlResult) {
  }

  enterLibraryDefinition(ctx: LibraryDefinitionContext): void {
    const cqlVersionCreator = new CqlVersionCreator(ctx);
    this.cqlResult.library = cqlVersionCreator.buildDao();
  }

  enterUsingDefinition(ctx: UsingDefinitionContext): void {
    const cqlVersionCreator = new CqlVersionCreator(ctx);
    this.cqlResult.using = cqlVersionCreator.buildDao();
  }

  enterIncludeDefinition(ctx: IncludeDefinitionContext): void {
    const cqlCode: CqlInclude | undefined = new CqlIncludeCreator(ctx).buildDao();

    if (cqlCode) {
      this.cqlResult.includes.push(cqlCode);
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
    const cqlCode: CqlValueSet | undefined = new CqlValueSetSystemCreator(ctx).buildDao();

    if (cqlCode) {
      this.cqlResult.valueSets.push(cqlCode);
    }
  }

  enterCodeDefinition(ctx: CodeDefinitionContext): void {
    const cqlCode: CqlCode | undefined = new CqlCodeCreator(ctx).buildDao();

    if (cqlCode) {
      this.cqlResult.codes.push(cqlCode);
    }
  }

  enterParameterDefinition(ctx: ParameterDefinitionContext): void {
    const cqlCode: CqlParameter | undefined = new CqlParameterCreator(ctx).buildDao();

    if (cqlCode) {
      this.cqlResult.parameters.push(cqlCode);
    }
  }

  enterContextDefinition(ctx: ContextDefinitionContext): void {
    this.cqlResult.context = new CqlContextCreator(ctx).buildDao();
  }

  enterExpressionDefinition(ctx: ExpressionDefinitionContext): void {
    const cqlCode: CqlExpressionDefinition | undefined = new CqlExpressionDefinitionCreator(ctx).buildDao();

    if (cqlCode) {
      this.cqlResult.expressionDefinitions.push(cqlCode);
      const cqlExpressionVisitor = new CqlExpressionVisitor(this.cqlResult);
      cqlExpressionVisitor.visit(ctx);
    }
  }
}
