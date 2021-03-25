import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {cqlVisitor} from "./generated/cqlVisitor";

import {
    IncludeDefinitionContext,
    LibraryContext,
    LibraryDefinitionContext,
    UsingDefinitionContext
} from "./generated/cqlParser";
import {CqlResult} from "./dao/CqlResult";

class CqlAntlrVisitor extends AbstractParseTreeVisitor<CqlResult> implements cqlVisitor<CqlResult> {

    constructor(private result: CqlResult) {
        super();
    }

    defaultResult() {
        return this.result
    }

    visitLibrary(ctx: LibraryContext): CqlResult {
        return super.visitChildren(ctx)
    }

    visitLibraryDefinition(ctx: LibraryDefinitionContext): CqlResult {
        return super.visitChildren(ctx)
    }

    visitUsingDefinition(ctx: UsingDefinitionContext): CqlResult {
        return super.visitChildren(ctx)
    }

    visitIncludeDefinition(ctx: IncludeDefinitionContext): CqlResult {
        return super.visitChildren(ctx)
    }
}

export default CqlAntlrVisitor;