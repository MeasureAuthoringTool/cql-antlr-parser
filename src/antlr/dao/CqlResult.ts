import {CqlVersion} from "./CqlVersion";
import {CqlInclude} from "./CqlInclude";
import {CqlCodeSystem} from "./CqlCodeSystem";
import {CqlValueSet} from "./CqlValueSet";
import {CqlCode} from "./CqlCode";

export interface CqlResult {
    library?: CqlVersion;
    using?: CqlVersion;
    includes : CqlInclude[];
    codeSystems : CqlCodeSystem[];
    valueSets: CqlValueSet[];
    codes: CqlCode[];
}

