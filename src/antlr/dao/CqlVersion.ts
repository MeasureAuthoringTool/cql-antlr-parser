import {CqlText} from "./CqlText";

export interface CqlVersion extends CqlText {
    version?: string;
}
