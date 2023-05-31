import CqlText from "./CqlText";

export default interface CqlRetrieve extends CqlText {
  terminology?: string;
  hits: number;
}
