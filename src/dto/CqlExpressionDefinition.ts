import CqlText from "./CqlText";

export default interface CqlExpressionDefinition extends CqlText {
  expression?: string;
  expressionClass?: string;
  hits: number;
  comment?: string;
}
