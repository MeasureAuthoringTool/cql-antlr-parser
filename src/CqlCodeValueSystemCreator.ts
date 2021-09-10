import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlValueSet from "./dto/CqlValueSet";
import {cqlLexer} from "../generated";

export default class CqlValueSetSystemCreator extends CreatorBase<CqlValueSet> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlValueSet);
  }

  protected build(): CqlValueSet {
    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
    this.cqlDao.url = this.findChildText(cqlLexer.STRING);
    this.cqlDao.hits = 0;
    return this.cqlDao;
  }
}
