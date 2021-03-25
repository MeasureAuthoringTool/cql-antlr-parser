import {CqlText} from "./CqlText";

export interface CqlCode extends CqlText {
    codeId?: string;
    codeSystem?: string;
}
