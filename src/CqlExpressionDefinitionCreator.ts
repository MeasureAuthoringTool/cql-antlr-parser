import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlInclude from "./dto/CqlInclude";
import CqlVersionCreator from "./CqlVersionCreator";
import {cqlLexer} from "../generated";
import CqlExpressionDefinition from "./dto/CqlExpressionDefinition";
import {AntlrUtils} from "./index";
import {ParseTree} from "antlr4ts/tree";

export default class CqlExpressionDefinitionCreator extends CreatorBase<CqlExpressionDefinition> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlInclude);
  }

  private findExpressionType(children: ParseTree[] | undefined,
                             lexerType: number,
                             occurrence: number = 1): void {
    if (children) {
      const foundChild = AntlrUtils.findChild(children, lexerType, occurrence);
      this.processExpressionClass(foundChild, lexerType, occurrence);
    }
  }

  private processExpressionClass(foundChild: ParseTree | undefined): void {
    if (foundChild) {
      const className = foundChild.constructor.name;
      console.log("InstanceName=" + className)
      this.cqlDao.expressionClass = className;
    }
  }


  protected build(): CqlExpressionDefinition {
    CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);

    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER, 1);
    this.cqlDao.expression = this.findChildText(cqlLexer.IDENTIFIER, 1);

    if (!this.cqlDao.expression) {
      const foundChild = AntlrUtils.findChild(this.ctx.children, 37, 1);
      this.cqlDao.expression = this.findChildText(37, 1);
      this.processExpressionClass(foundChild);
    } else {
      this.findExpressionType(this.ctx.children, cqlLexer.IDENTIFIER, 1);
    }

    console.log(this.cqlDao.expression);

    return this.cqlDao;
  }
}
