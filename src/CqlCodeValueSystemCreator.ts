import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlValueSet from "./dto/CqlValueSet";
import {cqlLexer} from "../generated";

type StringOrUndefined = undefined | string;

export default class CqlValueSetSystemCreator extends CreatorBase<CqlValueSet> {
  model: StringOrUndefined

  constructor(ctx: ParserRuleContext, model: StringOrUndefined) {
    super(ctx, {} as CqlValueSet);
    this.model = model;
  }

  protected build(): CqlValueSet {
    this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
    this.cqlDao.url = this.findChildText(cqlLexer.STRING);
    if (this.model === "QDM") {
      this.cqlDao.version = this.findChildText(cqlLexer.STRING, 2);
    } else {
      const tokens = this.cqlDao.url?.split("|");
      this.cqlDao.version = tokens?.length === 2 ? tokens[1] : undefined
    }
    this.cqlDao.hits = 0;
    return this.cqlDao;
  }
}
