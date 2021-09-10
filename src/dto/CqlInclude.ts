import CqlVersion from "./CqlVersion";

export default interface CqlInclude extends CqlVersion {
  called?: string;
  hits:number;
}
