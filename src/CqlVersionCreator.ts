import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParseTree } from "antlr4ts/tree";
import CreatorBase from "./CreatorBase";
import CqlVersion from "./dto/CqlVersion";
import AntlrUtils from "./AntlrUtils";
import { cqlLexer } from "../generated";

export default class CqlVersionCreator extends CreatorBase<CqlVersion> {
  constructor(ctx: ParserRuleContext, cqlVersion?: CqlVersion) {
    super(ctx, !cqlVersion ? ({} as CqlVersion) : cqlVersion);
  }

  static setNameVersion(
    children: ParseTree[] | undefined,
    cqlDao: CqlVersion
  ): void {
    /* eslint-disable no-param-reassign */
    cqlDao.name = AntlrUtils.findChildText(children, cqlLexer.IDENTIFIER);
    cqlDao.version = AntlrUtils.findChildText(children, cqlLexer.STRING);
    /* eslint-enable no-param-reassign */
  }

  protected build(): CqlVersion {
    CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);

    return this.cqlDao;
  }
}
