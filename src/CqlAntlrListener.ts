import {
  AggregateClauseContext,
  CodeDefinitionContext,
  CodesystemDefinitionContext,
  ContextDefinitionContext,
  cqlLexer,
  cqlListener,
  ExpressionDefinitionContext,
  IncludeDefinitionContext,
  LibraryDefinitionContext,
  ParameterDefinitionContext,
  RetrieveContext,
  UsingDefinitionContext,
  ValuesetDefinitionContext,
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
import { CqlCode } from "./dto";
import CqlIdentifier from "./dto/CqlIdentifier";
import CqlIdentifierCreator from "./CqlIdentifierCreator";
import CqlRetrieve from "./dto/CqlRetrieve";
import CqlRetrieveCreator from "./CqlRetrieveCreator";
import {BufferedTokenStream } from "antlr4ts";
import AntlrUtils from "./AntlrUtils";

export default class CqlAntlrListener implements cqlListener {
  // save bufferedTokenStream from lexer
  bufferedTokenStream: BufferedTokenStream;
  constructor(private cqlResult: CqlResult, tokenStream: BufferedTokenStream) {
    this.bufferedTokenStream = tokenStream;
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
    const cqlCode: CqlInclude | undefined = new CqlIncludeCreator(
      ctx
    ).buildDao();

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
    const cqlValueSet: CqlValueSet | undefined = new CqlValueSetSystemCreator(
      ctx,
      this.cqlResult.using?.name
    ).buildDao();

    if (cqlValueSet) {
      this.cqlResult.valueSets.push(cqlValueSet);
    }
  }

  enterCodeDefinition(ctx: CodeDefinitionContext): void {
    const cqlCode: CqlCode | undefined = new CqlCodeCreator(ctx).buildDao();
    if (cqlCode) {
      this.cqlResult.codes.push(cqlCode);
    }
  }

  enterParameterDefinition(ctx: ParameterDefinitionContext): void {
    const cqlCode: CqlParameter | undefined = new CqlParameterCreator(
      ctx
    ).buildDao();

    if (cqlCode) {
      this.cqlResult.parameters.push(cqlCode);
    }
  }

  enterContextDefinition(ctx: ContextDefinitionContext): void {
    this.cqlResult.context = new CqlContextCreator(ctx).buildDao();
  }

  enterExpressionDefinition(ctx: ExpressionDefinitionContext): void {
    const expressionDefinition: CqlExpressionDefinition | undefined =
      new CqlExpressionDefinitionCreator(ctx).buildDao();

    if (expressionDefinition) {
      if (ctx.start.inputStream) {
        const hiddenTokens = this.bufferedTokenStream.getHiddenTokensToLeft(ctx.start.tokenIndex, cqlLexer.HIDDEN)
        let comment = "";
        hiddenTokens.forEach((token) => {
          if (token.text){
            comment += token.text;
          }
        })
        comment = comment.trim();
        if (comment){
          expressionDefinition.comment = AntlrUtils.formatComment(comment);
        }
      }
      this.cqlResult.expressionDefinitions.push(expressionDefinition);
    }
  }

  enterAggregateClause(ctx: AggregateClauseContext): void {
    const identifier: CqlIdentifier | undefined = new CqlIdentifierCreator(
      ctx
    ).buildDao();
    if (identifier) {
      this.cqlResult.identifiers.push(identifier);
    }
  }

  enterRetrieve(ctx: RetrieveContext): void {
    if (ctx.terminology() === undefined) {
      return;
    }
    const cqlRetrieve: CqlRetrieve | undefined = new CqlRetrieveCreator(
      ctx
    ).buildDao();
    if (cqlRetrieve) {
      this.cqlResult.retrieves.push(cqlRetrieve);
    }
  }
}
