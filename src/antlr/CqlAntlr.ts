import {CharStreams, CommonTokenStream} from "antlr4ts";
import {CodePointCharStream} from "antlr4ts/CodePointCharStream";
import {cqlLexer} from "./generated/cqlLexer";
import {cqlParser, LibraryContext} from "./generated/cqlParser";
import CqlAntlrListener from "./CqlAntlrListener";
import {cqlListener} from "./generated/cqlListener";
import {ParseTreeWalker} from "antlr4ts/tree";
import CqlResult from "./dao/CqlResult";

class CqlAntlr {
    constructor(private cql: string) {
    }

    parse(): CqlResult {
        const tree: LibraryContext = this.buildTree();
        const result = CqlAntlr.buildCqlResult();

        const listener: cqlListener = new CqlAntlrListener(result);
        ParseTreeWalker.DEFAULT.walk(listener, tree);

        return result;
    }

    private static buildCqlResult() {
        const result = {} as CqlResult;
        result.includes = [];
        result.codeSystems = [];
        result.valueSets = [];
        result.codes = [];
        return result;
    }

    private buildTree(): LibraryContext {
        const charStream: CodePointCharStream = CharStreams.fromString(this.cql);
        const lexer: cqlLexer = new cqlLexer(charStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new cqlParser(tokenStream);

        return parser.library();
    }
}

export default CqlAntlr;