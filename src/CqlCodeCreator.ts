import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlCode from "./dto/CqlCode";
import CqlValueSet from "./dto/CqlValueSet";
import CqlVersion from "./dto/CqlVersion";
import { cqlLexer } from "../generated/cqlLexer";

export default class CqlCodeCreator extends CreatorBase<CqlCode> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlValueSet);
  }

  protected build(): CqlVersion {
    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
    this.cqlDao.codeId = this.findChildText(cqlLexer.STRING);
    this.cqlDao.codeSystem = this.findChildText(cqlLexer.QUOTEDIDENTIFIER, 2);
    return this.cqlDao;
  }
}
