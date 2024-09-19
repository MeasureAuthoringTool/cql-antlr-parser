import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import { cqlLexer } from "../generated";
import CqlRetrieve from "./dto/CqlRetrieve";

export default class CqlRetrieveCreator extends CreatorBase<CqlRetrieve> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlRetrieve);
  }

  protected build(): CqlRetrieve {
    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
    this.cqlDao.terminology = this.findChildText(cqlLexer.QUOTEDIDENTIFIER, 2);
    this.cqlDao.hits = 0;
    return this.cqlDao;
  }
}
