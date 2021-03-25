import {cqlListener} from "./generated/cqlListener";
import {
    CodeDefinitionContext,
    CodesystemDefinitionContext,
    IncludeDefinitionContext,
    LibraryContext,
    LibraryDefinitionContext,
    UsingDefinitionContext,
    ValuesetDefinitionContext
} from "./generated/cqlParser";
import {AntlrUtils} from "./AntlrUtils";
import {cqlLexer} from "./generated/cqlLexer";
import CqlResult from "./dao/CqlResult";
import CqlVersion from "./dao/CqlVersion";
import CqlText from "./dao/CqlText";
import CqlInclude from "./dao/CqlInclude";
import CqlCodeSystem from "./dao/CqlCodeSystem";
import CqlValueSet from "./dao/CqlValueSet";
import CqlCode from "./dao/CqlCode";
import LineInfo from "./dao/LineInfo";
import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import {Token} from "antlr4ts/Token";
import {ParseTree} from "antlr4ts/tree";

class CqlAntlrListener implements cqlListener {
    constructor(private cqlResult: CqlResult) {
    }

    enterLibrary(ctx: LibraryContext): void {
        console.log(`Entering antlr root at line number ${ctx._start.line}`)
    }

    enterLibraryDefinition(ctx: LibraryDefinitionContext) {
        this.cqlResult.library = new CqlVersionCreator(ctx).buildDao();
    }

    enterUsingDefinition(ctx: UsingDefinitionContext): void {
        this.cqlResult.using = new CqlVersionCreator(ctx).buildDao();
    }

    enterIncludeDefinition(ctx: IncludeDefinitionContext): void {
        const cqlInclude: CqlInclude | undefined = new CqlIncludeCreator(ctx).buildDao();

        if (cqlInclude) {
            this.cqlResult.includes.push(cqlInclude);
        }
    }

    enterCodesystemDefinition(ctx: CodesystemDefinitionContext): void {
        const cqlCodeSystem: CqlCodeSystem | undefined = new CqlCodeSystemCreator(ctx).buildDao();

        if (cqlCodeSystem) {
            this.cqlResult.codeSystems.push(cqlCodeSystem);
        }
    }

    enterValuesetDefinition(ctx: ValuesetDefinitionContext): void {
        const cqlValueSet: CqlValueSet | undefined = new CqlValueSystemCreator(ctx).buildDao();

        if (cqlValueSet) {
            this.cqlResult.valueSets.push(cqlValueSet);
        }
    }

    enterCodeDefinition(ctx: CodeDefinitionContext): void {
        const cqlCode: CqlValueSet | undefined = new CqlCodeCreator(ctx).buildDao();

        if (cqlCode) {
            this.cqlResult.codes.push(cqlCode)
        }

    }
}

abstract class CreatorBase<T extends CqlText> {
    protected constructor(protected ctx: ParserRuleContext, protected cqlDao: T) {
    }

    buildDao(): T | undefined {
        this.cqlDao.text = AntlrUtils.findText(this.ctx);
        this.cqlDao.start = this.buildLineInfo(this.ctx.start);
        this.cqlDao.stop = this.buildLineInfo(this.ctx.stop);


        if (typeof this.cqlDao.text === "string") {
            return this.build();
        } else {
            return undefined;
        }
    }

    buildLineInfo(token: Token | undefined): LineInfo | undefined {
        if (!token) {
            return undefined;
        }

        const lineInfo = {} as LineInfo;
        lineInfo.line = token.line;
        lineInfo.position = token.charPositionInLine;

        if (token.charPositionInLine !== 0) {
            lineInfo.position += token.stopIndex - token.startIndex;
        }

        return lineInfo;
    }

    protected findChildText(cqlLexerId: number, occurrence: number = 1): string | undefined {
        return AntlrUtils.findChildText(this.ctx.children, cqlLexerId, occurrence);
    }

    protected abstract build(): T;
}

class CqlVersionCreator extends CreatorBase<CqlVersion> {
    constructor(ctx: ParserRuleContext, cqlVersion?: CqlVersion) {
        super(ctx, !cqlVersion ? {} as CqlVersion : cqlVersion);
    }

    static setNameVersion(children: ParseTree[] | undefined, cqlDao: CqlVersion) {
        cqlDao.name = AntlrUtils.findChildText(children, cqlLexer.IDENTIFIER);
        cqlDao.version = AntlrUtils.findChildText(children, cqlLexer.STRING);
    }

    protected build(): CqlVersion {
        CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);

        return this.cqlDao;
    }
}

class CqlIncludeCreator extends CreatorBase<CqlInclude> {
    constructor(ctx: ParserRuleContext) {
        super(ctx, {} as CqlInclude);
    }

    protected build(): CqlVersion {
        CqlVersionCreator.setNameVersion(this.ctx.children, this.cqlDao);

        this.cqlDao.called = this.findChildText(cqlLexer.IDENTIFIER, 2);
        return this.cqlDao;
    }
}

class CqlCodeSystemCreator extends CreatorBase<CqlCodeSystem> {
    constructor(ctx: ParserRuleContext) {
        super(ctx, {} as CqlCodeSystem);
    }

    protected build(): CqlVersion {
        this.cqlDao.oid = this.findChildText(cqlLexer.STRING);
        this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
        this.cqlDao.version = this.findChildText(cqlLexer.STRING, 2);
        return this.cqlDao;
    }
}

class CqlValueSystemCreator extends CreatorBase<CqlValueSet> {
    constructor(ctx: ParserRuleContext) {
        super(ctx, {} as CqlValueSet);
    }

    protected build(): CqlVersion {
        this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
        this.cqlDao.url = this.findChildText(cqlLexer.STRING);
        return this.cqlDao;
    }
}

class CqlCodeCreator extends CreatorBase<CqlCode> {
    constructor(ctx: ParserRuleContext) {
        super(ctx, {} as CqlValueSet);
    }

    protected build(): CqlVersion {
        this.cqlDao.name = this.findChildText(cqlLexer.QUOTEDIDENTIFIER);
        this.cqlDao.codeId = this.findChildText(cqlLexer.STRING);
        this.cqlDao.codeSystem = this.findChildText(cqlLexer.QUOTEDIDENTIFIER, 2);
        return this.cqlDao;
    }
}

export default CqlAntlrListener;