import { CharStreams, CommonTokenStream } from "antlr4ts";
import { CodePointCharStream } from "antlr4ts/CodePointCharStream";
import { ParseTreeWalker } from "antlr4ts/tree";
import { cqlLexer, cqlParser, LibraryContext, cqlListener } from "../generated";
import CqlAntlrListener from "./CqlAntlrListener";
import CqlResult from "./dto/CqlResult";
import CustomErrorListener from "./CustomErrorListener";

class CqlAntlr {
  constructor(private cql: string) {}

  parse(): CqlResult {
    const result = CqlAntlr.initCqlResult();
    const tree: LibraryContext = this.buildTree(result);
    const listener: cqlListener = new CqlAntlrListener(result);
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    /**
     * Disabled. Only partially implemented and would be
     * a duplicate of checks performed by the CQL-to-ELM Translator.
     */
    // const cqlExpressionVisitor = new CqlExpressionVisitor(result);
    // cqlExpressionVisitor.visit(tree);
    return result;
  }

  static initCqlResult(): CqlResult {
    return {
      includes: [],
      codeSystems: [],
      valueSets: [],
      codes: [],
      parameters: [],
      identifiers: [],
      expressionDefinitions: [],
      errors: [],
      retrieves: [],
    };
  }

  private buildTree(cqlResult: CqlResult): LibraryContext {
    const parser = this.buildParser();
    // remove default ConsoleErrorListener
    parser.removeErrorListeners();
    // add custom ErrorListener
    parser.addErrorListener(new CustomErrorListener(cqlResult));
    return parser.library();
  }

  buildParser(): cqlParser {
    const charStream: CodePointCharStream = CharStreams.fromString(this.cql);
    // eslint-disable-next-line new-cap
    const lexer: cqlLexer = new cqlLexer(charStream);
    const tokenStream = new CommonTokenStream(lexer);
    // eslint-disable-next-line new-cap
    return new cqlParser(tokenStream);
  }
}

export default CqlAntlr;
