import {CharStreams, CommonTokenStream} from "antlr4ts";
import {CodePointCharStream} from "antlr4ts/CodePointCharStream";
import {ParseTreeWalker} from "antlr4ts/tree";
import {cqlLexer} from "../generated";
import {cqlParser, LibraryContext} from "../generated";
import CqlAntlrListener from "./CqlAntlrListener";
import {cqlListener} from "../generated";
import CqlResult from "./dto/CqlResult";

class CqlAntlr {
  constructor(private cql: string) {
  }

  parse(): CqlResult {
    const tree: LibraryContext = this.buildTree();
    const result = CqlAntlr.initCqlResult();

    const listener: cqlListener = new CqlAntlrListener(result);
    ParseTreeWalker.DEFAULT.walk(listener, tree);

    return result;
  }

  static initCqlResult(): CqlResult {
    return {
      includes: [],
      codeSystems: [],
      valueSets: [],
      codes: [],
      parameters: [],
      expressionDefinitions: [],
      errors:[]
    };
  }

  private buildTree(): LibraryContext {
    const parser = this.buildParser();

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


