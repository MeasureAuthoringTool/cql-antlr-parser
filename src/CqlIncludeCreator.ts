import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlInclude from "./dto/CqlInclude";
import CqlVersionCreator from "./CqlVersionCreator";
import { cqlLexer } from "../generated";

export default class CqlIncludeCreator extends CreatorBase<CqlInclude> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlInclude);
  }

  protected build(): CqlInclude {
    CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);

    this.cqlDao.called = this.findChildText(cqlLexer.IDENTIFIER, 2);
    this.cqlDao.hits = 0;
    return this.cqlDao;
  }
}
