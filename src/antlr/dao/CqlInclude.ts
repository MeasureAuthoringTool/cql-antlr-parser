import {CqlVersion} from "./CqlVersion";

export interface CqlInclude extends CqlVersion {
    called?: string;
}
