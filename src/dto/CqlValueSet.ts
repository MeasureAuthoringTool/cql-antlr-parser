import CqlText from "./CqlText";

export default interface CqlValueSet extends CqlText {
  url?: string;
  hits:number;
}
