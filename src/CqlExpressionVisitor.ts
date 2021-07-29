import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {AliasContext, cqlLexer, cqlVisitor, InvocationTermContext} from "../generated";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import AntlrUtils from "./AntlrUtils";
import {CqlResult} from "./dto";
import CqlFinder from "./util/CqlFinder";
import CqlErrorCreator from "./CqlErrorCreator";

export default class CqlExpressionVisitor extends AbstractParseTreeVisitor<void> implements cqlVisitor<void> {
  private finder: CqlFinder;

  constructor(private result: CqlResult, private aliases: string[] = []) {
    super();
    this.finder = new CqlFinder(result, aliases);
  }

  static count: number = 0;

  protected defaultResult(): void {
  }


  visit(tree: ParseTree): void {
    tree.accept(this);

    CqlExpressionVisitor.count++;
    console.log(CqlExpressionVisitor.count + ": " + tree.constructor.name + "\n\t" + tree.text)
  }

  visitChildren(/*@NotNull*/ node: RuleNode): void {
    for (let i = 0; i < node.childCount; i++) {
      this.visit(node.getChild(i))
    }
  }

  visitAlias(ctx: AliasContext): void {
    const alias = AntlrUtils.findChildText(ctx.children, cqlLexer.IDENTIFIER);

    if (alias) {
      this.aliases.push(alias)
    }
  }

  visitInvocationTerm(ctx: InvocationTermContext): void {
    let term = AntlrUtils.findChildText(ctx.children, ctx.start.type);

    console.log("visitInvocationTerm->" + term);

    if (term) {
     // term = term.replace(/"/g, ""); // remove double quotes

      if (!this.finder.find(term)) {
        const cqlError = new CqlErrorCreator(ctx).buildDao();

        if (cqlError) {
          this.result.errors.push(cqlError);
        }
      }
    }
  }

  // visitTermExpression (ctx: TermExpressionContext) : void {
  //   const term = AntlrUtils.findChildText(ctx.children, cqlLexer.IDENTIFIER);
  //   console.log("visitInvocationTerm->" + term);
  //   console.log(ctx);
  // }

}
