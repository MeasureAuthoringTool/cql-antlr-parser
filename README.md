# cql-antlr-parser
A CQL ANTLR parser written in TypeScript
**Usage**
```typescript
import {CqlAntlr, CqlResult}  from "cql-antlr-parser";

...

const result: CqlResult = new CqlAntlr(cqlString).parse();`
```

Initial grammar files (cql.g4 & fhirPath.g4) come from https://cql.hl7.org/grammar.html
