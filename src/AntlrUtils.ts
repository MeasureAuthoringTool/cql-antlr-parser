import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { Interval } from "antlr4ts/misc";
import { ParseTree } from "antlr4ts/tree";

export default class AntlrUtils {
  static findText(ctx: ParserRuleContext): string | undefined {
    const stop: number | undefined = ctx.stop?.stopIndex;

    if (typeof stop === "number") {
      const interval = new Interval(ctx.start.startIndex, stop);
      return ctx.start.inputStream?.getText(interval);
    }
    return undefined;
  }

  static findChildText(
    children: ParseTree[] | undefined,
    lexerType: number,
    occurrence = 1
  ): string | undefined {
    if (children && children.length > 0) {
      const foundChild = AntlrUtils.findChild(children, lexerType, occurrence);

      if (foundChild) {
        return AntlrUtils.findText(foundChild as ParserRuleContext);
      }
    }
    return undefined;
  }

  protected static findChild(
    children: ParseTree[],
    lexerType: number,
    occurrence: number
  ): ParseTree | undefined {
    let found = 0;

    return children.find((child: ParseTree) => {
      if (AntlrUtils.isTargetType(child, lexerType)) {
        found += 1;
        if (found === occurrence) {
          return true;
        }
      }
      return false;
    });
  }

  private static isTargetType(child: ParseTree, targetType: number): boolean {
    if (child instanceof ParserRuleContext) {
      return child.start.type === targetType;
    }
    return false;
  }
}
