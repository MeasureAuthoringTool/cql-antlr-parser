import CqlText from "./CqlText";

export default interface CqlIdentifier extends CqlText {
  hits: number;
}
