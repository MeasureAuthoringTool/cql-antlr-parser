import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {ParseTree} from "antlr4ts/tree/ParseTree";
import {RuleNode} from "antlr4ts/tree/RuleNode";
import {
  AliasContext,
  CodesystemIdentifierContext,
  cqlLexer,
  cqlVisitor,
  InvocationTermContext,
  TerminologyContext,
} from "../generated";
import AntlrUtils from "./AntlrUtils";
import {CqlResult} from "./dto";
import CqlFinder from "./util/CqlFinder";
import CqlErrorCreator from "./CqlErrorCreator";
import {ParserRuleContext} from "antlr4ts/ParserRuleContext";

export default class CqlExpressionVisitor extends AbstractParseTreeVisitor<void> implements cqlVisitor<void> {
  private finder: CqlFinder;

  constructor(private result: CqlResult, private aliases: string[] = []) {
    super();
    console.log("##### Aliases", aliases);
    this.finder = new CqlFinder(result, aliases);
  }

  static count = 0;

  protected defaultResult(): void {
  }


  visit(tree: ParseTree): void {
    tree.accept(this);
    CqlExpressionVisitor.count += CqlExpressionVisitor.count;
  }

  visitChildren(/* @NotNull */ node: RuleNode): void {
    for (let i = 0; i < node.childCount; i += 1) {
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
    this.checkForError(ctx);
  }

  visitTerminology(ctx: TerminologyContext): void {
    this.checkForError(ctx);
  }

  visitCodesystemIdentifier(ctx: CodesystemIdentifierContext): void {
    this.checkForError(ctx);
  }

  checkForError(ctx: ParserRuleContext): void {
    const term = AntlrUtils.findChildText(ctx.children, ctx.start.type);
    if (term) {
      if (!this.finder.find(term)) {
        const cqlError = new CqlErrorCreator(ctx).buildDao();
        if (cqlError) {
          this.result.errors.push(cqlError);
        }
      }
    }
  }
}
