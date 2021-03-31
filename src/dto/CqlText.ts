import LineInfo from "./LineInfo";

export default interface CqlText {
  text?: string;
  name?: string;
  start?: LineInfo;
  stop?: LineInfo;
}
