import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlCode from "./dto/CqlCode";
import CqlValueSet from "./dto/CqlValueSet";
import { cqlLexer } from "../generated";

export default class CqlCodeCreator extends CreatorBase<CqlCode> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlValueSet);
  }

  protected build(): CqlCode {
    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
    this.cqlDao.codeId = this.findChildText(cqlLexer.STRING);
    this.cqlDao.codeSystem = this.findChildText(cqlLexer.QUOTEDIDENTIFIER, 2);
    return this.cqlDao;
  }
}
