# cql-antlr-parser

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c1f8b37cb67a42a1a2b011915d0e5d9b)](https://app.codacy.com/gh/MeasureAuthoringTool/cql-antlr-parser?utm_source=github.com&utm_medium=referral&utm_content=MeasureAuthoringTool/cql-antlr-parser&utm_campaign=Badge_Grade_Settings)

A CQL ANTLR parser written in TypeScript
**Usage**
```typescript
import {CqlAntlr, CqlResult}  from "cql-antlr-parser";

...

const result: CqlResult = new CqlAntlr(cqlString).parse();`
```
