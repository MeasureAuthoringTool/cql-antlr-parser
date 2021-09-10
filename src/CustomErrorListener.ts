import {ANTLRErrorListener} from "antlr4ts";
import {Recognizer} from "antlr4ts/Recognizer";
import {Token} from "antlr4ts/Token";
import {ParserATNSimulator} from "antlr4ts/atn/ParserATNSimulator";
import CqlResult from "./dto/CqlResult";
import CqlError from "./dto/CqlError";

export default class CustomErrorListener implements ANTLRErrorListener<Token> {

  constructor(private cqlResult: CqlResult) {
  }

  syntaxError<T extends Token>(
    recognizer: Recognizer<T, ParserATNSimulator>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string): void {
    if (offendingSymbol) {
      const cqlError: CqlError = {
        text: offendingSymbol.text,
        start: {line, position: offendingSymbol.startIndex},
        stop: {line, position: offendingSymbol.stopIndex},
        name: offendingSymbol.text,
        message: msg
      }
      this.cqlResult.errors.push(cqlError);
    }
  }
}
