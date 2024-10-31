import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { Interval } from "antlr4ts/misc";
import { ParseTree } from "antlr4ts/tree";

export default class AntlrUtils {
  static SINGLE_LINE_COMMENT_REGEX = /\/\//g;

  static MULTI_LINE_COMMENT_REGEX = /\/\*|\*\//g;
  static findText(ctx: ParserRuleContext): string | undefined {
    const stop: number | undefined = ctx.stop?.stopIndex;

    if (typeof stop === "number") {
      const interval = new Interval(ctx.start.startIndex, stop);
      return ctx.start.inputStream?.getText(interval);
    }
    return undefined;
  }

  static findChildName(children: ParseTree[] | undefined): string | undefined {
    
    if (children?.length != 4) {
      console.error(
        "########### Entering.. children length is  ",
        children?.length
      );
      throw new Error("Definition might be malformed.");
      
    }
    return children ? children[1].text : undefined;
  }

  static findChildExpression(
    children: ParseTree[] | undefined
  ): string | undefined {
    
    if (children?.length != 4) {
      console.error(
        "########### Entering.. children length is  ",
        children?.length
      )
      throw new Error("Definition might be malformed.");
    }
    return children ? children[3].text : undefined;
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

  static findChild(
    children: ParseTree[] | undefined,
    lexerType: number,
    occurrence: number
  ): ParseTree | undefined {
    if (!children) {
      return undefined;
    }

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

  static formatComment(comment: string): string {
    return comment.replace(AntlrUtils.SINGLE_LINE_COMMENT_REGEX, "")
      .replace(AntlrUtils.MULTI_LINE_COMMENT_REGEX, "")
      .split("\n")
      .map((line) => line.trim())
      .filter(line=> line !== "")
      .join("\n");
  }

  private static isTargetType(child: ParseTree, targetType: number): boolean {
    if (child instanceof ParserRuleContext) {
      return child.start.type === targetType;
    }
    return false;
  }
}
