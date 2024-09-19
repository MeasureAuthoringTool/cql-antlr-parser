import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlVersionCreator from "./CqlVersionCreator";
import { cqlLexer } from "../generated";
import CqlParameter from "./dto/CqlParameter";

export default class CqlParameterCreator extends CreatorBase<CqlParameter> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlParameter);
  }

  protected build(): CqlParameter {
    CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);

    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
    this.cqlDao.type = this.findChildText(24);
    return this.cqlDao;
  }
}
