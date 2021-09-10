import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import {cqlLexer} from "../generated";
import CqlParameter from "./dto/CqlParameter";
import CqlContext from "./dto/CqlContext";

export default class CqlContextCreator extends CreatorBase<CqlContext> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlParameter);
  }

  protected build(): CqlContext {
    this.cqlDao.name = this.findChildText(cqlLexer.IDENTIFIER);

    return this.cqlDao;
  }
}
