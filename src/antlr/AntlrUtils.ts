import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import {Interval} from "antlr4ts/misc";
import {ParseTree} from "antlr4ts/tree";

export class AntlrUtils {

    static findText(ctx: ParserRuleContext): string | undefined {
        const stop: number | undefined = ctx.stop?.stopIndex;

        if (typeof stop === "number") {
            const interval = new Interval(ctx.start.startIndex, stop);
            return ctx.start.inputStream?.getText(interval);
        }
    }

    static findChildText(children: ParseTree[] | undefined, lexerType: number, occurrence: number = 1): string | undefined {
        if (children && children.length > 0) {

            const foundChild = AntlrUtils.findChild(children, lexerType, occurrence);

            if (!foundChild) {
                return undefined;
            }

            return AntlrUtils.findText(foundChild as ParserRuleContext)
        }
    }

    protected static findChild(children: ParseTree[], lexerType: number, occurrence: number): ParseTree | undefined {
        let found = 0;

        for (let child of children) {
            if (AntlrUtils.isTargetType(child, lexerType)) {
                if (++found === occurrence) {
                    return child;
                }
            }
        }
    }

    private static isTargetType(child: ParseTree, targetType: number): boolean {
        if (child instanceof ParserRuleContext) {
            return child.start.type === targetType;
        } else {
            return false;
        }
    }
}