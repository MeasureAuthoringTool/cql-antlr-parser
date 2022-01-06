import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlCodeSystem from "./dto/CqlCodeSystem";
import { cqlLexer } from "../generated";

export default class CqlCodeSystemCreator extends CreatorBase<CqlCodeSystem> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlCodeSystem);
  }

  protected build(): CqlCodeSystem {
    this.cqlDao.oid = this.findChildText(cqlLexer.STRING);
    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
    this.cqlDao.version = this.findChildText(cqlLexer.STRING, 2);
    return this.cqlDao;
  }
}
