# cql-antlr-parser
A CQL ANTLR parser written in TypeScript

Used for parsing CQL for the MADiE Application
**Usage**
```typescript
import {CqlAntlr, CqlResult}  from "cql-antlr-parser";

...

const result: CqlResult = new CqlAntlr(cqlString).parse();`
```

