# cql-antlr-parser
A CQL ANTLR parser written in TypeScript
**Usage**
```typescript
import {CqlAntlr, CqlResult}  from "cql-antlr-parser";

...

const result: CqlResult = new CqlAntlr(cqlString).parse();`
```
