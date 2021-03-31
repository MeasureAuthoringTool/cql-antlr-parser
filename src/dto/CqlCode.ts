import CqlText from "./CqlText";

export default interface CqlCode extends CqlText {
  codeId?: string;
  codeSystem?: string;
}
