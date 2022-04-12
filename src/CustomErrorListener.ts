import { ANTLRErrorListener } from "antlr4ts";
import { Recognizer } from "antlr4ts/Recognizer";
import { Token } from "antlr4ts/Token";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import CqlResult from "./dto/CqlResult";

/**
 * Fires on grammar errors.
 */
export default class CustomErrorListener implements ANTLRErrorListener<Token> {
  constructor(private cqlResult: CqlResult) {}

  syntaxError<T extends Token>(
    recognizer: Recognizer<T, ParserATNSimulator>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string
  ): void {
    if (offendingSymbol) {
      this.cqlResult.errors.push({
        text: offendingSymbol.text,
        start: { line, position: offendingSymbol.charPositionInLine },
        stop: {
          line,
          position:
            offendingSymbol.charPositionInLine +
            (offendingSymbol.stopIndex - offendingSymbol.startIndex) +
            1, // plus 1 to ensure full text is included in Ace Editor highlight
        },
        name: offendingSymbol.text,
        message: msg,
      });
    }
  }
}
