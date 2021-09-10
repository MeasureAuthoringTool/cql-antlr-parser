import CqlText from "./CqlText";

export default interface CqlError extends CqlText {
  message: string;
}
