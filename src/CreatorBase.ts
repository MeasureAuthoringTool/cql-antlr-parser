import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { Token } from "antlr4ts/Token";
import { ParseTree } from "antlr4ts/tree";
import CqlText from "./dto/CqlText";
import AntlrUtils from "./AntlrUtils";
import LineInfo from "./dto/LineInfo";

export default abstract class CreatorBase<T extends CqlText> {
  protected constructor(
    protected ctx: ParserRuleContext,
    protected cqlDao: T
  ) {}

  protected processLineInfo(): void {
    this.cqlDao.start = this.buildLineInfo(this.ctx.start);
    this.cqlDao.stop = this.buildLineInfo(this.ctx.stop);
  }

  buildDao(): T | undefined {
    this.cqlDao.text = AntlrUtils.findText(this.ctx);
    this.processLineInfo();

    if (typeof this.cqlDao.text === "string") {
      return this.build();
    }
    return undefined;
  }

  buildLineInfo(token: Token | undefined): LineInfo | undefined {
    if (token) {
      const lineInfo = {} as LineInfo;
      lineInfo.line = token.line;
      lineInfo.position = token.charPositionInLine;

      if (token.charPositionInLine !== 0) {
        lineInfo.position += token.stopIndex - token.startIndex;
      }

      return lineInfo;
    }
    return undefined;
  }

  protected findChildText(
    cqlLexerId: number,
    occurrence = 1,
    children: ParseTree[] | undefined = this.ctx.children
  ): string | undefined {
    return AntlrUtils.findChildText(children, cqlLexerId, occurrence);
  }

  protected findChildName(
    children: ParseTree[] | undefined = this.ctx.children
  ): string | undefined {
    const result: string | undefined = AntlrUtils.findChildName(children);
    return result;
  }

  protected findChildExpression(
    children: ParseTree[] | undefined = this.ctx.children
  ): string | undefined {
    const result: string | undefined = AntlrUtils.findChildExpression(children);
    return result;
  }

  protected abstract build(): T;
}
