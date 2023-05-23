import CqlVersion from "./CqlVersion";
import CqlInclude from "./CqlInclude";
import CqlCodeSystem from "./CqlCodeSystem";
import CqlValueSet from "./CqlValueSet";
import CqlCode from "./CqlCode";
import CqlParameter from "./CqlParameter";
import CqlContext from "./CqlContext";
import CqlExpressionDefinition from "./CqlExpressionDefinition";
import CqlError from "./CqlError";
import CqlIdentifier from "./CqlIdentifier";
import CqlRetrieve from "./CqlRetrieve";

export default interface CqlResult {
  library?: CqlVersion;
  using?: CqlVersion;
  includes: CqlInclude[];
  codeSystems: CqlCodeSystem[];
  valueSets: CqlValueSet[];
  codes: CqlCode[];
  parameters: CqlParameter[];
  identifiers: CqlIdentifier[];
  context?: CqlContext;
  expressionDefinitions: CqlExpressionDefinition[];
  retrieves: CqlRetrieve[];

  errors: CqlError[];
}

