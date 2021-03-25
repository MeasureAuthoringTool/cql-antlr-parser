import CqlText from "./CqlText";

export default interface CqlVersion extends CqlText {
    version?: string;
}
