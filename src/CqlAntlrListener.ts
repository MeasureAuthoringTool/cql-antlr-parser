import {
  AggregateClauseContext,
  CodeDefinitionContext,
  CodesystemDefinitionContext,
  ContextDefinitionContext,
  cqlLexer,
  cqlListener,
  ExpressionDefinitionContext,
  FunctionDefinitionContext,
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
import CqlRetrieveCreator from "./CqlRetrieve~Creator";
import { BufferedTokenStream } from "antlr4ts";
import AntlrUtils from "./AntlrUtils";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

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
    const using = new CqlVersionCreator(ctx).buildDao();
    if (using) {
      this.cqlResult.usings.push(using);
    }
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
      this.cqlResult.usings[0]?.name
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

  private processDefinitionWithComments(
    ctx: ParserRuleContext,
    buildDao: () => CqlExpressionDefinition | undefined
  ): void {
    const expressionDefinition: CqlExpressionDefinition | undefined =
      buildDao();

    if (expressionDefinition && ctx.start.inputStream) {
      const hiddenTokens = this.bufferedTokenStream.getHiddenTokensToLeft(
        ctx.start.tokenIndex,
        cqlLexer.HIDDEN
      );

      if (hiddenTokens && hiddenTokens.length > 0) {
        const comment = hiddenTokens
          .map((token) => token.text?.trim())
          .filter(Boolean)
          .join(" ");

        if (comment) {
          expressionDefinition.start = new CqlExpressionDefinitionCreator(
            ctx
          ).buildLineInfo(hiddenTokens[1]);
          expressionDefinition.comment = AntlrUtils.formatComment(comment);
        }
      }
      this.cqlResult.expressionDefinitions.push(expressionDefinition);
    }
  }

  enterExpressionDefinition(ctx: ExpressionDefinitionContext): void {
    this.processDefinitionWithComments(ctx, () => {
      return new CqlExpressionDefinitionCreator(ctx).buildDao();
    });
  }

  enterFunctionDefinition(ctx: FunctionDefinitionContext): void {
    this.processDefinitionWithComments(ctx, () => {
      return new CqlExpressionDefinitionCreator(ctx).buildDao();
    });
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
