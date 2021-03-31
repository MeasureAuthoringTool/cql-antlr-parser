import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlValueSet from "./dto/CqlValueSet";
import CqlVersion from "./dto/CqlVersion";
import { cqlLexer } from "../generated/cqlLexer";

export default class CqlValueSystemCreator extends CreatorBase<CqlValueSet> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlValueSet);
  }

  protected build(): CqlVersion {
    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
    this.cqlDao.url = this.findChildText(cqlLexer.STRING);
    return this.cqlDao;
  }
}
