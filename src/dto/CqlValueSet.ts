import CqlVersion from "./CqlVersion";

export default interface CqlValueSet extends CqlVersion {
  url?: string;
  hits: number;
}
