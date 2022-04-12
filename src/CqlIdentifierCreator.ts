import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlVersionCreator from "./CqlVersionCreator";
import { cqlLexer } from "../generated";
import CqlIdentifier from "./dto/CqlIdentifier";

export default class CqlIdentifierCreator extends CreatorBase<CqlIdentifier> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlIdentifier);
  }

  protected build(): CqlIdentifier {
    CqlVersionCreator.setNameVersion(this.ctx?.children, this.cqlDao);

    this.cqlDao.name = this.findChildText(cqlLexer.IDENTIFIER);
    return this.cqlDao;
  }
}
