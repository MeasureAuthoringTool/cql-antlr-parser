import CqlText from "./CqlText";

export default interface CqlParameter extends CqlText {
  type?: string;
  hits:number;
}
