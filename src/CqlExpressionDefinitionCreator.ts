import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParseTree } from "antlr4ts/tree";
import CreatorBase from "./CreatorBase";
import CqlInclude from "./dto/CqlInclude";
import CqlVersionCreator from "./CqlVersionCreator";
import { cqlLexer } from "../generated";
import CqlExpressionDefinition from "./dto/CqlExpressionDefinition";
import AntlrUtils from "./AntlrUtils";

export default class CqlExpressionDefinitionCreator extends CreatorBase<CqlExpressionDefinition> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlInclude);
  }

  private findExpressionType(
    children: ParseTree[] | undefined,
    lexerType: number,
    occurrence = 1
  ): void {
    if (children) {
      const foundChild = AntlrUtils.findChild(children, lexerType, occurrence);
      this.processExpressionClass(foundChild);
    }
  }

  private processExpressionClass(foundChild: ParseTree | undefined): void {
    if (foundChild) {
      this.cqlDao.expressionClass = foundChild.constructor.name;
    }
  }

  protected build(): CqlExpressionDefinition {
    CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);
    this.cqlDao.name = this.findChildName();

    this.cqlDao.expression = this.findChildExpression();

    if (!this.cqlDao.expression) {
      const foundChild = AntlrUtils.findChild(
        this.ctx.children,
        cqlLexer.T__36,
        1
      );
      this.cqlDao.expression = this.findChildText(cqlLexer.T__36, 1);
      this.processExpressionClass(foundChild);
    } else {
      this.findExpressionType(this.ctx.children, cqlLexer.IDENTIFIER, 1);
    }
    return this.cqlDao;
  }
}
