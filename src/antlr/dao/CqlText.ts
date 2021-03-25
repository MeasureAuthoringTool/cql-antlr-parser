import {LineInfo} from "./LineInfo";

export interface CqlText {
    text?: string;
    name?: string;

    start?: LineInfo;
    stop?: LineInfo;
}