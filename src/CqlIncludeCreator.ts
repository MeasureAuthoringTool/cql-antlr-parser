import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlInclude from "./dto/CqlInclude";
import CqlVersion from "./dto/CqlVersion";
import CqlVersionCreator from "./CqlVersionCreator";
import { cqlLexer } from "../generated/cqlLexer";

export default class CqlIncludeCreator extends CreatorBase<CqlInclude> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlInclude);
  }

  protected build(): CqlVersion {
    CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);

    this.cqlDao.called = this.findChildText(cqlLexer.IDENTIFIER, 2);
    return this.cqlDao;
  }
}
