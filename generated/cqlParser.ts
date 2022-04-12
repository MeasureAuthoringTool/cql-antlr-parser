// Generated from generated/cql.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { cqlListener } from "./cqlListener";
import { cqlVisitor } from "./cqlVisitor";


export class cqlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly T__106 = 107;
	public static readonly T__107 = 108;
	public static readonly T__108 = 109;
	public static readonly T__109 = 110;
	public static readonly T__110 = 111;
	public static readonly T__111 = 112;
	public static readonly T__112 = 113;
	public static readonly T__113 = 114;
	public static readonly T__114 = 115;
	public static readonly T__115 = 116;
	public static readonly T__116 = 117;
	public static readonly T__117 = 118;
	public static readonly T__118 = 119;
	public static readonly T__119 = 120;
	public static readonly T__120 = 121;
	public static readonly T__121 = 122;
	public static readonly T__122 = 123;
	public static readonly T__123 = 124;
	public static readonly T__124 = 125;
	public static readonly T__125 = 126;
	public static readonly T__126 = 127;
	public static readonly T__127 = 128;
	public static readonly T__128 = 129;
	public static readonly T__129 = 130;
	public static readonly T__130 = 131;
	public static readonly T__131 = 132;
	public static readonly T__132 = 133;
	public static readonly T__133 = 134;
	public static readonly T__134 = 135;
	public static readonly T__135 = 136;
	public static readonly T__136 = 137;
	public static readonly T__137 = 138;
	public static readonly T__138 = 139;
	public static readonly T__139 = 140;
	public static readonly T__140 = 141;
	public static readonly T__141 = 142;
	public static readonly T__142 = 143;
	public static readonly T__143 = 144;
	public static readonly T__144 = 145;
	public static readonly T__145 = 146;
	public static readonly T__146 = 147;
	public static readonly T__147 = 148;
	public static readonly T__148 = 149;
	public static readonly T__149 = 150;
	public static readonly T__150 = 151;
	public static readonly T__151 = 152;
	public static readonly T__152 = 153;
	public static readonly T__153 = 154;
	public static readonly T__154 = 155;
	public static readonly T__155 = 156;
	public static readonly T__156 = 157;
	public static readonly QUOTEDIDENTIFIER = 158;
	public static readonly DATETIME = 159;
	public static readonly LONGNUMBER = 160;
	public static readonly DATE = 161;
	public static readonly TIME = 162;
	public static readonly IDENTIFIER = 163;
	public static readonly DELIMITEDIDENTIFIER = 164;
	public static readonly STRING = 165;
	public static readonly NUMBER = 166;
	public static readonly WS = 167;
	public static readonly COMMENT = 168;
	public static readonly LINE_COMMENT = 169;
	public static readonly RULE_definition = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryDefinition = 2;
	public static readonly RULE_usingDefinition = 3;
	public static readonly RULE_includeDefinition = 4;
	public static readonly RULE_localIdentifier = 5;
	public static readonly RULE_accessModifier = 6;
	public static readonly RULE_parameterDefinition = 7;
	public static readonly RULE_codesystemDefinition = 8;
	public static readonly RULE_valuesetDefinition = 9;
	public static readonly RULE_codesystems = 10;
	public static readonly RULE_codesystemIdentifier = 11;
	public static readonly RULE_libraryIdentifier = 12;
	public static readonly RULE_codeDefinition = 13;
	public static readonly RULE_conceptDefinition = 14;
	public static readonly RULE_codeIdentifier = 15;
	public static readonly RULE_codesystemId = 16;
	public static readonly RULE_valuesetId = 17;
	public static readonly RULE_versionSpecifier = 18;
	public static readonly RULE_codeId = 19;
	public static readonly RULE_typeSpecifier = 20;
	public static readonly RULE_namedTypeSpecifier = 21;
	public static readonly RULE_modelIdentifier = 22;
	public static readonly RULE_listTypeSpecifier = 23;
	public static readonly RULE_intervalTypeSpecifier = 24;
	public static readonly RULE_tupleTypeSpecifier = 25;
	public static readonly RULE_tupleElementDefinition = 26;
	public static readonly RULE_choiceTypeSpecifier = 27;
	public static readonly RULE_statement = 28;
	public static readonly RULE_expressionDefinition = 29;
	public static readonly RULE_contextDefinition = 30;
	public static readonly RULE_fluentModifier = 31;
	public static readonly RULE_functionDefinition = 32;
	public static readonly RULE_operandDefinition = 33;
	public static readonly RULE_functionBody = 34;
	public static readonly RULE_querySource = 35;
	public static readonly RULE_aliasedQuerySource = 36;
	public static readonly RULE_alias = 37;
	public static readonly RULE_queryInclusionClause = 38;
	public static readonly RULE_withClause = 39;
	public static readonly RULE_withoutClause = 40;
	public static readonly RULE_retrieve = 41;
	public static readonly RULE_contextIdentifier = 42;
	public static readonly RULE_codePath = 43;
	public static readonly RULE_codeComparator = 44;
	public static readonly RULE_terminology = 45;
	public static readonly RULE_qualifier = 46;
	public static readonly RULE_query = 47;
	public static readonly RULE_sourceClause = 48;
	public static readonly RULE_letClause = 49;
	public static readonly RULE_letClauseItem = 50;
	public static readonly RULE_whereClause = 51;
	public static readonly RULE_returnClause = 52;
	public static readonly RULE_aggregateClause = 53;
	public static readonly RULE_startingClause = 54;
	public static readonly RULE_sortClause = 55;
	public static readonly RULE_sortDirection = 56;
	public static readonly RULE_sortByItem = 57;
	public static readonly RULE_qualifiedIdentifier = 58;
	public static readonly RULE_qualifiedIdentifierExpression = 59;
	public static readonly RULE_qualifierExpression = 60;
	public static readonly RULE_simplePath = 61;
	public static readonly RULE_simpleLiteral = 62;
	public static readonly RULE_expression = 63;
	public static readonly RULE_dateTimePrecision = 64;
	public static readonly RULE_dateTimeComponent = 65;
	public static readonly RULE_pluralDateTimePrecision = 66;
	public static readonly RULE_expressionTerm = 67;
	public static readonly RULE_caseExpressionItem = 68;
	public static readonly RULE_dateTimePrecisionSpecifier = 69;
	public static readonly RULE_relativeQualifier = 70;
	public static readonly RULE_offsetRelativeQualifier = 71;
	public static readonly RULE_exclusiveRelativeQualifier = 72;
	public static readonly RULE_quantityOffset = 73;
	public static readonly RULE_temporalRelationship = 74;
	public static readonly RULE_intervalOperatorPhrase = 75;
	public static readonly RULE_term = 76;
	public static readonly RULE_qualifiedInvocation = 77;
	public static readonly RULE_qualifiedFunction = 78;
	public static readonly RULE_invocation = 79;
	public static readonly RULE_function = 80;
	public static readonly RULE_ratio = 81;
	public static readonly RULE_literal = 82;
	public static readonly RULE_intervalSelector = 83;
	public static readonly RULE_tupleSelector = 84;
	public static readonly RULE_tupleElementSelector = 85;
	public static readonly RULE_instanceSelector = 86;
	public static readonly RULE_instanceElementSelector = 87;
	public static readonly RULE_listSelector = 88;
	public static readonly RULE_displayClause = 89;
	public static readonly RULE_codeSelector = 90;
	public static readonly RULE_conceptSelector = 91;
	public static readonly RULE_keyword = 92;
	public static readonly RULE_reservedWord = 93;
	public static readonly RULE_keywordIdentifier = 94;
	public static readonly RULE_obsoleteIdentifier = 95;
	public static readonly RULE_functionIdentifier = 96;
	public static readonly RULE_typeNameIdentifier = 97;
	public static readonly RULE_referentialIdentifier = 98;
	public static readonly RULE_referentialOrTypeNameIdentifier = 99;
	public static readonly RULE_identifierOrFunctionIdentifier = 100;
	public static readonly RULE_identifier = 101;
	public static readonly RULE_externalConstant = 102;
	public static readonly RULE_paramList = 103;
	public static readonly RULE_quantity = 104;
	public static readonly RULE_unit = 105;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"definition", "library", "libraryDefinition", "usingDefinition", "includeDefinition", 
		"localIdentifier", "accessModifier", "parameterDefinition", "codesystemDefinition", 
		"valuesetDefinition", "codesystems", "codesystemIdentifier", "libraryIdentifier", 
		"codeDefinition", "conceptDefinition", "codeIdentifier", "codesystemId", 
		"valuesetId", "versionSpecifier", "codeId", "typeSpecifier", "namedTypeSpecifier", 
		"modelIdentifier", "listTypeSpecifier", "intervalTypeSpecifier", "tupleTypeSpecifier", 
		"tupleElementDefinition", "choiceTypeSpecifier", "statement", "expressionDefinition", 
		"contextDefinition", "fluentModifier", "functionDefinition", "operandDefinition", 
		"functionBody", "querySource", "aliasedQuerySource", "alias", "queryInclusionClause", 
		"withClause", "withoutClause", "retrieve", "contextIdentifier", "codePath", 
		"codeComparator", "terminology", "qualifier", "query", "sourceClause", 
		"letClause", "letClauseItem", "whereClause", "returnClause", "aggregateClause", 
		"startingClause", "sortClause", "sortDirection", "sortByItem", "qualifiedIdentifier", 
		"qualifiedIdentifierExpression", "qualifierExpression", "simplePath", 
		"simpleLiteral", "expression", "dateTimePrecision", "dateTimeComponent", 
		"pluralDateTimePrecision", "expressionTerm", "caseExpressionItem", "dateTimePrecisionSpecifier", 
		"relativeQualifier", "offsetRelativeQualifier", "exclusiveRelativeQualifier", 
		"quantityOffset", "temporalRelationship", "intervalOperatorPhrase", "term", 
		"qualifiedInvocation", "qualifiedFunction", "invocation", "function", 
		"ratio", "literal", "intervalSelector", "tupleSelector", "tupleElementSelector", 
		"instanceSelector", "instanceElementSelector", "listSelector", "displayClause", 
		"codeSelector", "conceptSelector", "keyword", "reservedWord", "keywordIdentifier", 
		"obsoleteIdentifier", "functionIdentifier", "typeNameIdentifier", "referentialIdentifier", 
		"referentialOrTypeNameIdentifier", "identifierOrFunctionIdentifier", "identifier", 
		"externalConstant", "paramList", "quantity", "unit",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'library'", "'version'", "'using'", "'called'", "'include'", 
		"'public'", "'private'", "'parameter'", "'default'", "'codesystem'", "':'", 
		"'valueset'", "'codesystems'", "'{'", "','", "'}'", "'.'", "'code'", "'from'", 
		"'concept'", "'List'", "'<'", "'>'", "'Interval'", "'Tuple'", "'Choice'", 
		"'define'", "'context'", "'fluent'", "'function'", "'('", "')'", "'returns'", 
		"'external'", "'with'", "'such that'", "'without'", "'['", "'->'", "']'", 
		"'in'", "'='", "'~'", "'let'", "'where'", "'return'", "'all'", "'distinct'", 
		"'aggregate'", "'starting'", "'sort'", "'by'", "'asc'", "'ascending'", 
		"'desc'", "'descending'", "'is'", "'not'", "'null'", "'true'", "'false'", 
		"'as'", "'cast'", "'exists'", "'properly'", "'between'", "'and'", "'duration'", 
		"'difference'", "'<='", "'>='", "'!='", "'!~'", "'contains'", "'or'", 
		"'xor'", "'implies'", "'|'", "'union'", "'intersect'", "'except'", "'year'", 
		"'month'", "'week'", "'day'", "'hour'", "'minute'", "'second'", "'millisecond'", 
		"'date'", "'time'", "'timezone'", "'timezoneoffset'", "'years'", "'months'", 
		"'weeks'", "'days'", "'hours'", "'minutes'", "'seconds'", "'milliseconds'", 
		"'convert'", "'to'", "'+'", "'-'", "'start'", "'end'", "'of'", "'width'", 
		"'successor'", "'predecessor'", "'singleton'", "'point'", "'minimum'", 
		"'maximum'", "'^'", "'*'", "'/'", "'div'", "'mod'", "'&'", "'if'", "'then'", 
		"'else'", "'case'", "'flatten'", "'expand'", "'collapse'", "'per'", "'when'", 
		"'or before'", "'or after'", "'or more'", "'or less'", "'less than'", 
		"'more than'", "'on or'", "'before'", "'after'", "'or on'", "'starts'", 
		"'ends'", "'occurs'", "'same'", "'includes'", "'during'", "'included in'", 
		"'within'", "'meets'", "'overlaps'", "'$this'", "'$index'", "'$total'", 
		"'display'", "'Code'", "'Concept'", "'%'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "QUOTEDIDENTIFIER", "DATETIME", 
		"LONGNUMBER", "DATE", "TIME", "IDENTIFIER", "DELIMITEDIDENTIFIER", "STRING", 
		"NUMBER", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(cqlParser._LITERAL_NAMES, cqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return cqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "cql.g4"; }

	// @Override
	public get ruleNames(): string[] { return cqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return cqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(cqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, cqlParser.RULE_definition);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 212;
				this.usingDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 213;
				this.includeDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 214;
				this.codesystemDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 215;
				this.valuesetDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 216;
				this.codeDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 217;
				this.conceptDefinition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 218;
				this.parameterDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public library(): LibraryContext {
		let _localctx: LibraryContext = new LibraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, cqlParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__0) {
				{
				this.state = 221;
				this.libraryDefinition();
				}
			}

			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__2) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19))) !== 0)) {
				{
				{
				this.state = 224;
				this.definition();
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__26 || _la === cqlParser.T__27) {
				{
				{
				this.state = 230;
				this.statement();
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 236;
			this.match(cqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryDefinition(): LibraryDefinitionContext {
		let _localctx: LibraryDefinitionContext = new LibraryDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, cqlParser.RULE_libraryDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(cqlParser.T__0);
			this.state = 239;
			this.qualifiedIdentifier();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 240;
				this.match(cqlParser.T__1);
				this.state = 241;
				this.versionSpecifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingDefinition(): UsingDefinitionContext {
		let _localctx: UsingDefinitionContext = new UsingDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, cqlParser.RULE_usingDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(cqlParser.T__2);
			this.state = 245;
			this.qualifiedIdentifier();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 246;
				this.match(cqlParser.T__1);
				this.state = 247;
				this.versionSpecifier();
				}
			}

			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__3) {
				{
				this.state = 250;
				this.match(cqlParser.T__3);
				this.state = 251;
				this.localIdentifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public includeDefinition(): IncludeDefinitionContext {
		let _localctx: IncludeDefinitionContext = new IncludeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, cqlParser.RULE_includeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(cqlParser.T__4);
			this.state = 255;
			this.qualifiedIdentifier();
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 256;
				this.match(cqlParser.T__1);
				this.state = 257;
				this.versionSpecifier();
				}
			}

			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__3) {
				{
				this.state = 260;
				this.match(cqlParser.T__3);
				this.state = 261;
				this.localIdentifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localIdentifier(): LocalIdentifierContext {
		let _localctx: LocalIdentifierContext = new LocalIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, cqlParser.RULE_localIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accessModifier(): AccessModifierContext {
		let _localctx: AccessModifierContext = new AccessModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, cqlParser.RULE_accessModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__5 || _la === cqlParser.T__6)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDefinition(): ParameterDefinitionContext {
		let _localctx: ParameterDefinitionContext = new ParameterDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, cqlParser.RULE_parameterDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 268;
				this.accessModifier();
				}
			}

			this.state = 271;
			this.match(cqlParser.T__7);
			this.state = 272;
			this.identifier();
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 273;
				this.typeSpecifier();
				}
				break;
			}
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__8) {
				{
				this.state = 276;
				this.match(cqlParser.T__8);
				this.state = 277;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codesystemDefinition(): CodesystemDefinitionContext {
		let _localctx: CodesystemDefinitionContext = new CodesystemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, cqlParser.RULE_codesystemDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 280;
				this.accessModifier();
				}
			}

			this.state = 283;
			this.match(cqlParser.T__9);
			this.state = 284;
			this.identifier();
			this.state = 285;
			this.match(cqlParser.T__10);
			this.state = 286;
			this.codesystemId();
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 287;
				this.match(cqlParser.T__1);
				this.state = 288;
				this.versionSpecifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesetDefinition(): ValuesetDefinitionContext {
		let _localctx: ValuesetDefinitionContext = new ValuesetDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, cqlParser.RULE_valuesetDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 291;
				this.accessModifier();
				}
			}

			this.state = 294;
			this.match(cqlParser.T__11);
			this.state = 295;
			this.identifier();
			this.state = 296;
			this.match(cqlParser.T__10);
			this.state = 297;
			this.valuesetId();
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 298;
				this.match(cqlParser.T__1);
				this.state = 299;
				this.versionSpecifier();
				}
			}

			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__12) {
				{
				this.state = 302;
				this.codesystems();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codesystems(): CodesystemsContext {
		let _localctx: CodesystemsContext = new CodesystemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, cqlParser.RULE_codesystems);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(cqlParser.T__12);
			this.state = 306;
			this.match(cqlParser.T__13);
			this.state = 307;
			this.codesystemIdentifier();
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 308;
				this.match(cqlParser.T__14);
				this.state = 309;
				this.codesystemIdentifier();
				}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 315;
			this.match(cqlParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codesystemIdentifier(): CodesystemIdentifierContext {
		let _localctx: CodesystemIdentifierContext = new CodesystemIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, cqlParser.RULE_codesystemIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 317;
				this.libraryIdentifier();
				this.state = 318;
				this.match(cqlParser.T__16);
				}
				break;
			}
			this.state = 322;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryIdentifier(): LibraryIdentifierContext {
		let _localctx: LibraryIdentifierContext = new LibraryIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, cqlParser.RULE_libraryIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeDefinition(): CodeDefinitionContext {
		let _localctx: CodeDefinitionContext = new CodeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, cqlParser.RULE_codeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 326;
				this.accessModifier();
				}
			}

			this.state = 329;
			this.match(cqlParser.T__17);
			this.state = 330;
			this.identifier();
			this.state = 331;
			this.match(cqlParser.T__10);
			this.state = 332;
			this.codeId();
			this.state = 333;
			this.match(cqlParser.T__18);
			this.state = 334;
			this.codesystemIdentifier();
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__153) {
				{
				this.state = 335;
				this.displayClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conceptDefinition(): ConceptDefinitionContext {
		let _localctx: ConceptDefinitionContext = new ConceptDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, cqlParser.RULE_conceptDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 338;
				this.accessModifier();
				}
			}

			this.state = 341;
			this.match(cqlParser.T__19);
			this.state = 342;
			this.identifier();
			this.state = 343;
			this.match(cqlParser.T__10);
			this.state = 344;
			this.match(cqlParser.T__13);
			this.state = 345;
			this.codeIdentifier();
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 346;
				this.match(cqlParser.T__14);
				this.state = 347;
				this.codeIdentifier();
				}
				}
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 353;
			this.match(cqlParser.T__15);
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__153) {
				{
				this.state = 354;
				this.displayClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeIdentifier(): CodeIdentifierContext {
		let _localctx: CodeIdentifierContext = new CodeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, cqlParser.RULE_codeIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 357;
				this.libraryIdentifier();
				this.state = 358;
				this.match(cqlParser.T__16);
				}
				break;
			}
			this.state = 362;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codesystemId(): CodesystemIdContext {
		let _localctx: CodesystemIdContext = new CodesystemIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, cqlParser.RULE_codesystemId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(cqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesetId(): ValuesetIdContext {
		let _localctx: ValuesetIdContext = new ValuesetIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, cqlParser.RULE_valuesetId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(cqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionSpecifier(): VersionSpecifierContext {
		let _localctx: VersionSpecifierContext = new VersionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, cqlParser.RULE_versionSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(cqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeId(): CodeIdContext {
		let _localctx: CodeIdContext = new CodeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, cqlParser.RULE_codeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(cqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, cqlParser.RULE_typeSpecifier);
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__0:
			case cqlParser.T__1:
			case cqlParser.T__2:
			case cqlParser.T__3:
			case cqlParser.T__4:
			case cqlParser.T__5:
			case cqlParser.T__6:
			case cqlParser.T__7:
			case cqlParser.T__8:
			case cqlParser.T__9:
			case cqlParser.T__11:
			case cqlParser.T__12:
			case cqlParser.T__17:
			case cqlParser.T__19:
			case cqlParser.T__26:
			case cqlParser.T__27:
			case cqlParser.T__28:
			case cqlParser.T__29:
			case cqlParser.T__44:
			case cqlParser.T__49:
			case cqlParser.T__51:
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__89:
			case cqlParser.T__90:
			case cqlParser.T__91:
			case cqlParser.T__92:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__108:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__118:
			case cqlParser.T__119:
			case cqlParser.T__130:
			case cqlParser.T__131:
			case cqlParser.T__132:
			case cqlParser.T__133:
			case cqlParser.T__140:
			case cqlParser.T__141:
			case cqlParser.T__144:
			case cqlParser.T__148:
			case cqlParser.T__149:
			case cqlParser.T__153:
			case cqlParser.T__154:
			case cqlParser.T__155:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 372;
				this.namedTypeSpecifier();
				}
				break;
			case cqlParser.T__20:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 373;
				this.listTypeSpecifier();
				}
				break;
			case cqlParser.T__23:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 374;
				this.intervalTypeSpecifier();
				}
				break;
			case cqlParser.T__24:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 375;
				this.tupleTypeSpecifier();
				}
				break;
			case cqlParser.T__25:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 376;
				this.choiceTypeSpecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedTypeSpecifier(): NamedTypeSpecifierContext {
		let _localctx: NamedTypeSpecifierContext = new NamedTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, cqlParser.RULE_namedTypeSpecifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 379;
					this.qualifier();
					this.state = 380;
					this.match(cqlParser.T__16);
					}
					}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 387;
			this.referentialOrTypeNameIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modelIdentifier(): ModelIdentifierContext {
		let _localctx: ModelIdentifierContext = new ModelIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, cqlParser.RULE_modelIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listTypeSpecifier(): ListTypeSpecifierContext {
		let _localctx: ListTypeSpecifierContext = new ListTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, cqlParser.RULE_listTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.match(cqlParser.T__20);
			this.state = 392;
			this.match(cqlParser.T__21);
			this.state = 393;
			this.typeSpecifier();
			this.state = 394;
			this.match(cqlParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalTypeSpecifier(): IntervalTypeSpecifierContext {
		let _localctx: IntervalTypeSpecifierContext = new IntervalTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, cqlParser.RULE_intervalTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(cqlParser.T__23);
			this.state = 397;
			this.match(cqlParser.T__21);
			this.state = 398;
			this.typeSpecifier();
			this.state = 399;
			this.match(cqlParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleTypeSpecifier(): TupleTypeSpecifierContext {
		let _localctx: TupleTypeSpecifierContext = new TupleTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, cqlParser.RULE_tupleTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(cqlParser.T__24);
			this.state = 402;
			this.match(cqlParser.T__13);
			this.state = 403;
			this.tupleElementDefinition();
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 404;
				this.match(cqlParser.T__14);
				this.state = 405;
				this.tupleElementDefinition();
				}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 411;
			this.match(cqlParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleElementDefinition(): TupleElementDefinitionContext {
		let _localctx: TupleElementDefinitionContext = new TupleElementDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, cqlParser.RULE_tupleElementDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.referentialIdentifier();
			this.state = 414;
			this.typeSpecifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choiceTypeSpecifier(): ChoiceTypeSpecifierContext {
		let _localctx: ChoiceTypeSpecifierContext = new ChoiceTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, cqlParser.RULE_choiceTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(cqlParser.T__25);
			this.state = 417;
			this.match(cqlParser.T__21);
			this.state = 418;
			this.typeSpecifier();
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 419;
				this.match(cqlParser.T__14);
				this.state = 420;
				this.typeSpecifier();
				}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 426;
			this.match(cqlParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, cqlParser.RULE_statement);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.expressionDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
				this.contextDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 430;
				this.functionDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionDefinition(): ExpressionDefinitionContext {
		let _localctx: ExpressionDefinitionContext = new ExpressionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, cqlParser.RULE_expressionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(cqlParser.T__26);
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 434;
				this.accessModifier();
				}
			}

			this.state = 437;
			this.identifier();
			this.state = 438;
			this.match(cqlParser.T__10);
			this.state = 439;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contextDefinition(): ContextDefinitionContext {
		let _localctx: ContextDefinitionContext = new ContextDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, cqlParser.RULE_contextDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(cqlParser.T__27);
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 442;
				this.modelIdentifier();
				this.state = 443;
				this.match(cqlParser.T__16);
				}
				break;
			}
			this.state = 447;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fluentModifier(): FluentModifierContext {
		let _localctx: FluentModifierContext = new FluentModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, cqlParser.RULE_fluentModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(cqlParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, cqlParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(cqlParser.T__26);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 452;
				this.accessModifier();
				}
			}

			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__28) {
				{
				this.state = 455;
				this.fluentModifier();
				}
			}

			this.state = 458;
			this.match(cqlParser.T__29);
			this.state = 459;
			this.identifierOrFunctionIdentifier();
			this.state = 460;
			this.match(cqlParser.T__30);
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (cqlParser.T__44 - 45)) | (1 << (cqlParser.T__49 - 45)) | (1 << (cqlParser.T__51 - 45)) | (1 << (cqlParser.T__52 - 45)) | (1 << (cqlParser.T__53 - 45)) | (1 << (cqlParser.T__54 - 45)) | (1 << (cqlParser.T__55 - 45)) | (1 << (cqlParser.T__73 - 45)) | (1 << (cqlParser.T__75 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (cqlParser.T__76 - 77)) | (1 << (cqlParser.T__78 - 77)) | (1 << (cqlParser.T__79 - 77)) | (1 << (cqlParser.T__80 - 77)) | (1 << (cqlParser.T__89 - 77)) | (1 << (cqlParser.T__90 - 77)) | (1 << (cqlParser.T__91 - 77)) | (1 << (cqlParser.T__92 - 77)) | (1 << (cqlParser.T__105 - 77)) | (1 << (cqlParser.T__106 - 77)))) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (cqlParser.T__108 - 109)) | (1 << (cqlParser.T__109 - 109)) | (1 << (cqlParser.T__110 - 109)) | (1 << (cqlParser.T__118 - 109)) | (1 << (cqlParser.T__119 - 109)) | (1 << (cqlParser.T__130 - 109)) | (1 << (cqlParser.T__131 - 109)) | (1 << (cqlParser.T__132 - 109)) | (1 << (cqlParser.T__133 - 109)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__144 - 141)) | (1 << (cqlParser.T__148 - 141)) | (1 << (cqlParser.T__149 - 141)) | (1 << (cqlParser.T__153 - 141)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 141)) | (1 << (cqlParser.IDENTIFIER - 141)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 141)))) !== 0)) {
				{
				this.state = 461;
				this.operandDefinition();
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === cqlParser.T__14) {
					{
					{
					this.state = 462;
					this.match(cqlParser.T__14);
					this.state = 463;
					this.operandDefinition();
					}
					}
					this.state = 468;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 471;
			this.match(cqlParser.T__31);
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__32) {
				{
				this.state = 472;
				this.match(cqlParser.T__32);
				this.state = 473;
				this.typeSpecifier();
				}
			}

			this.state = 476;
			this.match(cqlParser.T__10);
			this.state = 479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__0:
			case cqlParser.T__1:
			case cqlParser.T__2:
			case cqlParser.T__3:
			case cqlParser.T__4:
			case cqlParser.T__5:
			case cqlParser.T__6:
			case cqlParser.T__7:
			case cqlParser.T__8:
			case cqlParser.T__9:
			case cqlParser.T__11:
			case cqlParser.T__12:
			case cqlParser.T__13:
			case cqlParser.T__17:
			case cqlParser.T__18:
			case cqlParser.T__19:
			case cqlParser.T__20:
			case cqlParser.T__23:
			case cqlParser.T__24:
			case cqlParser.T__26:
			case cqlParser.T__27:
			case cqlParser.T__28:
			case cqlParser.T__29:
			case cqlParser.T__30:
			case cqlParser.T__37:
			case cqlParser.T__44:
			case cqlParser.T__47:
			case cqlParser.T__49:
			case cqlParser.T__51:
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
			case cqlParser.T__57:
			case cqlParser.T__58:
			case cqlParser.T__59:
			case cqlParser.T__60:
			case cqlParser.T__62:
			case cqlParser.T__63:
			case cqlParser.T__67:
			case cqlParser.T__68:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__81:
			case cqlParser.T__82:
			case cqlParser.T__83:
			case cqlParser.T__84:
			case cqlParser.T__85:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
			case cqlParser.T__89:
			case cqlParser.T__90:
			case cqlParser.T__91:
			case cqlParser.T__92:
			case cqlParser.T__93:
			case cqlParser.T__94:
			case cqlParser.T__95:
			case cqlParser.T__96:
			case cqlParser.T__97:
			case cqlParser.T__98:
			case cqlParser.T__99:
			case cqlParser.T__100:
			case cqlParser.T__101:
			case cqlParser.T__103:
			case cqlParser.T__104:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__108:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__111:
			case cqlParser.T__112:
			case cqlParser.T__113:
			case cqlParser.T__114:
			case cqlParser.T__118:
			case cqlParser.T__119:
			case cqlParser.T__121:
			case cqlParser.T__124:
			case cqlParser.T__125:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__130:
			case cqlParser.T__131:
			case cqlParser.T__132:
			case cqlParser.T__133:
			case cqlParser.T__140:
			case cqlParser.T__141:
			case cqlParser.T__144:
			case cqlParser.T__148:
			case cqlParser.T__149:
			case cqlParser.T__150:
			case cqlParser.T__151:
			case cqlParser.T__152:
			case cqlParser.T__153:
			case cqlParser.T__154:
			case cqlParser.T__155:
			case cqlParser.T__156:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.DATETIME:
			case cqlParser.LONGNUMBER:
			case cqlParser.DATE:
			case cqlParser.TIME:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
			case cqlParser.STRING:
			case cqlParser.NUMBER:
				{
				this.state = 477;
				this.functionBody();
				}
				break;
			case cqlParser.T__33:
				{
				this.state = 478;
				this.match(cqlParser.T__33);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operandDefinition(): OperandDefinitionContext {
		let _localctx: OperandDefinitionContext = new OperandDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, cqlParser.RULE_operandDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.referentialIdentifier();
			this.state = 482;
			this.typeSpecifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, cqlParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public querySource(): QuerySourceContext {
		let _localctx: QuerySourceContext = new QuerySourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, cqlParser.RULE_querySource);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__37:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 486;
				this.retrieve();
				}
				break;
			case cqlParser.T__0:
			case cqlParser.T__1:
			case cqlParser.T__2:
			case cqlParser.T__3:
			case cqlParser.T__4:
			case cqlParser.T__5:
			case cqlParser.T__6:
			case cqlParser.T__7:
			case cqlParser.T__8:
			case cqlParser.T__9:
			case cqlParser.T__11:
			case cqlParser.T__12:
			case cqlParser.T__17:
			case cqlParser.T__19:
			case cqlParser.T__26:
			case cqlParser.T__27:
			case cqlParser.T__28:
			case cqlParser.T__29:
			case cqlParser.T__44:
			case cqlParser.T__49:
			case cqlParser.T__51:
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__89:
			case cqlParser.T__90:
			case cqlParser.T__91:
			case cqlParser.T__92:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__108:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__118:
			case cqlParser.T__119:
			case cqlParser.T__130:
			case cqlParser.T__131:
			case cqlParser.T__132:
			case cqlParser.T__133:
			case cqlParser.T__140:
			case cqlParser.T__141:
			case cqlParser.T__144:
			case cqlParser.T__148:
			case cqlParser.T__149:
			case cqlParser.T__153:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 487;
				this.qualifiedIdentifierExpression();
				}
				break;
			case cqlParser.T__30:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 488;
				this.match(cqlParser.T__30);
				this.state = 489;
				this.expression(0);
				this.state = 490;
				this.match(cqlParser.T__31);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasedQuerySource(): AliasedQuerySourceContext {
		let _localctx: AliasedQuerySourceContext = new AliasedQuerySourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, cqlParser.RULE_aliasedQuerySource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.querySource();
			this.state = 495;
			this.alias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, cqlParser.RULE_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryInclusionClause(): QueryInclusionClauseContext {
		let _localctx: QueryInclusionClauseContext = new QueryInclusionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, cqlParser.RULE_queryInclusionClause);
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__34:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 499;
				this.withClause();
				}
				break;
			case cqlParser.T__36:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 500;
				this.withoutClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let _localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, cqlParser.RULE_withClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(cqlParser.T__34);
			this.state = 504;
			this.aliasedQuerySource();
			this.state = 505;
			this.match(cqlParser.T__35);
			this.state = 506;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withoutClause(): WithoutClauseContext {
		let _localctx: WithoutClauseContext = new WithoutClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, cqlParser.RULE_withoutClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(cqlParser.T__36);
			this.state = 509;
			this.aliasedQuerySource();
			this.state = 510;
			this.match(cqlParser.T__35);
			this.state = 511;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retrieve(): RetrieveContext {
		let _localctx: RetrieveContext = new RetrieveContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, cqlParser.RULE_retrieve);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(cqlParser.T__37);
			this.state = 517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 514;
				this.contextIdentifier();
				this.state = 515;
				this.match(cqlParser.T__38);
				}
				break;
			}
			this.state = 519;
			this.namedTypeSpecifier();
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__10) {
				{
				this.state = 520;
				this.match(cqlParser.T__10);
				this.state = 524;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 521;
					this.codePath();
					this.state = 522;
					this.codeComparator();
					}
					break;
				}
				this.state = 526;
				this.terminology();
				}
			}

			this.state = 529;
			this.match(cqlParser.T__39);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contextIdentifier(): ContextIdentifierContext {
		let _localctx: ContextIdentifierContext = new ContextIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, cqlParser.RULE_contextIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.qualifiedIdentifierExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codePath(): CodePathContext {
		let _localctx: CodePathContext = new CodePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, cqlParser.RULE_codePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.simplePath(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeComparator(): CodeComparatorContext {
		let _localctx: CodeComparatorContext = new CodeComparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, cqlParser.RULE_codeComparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (cqlParser.T__40 - 41)) | (1 << (cqlParser.T__41 - 41)) | (1 << (cqlParser.T__42 - 41)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public terminology(): TerminologyContext {
		let _localctx: TerminologyContext = new TerminologyContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, cqlParser.RULE_terminology);
		try {
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 537;
				this.qualifiedIdentifierExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 538;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifier(): QualifierContext {
		let _localctx: QualifierContext = new QualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, cqlParser.RULE_qualifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, cqlParser.RULE_query);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.sourceClause();
			this.state = 545;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 544;
				this.letClause();
				}
				break;
			}
			this.state = 550;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 547;
					this.queryInclusionClause();
					}
					}
				}
				this.state = 552;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 553;
				this.whereClause();
				}
				break;
			}
			this.state = 558;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 556;
				this.aggregateClause();
				}
				break;

			case 2:
				{
				this.state = 557;
				this.returnClause();
				}
				break;
			}
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 560;
				this.sortClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceClause(): SourceClauseContext {
		let _localctx: SourceClauseContext = new SourceClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, cqlParser.RULE_sourceClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__18) {
				{
				this.state = 563;
				this.match(cqlParser.T__18);
				}
			}

			this.state = 566;
			this.aliasedQuerySource();
			this.state = 571;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 567;
					this.match(cqlParser.T__14);
					this.state = 568;
					this.aliasedQuerySource();
					}
					}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letClause(): LetClauseContext {
		let _localctx: LetClauseContext = new LetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, cqlParser.RULE_letClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(cqlParser.T__43);
			this.state = 575;
			this.letClauseItem();
			this.state = 580;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 576;
					this.match(cqlParser.T__14);
					this.state = 577;
					this.letClauseItem();
					}
					}
				}
				this.state = 582;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letClauseItem(): LetClauseItemContext {
		let _localctx: LetClauseItemContext = new LetClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, cqlParser.RULE_letClauseItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this.identifier();
			this.state = 584;
			this.match(cqlParser.T__10);
			this.state = 585;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, cqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.match(cqlParser.T__44);
			this.state = 588;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnClause(): ReturnClauseContext {
		let _localctx: ReturnClauseContext = new ReturnClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, cqlParser.RULE_returnClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.match(cqlParser.T__45);
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 591;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__46 || _la === cqlParser.T__47)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 594;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregateClause(): AggregateClauseContext {
		let _localctx: AggregateClauseContext = new AggregateClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, cqlParser.RULE_aggregateClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this.match(cqlParser.T__48);
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__46 || _la === cqlParser.T__47) {
				{
				this.state = 597;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__46 || _la === cqlParser.T__47)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 600;
			this.identifier();
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__49) {
				{
				this.state = 601;
				this.startingClause();
				}
			}

			this.state = 604;
			this.match(cqlParser.T__10);
			this.state = 605;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public startingClause(): StartingClauseContext {
		let _localctx: StartingClauseContext = new StartingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, cqlParser.RULE_startingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.match(cqlParser.T__49);
			this.state = 614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 608;
				this.simpleLiteral();
				}
				break;

			case 2:
				{
				this.state = 609;
				this.quantity();
				}
				break;

			case 3:
				{
				{
				this.state = 610;
				this.match(cqlParser.T__30);
				this.state = 611;
				this.expression(0);
				this.state = 612;
				this.match(cqlParser.T__31);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortClause(): SortClauseContext {
		let _localctx: SortClauseContext = new SortClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, cqlParser.RULE_sortClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.match(cqlParser.T__50);
			this.state = 627;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
				{
				this.state = 617;
				this.sortDirection();
				}
				break;
			case cqlParser.T__51:
				{
				{
				this.state = 618;
				this.match(cqlParser.T__51);
				this.state = 619;
				this.sortByItem();
				this.state = 624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 620;
						this.match(cqlParser.T__14);
						this.state = 621;
						this.sortByItem();
						}
						}
					}
					this.state = 626;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortDirection(): SortDirectionContext {
		let _localctx: SortDirectionContext = new SortDirectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, cqlParser.RULE_sortDirection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			_la = this._input.LA(1);
			if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (cqlParser.T__52 - 53)) | (1 << (cqlParser.T__53 - 53)) | (1 << (cqlParser.T__54 - 53)) | (1 << (cqlParser.T__55 - 53)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortByItem(): SortByItemContext {
		let _localctx: SortByItemContext = new SortByItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, cqlParser.RULE_sortByItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.expressionTerm(0);
			this.state = 633;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 632;
				this.sortDirection();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		let _localctx: QualifiedIdentifierContext = new QualifiedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, cqlParser.RULE_qualifiedIdentifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 635;
					this.qualifier();
					this.state = 636;
					this.match(cqlParser.T__16);
					}
					}
				}
				this.state = 642;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			}
			this.state = 643;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext {
		let _localctx: QualifiedIdentifierExpressionContext = new QualifiedIdentifierExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, cqlParser.RULE_qualifiedIdentifierExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 645;
					this.qualifierExpression();
					this.state = 646;
					this.match(cqlParser.T__16);
					}
					}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 653;
			this.referentialIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifierExpression(): QualifierExpressionContext {
		let _localctx: QualifierExpressionContext = new QualifierExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, cqlParser.RULE_qualifierExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this.referentialIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public simplePath(): SimplePathContext;
	public simplePath(_p: number): SimplePathContext;
	// @RuleVersion(0)
	public simplePath(_p?: number): SimplePathContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SimplePathContext = new SimplePathContext(this._ctx, _parentState);
		let _prevctx: SimplePathContext = _localctx;
		let _startState: number = 122;
		this.enterRecursionRule(_localctx, 122, cqlParser.RULE_simplePath, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new SimplePathReferentialIdentifierContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 658;
			this.referentialIdentifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 670;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 668;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new SimplePathQualifiedIdentifierContext(new SimplePathContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_simplePath);
						this.state = 660;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 661;
						this.match(cqlParser.T__16);
						this.state = 662;
						this.referentialIdentifier();
						}
						break;

					case 2:
						{
						_localctx = new SimplePathIndexerContext(new SimplePathContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_simplePath);
						this.state = 663;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 664;
						this.match(cqlParser.T__37);
						this.state = 665;
						this.simpleLiteral();
						this.state = 666;
						this.match(cqlParser.T__39);
						}
						break;
					}
					}
				}
				this.state = 672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleLiteral(): SimpleLiteralContext {
		let _localctx: SimpleLiteralContext = new SimpleLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, cqlParser.RULE_simpleLiteral);
		try {
			this.state = 675;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.STRING:
				_localctx = new SimpleStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 673;
				this.match(cqlParser.STRING);
				}
				break;
			case cqlParser.NUMBER:
				_localctx = new SimpleNumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 674;
				this.match(cqlParser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 126;
		this.enterRecursionRule(_localctx, 126, cqlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				_localctx = new TermExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 678;
				this.expressionTerm(0);
				}
				break;

			case 2:
				{
				_localctx = new RetrieveExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 679;
				this.retrieve();
				}
				break;

			case 3:
				{
				_localctx = new QueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 680;
				this.query();
				}
				break;

			case 4:
				{
				_localctx = new CastExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 681;
				this.match(cqlParser.T__62);
				this.state = 682;
				this.expression(0);
				this.state = 683;
				this.match(cqlParser.T__61);
				this.state = 684;
				this.typeSpecifier();
				}
				break;

			case 5:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 686;
				this.match(cqlParser.T__57);
				this.state = 687;
				this.expression(13);
				}
				break;

			case 6:
				{
				_localctx = new ExistenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 688;
				this.match(cqlParser.T__63);
				this.state = 689;
				this.expression(12);
				}
				break;

			case 7:
				{
				_localctx = new DurationBetweenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__67) {
					{
					this.state = 690;
					this.match(cqlParser.T__67);
					this.state = 691;
					this.match(cqlParser.T__40);
					}
				}

				this.state = 694;
				this.pluralDateTimePrecision();
				this.state = 695;
				this.match(cqlParser.T__65);
				this.state = 696;
				this.expressionTerm(0);
				this.state = 697;
				this.match(cqlParser.T__66);
				this.state = 698;
				this.expressionTerm(0);
				}
				break;

			case 8:
				{
				_localctx = new DifferenceBetweenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 700;
				this.match(cqlParser.T__68);
				this.state = 701;
				this.match(cqlParser.T__40);
				this.state = 702;
				this.pluralDateTimePrecision();
				this.state = 703;
				this.match(cqlParser.T__65);
				this.state = 704;
				this.expressionTerm(0);
				this.state = 705;
				this.match(cqlParser.T__66);
				this.state = 706;
				this.expressionTerm(0);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 758;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 756;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
					case 1:
						{
						_localctx = new InequalityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 710;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 711;
						_la = this._input.LA(1);
						if (!(_la === cqlParser.T__21 || _la === cqlParser.T__22 || _la === cqlParser.T__69 || _la === cqlParser.T__70)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 712;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new TimingExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 713;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 714;
						this.intervalOperatorPhrase();
						this.state = 715;
						this.expression(8);
						}
						break;

					case 3:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 717;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 718;
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (cqlParser.T__41 - 42)) | (1 << (cqlParser.T__42 - 42)) | (1 << (cqlParser.T__71 - 42)) | (1 << (cqlParser.T__72 - 42)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 719;
						this.expression(7);
						}
						break;

					case 4:
						{
						_localctx = new MembershipExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 720;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 721;
						_la = this._input.LA(1);
						if (!(_la === cqlParser.T__40 || _la === cqlParser.T__73)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 723;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
						case 1:
							{
							this.state = 722;
							this.dateTimePrecisionSpecifier();
							}
							break;
						}
						this.state = 725;
						this.expression(6);
						}
						break;

					case 5:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 726;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 727;
						this.match(cqlParser.T__66);
						this.state = 728;
						this.expression(5);
						}
						break;

					case 6:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 729;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 730;
						_la = this._input.LA(1);
						if (!(_la === cqlParser.T__74 || _la === cqlParser.T__75)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 731;
						this.expression(4);
						}
						break;

					case 7:
						{
						_localctx = new ImpliesExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 732;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 733;
						this.match(cqlParser.T__76);
						this.state = 734;
						this.expression(3);
						}
						break;

					case 8:
						{
						_localctx = new InFixSetExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 735;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 736;
						_la = this._input.LA(1);
						if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (cqlParser.T__77 - 78)) | (1 << (cqlParser.T__78 - 78)) | (1 << (cqlParser.T__79 - 78)) | (1 << (cqlParser.T__80 - 78)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 737;
						this.expression(2);
						}
						break;

					case 9:
						{
						_localctx = new BooleanExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 738;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 739;
						this.match(cqlParser.T__56);
						this.state = 741;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === cqlParser.T__57) {
							{
							this.state = 740;
							this.match(cqlParser.T__57);
							}
						}

						this.state = 743;
						_la = this._input.LA(1);
						if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (cqlParser.T__58 - 59)) | (1 << (cqlParser.T__59 - 59)) | (1 << (cqlParser.T__60 - 59)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 10:
						{
						_localctx = new TypeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 744;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 745;
						_la = this._input.LA(1);
						if (!(_la === cqlParser.T__56 || _la === cqlParser.T__61)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 746;
						this.typeSpecifier();
						}
						break;

					case 11:
						{
						_localctx = new BetweenExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 747;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 749;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === cqlParser.T__64) {
							{
							this.state = 748;
							this.match(cqlParser.T__64);
							}
						}

						this.state = 751;
						this.match(cqlParser.T__65);
						this.state = 752;
						this.expressionTerm(0);
						this.state = 753;
						this.match(cqlParser.T__66);
						this.state = 754;
						this.expressionTerm(0);
						}
						break;
					}
					}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateTimePrecision(): DateTimePrecisionContext {
		let _localctx: DateTimePrecisionContext = new DateTimePrecisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, cqlParser.RULE_dateTimePrecision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			_la = this._input.LA(1);
			if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (cqlParser.T__81 - 82)) | (1 << (cqlParser.T__82 - 82)) | (1 << (cqlParser.T__83 - 82)) | (1 << (cqlParser.T__84 - 82)) | (1 << (cqlParser.T__85 - 82)) | (1 << (cqlParser.T__86 - 82)) | (1 << (cqlParser.T__87 - 82)) | (1 << (cqlParser.T__88 - 82)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateTimeComponent(): DateTimeComponentContext {
		let _localctx: DateTimeComponentContext = new DateTimeComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, cqlParser.RULE_dateTimeComponent);
		try {
			this.state = 768;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__81:
			case cqlParser.T__82:
			case cqlParser.T__83:
			case cqlParser.T__84:
			case cqlParser.T__85:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.dateTimePrecision();
				}
				break;
			case cqlParser.T__89:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
				this.match(cqlParser.T__89);
				}
				break;
			case cqlParser.T__90:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 765;
				this.match(cqlParser.T__90);
				}
				break;
			case cqlParser.T__91:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 766;
				this.match(cqlParser.T__91);
				}
				break;
			case cqlParser.T__92:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 767;
				this.match(cqlParser.T__92);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
		let _localctx: PluralDateTimePrecisionContext = new PluralDateTimePrecisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, cqlParser.RULE_pluralDateTimePrecision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			_la = this._input.LA(1);
			if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (cqlParser.T__93 - 94)) | (1 << (cqlParser.T__94 - 94)) | (1 << (cqlParser.T__95 - 94)) | (1 << (cqlParser.T__96 - 94)) | (1 << (cqlParser.T__97 - 94)) | (1 << (cqlParser.T__98 - 94)) | (1 << (cqlParser.T__99 - 94)) | (1 << (cqlParser.T__100 - 94)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expressionTerm(): ExpressionTermContext;
	public expressionTerm(_p: number): ExpressionTermContext;
	// @RuleVersion(0)
	public expressionTerm(_p?: number): ExpressionTermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionTermContext = new ExpressionTermContext(this._ctx, _parentState);
		let _prevctx: ExpressionTermContext = _localctx;
		let _startState: number = 134;
		this.enterRecursionRule(_localctx, 134, cqlParser.RULE_expressionTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				_localctx = new TermExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 773;
				this.term();
				}
				break;

			case 2:
				{
				_localctx = new ConversionExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 774;
				this.match(cqlParser.T__101);
				this.state = 775;
				this.expression(0);
				this.state = 776;
				this.match(cqlParser.T__102);
				this.state = 779;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case cqlParser.T__0:
				case cqlParser.T__1:
				case cqlParser.T__2:
				case cqlParser.T__3:
				case cqlParser.T__4:
				case cqlParser.T__5:
				case cqlParser.T__6:
				case cqlParser.T__7:
				case cqlParser.T__8:
				case cqlParser.T__9:
				case cqlParser.T__11:
				case cqlParser.T__12:
				case cqlParser.T__17:
				case cqlParser.T__19:
				case cqlParser.T__20:
				case cqlParser.T__23:
				case cqlParser.T__24:
				case cqlParser.T__25:
				case cqlParser.T__26:
				case cqlParser.T__27:
				case cqlParser.T__28:
				case cqlParser.T__29:
				case cqlParser.T__44:
				case cqlParser.T__49:
				case cqlParser.T__51:
				case cqlParser.T__52:
				case cqlParser.T__53:
				case cqlParser.T__54:
				case cqlParser.T__55:
				case cqlParser.T__73:
				case cqlParser.T__75:
				case cqlParser.T__76:
				case cqlParser.T__78:
				case cqlParser.T__79:
				case cqlParser.T__80:
				case cqlParser.T__89:
				case cqlParser.T__90:
				case cqlParser.T__91:
				case cqlParser.T__92:
				case cqlParser.T__105:
				case cqlParser.T__106:
				case cqlParser.T__108:
				case cqlParser.T__109:
				case cqlParser.T__110:
				case cqlParser.T__118:
				case cqlParser.T__119:
				case cqlParser.T__130:
				case cqlParser.T__131:
				case cqlParser.T__132:
				case cqlParser.T__133:
				case cqlParser.T__140:
				case cqlParser.T__141:
				case cqlParser.T__144:
				case cqlParser.T__148:
				case cqlParser.T__149:
				case cqlParser.T__153:
				case cqlParser.T__154:
				case cqlParser.T__155:
				case cqlParser.QUOTEDIDENTIFIER:
				case cqlParser.IDENTIFIER:
				case cqlParser.DELIMITEDIDENTIFIER:
					{
					this.state = 777;
					this.typeSpecifier();
					}
					break;
				case cqlParser.T__81:
				case cqlParser.T__82:
				case cqlParser.T__83:
				case cqlParser.T__84:
				case cqlParser.T__85:
				case cqlParser.T__86:
				case cqlParser.T__87:
				case cqlParser.T__88:
				case cqlParser.T__93:
				case cqlParser.T__94:
				case cqlParser.T__95:
				case cqlParser.T__96:
				case cqlParser.T__97:
				case cqlParser.T__98:
				case cqlParser.T__99:
				case cqlParser.T__100:
				case cqlParser.STRING:
					{
					this.state = 778;
					this.unit();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				{
				_localctx = new PolarityExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 781;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__103 || _la === cqlParser.T__104)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 782;
				this.expressionTerm(18);
				}
				break;

			case 4:
				{
				_localctx = new TimeBoundaryExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 783;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__105 || _la === cqlParser.T__106)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 784;
				this.match(cqlParser.T__107);
				this.state = 785;
				this.expressionTerm(17);
				}
				break;

			case 5:
				{
				_localctx = new TimeUnitExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 786;
				this.dateTimeComponent();
				this.state = 787;
				this.match(cqlParser.T__18);
				this.state = 788;
				this.expressionTerm(16);
				}
				break;

			case 6:
				{
				_localctx = new DurationExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 790;
				this.match(cqlParser.T__67);
				this.state = 791;
				this.match(cqlParser.T__40);
				this.state = 792;
				this.pluralDateTimePrecision();
				this.state = 793;
				this.match(cqlParser.T__107);
				this.state = 794;
				this.expressionTerm(15);
				}
				break;

			case 7:
				{
				_localctx = new DifferenceExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 796;
				this.match(cqlParser.T__68);
				this.state = 797;
				this.match(cqlParser.T__40);
				this.state = 798;
				this.pluralDateTimePrecision();
				this.state = 799;
				this.match(cqlParser.T__107);
				this.state = 800;
				this.expressionTerm(14);
				}
				break;

			case 8:
				{
				_localctx = new WidthExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 802;
				this.match(cqlParser.T__108);
				this.state = 803;
				this.match(cqlParser.T__107);
				this.state = 804;
				this.expressionTerm(13);
				}
				break;

			case 9:
				{
				_localctx = new SuccessorExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 805;
				this.match(cqlParser.T__109);
				this.state = 806;
				this.match(cqlParser.T__107);
				this.state = 807;
				this.expressionTerm(12);
				}
				break;

			case 10:
				{
				_localctx = new PredecessorExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 808;
				this.match(cqlParser.T__110);
				this.state = 809;
				this.match(cqlParser.T__107);
				this.state = 810;
				this.expressionTerm(11);
				}
				break;

			case 11:
				{
				_localctx = new ElementExtractorExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 811;
				this.match(cqlParser.T__111);
				this.state = 812;
				this.match(cqlParser.T__18);
				this.state = 813;
				this.expressionTerm(10);
				}
				break;

			case 12:
				{
				_localctx = new PointExtractorExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 814;
				this.match(cqlParser.T__112);
				this.state = 815;
				this.match(cqlParser.T__18);
				this.state = 816;
				this.expressionTerm(9);
				}
				break;

			case 13:
				{
				_localctx = new TypeExtentExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 817;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__113 || _la === cqlParser.T__114)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 818;
				this.namedTypeSpecifier();
				}
				break;

			case 14:
				{
				_localctx = new IfThenElseExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 819;
				this.match(cqlParser.T__121);
				this.state = 820;
				this.expression(0);
				this.state = 821;
				this.match(cqlParser.T__122);
				this.state = 822;
				this.expression(0);
				this.state = 823;
				this.match(cqlParser.T__123);
				this.state = 824;
				this.expression(0);
				}
				break;

			case 15:
				{
				_localctx = new CaseExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 826;
				this.match(cqlParser.T__124);
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29) | (1 << cqlParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (cqlParser.T__37 - 38)) | (1 << (cqlParser.T__44 - 38)) | (1 << (cqlParser.T__47 - 38)) | (1 << (cqlParser.T__49 - 38)) | (1 << (cqlParser.T__51 - 38)) | (1 << (cqlParser.T__52 - 38)) | (1 << (cqlParser.T__53 - 38)) | (1 << (cqlParser.T__54 - 38)) | (1 << (cqlParser.T__55 - 38)) | (1 << (cqlParser.T__57 - 38)) | (1 << (cqlParser.T__58 - 38)) | (1 << (cqlParser.T__59 - 38)) | (1 << (cqlParser.T__60 - 38)) | (1 << (cqlParser.T__62 - 38)) | (1 << (cqlParser.T__63 - 38)) | (1 << (cqlParser.T__67 - 38)) | (1 << (cqlParser.T__68 - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (cqlParser.T__73 - 74)) | (1 << (cqlParser.T__75 - 74)) | (1 << (cqlParser.T__76 - 74)) | (1 << (cqlParser.T__78 - 74)) | (1 << (cqlParser.T__79 - 74)) | (1 << (cqlParser.T__80 - 74)) | (1 << (cqlParser.T__81 - 74)) | (1 << (cqlParser.T__82 - 74)) | (1 << (cqlParser.T__83 - 74)) | (1 << (cqlParser.T__84 - 74)) | (1 << (cqlParser.T__85 - 74)) | (1 << (cqlParser.T__86 - 74)) | (1 << (cqlParser.T__87 - 74)) | (1 << (cqlParser.T__88 - 74)) | (1 << (cqlParser.T__89 - 74)) | (1 << (cqlParser.T__90 - 74)) | (1 << (cqlParser.T__91 - 74)) | (1 << (cqlParser.T__92 - 74)) | (1 << (cqlParser.T__93 - 74)) | (1 << (cqlParser.T__94 - 74)) | (1 << (cqlParser.T__95 - 74)) | (1 << (cqlParser.T__96 - 74)) | (1 << (cqlParser.T__97 - 74)) | (1 << (cqlParser.T__98 - 74)) | (1 << (cqlParser.T__99 - 74)) | (1 << (cqlParser.T__100 - 74)) | (1 << (cqlParser.T__101 - 74)) | (1 << (cqlParser.T__103 - 74)) | (1 << (cqlParser.T__104 - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (cqlParser.T__105 - 106)) | (1 << (cqlParser.T__106 - 106)) | (1 << (cqlParser.T__108 - 106)) | (1 << (cqlParser.T__109 - 106)) | (1 << (cqlParser.T__110 - 106)) | (1 << (cqlParser.T__111 - 106)) | (1 << (cqlParser.T__112 - 106)) | (1 << (cqlParser.T__113 - 106)) | (1 << (cqlParser.T__114 - 106)) | (1 << (cqlParser.T__118 - 106)) | (1 << (cqlParser.T__119 - 106)) | (1 << (cqlParser.T__121 - 106)) | (1 << (cqlParser.T__124 - 106)) | (1 << (cqlParser.T__125 - 106)) | (1 << (cqlParser.T__126 - 106)) | (1 << (cqlParser.T__127 - 106)) | (1 << (cqlParser.T__130 - 106)) | (1 << (cqlParser.T__131 - 106)) | (1 << (cqlParser.T__132 - 106)) | (1 << (cqlParser.T__133 - 106)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__144 - 141)) | (1 << (cqlParser.T__148 - 141)) | (1 << (cqlParser.T__149 - 141)) | (1 << (cqlParser.T__150 - 141)) | (1 << (cqlParser.T__151 - 141)) | (1 << (cqlParser.T__152 - 141)) | (1 << (cqlParser.T__153 - 141)) | (1 << (cqlParser.T__154 - 141)) | (1 << (cqlParser.T__155 - 141)) | (1 << (cqlParser.T__156 - 141)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 141)) | (1 << (cqlParser.DATETIME - 141)) | (1 << (cqlParser.LONGNUMBER - 141)) | (1 << (cqlParser.DATE - 141)) | (1 << (cqlParser.TIME - 141)) | (1 << (cqlParser.IDENTIFIER - 141)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 141)) | (1 << (cqlParser.STRING - 141)) | (1 << (cqlParser.NUMBER - 141)))) !== 0)) {
					{
					this.state = 827;
					this.expression(0);
					}
				}

				this.state = 831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 830;
					this.caseExpressionItem();
					}
					}
					this.state = 833;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === cqlParser.T__129);
				this.state = 835;
				this.match(cqlParser.T__123);
				this.state = 836;
				this.expression(0);
				this.state = 837;
				this.match(cqlParser.T__106);
				}
				break;

			case 16:
				{
				_localctx = new AggregateExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 839;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__47 || _la === cqlParser.T__125)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 840;
				this.expression(0);
				}
				break;

			case 17:
				{
				_localctx = new SetAggregateExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 841;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__126 || _la === cqlParser.T__127)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 842;
				this.expression(0);
				this.state = 848;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 843;
					this.match(cqlParser.T__128);
					this.state = 846;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
					case 1:
						{
						this.state = 844;
						this.dateTimePrecision();
						}
						break;

					case 2:
						{
						this.state = 845;
						this.expression(0);
						}
						break;
					}
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 871;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 869;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 852;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 853;
						this.match(cqlParser.T__115);
						this.state = 854;
						this.expressionTerm(8);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicationExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 855;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 856;
						_la = this._input.LA(1);
						if (!(((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (cqlParser.T__116 - 117)) | (1 << (cqlParser.T__117 - 117)) | (1 << (cqlParser.T__118 - 117)) | (1 << (cqlParser.T__119 - 117)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 857;
						this.expressionTerm(7);
						}
						break;

					case 3:
						{
						_localctx = new AdditionExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 858;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 859;
						_la = this._input.LA(1);
						if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (cqlParser.T__103 - 104)) | (1 << (cqlParser.T__104 - 104)) | (1 << (cqlParser.T__120 - 104)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 860;
						this.expressionTerm(6);
						}
						break;

					case 4:
						{
						_localctx = new InvocationExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 861;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 862;
						this.match(cqlParser.T__16);
						this.state = 863;
						this.qualifiedInvocation();
						}
						break;

					case 5:
						{
						_localctx = new IndexedExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 864;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 865;
						this.match(cqlParser.T__37);
						this.state = 866;
						this.expression(0);
						this.state = 867;
						this.match(cqlParser.T__39);
						}
						break;
					}
					}
				}
				this.state = 873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseExpressionItem(): CaseExpressionItemContext {
		let _localctx: CaseExpressionItemContext = new CaseExpressionItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, cqlParser.RULE_caseExpressionItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.match(cqlParser.T__129);
			this.state = 875;
			this.expression(0);
			this.state = 876;
			this.match(cqlParser.T__122);
			this.state = 877;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext {
		let _localctx: DateTimePrecisionSpecifierContext = new DateTimePrecisionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, cqlParser.RULE_dateTimePrecisionSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 879;
			this.dateTimePrecision();
			this.state = 880;
			this.match(cqlParser.T__107);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relativeQualifier(): RelativeQualifierContext {
		let _localctx: RelativeQualifierContext = new RelativeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, cqlParser.RULE_relativeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__130 || _la === cqlParser.T__131)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public offsetRelativeQualifier(): OffsetRelativeQualifierContext {
		let _localctx: OffsetRelativeQualifierContext = new OffsetRelativeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, cqlParser.RULE_offsetRelativeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__132 || _la === cqlParser.T__133)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusiveRelativeQualifier(): ExclusiveRelativeQualifierContext {
		let _localctx: ExclusiveRelativeQualifierContext = new ExclusiveRelativeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, cqlParser.RULE_exclusiveRelativeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 886;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__134 || _la === cqlParser.T__135)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantityOffset(): QuantityOffsetContext {
		let _localctx: QuantityOffsetContext = new QuantityOffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, cqlParser.RULE_quantityOffset);
		let _la: number;
		try {
			this.state = 895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 888;
				this.quantity();
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__132 || _la === cqlParser.T__133) {
					{
					this.state = 889;
					this.offsetRelativeQualifier();
					}
				}

				}
				}
				break;
			case cqlParser.T__134:
			case cqlParser.T__135:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 892;
				this.exclusiveRelativeQualifier();
				this.state = 893;
				this.quantity();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public temporalRelationship(): TemporalRelationshipContext {
		let _localctx: TemporalRelationshipContext = new TemporalRelationshipContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, cqlParser.RULE_temporalRelationship);
		let _la: number;
		try {
			this.state = 905;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__136) {
					{
					this.state = 897;
					this.match(cqlParser.T__136);
					}
				}

				this.state = 900;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__137 || _la === cqlParser.T__138)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 901;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__137 || _la === cqlParser.T__138)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 903;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__139) {
					{
					this.state = 902;
					this.match(cqlParser.T__139);
					}
				}

				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalOperatorPhrase(): IntervalOperatorPhraseContext {
		let _localctx: IntervalOperatorPhraseContext = new IntervalOperatorPhraseContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, cqlParser.RULE_intervalOperatorPhrase);
		let _la: number;
		try {
			this.state = 988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				_localctx = new ConcurrentWithIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__142 - 141)))) !== 0)) {
					{
					this.state = 907;
					_la = this._input.LA(1);
					if (!(((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__142 - 141)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 910;
				this.match(cqlParser.T__143);
				this.state = 912;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (cqlParser.T__81 - 82)) | (1 << (cqlParser.T__82 - 82)) | (1 << (cqlParser.T__83 - 82)) | (1 << (cqlParser.T__84 - 82)) | (1 << (cqlParser.T__85 - 82)) | (1 << (cqlParser.T__86 - 82)) | (1 << (cqlParser.T__87 - 82)) | (1 << (cqlParser.T__88 - 82)))) !== 0)) {
					{
					this.state = 911;
					this.dateTimePrecision();
					}
				}

				this.state = 916;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case cqlParser.T__130:
				case cqlParser.T__131:
					{
					this.state = 914;
					this.relativeQualifier();
					}
					break;
				case cqlParser.T__61:
					{
					this.state = 915;
					this.match(cqlParser.T__61);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 919;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 918;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__105 || _la === cqlParser.T__106)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new IncludesIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__64) {
					{
					this.state = 921;
					this.match(cqlParser.T__64);
					}
				}

				this.state = 924;
				this.match(cqlParser.T__144);
				this.state = 926;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 925;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				this.state = 929;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 928;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__105 || _la === cqlParser.T__106)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new IncludedInIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__142 - 141)))) !== 0)) {
					{
					this.state = 931;
					_la = this._input.LA(1);
					if (!(((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__142 - 141)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__64) {
					{
					this.state = 934;
					this.match(cqlParser.T__64);
					}
				}

				this.state = 937;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__145 || _la === cqlParser.T__146)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 939;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 938;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new BeforeOrAfterIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__142 - 141)))) !== 0)) {
					{
					this.state = 941;
					_la = this._input.LA(1);
					if (!(((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__142 - 141)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (cqlParser.T__134 - 135)) | (1 << (cqlParser.T__135 - 135)) | (1 << (cqlParser.NUMBER - 135)))) !== 0)) {
					{
					this.state = 944;
					this.quantityOffset();
					}
				}

				this.state = 947;
				this.temporalRelationship();
				this.state = 949;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 948;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				this.state = 952;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 951;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__105 || _la === cqlParser.T__106)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new WithinIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__142 - 141)))) !== 0)) {
					{
					this.state = 954;
					_la = this._input.LA(1);
					if (!(((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__142 - 141)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__64) {
					{
					this.state = 957;
					this.match(cqlParser.T__64);
					}
				}

				this.state = 960;
				this.match(cqlParser.T__147);
				this.state = 961;
				this.quantity();
				this.state = 962;
				this.match(cqlParser.T__107);
				this.state = 964;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 963;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__105 || _la === cqlParser.T__106)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;

			case 6:
				_localctx = new MeetsIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 966;
				this.match(cqlParser.T__148);
				this.state = 968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__137 || _la === cqlParser.T__138) {
					{
					this.state = 967;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__137 || _la === cqlParser.T__138)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 971;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 970;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new OverlapsIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 973;
				this.match(cqlParser.T__149);
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__137 || _la === cqlParser.T__138) {
					{
					this.state = 974;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__137 || _la === cqlParser.T__138)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 978;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 977;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				}
				break;

			case 8:
				_localctx = new StartsIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 980;
				this.match(cqlParser.T__140);
				this.state = 982;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 981;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new EndsIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 984;
				this.match(cqlParser.T__141);
				this.state = 986;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 985;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, cqlParser.RULE_term);
		try {
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				_localctx = new InvocationTermContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 990;
				this.invocation();
				}
				break;

			case 2:
				_localctx = new LiteralTermContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 991;
				this.literal();
				}
				break;

			case 3:
				_localctx = new ExternalConstantTermContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 992;
				this.externalConstant();
				}
				break;

			case 4:
				_localctx = new IntervalSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 993;
				this.intervalSelector();
				}
				break;

			case 5:
				_localctx = new TupleSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 994;
				this.tupleSelector();
				}
				break;

			case 6:
				_localctx = new InstanceSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 995;
				this.instanceSelector();
				}
				break;

			case 7:
				_localctx = new ListSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 996;
				this.listSelector();
				}
				break;

			case 8:
				_localctx = new CodeSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 997;
				this.codeSelector();
				}
				break;

			case 9:
				_localctx = new ConceptSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 998;
				this.conceptSelector();
				}
				break;

			case 10:
				_localctx = new ParenthesizedTermContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 999;
				this.match(cqlParser.T__30);
				this.state = 1000;
				this.expression(0);
				this.state = 1001;
				this.match(cqlParser.T__31);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedInvocation(): QualifiedInvocationContext {
		let _localctx: QualifiedInvocationContext = new QualifiedInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, cqlParser.RULE_qualifiedInvocation);
		try {
			this.state = 1007;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				_localctx = new QualifiedMemberInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1005;
				this.referentialIdentifier();
				}
				break;

			case 2:
				_localctx = new QualifiedFunctionInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1006;
				this.qualifiedFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedFunction(): QualifiedFunctionContext {
		let _localctx: QualifiedFunctionContext = new QualifiedFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, cqlParser.RULE_qualifiedFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.identifierOrFunctionIdentifier();
			this.state = 1010;
			this.match(cqlParser.T__30);
			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29) | (1 << cqlParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (cqlParser.T__37 - 38)) | (1 << (cqlParser.T__44 - 38)) | (1 << (cqlParser.T__47 - 38)) | (1 << (cqlParser.T__49 - 38)) | (1 << (cqlParser.T__51 - 38)) | (1 << (cqlParser.T__52 - 38)) | (1 << (cqlParser.T__53 - 38)) | (1 << (cqlParser.T__54 - 38)) | (1 << (cqlParser.T__55 - 38)) | (1 << (cqlParser.T__57 - 38)) | (1 << (cqlParser.T__58 - 38)) | (1 << (cqlParser.T__59 - 38)) | (1 << (cqlParser.T__60 - 38)) | (1 << (cqlParser.T__62 - 38)) | (1 << (cqlParser.T__63 - 38)) | (1 << (cqlParser.T__67 - 38)) | (1 << (cqlParser.T__68 - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (cqlParser.T__73 - 74)) | (1 << (cqlParser.T__75 - 74)) | (1 << (cqlParser.T__76 - 74)) | (1 << (cqlParser.T__78 - 74)) | (1 << (cqlParser.T__79 - 74)) | (1 << (cqlParser.T__80 - 74)) | (1 << (cqlParser.T__81 - 74)) | (1 << (cqlParser.T__82 - 74)) | (1 << (cqlParser.T__83 - 74)) | (1 << (cqlParser.T__84 - 74)) | (1 << (cqlParser.T__85 - 74)) | (1 << (cqlParser.T__86 - 74)) | (1 << (cqlParser.T__87 - 74)) | (1 << (cqlParser.T__88 - 74)) | (1 << (cqlParser.T__89 - 74)) | (1 << (cqlParser.T__90 - 74)) | (1 << (cqlParser.T__91 - 74)) | (1 << (cqlParser.T__92 - 74)) | (1 << (cqlParser.T__93 - 74)) | (1 << (cqlParser.T__94 - 74)) | (1 << (cqlParser.T__95 - 74)) | (1 << (cqlParser.T__96 - 74)) | (1 << (cqlParser.T__97 - 74)) | (1 << (cqlParser.T__98 - 74)) | (1 << (cqlParser.T__99 - 74)) | (1 << (cqlParser.T__100 - 74)) | (1 << (cqlParser.T__101 - 74)) | (1 << (cqlParser.T__103 - 74)) | (1 << (cqlParser.T__104 - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (cqlParser.T__105 - 106)) | (1 << (cqlParser.T__106 - 106)) | (1 << (cqlParser.T__108 - 106)) | (1 << (cqlParser.T__109 - 106)) | (1 << (cqlParser.T__110 - 106)) | (1 << (cqlParser.T__111 - 106)) | (1 << (cqlParser.T__112 - 106)) | (1 << (cqlParser.T__113 - 106)) | (1 << (cqlParser.T__114 - 106)) | (1 << (cqlParser.T__118 - 106)) | (1 << (cqlParser.T__119 - 106)) | (1 << (cqlParser.T__121 - 106)) | (1 << (cqlParser.T__124 - 106)) | (1 << (cqlParser.T__125 - 106)) | (1 << (cqlParser.T__126 - 106)) | (1 << (cqlParser.T__127 - 106)) | (1 << (cqlParser.T__130 - 106)) | (1 << (cqlParser.T__131 - 106)) | (1 << (cqlParser.T__132 - 106)) | (1 << (cqlParser.T__133 - 106)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__144 - 141)) | (1 << (cqlParser.T__148 - 141)) | (1 << (cqlParser.T__149 - 141)) | (1 << (cqlParser.T__150 - 141)) | (1 << (cqlParser.T__151 - 141)) | (1 << (cqlParser.T__152 - 141)) | (1 << (cqlParser.T__153 - 141)) | (1 << (cqlParser.T__154 - 141)) | (1 << (cqlParser.T__155 - 141)) | (1 << (cqlParser.T__156 - 141)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 141)) | (1 << (cqlParser.DATETIME - 141)) | (1 << (cqlParser.LONGNUMBER - 141)) | (1 << (cqlParser.DATE - 141)) | (1 << (cqlParser.TIME - 141)) | (1 << (cqlParser.IDENTIFIER - 141)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 141)) | (1 << (cqlParser.STRING - 141)) | (1 << (cqlParser.NUMBER - 141)))) !== 0)) {
				{
				this.state = 1011;
				this.paramList();
				}
			}

			this.state = 1014;
			this.match(cqlParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public invocation(): InvocationContext {
		let _localctx: InvocationContext = new InvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, cqlParser.RULE_invocation);
		try {
			this.state = 1021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				_localctx = new MemberInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1016;
				this.referentialIdentifier();
				}
				break;

			case 2:
				_localctx = new FunctionInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1017;
				this.function();
				}
				break;

			case 3:
				_localctx = new ThisInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1018;
				this.match(cqlParser.T__150);
				}
				break;

			case 4:
				_localctx = new IndexInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1019;
				this.match(cqlParser.T__151);
				}
				break;

			case 5:
				_localctx = new TotalInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1020;
				this.match(cqlParser.T__152);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, cqlParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.referentialIdentifier();
			this.state = 1024;
			this.match(cqlParser.T__30);
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29) | (1 << cqlParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (cqlParser.T__37 - 38)) | (1 << (cqlParser.T__44 - 38)) | (1 << (cqlParser.T__47 - 38)) | (1 << (cqlParser.T__49 - 38)) | (1 << (cqlParser.T__51 - 38)) | (1 << (cqlParser.T__52 - 38)) | (1 << (cqlParser.T__53 - 38)) | (1 << (cqlParser.T__54 - 38)) | (1 << (cqlParser.T__55 - 38)) | (1 << (cqlParser.T__57 - 38)) | (1 << (cqlParser.T__58 - 38)) | (1 << (cqlParser.T__59 - 38)) | (1 << (cqlParser.T__60 - 38)) | (1 << (cqlParser.T__62 - 38)) | (1 << (cqlParser.T__63 - 38)) | (1 << (cqlParser.T__67 - 38)) | (1 << (cqlParser.T__68 - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (cqlParser.T__73 - 74)) | (1 << (cqlParser.T__75 - 74)) | (1 << (cqlParser.T__76 - 74)) | (1 << (cqlParser.T__78 - 74)) | (1 << (cqlParser.T__79 - 74)) | (1 << (cqlParser.T__80 - 74)) | (1 << (cqlParser.T__81 - 74)) | (1 << (cqlParser.T__82 - 74)) | (1 << (cqlParser.T__83 - 74)) | (1 << (cqlParser.T__84 - 74)) | (1 << (cqlParser.T__85 - 74)) | (1 << (cqlParser.T__86 - 74)) | (1 << (cqlParser.T__87 - 74)) | (1 << (cqlParser.T__88 - 74)) | (1 << (cqlParser.T__89 - 74)) | (1 << (cqlParser.T__90 - 74)) | (1 << (cqlParser.T__91 - 74)) | (1 << (cqlParser.T__92 - 74)) | (1 << (cqlParser.T__93 - 74)) | (1 << (cqlParser.T__94 - 74)) | (1 << (cqlParser.T__95 - 74)) | (1 << (cqlParser.T__96 - 74)) | (1 << (cqlParser.T__97 - 74)) | (1 << (cqlParser.T__98 - 74)) | (1 << (cqlParser.T__99 - 74)) | (1 << (cqlParser.T__100 - 74)) | (1 << (cqlParser.T__101 - 74)) | (1 << (cqlParser.T__103 - 74)) | (1 << (cqlParser.T__104 - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (cqlParser.T__105 - 106)) | (1 << (cqlParser.T__106 - 106)) | (1 << (cqlParser.T__108 - 106)) | (1 << (cqlParser.T__109 - 106)) | (1 << (cqlParser.T__110 - 106)) | (1 << (cqlParser.T__111 - 106)) | (1 << (cqlParser.T__112 - 106)) | (1 << (cqlParser.T__113 - 106)) | (1 << (cqlParser.T__114 - 106)) | (1 << (cqlParser.T__118 - 106)) | (1 << (cqlParser.T__119 - 106)) | (1 << (cqlParser.T__121 - 106)) | (1 << (cqlParser.T__124 - 106)) | (1 << (cqlParser.T__125 - 106)) | (1 << (cqlParser.T__126 - 106)) | (1 << (cqlParser.T__127 - 106)) | (1 << (cqlParser.T__130 - 106)) | (1 << (cqlParser.T__131 - 106)) | (1 << (cqlParser.T__132 - 106)) | (1 << (cqlParser.T__133 - 106)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__144 - 141)) | (1 << (cqlParser.T__148 - 141)) | (1 << (cqlParser.T__149 - 141)) | (1 << (cqlParser.T__150 - 141)) | (1 << (cqlParser.T__151 - 141)) | (1 << (cqlParser.T__152 - 141)) | (1 << (cqlParser.T__153 - 141)) | (1 << (cqlParser.T__154 - 141)) | (1 << (cqlParser.T__155 - 141)) | (1 << (cqlParser.T__156 - 141)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 141)) | (1 << (cqlParser.DATETIME - 141)) | (1 << (cqlParser.LONGNUMBER - 141)) | (1 << (cqlParser.DATE - 141)) | (1 << (cqlParser.TIME - 141)) | (1 << (cqlParser.IDENTIFIER - 141)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 141)) | (1 << (cqlParser.STRING - 141)) | (1 << (cqlParser.NUMBER - 141)))) !== 0)) {
				{
				this.state = 1025;
				this.paramList();
				}
			}

			this.state = 1028;
			this.match(cqlParser.T__31);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ratio(): RatioContext {
		let _localctx: RatioContext = new RatioContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, cqlParser.RULE_ratio);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this.quantity();
			this.state = 1031;
			this.match(cqlParser.T__10);
			this.state = 1032;
			this.quantity();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, cqlParser.RULE_literal);
		let _la: number;
		try {
			this.state = 1044;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1034;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__59 || _la === cqlParser.T__60)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1035;
				this.match(cqlParser.T__58);
				}
				break;

			case 3:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1036;
				this.match(cqlParser.STRING);
				}
				break;

			case 4:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1037;
				this.match(cqlParser.NUMBER);
				}
				break;

			case 5:
				_localctx = new LongNumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1038;
				this.match(cqlParser.LONGNUMBER);
				}
				break;

			case 6:
				_localctx = new DateTimeLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1039;
				this.match(cqlParser.DATETIME);
				}
				break;

			case 7:
				_localctx = new DateLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1040;
				this.match(cqlParser.DATE);
				}
				break;

			case 8:
				_localctx = new TimeLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1041;
				this.match(cqlParser.TIME);
				}
				break;

			case 9:
				_localctx = new QuantityLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1042;
				this.quantity();
				}
				break;

			case 10:
				_localctx = new RatioLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1043;
				this.ratio();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalSelector(): IntervalSelectorContext {
		let _localctx: IntervalSelectorContext = new IntervalSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, cqlParser.RULE_intervalSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.match(cqlParser.T__23);
			this.state = 1047;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__30 || _la === cqlParser.T__37)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1048;
			this.expression(0);
			this.state = 1049;
			this.match(cqlParser.T__14);
			this.state = 1050;
			this.expression(0);
			this.state = 1051;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__31 || _la === cqlParser.T__39)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleSelector(): TupleSelectorContext {
		let _localctx: TupleSelectorContext = new TupleSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, cqlParser.RULE_tupleSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__24) {
				{
				this.state = 1053;
				this.match(cqlParser.T__24);
				}
			}

			this.state = 1056;
			this.match(cqlParser.T__13);
			this.state = 1066;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__10:
				{
				this.state = 1057;
				this.match(cqlParser.T__10);
				}
				break;
			case cqlParser.T__0:
			case cqlParser.T__1:
			case cqlParser.T__2:
			case cqlParser.T__3:
			case cqlParser.T__4:
			case cqlParser.T__5:
			case cqlParser.T__6:
			case cqlParser.T__7:
			case cqlParser.T__8:
			case cqlParser.T__9:
			case cqlParser.T__11:
			case cqlParser.T__12:
			case cqlParser.T__17:
			case cqlParser.T__19:
			case cqlParser.T__26:
			case cqlParser.T__27:
			case cqlParser.T__28:
			case cqlParser.T__29:
			case cqlParser.T__44:
			case cqlParser.T__49:
			case cqlParser.T__51:
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__89:
			case cqlParser.T__90:
			case cqlParser.T__91:
			case cqlParser.T__92:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__108:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__118:
			case cqlParser.T__119:
			case cqlParser.T__130:
			case cqlParser.T__131:
			case cqlParser.T__132:
			case cqlParser.T__133:
			case cqlParser.T__140:
			case cqlParser.T__141:
			case cqlParser.T__144:
			case cqlParser.T__148:
			case cqlParser.T__149:
			case cqlParser.T__153:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				{
				{
				this.state = 1058;
				this.tupleElementSelector();
				this.state = 1063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === cqlParser.T__14) {
					{
					{
					this.state = 1059;
					this.match(cqlParser.T__14);
					this.state = 1060;
					this.tupleElementSelector();
					}
					}
					this.state = 1065;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1068;
			this.match(cqlParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleElementSelector(): TupleElementSelectorContext {
		let _localctx: TupleElementSelectorContext = new TupleElementSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, cqlParser.RULE_tupleElementSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this.referentialIdentifier();
			this.state = 1071;
			this.match(cqlParser.T__10);
			this.state = 1072;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanceSelector(): InstanceSelectorContext {
		let _localctx: InstanceSelectorContext = new InstanceSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, cqlParser.RULE_instanceSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.namedTypeSpecifier();
			this.state = 1075;
			this.match(cqlParser.T__13);
			this.state = 1085;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__10:
				{
				this.state = 1076;
				this.match(cqlParser.T__10);
				}
				break;
			case cqlParser.T__0:
			case cqlParser.T__1:
			case cqlParser.T__2:
			case cqlParser.T__3:
			case cqlParser.T__4:
			case cqlParser.T__5:
			case cqlParser.T__6:
			case cqlParser.T__7:
			case cqlParser.T__8:
			case cqlParser.T__9:
			case cqlParser.T__11:
			case cqlParser.T__12:
			case cqlParser.T__17:
			case cqlParser.T__19:
			case cqlParser.T__26:
			case cqlParser.T__27:
			case cqlParser.T__28:
			case cqlParser.T__29:
			case cqlParser.T__44:
			case cqlParser.T__49:
			case cqlParser.T__51:
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__89:
			case cqlParser.T__90:
			case cqlParser.T__91:
			case cqlParser.T__92:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__108:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__118:
			case cqlParser.T__119:
			case cqlParser.T__130:
			case cqlParser.T__131:
			case cqlParser.T__132:
			case cqlParser.T__133:
			case cqlParser.T__140:
			case cqlParser.T__141:
			case cqlParser.T__144:
			case cqlParser.T__148:
			case cqlParser.T__149:
			case cqlParser.T__153:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				{
				{
				this.state = 1077;
				this.instanceElementSelector();
				this.state = 1082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === cqlParser.T__14) {
					{
					{
					this.state = 1078;
					this.match(cqlParser.T__14);
					this.state = 1079;
					this.instanceElementSelector();
					}
					}
					this.state = 1084;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1087;
			this.match(cqlParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanceElementSelector(): InstanceElementSelectorContext {
		let _localctx: InstanceElementSelectorContext = new InstanceElementSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, cqlParser.RULE_instanceElementSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1089;
			this.referentialIdentifier();
			this.state = 1090;
			this.match(cqlParser.T__10);
			this.state = 1091;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listSelector(): ListSelectorContext {
		let _localctx: ListSelectorContext = new ListSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, cqlParser.RULE_listSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__20) {
				{
				this.state = 1093;
				this.match(cqlParser.T__20);
				this.state = 1098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__21) {
					{
					this.state = 1094;
					this.match(cqlParser.T__21);
					this.state = 1095;
					this.typeSpecifier();
					this.state = 1096;
					this.match(cqlParser.T__22);
					}
				}

				}
			}

			this.state = 1102;
			this.match(cqlParser.T__13);
			this.state = 1111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29) | (1 << cqlParser.T__30))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (cqlParser.T__37 - 38)) | (1 << (cqlParser.T__44 - 38)) | (1 << (cqlParser.T__47 - 38)) | (1 << (cqlParser.T__49 - 38)) | (1 << (cqlParser.T__51 - 38)) | (1 << (cqlParser.T__52 - 38)) | (1 << (cqlParser.T__53 - 38)) | (1 << (cqlParser.T__54 - 38)) | (1 << (cqlParser.T__55 - 38)) | (1 << (cqlParser.T__57 - 38)) | (1 << (cqlParser.T__58 - 38)) | (1 << (cqlParser.T__59 - 38)) | (1 << (cqlParser.T__60 - 38)) | (1 << (cqlParser.T__62 - 38)) | (1 << (cqlParser.T__63 - 38)) | (1 << (cqlParser.T__67 - 38)) | (1 << (cqlParser.T__68 - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (cqlParser.T__73 - 74)) | (1 << (cqlParser.T__75 - 74)) | (1 << (cqlParser.T__76 - 74)) | (1 << (cqlParser.T__78 - 74)) | (1 << (cqlParser.T__79 - 74)) | (1 << (cqlParser.T__80 - 74)) | (1 << (cqlParser.T__81 - 74)) | (1 << (cqlParser.T__82 - 74)) | (1 << (cqlParser.T__83 - 74)) | (1 << (cqlParser.T__84 - 74)) | (1 << (cqlParser.T__85 - 74)) | (1 << (cqlParser.T__86 - 74)) | (1 << (cqlParser.T__87 - 74)) | (1 << (cqlParser.T__88 - 74)) | (1 << (cqlParser.T__89 - 74)) | (1 << (cqlParser.T__90 - 74)) | (1 << (cqlParser.T__91 - 74)) | (1 << (cqlParser.T__92 - 74)) | (1 << (cqlParser.T__93 - 74)) | (1 << (cqlParser.T__94 - 74)) | (1 << (cqlParser.T__95 - 74)) | (1 << (cqlParser.T__96 - 74)) | (1 << (cqlParser.T__97 - 74)) | (1 << (cqlParser.T__98 - 74)) | (1 << (cqlParser.T__99 - 74)) | (1 << (cqlParser.T__100 - 74)) | (1 << (cqlParser.T__101 - 74)) | (1 << (cqlParser.T__103 - 74)) | (1 << (cqlParser.T__104 - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (cqlParser.T__105 - 106)) | (1 << (cqlParser.T__106 - 106)) | (1 << (cqlParser.T__108 - 106)) | (1 << (cqlParser.T__109 - 106)) | (1 << (cqlParser.T__110 - 106)) | (1 << (cqlParser.T__111 - 106)) | (1 << (cqlParser.T__112 - 106)) | (1 << (cqlParser.T__113 - 106)) | (1 << (cqlParser.T__114 - 106)) | (1 << (cqlParser.T__118 - 106)) | (1 << (cqlParser.T__119 - 106)) | (1 << (cqlParser.T__121 - 106)) | (1 << (cqlParser.T__124 - 106)) | (1 << (cqlParser.T__125 - 106)) | (1 << (cqlParser.T__126 - 106)) | (1 << (cqlParser.T__127 - 106)) | (1 << (cqlParser.T__130 - 106)) | (1 << (cqlParser.T__131 - 106)) | (1 << (cqlParser.T__132 - 106)) | (1 << (cqlParser.T__133 - 106)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__144 - 141)) | (1 << (cqlParser.T__148 - 141)) | (1 << (cqlParser.T__149 - 141)) | (1 << (cqlParser.T__150 - 141)) | (1 << (cqlParser.T__151 - 141)) | (1 << (cqlParser.T__152 - 141)) | (1 << (cqlParser.T__153 - 141)) | (1 << (cqlParser.T__154 - 141)) | (1 << (cqlParser.T__155 - 141)) | (1 << (cqlParser.T__156 - 141)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 141)) | (1 << (cqlParser.DATETIME - 141)) | (1 << (cqlParser.LONGNUMBER - 141)) | (1 << (cqlParser.DATE - 141)) | (1 << (cqlParser.TIME - 141)) | (1 << (cqlParser.IDENTIFIER - 141)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 141)) | (1 << (cqlParser.STRING - 141)) | (1 << (cqlParser.NUMBER - 141)))) !== 0)) {
				{
				this.state = 1103;
				this.expression(0);
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === cqlParser.T__14) {
					{
					{
					this.state = 1104;
					this.match(cqlParser.T__14);
					this.state = 1105;
					this.expression(0);
					}
					}
					this.state = 1110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1113;
			this.match(cqlParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public displayClause(): DisplayClauseContext {
		let _localctx: DisplayClauseContext = new DisplayClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, cqlParser.RULE_displayClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1115;
			this.match(cqlParser.T__153);
			this.state = 1116;
			this.match(cqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeSelector(): CodeSelectorContext {
		let _localctx: CodeSelectorContext = new CodeSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, cqlParser.RULE_codeSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1118;
			this.match(cqlParser.T__154);
			this.state = 1119;
			this.match(cqlParser.STRING);
			this.state = 1120;
			this.match(cqlParser.T__18);
			this.state = 1121;
			this.codesystemIdentifier();
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1122;
				this.displayClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conceptSelector(): ConceptSelectorContext {
		let _localctx: ConceptSelectorContext = new ConceptSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, cqlParser.RULE_conceptSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1125;
			this.match(cqlParser.T__155);
			this.state = 1126;
			this.match(cqlParser.T__13);
			this.state = 1127;
			this.codeSelector();
			this.state = 1132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 1128;
				this.match(cqlParser.T__14);
				this.state = 1129;
				this.codeSelector();
				}
				}
				this.state = 1134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1135;
			this.match(cqlParser.T__15);
			this.state = 1137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1136;
				this.displayClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, cqlParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (cqlParser.T__34 - 35)) | (1 << (cqlParser.T__35 - 35)) | (1 << (cqlParser.T__36 - 35)) | (1 << (cqlParser.T__40 - 35)) | (1 << (cqlParser.T__43 - 35)) | (1 << (cqlParser.T__44 - 35)) | (1 << (cqlParser.T__45 - 35)) | (1 << (cqlParser.T__46 - 35)) | (1 << (cqlParser.T__47 - 35)) | (1 << (cqlParser.T__48 - 35)) | (1 << (cqlParser.T__49 - 35)) | (1 << (cqlParser.T__50 - 35)) | (1 << (cqlParser.T__51 - 35)) | (1 << (cqlParser.T__52 - 35)) | (1 << (cqlParser.T__53 - 35)) | (1 << (cqlParser.T__54 - 35)) | (1 << (cqlParser.T__55 - 35)) | (1 << (cqlParser.T__56 - 35)) | (1 << (cqlParser.T__57 - 35)) | (1 << (cqlParser.T__58 - 35)) | (1 << (cqlParser.T__59 - 35)) | (1 << (cqlParser.T__60 - 35)) | (1 << (cqlParser.T__61 - 35)) | (1 << (cqlParser.T__62 - 35)) | (1 << (cqlParser.T__63 - 35)) | (1 << (cqlParser.T__64 - 35)) | (1 << (cqlParser.T__65 - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (cqlParser.T__66 - 67)) | (1 << (cqlParser.T__67 - 67)) | (1 << (cqlParser.T__68 - 67)) | (1 << (cqlParser.T__73 - 67)) | (1 << (cqlParser.T__74 - 67)) | (1 << (cqlParser.T__75 - 67)) | (1 << (cqlParser.T__76 - 67)) | (1 << (cqlParser.T__78 - 67)) | (1 << (cqlParser.T__79 - 67)) | (1 << (cqlParser.T__80 - 67)) | (1 << (cqlParser.T__81 - 67)) | (1 << (cqlParser.T__82 - 67)) | (1 << (cqlParser.T__83 - 67)) | (1 << (cqlParser.T__84 - 67)) | (1 << (cqlParser.T__85 - 67)) | (1 << (cqlParser.T__86 - 67)) | (1 << (cqlParser.T__87 - 67)) | (1 << (cqlParser.T__88 - 67)) | (1 << (cqlParser.T__89 - 67)) | (1 << (cqlParser.T__90 - 67)) | (1 << (cqlParser.T__91 - 67)) | (1 << (cqlParser.T__92 - 67)) | (1 << (cqlParser.T__93 - 67)) | (1 << (cqlParser.T__94 - 67)) | (1 << (cqlParser.T__95 - 67)) | (1 << (cqlParser.T__96 - 67)) | (1 << (cqlParser.T__97 - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (cqlParser.T__98 - 99)) | (1 << (cqlParser.T__99 - 99)) | (1 << (cqlParser.T__100 - 99)) | (1 << (cqlParser.T__101 - 99)) | (1 << (cqlParser.T__102 - 99)) | (1 << (cqlParser.T__105 - 99)) | (1 << (cqlParser.T__106 - 99)) | (1 << (cqlParser.T__107 - 99)) | (1 << (cqlParser.T__108 - 99)) | (1 << (cqlParser.T__109 - 99)) | (1 << (cqlParser.T__110 - 99)) | (1 << (cqlParser.T__111 - 99)) | (1 << (cqlParser.T__112 - 99)) | (1 << (cqlParser.T__113 - 99)) | (1 << (cqlParser.T__114 - 99)) | (1 << (cqlParser.T__118 - 99)) | (1 << (cqlParser.T__119 - 99)) | (1 << (cqlParser.T__121 - 99)) | (1 << (cqlParser.T__122 - 99)) | (1 << (cqlParser.T__123 - 99)) | (1 << (cqlParser.T__124 - 99)) | (1 << (cqlParser.T__125 - 99)) | (1 << (cqlParser.T__126 - 99)) | (1 << (cqlParser.T__127 - 99)) | (1 << (cqlParser.T__128 - 99)) | (1 << (cqlParser.T__129 - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (cqlParser.T__130 - 131)) | (1 << (cqlParser.T__131 - 131)) | (1 << (cqlParser.T__132 - 131)) | (1 << (cqlParser.T__133 - 131)) | (1 << (cqlParser.T__136 - 131)) | (1 << (cqlParser.T__137 - 131)) | (1 << (cqlParser.T__138 - 131)) | (1 << (cqlParser.T__139 - 131)) | (1 << (cqlParser.T__140 - 131)) | (1 << (cqlParser.T__141 - 131)) | (1 << (cqlParser.T__142 - 131)) | (1 << (cqlParser.T__143 - 131)) | (1 << (cqlParser.T__144 - 131)) | (1 << (cqlParser.T__145 - 131)) | (1 << (cqlParser.T__146 - 131)) | (1 << (cqlParser.T__147 - 131)) | (1 << (cqlParser.T__148 - 131)) | (1 << (cqlParser.T__149 - 131)) | (1 << (cqlParser.T__153 - 131)) | (1 << (cqlParser.T__154 - 131)) | (1 << (cqlParser.T__155 - 131)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, cqlParser.RULE_reservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__18) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (cqlParser.T__34 - 35)) | (1 << (cqlParser.T__35 - 35)) | (1 << (cqlParser.T__36 - 35)) | (1 << (cqlParser.T__40 - 35)) | (1 << (cqlParser.T__43 - 35)) | (1 << (cqlParser.T__45 - 35)) | (1 << (cqlParser.T__46 - 35)) | (1 << (cqlParser.T__47 - 35)) | (1 << (cqlParser.T__48 - 35)) | (1 << (cqlParser.T__50 - 35)) | (1 << (cqlParser.T__56 - 35)) | (1 << (cqlParser.T__57 - 35)) | (1 << (cqlParser.T__58 - 35)) | (1 << (cqlParser.T__59 - 35)) | (1 << (cqlParser.T__60 - 35)) | (1 << (cqlParser.T__61 - 35)) | (1 << (cqlParser.T__62 - 35)) | (1 << (cqlParser.T__63 - 35)) | (1 << (cqlParser.T__64 - 35)) | (1 << (cqlParser.T__65 - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (cqlParser.T__66 - 67)) | (1 << (cqlParser.T__67 - 67)) | (1 << (cqlParser.T__68 - 67)) | (1 << (cqlParser.T__74 - 67)) | (1 << (cqlParser.T__81 - 67)) | (1 << (cqlParser.T__82 - 67)) | (1 << (cqlParser.T__83 - 67)) | (1 << (cqlParser.T__84 - 67)) | (1 << (cqlParser.T__85 - 67)) | (1 << (cqlParser.T__86 - 67)) | (1 << (cqlParser.T__87 - 67)) | (1 << (cqlParser.T__88 - 67)) | (1 << (cqlParser.T__93 - 67)) | (1 << (cqlParser.T__94 - 67)) | (1 << (cqlParser.T__95 - 67)) | (1 << (cqlParser.T__96 - 67)) | (1 << (cqlParser.T__97 - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (cqlParser.T__98 - 99)) | (1 << (cqlParser.T__99 - 99)) | (1 << (cqlParser.T__100 - 99)) | (1 << (cqlParser.T__101 - 99)) | (1 << (cqlParser.T__102 - 99)) | (1 << (cqlParser.T__107 - 99)) | (1 << (cqlParser.T__111 - 99)) | (1 << (cqlParser.T__112 - 99)) | (1 << (cqlParser.T__113 - 99)) | (1 << (cqlParser.T__114 - 99)) | (1 << (cqlParser.T__121 - 99)) | (1 << (cqlParser.T__122 - 99)) | (1 << (cqlParser.T__123 - 99)) | (1 << (cqlParser.T__124 - 99)) | (1 << (cqlParser.T__125 - 99)) | (1 << (cqlParser.T__126 - 99)) | (1 << (cqlParser.T__127 - 99)) | (1 << (cqlParser.T__128 - 99)) | (1 << (cqlParser.T__129 - 99)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)) | (1 << (cqlParser.T__139 - 137)) | (1 << (cqlParser.T__142 - 137)) | (1 << (cqlParser.T__143 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__154 - 137)) | (1 << (cqlParser.T__155 - 137)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keywordIdentifier(): KeywordIdentifierContext {
		let _localctx: KeywordIdentifierContext = new KeywordIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, cqlParser.RULE_keywordIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1143;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (cqlParser.T__44 - 45)) | (1 << (cqlParser.T__49 - 45)) | (1 << (cqlParser.T__51 - 45)) | (1 << (cqlParser.T__52 - 45)) | (1 << (cqlParser.T__53 - 45)) | (1 << (cqlParser.T__54 - 45)) | (1 << (cqlParser.T__55 - 45)) | (1 << (cqlParser.T__73 - 45)) | (1 << (cqlParser.T__75 - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (cqlParser.T__76 - 77)) | (1 << (cqlParser.T__78 - 77)) | (1 << (cqlParser.T__79 - 77)) | (1 << (cqlParser.T__80 - 77)) | (1 << (cqlParser.T__89 - 77)) | (1 << (cqlParser.T__90 - 77)) | (1 << (cqlParser.T__91 - 77)) | (1 << (cqlParser.T__92 - 77)) | (1 << (cqlParser.T__105 - 77)) | (1 << (cqlParser.T__106 - 77)))) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (cqlParser.T__108 - 109)) | (1 << (cqlParser.T__109 - 109)) | (1 << (cqlParser.T__110 - 109)) | (1 << (cqlParser.T__118 - 109)) | (1 << (cqlParser.T__119 - 109)) | (1 << (cqlParser.T__130 - 109)) | (1 << (cqlParser.T__131 - 109)) | (1 << (cqlParser.T__132 - 109)) | (1 << (cqlParser.T__133 - 109)))) !== 0) || ((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (cqlParser.T__140 - 141)) | (1 << (cqlParser.T__141 - 141)) | (1 << (cqlParser.T__144 - 141)) | (1 << (cqlParser.T__148 - 141)) | (1 << (cqlParser.T__149 - 141)) | (1 << (cqlParser.T__153 - 141)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obsoleteIdentifier(): ObsoleteIdentifierContext {
		let _localctx: ObsoleteIdentifierContext = new ObsoleteIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, cqlParser.RULE_obsoleteIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__1) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (cqlParser.T__44 - 45)) | (1 << (cqlParser.T__46 - 45)) | (1 << (cqlParser.T__47 - 45)) | (1 << (cqlParser.T__57 - 45)) | (1 << (cqlParser.T__63 - 45)) | (1 << (cqlParser.T__73 - 45)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (cqlParser.T__89 - 90)) | (1 << (cqlParser.T__90 - 90)) | (1 << (cqlParser.T__91 - 90)) | (1 << (cqlParser.T__92 - 90)) | (1 << (cqlParser.T__105 - 90)) | (1 << (cqlParser.T__106 - 90)))) !== 0) || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & ((1 << (cqlParser.T__153 - 154)) | (1 << (cqlParser.T__154 - 154)) | (1 << (cqlParser.T__155 - 154)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionIdentifier(): FunctionIdentifierContext {
		let _localctx: FunctionIdentifierContext = new FunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, cqlParser.RULE_functionIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1147;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (cqlParser.T__34 - 35)) | (1 << (cqlParser.T__35 - 35)) | (1 << (cqlParser.T__36 - 35)) | (1 << (cqlParser.T__40 - 35)) | (1 << (cqlParser.T__43 - 35)) | (1 << (cqlParser.T__44 - 35)) | (1 << (cqlParser.T__45 - 35)) | (1 << (cqlParser.T__46 - 35)) | (1 << (cqlParser.T__47 - 35)) | (1 << (cqlParser.T__48 - 35)) | (1 << (cqlParser.T__49 - 35)) | (1 << (cqlParser.T__50 - 35)) | (1 << (cqlParser.T__51 - 35)) | (1 << (cqlParser.T__52 - 35)) | (1 << (cqlParser.T__53 - 35)) | (1 << (cqlParser.T__54 - 35)) | (1 << (cqlParser.T__55 - 35)) | (1 << (cqlParser.T__56 - 35)) | (1 << (cqlParser.T__57 - 35)) | (1 << (cqlParser.T__58 - 35)) | (1 << (cqlParser.T__59 - 35)) | (1 << (cqlParser.T__60 - 35)) | (1 << (cqlParser.T__61 - 35)) | (1 << (cqlParser.T__62 - 35)) | (1 << (cqlParser.T__63 - 35)) | (1 << (cqlParser.T__64 - 35)) | (1 << (cqlParser.T__65 - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (cqlParser.T__66 - 67)) | (1 << (cqlParser.T__67 - 67)) | (1 << (cqlParser.T__68 - 67)) | (1 << (cqlParser.T__73 - 67)) | (1 << (cqlParser.T__74 - 67)) | (1 << (cqlParser.T__75 - 67)) | (1 << (cqlParser.T__76 - 67)) | (1 << (cqlParser.T__78 - 67)) | (1 << (cqlParser.T__79 - 67)) | (1 << (cqlParser.T__80 - 67)) | (1 << (cqlParser.T__81 - 67)) | (1 << (cqlParser.T__82 - 67)) | (1 << (cqlParser.T__83 - 67)) | (1 << (cqlParser.T__84 - 67)) | (1 << (cqlParser.T__85 - 67)) | (1 << (cqlParser.T__86 - 67)) | (1 << (cqlParser.T__87 - 67)) | (1 << (cqlParser.T__88 - 67)) | (1 << (cqlParser.T__89 - 67)) | (1 << (cqlParser.T__90 - 67)) | (1 << (cqlParser.T__91 - 67)) | (1 << (cqlParser.T__92 - 67)) | (1 << (cqlParser.T__93 - 67)) | (1 << (cqlParser.T__94 - 67)) | (1 << (cqlParser.T__95 - 67)) | (1 << (cqlParser.T__96 - 67)) | (1 << (cqlParser.T__97 - 67)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (cqlParser.T__98 - 99)) | (1 << (cqlParser.T__99 - 99)) | (1 << (cqlParser.T__100 - 99)) | (1 << (cqlParser.T__101 - 99)) | (1 << (cqlParser.T__102 - 99)) | (1 << (cqlParser.T__105 - 99)) | (1 << (cqlParser.T__106 - 99)) | (1 << (cqlParser.T__107 - 99)) | (1 << (cqlParser.T__108 - 99)) | (1 << (cqlParser.T__109 - 99)) | (1 << (cqlParser.T__110 - 99)) | (1 << (cqlParser.T__111 - 99)) | (1 << (cqlParser.T__112 - 99)) | (1 << (cqlParser.T__113 - 99)) | (1 << (cqlParser.T__114 - 99)) | (1 << (cqlParser.T__118 - 99)) | (1 << (cqlParser.T__119 - 99)) | (1 << (cqlParser.T__121 - 99)) | (1 << (cqlParser.T__122 - 99)) | (1 << (cqlParser.T__123 - 99)) | (1 << (cqlParser.T__124 - 99)) | (1 << (cqlParser.T__125 - 99)) | (1 << (cqlParser.T__126 - 99)) | (1 << (cqlParser.T__127 - 99)) | (1 << (cqlParser.T__128 - 99)) | (1 << (cqlParser.T__129 - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (cqlParser.T__130 - 131)) | (1 << (cqlParser.T__131 - 131)) | (1 << (cqlParser.T__132 - 131)) | (1 << (cqlParser.T__133 - 131)) | (1 << (cqlParser.T__137 - 131)) | (1 << (cqlParser.T__138 - 131)) | (1 << (cqlParser.T__140 - 131)) | (1 << (cqlParser.T__141 - 131)) | (1 << (cqlParser.T__142 - 131)) | (1 << (cqlParser.T__143 - 131)) | (1 << (cqlParser.T__144 - 131)) | (1 << (cqlParser.T__145 - 131)) | (1 << (cqlParser.T__146 - 131)) | (1 << (cqlParser.T__147 - 131)) | (1 << (cqlParser.T__148 - 131)) | (1 << (cqlParser.T__149 - 131)) | (1 << (cqlParser.T__153 - 131)) | (1 << (cqlParser.T__154 - 131)) | (1 << (cqlParser.T__155 - 131)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNameIdentifier(): TypeNameIdentifierContext {
		let _localctx: TypeNameIdentifierContext = new TypeNameIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, cqlParser.RULE_typeNameIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__89 || _la === cqlParser.T__90 || _la === cqlParser.T__154 || _la === cqlParser.T__155)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referentialIdentifier(): ReferentialIdentifierContext {
		let _localctx: ReferentialIdentifierContext = new ReferentialIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, cqlParser.RULE_referentialIdentifier);
		try {
			this.state = 1153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1151;
				this.identifier();
				}
				break;
			case cqlParser.T__0:
			case cqlParser.T__1:
			case cqlParser.T__2:
			case cqlParser.T__3:
			case cqlParser.T__4:
			case cqlParser.T__5:
			case cqlParser.T__6:
			case cqlParser.T__7:
			case cqlParser.T__8:
			case cqlParser.T__9:
			case cqlParser.T__11:
			case cqlParser.T__12:
			case cqlParser.T__17:
			case cqlParser.T__19:
			case cqlParser.T__26:
			case cqlParser.T__27:
			case cqlParser.T__28:
			case cqlParser.T__29:
			case cqlParser.T__44:
			case cqlParser.T__49:
			case cqlParser.T__51:
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__89:
			case cqlParser.T__90:
			case cqlParser.T__91:
			case cqlParser.T__92:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__108:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__118:
			case cqlParser.T__119:
			case cqlParser.T__130:
			case cqlParser.T__131:
			case cqlParser.T__132:
			case cqlParser.T__133:
			case cqlParser.T__140:
			case cqlParser.T__141:
			case cqlParser.T__144:
			case cqlParser.T__148:
			case cqlParser.T__149:
			case cqlParser.T__153:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1152;
				this.keywordIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referentialOrTypeNameIdentifier(): ReferentialOrTypeNameIdentifierContext {
		let _localctx: ReferentialOrTypeNameIdentifierContext = new ReferentialOrTypeNameIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, cqlParser.RULE_referentialOrTypeNameIdentifier);
		try {
			this.state = 1157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1155;
				this.referentialIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1156;
				this.typeNameIdentifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext {
		let _localctx: IdentifierOrFunctionIdentifierContext = new IdentifierOrFunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, cqlParser.RULE_identifierOrFunctionIdentifier);
		try {
			this.state = 1161;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1159;
				this.identifier();
				}
				break;
			case cqlParser.T__0:
			case cqlParser.T__1:
			case cqlParser.T__2:
			case cqlParser.T__3:
			case cqlParser.T__4:
			case cqlParser.T__5:
			case cqlParser.T__6:
			case cqlParser.T__7:
			case cqlParser.T__8:
			case cqlParser.T__9:
			case cqlParser.T__11:
			case cqlParser.T__12:
			case cqlParser.T__17:
			case cqlParser.T__18:
			case cqlParser.T__19:
			case cqlParser.T__20:
			case cqlParser.T__23:
			case cqlParser.T__24:
			case cqlParser.T__26:
			case cqlParser.T__27:
			case cqlParser.T__28:
			case cqlParser.T__29:
			case cqlParser.T__34:
			case cqlParser.T__35:
			case cqlParser.T__36:
			case cqlParser.T__40:
			case cqlParser.T__43:
			case cqlParser.T__44:
			case cqlParser.T__45:
			case cqlParser.T__46:
			case cqlParser.T__47:
			case cqlParser.T__48:
			case cqlParser.T__49:
			case cqlParser.T__50:
			case cqlParser.T__51:
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
			case cqlParser.T__56:
			case cqlParser.T__57:
			case cqlParser.T__58:
			case cqlParser.T__59:
			case cqlParser.T__60:
			case cqlParser.T__61:
			case cqlParser.T__62:
			case cqlParser.T__63:
			case cqlParser.T__64:
			case cqlParser.T__65:
			case cqlParser.T__66:
			case cqlParser.T__67:
			case cqlParser.T__68:
			case cqlParser.T__73:
			case cqlParser.T__74:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__81:
			case cqlParser.T__82:
			case cqlParser.T__83:
			case cqlParser.T__84:
			case cqlParser.T__85:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
			case cqlParser.T__89:
			case cqlParser.T__90:
			case cqlParser.T__91:
			case cqlParser.T__92:
			case cqlParser.T__93:
			case cqlParser.T__94:
			case cqlParser.T__95:
			case cqlParser.T__96:
			case cqlParser.T__97:
			case cqlParser.T__98:
			case cqlParser.T__99:
			case cqlParser.T__100:
			case cqlParser.T__101:
			case cqlParser.T__102:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__107:
			case cqlParser.T__108:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__111:
			case cqlParser.T__112:
			case cqlParser.T__113:
			case cqlParser.T__114:
			case cqlParser.T__118:
			case cqlParser.T__119:
			case cqlParser.T__121:
			case cqlParser.T__122:
			case cqlParser.T__123:
			case cqlParser.T__124:
			case cqlParser.T__125:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__128:
			case cqlParser.T__129:
			case cqlParser.T__130:
			case cqlParser.T__131:
			case cqlParser.T__132:
			case cqlParser.T__133:
			case cqlParser.T__137:
			case cqlParser.T__138:
			case cqlParser.T__140:
			case cqlParser.T__141:
			case cqlParser.T__142:
			case cqlParser.T__143:
			case cqlParser.T__144:
			case cqlParser.T__145:
			case cqlParser.T__146:
			case cqlParser.T__147:
			case cqlParser.T__148:
			case cqlParser.T__149:
			case cqlParser.T__153:
			case cqlParser.T__154:
			case cqlParser.T__155:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1160;
				this.functionIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, cqlParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1163;
			_la = this._input.LA(1);
			if (!(((((_la - 158)) & ~0x1F) === 0 && ((1 << (_la - 158)) & ((1 << (cqlParser.QUOTEDIDENTIFIER - 158)) | (1 << (cqlParser.IDENTIFIER - 158)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 158)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalConstant(): ExternalConstantContext {
		let _localctx: ExternalConstantContext = new ExternalConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, cqlParser.RULE_externalConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this.match(cqlParser.T__156);
			this.state = 1168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				{
				this.state = 1166;
				this.identifier();
				}
				break;
			case cqlParser.STRING:
				{
				this.state = 1167;
				this.match(cqlParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, cqlParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1170;
			this.expression(0);
			this.state = 1175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 1171;
				this.match(cqlParser.T__14);
				this.state = 1172;
				this.expression(0);
				}
				}
				this.state = 1177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quantity(): QuantityContext {
		let _localctx: QuantityContext = new QuantityContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, cqlParser.RULE_quantity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1178;
			this.match(cqlParser.NUMBER);
			this.state = 1180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1179;
				this.unit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let _localctx: UnitContext = new UnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, cqlParser.RULE_unit);
		try {
			this.state = 1185;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__81:
			case cqlParser.T__82:
			case cqlParser.T__83:
			case cqlParser.T__84:
			case cqlParser.T__85:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1182;
				this.dateTimePrecision();
				}
				break;
			case cqlParser.T__93:
			case cqlParser.T__94:
			case cqlParser.T__95:
			case cqlParser.T__96:
			case cqlParser.T__97:
			case cqlParser.T__98:
			case cqlParser.T__99:
			case cqlParser.T__100:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1183;
				this.pluralDateTimePrecision();
				}
				break;
			case cqlParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1184;
				this.match(cqlParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 61:
			return this.simplePath_sempred(_localctx as SimplePathContext, predIndex);

		case 63:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 67:
			return this.expressionTerm_sempred(_localctx as ExpressionTermContext, predIndex);
		}
		return true;
	}
	private simplePath_sempred(_localctx: SimplePathContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 6);

		case 5:
			return this.precpred(this._ctx, 5);

		case 6:
			return this.precpred(this._ctx, 4);

		case 7:
			return this.precpred(this._ctx, 3);

		case 8:
			return this.precpred(this._ctx, 2);

		case 9:
			return this.precpred(this._ctx, 1);

		case 10:
			return this.precpred(this._ctx, 16);

		case 11:
			return this.precpred(this._ctx, 15);

		case 12:
			return this.precpred(this._ctx, 11);
		}
		return true;
	}
	private expressionTerm_sempred(_localctx: ExpressionTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 7);

		case 14:
			return this.precpred(this._ctx, 6);

		case 15:
			return this.precpred(this._ctx, 5);

		case 16:
			return this.precpred(this._ctx, 21);

		case 17:
			return this.precpred(this._ctx, 20);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xAB\u04A6\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x05\x02\xDE\n\x02\x03\x03\x05\x03\xE1\n\x03\x03\x03\x07\x03\xE4\n" +
		"\x03\f\x03\x0E\x03\xE7\v\x03\x03\x03\x07\x03\xEA\n\x03\f\x03\x0E\x03\xED" +
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xF5\n\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xFB\n\x05\x03\x05\x03\x05\x05" +
		"\x05\xFF\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0105\n\x06\x03" +
		"\x06\x03\x06\x05\x06\u0109\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x05" +
		"\t\u0110\n\t\x03\t\x03\t\x03\t\x05\t\u0115\n\t\x03\t\x03\t\x05\t\u0119" +
		"\n\t\x03\n\x05\n\u011C\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0124" +
		"\n\n\x03\v\x05\v\u0127\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u012F" +
		"\n\v\x03\v\x05\v\u0132\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0139\n" +
		"\f\f\f\x0E\f\u013C\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\u0143\n\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u014A\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0153\n\x0F\x03\x10\x05\x10" +
		"\u0156\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07" +
		"\x10\u015F\n\x10\f\x10\x0E\x10\u0162\v\x10\x03\x10\x03\x10\x05\x10\u0166" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\u016B\n\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x05\x16\u017C\n\x16\x03\x17\x03\x17\x03\x17" +
		"\x07\x17\u0181\n\x17\f\x17\x0E\x17\u0184\v\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0199" +
		"\n\x1B\f\x1B\x0E\x1B\u019C\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01A8\n\x1D\f\x1D\x0E" +
		"\x1D\u01AB\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01B2" +
		"\n\x1E\x03\x1F\x03\x1F\x05\x1F\u01B6\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03 \x05 \u01C0\n \x03 \x03 \x03!\x03!\x03\"\x03\"" +
		"\x05\"\u01C8\n\"\x03\"\x05\"\u01CB\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x07\"\u01D3\n\"\f\"\x0E\"\u01D6\v\"\x05\"\u01D8\n\"\x03\"\x03\"\x03" +
		"\"\x05\"\u01DD\n\"\x03\"\x03\"\x03\"\x05\"\u01E2\n\"\x03#\x03#\x03#\x03" +
		"$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01EF\n%\x03&\x03&\x03&\x03" +
		"\'\x03\'\x03(\x03(\x05(\u01F8\n(\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x03*\x03+\x03+\x03+\x03+\x05+\u0208\n+\x03+\x03+\x03+\x03+\x03" +
		"+\x05+\u020F\n+\x03+\x05+\u0212\n+\x03+\x03+\x03,\x03,\x03-\x03-\x03." +
		"\x03.\x03/\x03/\x05/\u021E\n/\x030\x030\x031\x031\x051\u0224\n1\x031\x07" +
		"1\u0227\n1\f1\x0E1\u022A\v1\x031\x051\u022D\n1\x031\x031\x051\u0231\n" +
		"1\x031\x051\u0234\n1\x032\x052\u0237\n2\x032\x032\x032\x072\u023C\n2\f" +
		"2\x0E2\u023F\v2\x033\x033\x033\x033\x073\u0245\n3\f3\x0E3\u0248\v3\x03" +
		"4\x034\x034\x034\x035\x035\x035\x036\x036\x056\u0253\n6\x036\x036\x03" +
		"7\x037\x057\u0259\n7\x037\x037\x057\u025D\n7\x037\x037\x037\x038\x038" +
		"\x038\x038\x038\x038\x038\x058\u0269\n8\x039\x039\x039\x039\x039\x039" +
		"\x079\u0271\n9\f9\x0E9\u0274\v9\x059\u0276\n9\x03:\x03:\x03;\x03;\x05" +
		";\u027C\n;\x03<\x03<\x03<\x07<\u0281\n<\f<\x0E<\u0284\v<\x03<\x03<\x03" +
		"=\x03=\x03=\x07=\u028B\n=\f=\x0E=\u028E\v=\x03=\x03=\x03>\x03>\x03?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x07?\u029F\n?\f?\x0E?\u02A2" +
		"\v?\x03@\x03@\x05@\u02A6\n@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u02B7\nA\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u02C7\nA\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u02D6\n" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x05A\u02E8\nA\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u02F0\nA" +
		"\x03A\x03A\x03A\x03A\x03A\x07A\u02F7\nA\fA\x0EA\u02FA\vA\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x03C\x05C\u0303\nC\x03D\x03D\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x05E\u030E\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u033F\nE\x03" +
		"E\x06E\u0342\nE\rE\x0EE\u0343\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E" +
		"\x03E\x03E\x03E\x05E\u0351\nE\x05E\u0353\nE\x05E\u0355\nE\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x07E\u0368\nE\fE\x0EE\u036B\vE\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03" +
		"G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x05K\u037D\nK\x03K\x03K\x03" +
		"K\x05K\u0382\nK\x03L\x05L\u0385\nL\x03L\x03L\x03L\x05L\u038A\nL\x05L\u038C" +
		"\nL\x03M\x05M\u038F\nM\x03M\x03M\x05M\u0393\nM\x03M\x03M\x05M\u0397\n" +
		"M\x03M\x05M\u039A\nM\x03M\x05M\u039D\nM\x03M\x03M\x05M\u03A1\nM\x03M\x05" +
		"M\u03A4\nM\x03M\x05M\u03A7\nM\x03M\x05M\u03AA\nM\x03M\x03M\x05M\u03AE" +
		"\nM\x03M\x05M\u03B1\nM\x03M\x05M\u03B4\nM\x03M\x03M\x05M\u03B8\nM\x03" +
		"M\x05M\u03BB\nM\x03M\x05M\u03BE\nM\x03M\x05M\u03C1\nM\x03M\x03M\x03M\x03" +
		"M\x05M\u03C7\nM\x03M\x03M\x05M\u03CB\nM\x03M\x05M\u03CE\nM\x03M\x03M\x05" +
		"M\u03D2\nM\x03M\x05M\u03D5\nM\x03M\x03M\x05M\u03D9\nM\x03M\x03M\x05M\u03DD" +
		"\nM\x05M\u03DF\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x05N\u03EE\nN\x03O\x03O\x05O\u03F2\nO\x03P\x03P\x03P\x05P" +
		"\u03F7\nP\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0400\nQ\x03R\x03R\x03" +
		"R\x05R\u0405\nR\x03R\x03R\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x03T\x05T\u0417\nT\x03U\x03U\x03U\x03U\x03U\x03" +
		"U\x03U\x03V\x05V\u0421\nV\x03V\x03V\x03V\x03V\x03V\x07V\u0428\nV\fV\x0E" +
		"V\u042B\vV\x05V\u042D\nV\x03V\x03V\x03W\x03W\x03W\x03W\x03X\x03X\x03X" +
		"\x03X\x03X\x03X\x07X\u043B\nX\fX\x0EX\u043E\vX\x05X\u0440\nX\x03X\x03" +
		"X\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u044D\nZ\x05Z\u044F" +
		"\nZ\x03Z\x03Z\x03Z\x03Z\x07Z\u0455\nZ\fZ\x0EZ\u0458\vZ\x05Z\u045A\nZ\x03" +
		"Z\x03Z\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u0466\n\\\x03" +
		"]\x03]\x03]\x03]\x03]\x07]\u046D\n]\f]\x0E]\u0470\v]\x03]\x03]\x05]\u0474" +
		"\n]\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03a\x03b\x03b\x03c\x03c\x03d\x03" +
		"d\x05d\u0484\nd\x03e\x03e\x05e\u0488\ne\x03f\x03f\x05f\u048C\nf\x03g\x03" +
		"g\x03h\x03h\x03h\x05h\u0493\nh\x03i\x03i\x03i\x07i\u0498\ni\fi\x0Ei\u049B" +
		"\vi\x03j\x03j\x05j\u049F\nj\x03k\x03k\x03k\x05k\u04A4\nk\x03k\x02\x02" +
		"\x05|\x80\x88l\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
		"\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
		"\x02&\x03\x02\b\t\x03\x02+-\x03\x0212\x03\x027:\x04\x02\x18\x19HI\x04" +
		"\x02,-JK\x04\x02++LL\x03\x02MN\x03\x02PS\x03\x02=?\x04\x02;;@@\x03\x02" +
		"T[\x03\x02`g\x03\x02jk\x03\x02lm\x03\x02tu\x04\x0222\x80\x80\x03\x02\x81" +
		"\x82\x03\x02wz\x04\x02jk{{\x03\x02\x85\x86\x03\x02\x87\x88\x03\x02\x89" +
		"\x8A\x03\x02\x8C\x8D\x03\x02\x8F\x91\x03\x02\x94\x95\x03\x02>?\x04\x02" +
		"!!((\x04\x02\"\"**\x11\x02\x03\f\x0E\x0F\x14\x17\x1A\x1B\x1D %\'++.GL" +
		"OQiluyz|\x88\x8B\x98\x9C\x9E\x15\x02\x15\x15\x17\x17\x1A\x1B%\'++..03" +
		"55;GMMT[`innru|\x84\x8B\x8E\x91\x92\x94\x96\x9D\x9E\x16\x02\x03\f\x0E" +
		"\x0F\x14\x14\x16\x16\x1D //446:LLNOQS\\_lmoqyz\x85\x88\x8F\x90\x93\x93" +
		"\x97\x98\x9C\x9C\r\x02\x04\x04\x14\x14\x16\x16//12<<BBLL\\_lm\x9C\x9E" +
		"\x12\x02\x03\f\x0E\x0F\x14\x17\x1A\x1B\x1D %\'++.GLOQiluyz|\x88\x8C\x8D" +
		"\x8F\x98\x9C\x9E\x04\x02\\]\x9D\x9E\x04\x02\xA0\xA0\xA5\xA6\x02\u050C" +
		"\x02\xDD\x03\x02\x02\x02\x04\xE0\x03\x02\x02\x02\x06\xF0\x03\x02\x02\x02" +
		"\b\xF6\x03\x02\x02\x02\n\u0100\x03\x02\x02\x02\f\u010A\x03\x02\x02\x02" +
		"\x0E\u010C\x03\x02\x02\x02\x10\u010F\x03\x02\x02\x02\x12\u011B\x03\x02" +
		"\x02\x02\x14\u0126\x03\x02\x02\x02\x16\u0133\x03\x02\x02\x02\x18\u0142" +
		"\x03\x02\x02\x02\x1A\u0146\x03\x02\x02\x02\x1C\u0149\x03\x02\x02\x02\x1E" +
		"\u0155\x03\x02\x02\x02 \u016A\x03\x02\x02\x02\"\u016E\x03\x02\x02\x02" +
		"$\u0170\x03\x02\x02\x02&\u0172\x03\x02\x02\x02(\u0174\x03\x02\x02\x02" +
		"*\u017B\x03\x02\x02\x02,\u0182\x03\x02\x02\x02.\u0187\x03\x02\x02\x02" +
		"0\u0189\x03\x02\x02\x022\u018E\x03\x02\x02\x024\u0193\x03\x02\x02\x02" +
		"6\u019F\x03\x02\x02\x028\u01A2\x03\x02\x02\x02:\u01B1\x03\x02\x02\x02" +
		"<\u01B3\x03\x02\x02\x02>\u01BB\x03\x02\x02\x02@\u01C3\x03\x02\x02\x02" +
		"B\u01C5\x03\x02\x02\x02D\u01E3\x03\x02\x02\x02F\u01E6\x03\x02\x02\x02" +
		"H\u01EE\x03\x02\x02\x02J\u01F0\x03\x02\x02\x02L\u01F3\x03\x02\x02\x02" +
		"N\u01F7\x03\x02\x02\x02P\u01F9\x03\x02\x02\x02R\u01FE\x03\x02\x02\x02" +
		"T\u0203\x03\x02\x02\x02V\u0215\x03\x02\x02\x02X\u0217\x03\x02\x02\x02" +
		"Z\u0219\x03\x02\x02\x02\\\u021D\x03\x02\x02\x02^\u021F\x03\x02\x02\x02" +
		"`\u0221\x03\x02\x02\x02b\u0236\x03\x02\x02\x02d\u0240\x03\x02\x02\x02" +
		"f\u0249\x03\x02\x02\x02h\u024D\x03\x02\x02\x02j\u0250\x03\x02\x02\x02" +
		"l\u0256\x03\x02\x02\x02n\u0261\x03\x02\x02\x02p\u026A\x03\x02\x02\x02" +
		"r\u0277\x03\x02\x02\x02t\u0279\x03\x02\x02\x02v\u0282\x03\x02\x02\x02" +
		"x\u028C\x03\x02\x02\x02z\u0291\x03\x02\x02\x02|\u0293\x03\x02\x02\x02" +
		"~\u02A5\x03\x02\x02\x02\x80\u02C6\x03\x02\x02\x02\x82\u02FB\x03\x02\x02" +
		"\x02\x84\u0302\x03\x02\x02\x02\x86\u0304\x03\x02\x02\x02\x88\u0354\x03" +
		"\x02\x02\x02\x8A\u036C\x03\x02\x02\x02\x8C\u0371\x03\x02\x02\x02\x8E\u0374" +
		"\x03\x02\x02\x02\x90\u0376\x03\x02\x02\x02\x92\u0378\x03\x02\x02\x02\x94" +
		"\u0381\x03\x02\x02\x02\x96\u038B\x03\x02\x02\x02\x98\u03DE\x03\x02\x02" +
		"\x02\x9A\u03ED\x03\x02\x02\x02\x9C\u03F1\x03\x02\x02\x02\x9E\u03F3\x03" +
		"\x02\x02\x02\xA0\u03FF\x03\x02\x02\x02\xA2\u0401\x03\x02\x02\x02\xA4\u0408" +
		"\x03\x02\x02\x02\xA6\u0416\x03\x02\x02\x02\xA8\u0418\x03\x02\x02\x02\xAA" +
		"\u0420\x03\x02\x02\x02\xAC\u0430\x03\x02\x02\x02\xAE\u0434\x03\x02\x02" +
		"\x02\xB0\u0443\x03\x02\x02\x02\xB2\u044E\x03\x02\x02\x02\xB4\u045D\x03" +
		"\x02\x02\x02\xB6\u0460\x03\x02\x02\x02\xB8\u0467\x03\x02\x02\x02\xBA\u0475" +
		"\x03\x02\x02\x02\xBC\u0477\x03\x02\x02\x02\xBE\u0479\x03\x02\x02\x02\xC0" +
		"\u047B\x03\x02\x02\x02\xC2\u047D\x03\x02\x02\x02\xC4\u047F\x03\x02\x02" +
		"\x02\xC6\u0483\x03\x02\x02\x02\xC8\u0487\x03\x02\x02\x02\xCA\u048B\x03" +
		"\x02\x02\x02\xCC\u048D\x03\x02\x02\x02\xCE\u048F\x03\x02\x02\x02\xD0\u0494" +
		"\x03\x02\x02\x02\xD2\u049C\x03\x02\x02\x02\xD4\u04A3\x03\x02\x02\x02\xD6" +
		"\xDE\x05\b\x05\x02\xD7\xDE\x05\n\x06\x02\xD8\xDE\x05\x12\n\x02\xD9\xDE" +
		"\x05\x14\v\x02\xDA\xDE\x05\x1C\x0F\x02\xDB\xDE\x05\x1E\x10\x02\xDC\xDE" +
		"\x05\x10\t\x02\xDD\xD6\x03\x02\x02\x02\xDD\xD7\x03\x02\x02\x02\xDD\xD8" +
		"\x03\x02\x02\x02\xDD\xD9\x03\x02\x02\x02\xDD\xDA\x03\x02\x02\x02\xDD\xDB" +
		"\x03\x02\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\x03\x03\x02\x02\x02\xDF\xE1" +
		"\x05\x06\x04\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE5" +
		"\x03\x02\x02\x02\xE2\xE4\x05\x02\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE7" +
		"\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xEB" +
		"\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEA\x05:\x1E\x02\xE9\xE8" +
		"\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC" +
		"\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xEE\xEF" +
		"\x07\x02\x02\x03\xEF\x05\x03\x02\x02\x02\xF0\xF1\x07\x03\x02\x02\xF1\xF4" +
		"\x05v<\x02\xF2\xF3\x07\x04\x02\x02\xF3\xF5\x05&\x14\x02\xF4\xF2\x03\x02" +
		"\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\x07\x03\x02\x02\x02\xF6\xF7\x07\x05" +
		"\x02\x02\xF7\xFA\x05v<\x02\xF8\xF9\x07\x04\x02\x02\xF9\xFB\x05&\x14\x02" +
		"\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02" +
		"\xFC\xFD\x07\x06\x02\x02\xFD\xFF\x05\f\x07\x02\xFE\xFC\x03\x02\x02\x02" +
		"\xFE\xFF\x03\x02\x02\x02\xFF\t\x03\x02\x02\x02\u0100\u0101\x07\x07\x02" +
		"\x02\u0101\u0104\x05v<\x02\u0102\u0103\x07\x04\x02\x02\u0103\u0105\x05" +
		"&\x14\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105" +
		"\u0108\x03\x02\x02\x02\u0106\u0107\x07\x06\x02\x02\u0107\u0109\x05\f\x07" +
		"\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\v\x03" +
		"\x02\x02\x02\u010A\u010B\x05\xCCg\x02\u010B\r\x03\x02\x02\x02\u010C\u010D" +
		"\t\x02\x02\x02\u010D\x0F\x03\x02\x02\x02\u010E\u0110\x05\x0E\b\x02\u010F" +
		"\u010E\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x03\x02" +
		"\x02\x02\u0111\u0112\x07\n\x02\x02\u0112\u0114\x05\xCCg\x02\u0113\u0115" +
		"\x05*\x16\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02" +
		"\u0115\u0118\x03\x02\x02\x02\u0116\u0117\x07\v\x02\x02\u0117\u0119\x05" +
		"\x80A\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119" +
		"\x11\x03\x02\x02\x02\u011A\u011C\x05\x0E\b\x02\u011B\u011A\x03\x02\x02" +
		"\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E" +
		"\x07\f\x02\x02\u011E\u011F\x05\xCCg\x02\u011F\u0120\x07\r\x02\x02\u0120" +
		"\u0123\x05\"\x12\x02\u0121\u0122\x07\x04\x02\x02\u0122\u0124\x05&\x14" +
		"\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\x13" +
		"\x03\x02\x02\x02\u0125\u0127\x05\x0E\b\x02\u0126\u0125\x03\x02\x02\x02" +
		"\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x07" +
		"\x0E\x02\x02\u0129\u012A\x05\xCCg\x02\u012A\u012B\x07\r\x02\x02\u012B" +
		"\u012E\x05$\x13\x02\u012C\u012D\x07\x04\x02\x02\u012D\u012F\x05&\x14\x02" +
		"\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x03" +
		"\x02\x02\x02\u0130\u0132\x05\x16\f\x02\u0131\u0130\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\x15\x03\x02\x02\x02\u0133\u0134\x07\x0F\x02" +
		"\x02\u0134\u0135\x07\x10\x02\x02\u0135\u013A\x05\x18\r\x02\u0136\u0137" +
		"\x07\x11\x02\x02\u0137\u0139\x05\x18\r\x02\u0138\u0136\x03\x02\x02\x02" +
		"\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03" +
		"\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D" +
		"\u013E\x07\x12\x02\x02\u013E\x17\x03\x02\x02\x02\u013F\u0140\x05\x1A\x0E" +
		"\x02\u0140\u0141\x07\x13\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u013F" +
		"\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02" +
		"\u0144\u0145\x05\xCCg\x02\u0145\x19\x03\x02\x02\x02\u0146\u0147\x05\xCC" +
		"g\x02\u0147\x1B\x03\x02\x02\x02\u0148\u014A\x05\x0E\b\x02\u0149\u0148" +
		"\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u014C\x07\x14\x02\x02\u014C\u014D\x05\xCCg\x02\u014D\u014E\x07" +
		"\r\x02\x02\u014E\u014F\x05(\x15\x02\u014F\u0150\x07\x15\x02\x02\u0150" +
		"\u0152\x05\x18\r\x02\u0151\u0153\x05\xB4[\x02\u0152\u0151\x03\x02\x02" +
		"\x02\u0152\u0153\x03\x02\x02\x02\u0153\x1D\x03\x02\x02\x02\u0154\u0156" +
		"\x05\x0E\b\x02\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02" +
		"\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x07\x16\x02\x02\u0158\u0159\x05" +
		"\xCCg\x02\u0159\u015A\x07\r\x02\x02\u015A\u015B\x07\x10\x02\x02\u015B" +
		"\u0160\x05 \x11\x02\u015C\u015D\x07\x11\x02\x02\u015D\u015F\x05 \x11\x02" +
		"\u015E\u015C\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u015E\x03" +
		"\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162" +
		"\u0160\x03\x02\x02\x02\u0163\u0165\x07\x12\x02\x02\u0164\u0166\x05\xB4" +
		"[\x02\u0165\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\x1F" +
		"\x03\x02\x02\x02\u0167\u0168\x05\x1A\x0E\x02\u0168\u0169\x07\x13\x02\x02" +
		"\u0169\u016B\x03\x02\x02\x02\u016A\u0167\x03\x02\x02\x02\u016A\u016B\x03" +
		"\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x05\xCCg\x02\u016D" +
		"!\x03\x02\x02\x02\u016E\u016F\x07\xA7\x02\x02\u016F#\x03\x02\x02\x02\u0170" +
		"\u0171\x07\xA7\x02\x02\u0171%\x03\x02\x02\x02\u0172\u0173\x07\xA7\x02" +
		"\x02\u0173\'\x03\x02\x02\x02\u0174\u0175\x07\xA7\x02\x02\u0175)\x03\x02" +
		"\x02\x02\u0176\u017C\x05,\x17\x02\u0177\u017C\x050\x19\x02\u0178\u017C" +
		"\x052\x1A\x02\u0179\u017C\x054\x1B\x02\u017A\u017C\x058\x1D\x02\u017B" +
		"\u0176\x03\x02\x02\x02\u017B\u0177\x03\x02\x02\x02\u017B\u0178\x03\x02" +
		"\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017A\x03\x02\x02\x02\u017C" +
		"+\x03\x02\x02\x02\u017D\u017E\x05^0\x02\u017E\u017F\x07\x13\x02\x02\u017F" +
		"\u0181\x03\x02\x02\x02\u0180\u017D\x03\x02\x02\x02\u0181\u0184\x03\x02" +
		"\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183" +
		"\u0185\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0186\x05\xC8" +
		"e\x02\u0186-\x03\x02\x02\x02\u0187\u0188\x05\xCCg\x02\u0188/\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0189\u018A\x07\x17\x02\x02\u018A\u018B\x07\x18\x02\x02\u018B\u018C" +
		"\x05*\x16\x02\u018C\u018D\x07\x19\x02\x02\u018D1\x03\x02\x02\x02\u018E" +
		"\u018F\x07\x1A\x02\x02\u018F\u0190\x07\x18\x02\x02\u0190\u0191\x05*\x16" +
		"\x02\u0191\u0192\x07\x19\x02\x02\u01923\x03\x02\x02\x02\u0193\u0194\x07" +
		"\x1B\x02\x02\u0194\u0195\x07\x10\x02\x02\u0195\u019A\x056\x1C\x02\u0196" +
		"\u0197\x07\x11\x02\x02\u0197\u0199\x056\x1C\x02\u0198\u0196\x03\x02\x02" +
		"\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B" +
		"\x03\x02\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02" +
		"\u019D\u019E\x07\x12\x02\x02\u019E5\x03\x02\x02\x02\u019F\u01A0\x05\xC6" +
		"d\x02\u01A0\u01A1\x05*\x16\x02\u01A17\x03\x02\x02\x02\u01A2\u01A3\x07" +
		"\x1C\x02\x02\u01A3\u01A4\x07\x18\x02\x02\u01A4\u01A9\x05*\x16\x02\u01A5" +
		"\u01A6\x07\x11\x02\x02\u01A6\u01A8\x05*\x16\x02\u01A7\u01A5\x03\x02\x02" +
		"\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA" +
		"\x03\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02" +
		"\u01AC\u01AD\x07\x19\x02\x02\u01AD9\x03\x02\x02\x02\u01AE\u01B2\x05<\x1F" +
		"\x02\u01AF\u01B2\x05> \x02\u01B0\u01B2\x05B\"\x02\u01B1\u01AE\x03\x02" +
		"\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2" +
		";\x03\x02\x02\x02\u01B3\u01B5\x07\x1D\x02\x02\u01B4\u01B6\x05\x0E\b\x02" +
		"\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03" +
		"\x02\x02\x02\u01B7\u01B8\x05\xCCg\x02\u01B8\u01B9\x07\r\x02\x02\u01B9" +
		"\u01BA\x05\x80A\x02\u01BA=\x03\x02\x02\x02\u01BB\u01BF\x07\x1E\x02\x02" +
		"\u01BC\u01BD\x05.\x18\x02\u01BD\u01BE\x07\x13\x02\x02\u01BE\u01C0\x03" +
		"\x02\x02\x02\u01BF\u01BC\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0" +
		"\u01C1\x03\x02\x02\x02\u01C1\u01C2\x05\xCCg\x02\u01C2?\x03\x02\x02\x02" +
		"\u01C3\u01C4\x07\x1F\x02\x02\u01C4A\x03\x02\x02\x02\u01C5\u01C7\x07\x1D" +
		"\x02\x02\u01C6\u01C8\x05\x0E\b\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8" +
		"\x03\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01CB\x05@!\x02\u01CA" +
		"\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\x03\x02" +
		"\x02\x02\u01CC\u01CD\x07 \x02\x02\u01CD\u01CE\x05\xCAf\x02\u01CE\u01D7" +
		"\x07!\x02\x02\u01CF\u01D4\x05D#\x02\u01D0\u01D1\x07\x11\x02\x02\u01D1" +
		"\u01D3\x05D#\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02" +
		"\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D8\x03" +
		"\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01CF\x03\x02\x02\x02\u01D7" +
		"\u01D8\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DC\x07\"\x02" +
		"\x02\u01DA\u01DB\x07#\x02\x02\u01DB\u01DD\x05*\x16\x02\u01DC\u01DA\x03" +
		"\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE" +
		"\u01E1\x07\r\x02\x02\u01DF\u01E2\x05F$\x02\u01E0\u01E2\x07$\x02\x02\u01E1" +
		"\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2C\x03\x02\x02" +
		"\x02\u01E3\u01E4\x05\xC6d\x02\u01E4\u01E5\x05*\x16\x02\u01E5E\x03\x02" +
		"\x02\x02\u01E6\u01E7\x05\x80A\x02\u01E7G\x03\x02\x02\x02\u01E8\u01EF\x05" +
		"T+\x02\u01E9\u01EF\x05x=\x02\u01EA\u01EB\x07!\x02\x02\u01EB\u01EC\x05" +
		"\x80A\x02\u01EC\u01ED\x07\"\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE" +
		"\u01E8\x03\x02\x02\x02\u01EE\u01E9\x03\x02\x02\x02\u01EE\u01EA\x03\x02" +
		"\x02\x02\u01EFI\x03\x02\x02\x02\u01F0\u01F1\x05H%\x02\u01F1\u01F2\x05" +
		"L\'\x02\u01F2K\x03\x02\x02\x02\u01F3\u01F4\x05\xCCg\x02\u01F4M\x03\x02" +
		"\x02\x02\u01F5\u01F8\x05P)\x02\u01F6\u01F8\x05R*\x02\u01F7\u01F5\x03\x02" +
		"\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8O\x03\x02\x02\x02\u01F9\u01FA" +
		"\x07%\x02\x02\u01FA\u01FB\x05J&\x02\u01FB\u01FC\x07&\x02\x02\u01FC\u01FD" +
		"\x05\x80A\x02\u01FDQ\x03\x02\x02\x02\u01FE\u01FF\x07\'\x02\x02\u01FF\u0200" +
		"\x05J&\x02\u0200\u0201\x07&\x02\x02\u0201\u0202\x05\x80A\x02\u0202S\x03" +
		"\x02\x02\x02\u0203\u0207\x07(\x02\x02\u0204\u0205\x05V,\x02\u0205\u0206" +
		"\x07)\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u0204\x03\x02\x02\x02" +
		"\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u0211\x05" +
		",\x17\x02\u020A\u020E\x07\r\x02\x02\u020B\u020C\x05X-\x02\u020C\u020D" +
		"\x05Z.\x02\u020D\u020F\x03\x02\x02\x02\u020E\u020B\x03\x02\x02\x02\u020E" +
		"\u020F\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0212\x05\\/" +
		"\x02\u0211\u020A\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213" +
		"\x03\x02\x02\x02\u0213\u0214\x07*\x02\x02\u0214U\x03\x02\x02\x02\u0215" +
		"\u0216\x05x=\x02\u0216W\x03\x02\x02\x02\u0217\u0218\x05|?\x02\u0218Y\x03" +
		"\x02\x02\x02\u0219\u021A\t\x03\x02\x02\u021A[\x03\x02\x02\x02\u021B\u021E" +
		"\x05x=\x02\u021C\u021E\x05\x80A\x02\u021D\u021B\x03\x02\x02\x02\u021D" +
		"\u021C\x03\x02\x02\x02\u021E]\x03\x02\x02\x02\u021F\u0220\x05\xCCg\x02" +
		"\u0220_\x03\x02\x02\x02\u0221\u0223\x05b2\x02\u0222\u0224\x05d3\x02\u0223" +
		"\u0222\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0228\x03\x02" +
		"\x02\x02\u0225\u0227\x05N(\x02\u0226\u0225\x03\x02\x02\x02\u0227\u022A" +
		"\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02" +
		"\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022D\x05" +
		"h5\x02\u022C\u022B\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u0230" +
		"\x03\x02\x02\x02\u022E\u0231\x05l7\x02\u022F\u0231\x05j6\x02\u0230\u022E" +
		"\x03\x02\x02\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02" +
		"\u0231\u0233\x03\x02\x02\x02\u0232\u0234\x05p9\x02\u0233\u0232\x03\x02" +
		"\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234a\x03\x02\x02\x02\u0235\u0237" +
		"\x07\x15\x02\x02\u0236\u0235\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02" +
		"\u0237\u0238\x03\x02\x02\x02\u0238\u023D\x05J&\x02\u0239\u023A\x07\x11" +
		"\x02\x02\u023A\u023C\x05J&\x02\u023B\u0239\x03\x02\x02\x02\u023C\u023F" +
		"\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02" +
		"\u023Ec\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240\u0241\x07.\x02" +
		"\x02\u0241\u0246\x05f4\x02\u0242\u0243\x07\x11\x02\x02\u0243\u0245\x05" +
		"f4\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244" +
		"\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247e\x03\x02\x02\x02\u0248" +
		"\u0246\x03\x02\x02\x02\u0249\u024A\x05\xCCg\x02\u024A\u024B\x07\r\x02" +
		"\x02\u024B\u024C\x05\x80A\x02\u024Cg\x03\x02\x02\x02\u024D\u024E\x07/" +
		"\x02\x02\u024E\u024F\x05\x80A\x02\u024Fi\x03\x02\x02\x02\u0250\u0252\x07" +
		"0\x02\x02\u0251\u0253\t\x04\x02\x02\u0252\u0251\x03\x02\x02\x02\u0252" +
		"\u0253\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x05\x80" +
		"A\x02\u0255k\x03\x02\x02\x02\u0256\u0258\x073\x02\x02\u0257\u0259\t\x04" +
		"\x02\x02\u0258\u0257\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259" +
		"\u025A\x03\x02\x02\x02\u025A\u025C\x05\xCCg\x02\u025B\u025D\x05n8\x02" +
		"\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x03" +
		"\x02\x02\x02\u025E\u025F\x07\r\x02\x02\u025F\u0260\x05\x80A\x02\u0260" +
		"m\x03\x02\x02\x02\u0261\u0268\x074\x02\x02\u0262\u0269\x05~@\x02\u0263" +
		"\u0269\x05\xD2j\x02\u0264\u0265\x07!\x02\x02\u0265\u0266\x05\x80A\x02" +
		"\u0266\u0267\x07\"\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u0262\x03" +
		"\x02\x02\x02\u0268\u0263\x03\x02\x02\x02\u0268\u0264\x03\x02\x02\x02\u0269" +
		"o\x03\x02\x02\x02\u026A\u0275\x075\x02\x02\u026B\u0276\x05r:\x02\u026C" +
		"\u026D\x076\x02\x02\u026D\u0272\x05t;\x02\u026E\u026F\x07\x11\x02\x02" +
		"\u026F\u0271\x05t;\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0274\x03\x02" +
		"\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273" +
		"\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u026B\x03\x02" +
		"\x02\x02\u0275\u026C\x03\x02\x02\x02\u0276q\x03\x02\x02\x02\u0277\u0278" +
		"\t\x05\x02\x02\u0278s\x03\x02\x02\x02\u0279\u027B\x05\x88E\x02\u027A\u027C" +
		"\x05r:\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C" +
		"u\x03\x02\x02\x02\u027D\u027E\x05^0\x02\u027E\u027F\x07\x13\x02\x02\u027F" +
		"\u0281\x03\x02\x02\x02\u0280\u027D\x03\x02\x02\x02\u0281\u0284\x03\x02" +
		"\x02\x02\u0282\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
		"\u0285\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0285\u0286\x05\xCC" +
		"g\x02\u0286w\x03\x02\x02\x02\u0287\u0288\x05z>\x02\u0288\u0289\x07\x13" +
		"\x02\x02\u0289\u028B\x03\x02\x02\x02\u028A\u0287\x03\x02\x02\x02\u028B" +
		"\u028E\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02" +
		"\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F" +
		"\u0290\x05\xC6d\x02\u0290y\x03\x02\x02\x02\u0291\u0292\x05\xC6d\x02\u0292" +
		"{\x03\x02\x02\x02\u0293\u0294\b?\x01\x02\u0294\u0295\x05\xC6d\x02\u0295" +
		"\u02A0\x03\x02\x02\x02\u0296\u0297\f\x04\x02\x02\u0297\u0298\x07\x13\x02" +
		"\x02\u0298\u029F\x05\xC6d\x02\u0299\u029A\f\x03\x02\x02\u029A\u029B\x07" +
		"(\x02\x02\u029B\u029C\x05~@\x02\u029C\u029D\x07*\x02\x02\u029D\u029F\x03" +
		"\x02\x02\x02\u029E\u0296\x03\x02\x02\x02\u029E\u0299\x03\x02\x02\x02\u029F" +
		"\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02" +
		"\x02\x02\u02A1}\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3\u02A6" +
		"\x07\xA7\x02\x02\u02A4\u02A6\x07\xA8\x02\x02\u02A5\u02A3\x03\x02\x02\x02" +
		"\u02A5\u02A4\x03\x02\x02\x02\u02A6\x7F\x03\x02\x02\x02\u02A7\u02A8\bA" +
		"\x01\x02\u02A8\u02C7\x05\x88E\x02\u02A9\u02C7\x05T+\x02\u02AA\u02C7\x05" +
		"`1\x02\u02AB\u02AC\x07A\x02\x02\u02AC\u02AD\x05\x80A\x02\u02AD\u02AE\x07" +
		"@\x02\x02\u02AE\u02AF\x05*\x16\x02\u02AF\u02C7\x03\x02\x02\x02\u02B0\u02B1" +
		"\x07<\x02\x02\u02B1\u02C7\x05\x80A\x0F\u02B2\u02B3\x07B\x02\x02\u02B3" +
		"\u02C7\x05\x80A\x0E\u02B4\u02B5\x07F\x02\x02\u02B5\u02B7\x07+\x02\x02" +
		"\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B8\x03" +
		"\x02\x02\x02\u02B8\u02B9\x05\x86D\x02\u02B9\u02BA\x07D\x02\x02\u02BA\u02BB" +
		"\x05\x88E\x02\u02BB\u02BC\x07E\x02\x02\u02BC\u02BD\x05\x88E\x02\u02BD" +
		"\u02C7\x03\x02\x02\x02\u02BE\u02BF\x07G\x02\x02\u02BF\u02C0\x07+\x02\x02" +
		"\u02C0\u02C1\x05\x86D\x02\u02C1\u02C2\x07D\x02\x02\u02C2\u02C3\x05\x88" +
		"E\x02\u02C3\u02C4\x07E\x02\x02\u02C4\u02C5\x05\x88E\x02\u02C5\u02C7\x03" +
		"\x02\x02\x02\u02C6\u02A7\x03\x02\x02\x02\u02C6\u02A9\x03\x02\x02\x02\u02C6" +
		"\u02AA\x03\x02\x02\x02\u02C6\u02AB\x03\x02\x02\x02\u02C6\u02B0\x03\x02" +
		"\x02\x02\u02C6\u02B2\x03\x02\x02\x02\u02C6\u02B6\x03\x02\x02\x02\u02C6" +
		"\u02BE\x03\x02\x02\x02\u02C7\u02F8\x03\x02\x02\x02\u02C8\u02C9\f\n\x02" +
		"\x02\u02C9\u02CA\t\x06\x02\x02\u02CA\u02F7\x05\x80A\v\u02CB\u02CC\f\t" +
		"\x02\x02\u02CC\u02CD\x05\x98M\x02\u02CD\u02CE\x05\x80A\n\u02CE\u02F7\x03" +
		"\x02\x02\x02\u02CF\u02D0\f\b\x02\x02\u02D0\u02D1\t\x07\x02\x02\u02D1\u02F7" +
		"\x05\x80A\t\u02D2\u02D3\f\x07\x02\x02\u02D3\u02D5\t\b\x02\x02\u02D4\u02D6" +
		"\x05\x8CG\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02" +
		"\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02F7\x05\x80A\b\u02D8\u02D9\f\x06" +
		"\x02\x02\u02D9\u02DA\x07E\x02\x02\u02DA\u02F7\x05\x80A\x07\u02DB\u02DC" +
		"\f\x05\x02\x02\u02DC\u02DD\t\t\x02\x02\u02DD\u02F7\x05\x80A\x06\u02DE" +
		"\u02DF\f\x04\x02\x02\u02DF\u02E0\x07O\x02\x02\u02E0\u02F7\x05\x80A\x05" +
		"\u02E1\u02E2\f\x03\x02\x02\u02E2\u02E3\t\n\x02\x02\u02E3\u02F7\x05\x80" +
		"A\x04\u02E4\u02E5\f\x12\x02\x02\u02E5\u02E7\x07;\x02\x02\u02E6\u02E8\x07" +
		"<\x02\x02\u02E7\u02E6\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8" +
		"\u02E9\x03\x02\x02\x02\u02E9\u02F7\t\v\x02\x02\u02EA\u02EB\f\x11\x02\x02" +
		"\u02EB\u02EC\t\f\x02\x02\u02EC\u02F7\x05*\x16\x02\u02ED\u02EF\f\r\x02" +
		"\x02\u02EE\u02F0\x07C\x02\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF\u02F0" +
		"\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x07D\x02\x02" +
		"\u02F2\u02F3\x05\x88E\x02\u02F3\u02F4\x07E\x02\x02\u02F4\u02F5\x05\x88" +
		"E\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02C8\x03\x02\x02\x02\u02F6\u02CB" +
		"\x03\x02\x02\x02\u02F6\u02CF\x03\x02\x02\x02\u02F6\u02D2\x03\x02\x02\x02" +
		"\u02F6\u02D8\x03\x02\x02\x02\u02F6\u02DB\x03\x02\x02\x02\u02F6\u02DE\x03" +
		"\x02\x02\x02\u02F6\u02E1\x03\x02\x02\x02\u02F6\u02E4\x03\x02\x02\x02\u02F6" +
		"\u02EA\x03\x02\x02\x02\u02F6\u02ED\x03\x02\x02\x02\u02F7\u02FA\x03\x02" +
		"\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9" +
		"\x81\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u02FC\t\r\x02\x02" +
		"\u02FC\x83\x03\x02\x02\x02\u02FD\u0303\x05\x82B\x02\u02FE\u0303\x07\\" +
		"\x02\x02\u02FF\u0303\x07]\x02\x02\u0300\u0303\x07^\x02\x02\u0301\u0303" +
		"\x07_\x02\x02\u0302\u02FD\x03\x02\x02\x02\u0302\u02FE\x03\x02\x02\x02" +
		"\u0302\u02FF\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0301\x03" +
		"\x02\x02\x02\u0303\x85\x03\x02\x02\x02\u0304\u0305\t\x0E\x02\x02\u0305" +
		"\x87\x03\x02\x02\x02\u0306\u0307\bE\x01\x02\u0307\u0355\x05\x9AN\x02\u0308" +
		"\u0309\x07h\x02\x02\u0309\u030A\x05\x80A\x02\u030A\u030D\x07i\x02\x02" +
		"\u030B\u030E\x05*\x16\x02\u030C\u030E\x05\xD4k\x02\u030D\u030B\x03\x02" +
		"\x02\x02\u030D\u030C\x03\x02\x02\x02\u030E\u0355\x03\x02\x02\x02\u030F" +
		"\u0310\t\x0F\x02\x02\u0310\u0355\x05\x88E\x14\u0311\u0312\t\x10\x02\x02" +
		"\u0312\u0313\x07n\x02\x02\u0313\u0355\x05\x88E\x13\u0314\u0315\x05\x84" +
		"C\x02\u0315\u0316\x07\x15\x02\x02\u0316\u0317\x05\x88E\x12\u0317\u0355" +
		"\x03\x02\x02\x02\u0318\u0319\x07F\x02\x02\u0319\u031A\x07+\x02\x02\u031A" +
		"\u031B\x05\x86D\x02\u031B\u031C\x07n\x02\x02\u031C\u031D\x05\x88E\x11" +
		"\u031D\u0355\x03\x02\x02\x02\u031E\u031F\x07G\x02\x02\u031F\u0320\x07" +
		"+\x02\x02\u0320\u0321\x05\x86D\x02\u0321\u0322\x07n\x02\x02\u0322\u0323" +
		"\x05\x88E\x10\u0323\u0355\x03\x02\x02\x02\u0324\u0325\x07o\x02\x02\u0325" +
		"\u0326\x07n\x02\x02\u0326\u0355\x05\x88E\x0F\u0327\u0328\x07p\x02\x02" +
		"\u0328\u0329\x07n\x02\x02\u0329\u0355\x05\x88E\x0E\u032A\u032B\x07q\x02" +
		"\x02\u032B\u032C\x07n\x02\x02\u032C\u0355\x05\x88E\r\u032D\u032E\x07r" +
		"\x02\x02\u032E\u032F\x07\x15\x02\x02\u032F\u0355\x05\x88E\f\u0330\u0331" +
		"\x07s\x02\x02\u0331\u0332\x07\x15\x02\x02\u0332\u0355\x05\x88E\v\u0333" +
		"\u0334\t\x11\x02\x02\u0334\u0355\x05,\x17\x02\u0335\u0336\x07|\x02\x02" +
		"\u0336\u0337\x05\x80A\x02\u0337\u0338\x07}\x02\x02\u0338\u0339\x05\x80" +
		"A\x02\u0339\u033A\x07~\x02\x02\u033A\u033B\x05\x80A\x02\u033B\u0355\x03" +
		"\x02\x02\x02\u033C\u033E\x07\x7F\x02\x02\u033D\u033F\x05\x80A\x02\u033E" +
		"\u033D\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0341\x03\x02" +
		"\x02\x02\u0340\u0342\x05\x8AF\x02\u0341\u0340\x03\x02\x02\x02\u0342\u0343" +
		"\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02" +
		"\u0344\u0345\x03\x02\x02\x02\u0345\u0346\x07~\x02\x02\u0346\u0347\x05" +
		"\x80A\x02\u0347\u0348\x07m\x02\x02\u0348\u0355\x03\x02\x02\x02\u0349\u034A" +
		"\t\x12\x02\x02\u034A\u0355\x05\x80A\x02\u034B\u034C\t\x13\x02\x02\u034C" +
		"\u0352\x05\x80A\x02\u034D\u0350\x07\x83\x02\x02\u034E\u0351\x05\x82B\x02" +
		"\u034F\u0351\x05\x80A\x02\u0350\u034E\x03\x02\x02\x02\u0350\u034F\x03" +
		"\x02\x02\x02\u0351\u0353\x03\x02\x02\x02\u0352\u034D\x03\x02\x02\x02\u0352" +
		"\u0353\x03\x02\x02\x02\u0353\u0355\x03\x02\x02\x02\u0354\u0306\x03\x02" +
		"\x02\x02\u0354\u0308\x03\x02\x02\x02\u0354\u030F\x03\x02\x02\x02\u0354" +
		"\u0311\x03\x02\x02\x02\u0354\u0314\x03\x02\x02\x02\u0354\u0318\x03\x02" +
		"\x02\x02\u0354\u031E\x03\x02\x02\x02\u0354\u0324\x03\x02\x02\x02\u0354" +
		"\u0327\x03\x02\x02\x02\u0354\u032A\x03\x02\x02\x02\u0354\u032D\x03\x02" +
		"\x02\x02\u0354\u0330\x03\x02\x02\x02\u0354\u0333\x03\x02\x02\x02\u0354" +
		"\u0335\x03\x02\x02\x02\u0354\u033C\x03\x02\x02\x02\u0354\u0349\x03\x02" +
		"\x02\x02\u0354\u034B\x03\x02\x02\x02\u0355\u0369\x03\x02\x02\x02\u0356" +
		"\u0357\f\t\x02\x02\u0357\u0358\x07v\x02\x02\u0358\u0368\x05\x88E\n\u0359" +
		"\u035A\f\b\x02\x02\u035A\u035B\t\x14\x02\x02\u035B\u0368\x05\x88E\t\u035C" +
		"\u035D\f\x07\x02\x02\u035D\u035E\t\x15\x02\x02\u035E\u0368\x05\x88E\b" +
		"\u035F\u0360\f\x17\x02\x02\u0360\u0361\x07\x13\x02\x02\u0361\u0368\x05" +
		"\x9CO\x02\u0362\u0363\f\x16\x02\x02\u0363\u0364\x07(\x02\x02\u0364\u0365" +
		"\x05\x80A\x02\u0365\u0366\x07*\x02\x02\u0366\u0368\x03\x02\x02\x02\u0367" +
		"\u0356\x03\x02\x02\x02\u0367\u0359\x03\x02\x02\x02\u0367\u035C\x03\x02" +
		"\x02\x02\u0367\u035F\x03\x02\x02\x02\u0367\u0362\x03\x02\x02\x02\u0368" +
		"\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03\x02" +
		"\x02\x02\u036A\x89\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036C\u036D" +
		"\x07\x84\x02\x02\u036D\u036E\x05\x80A\x02\u036E\u036F\x07}\x02\x02\u036F" +
		"\u0370\x05\x80A\x02\u0370\x8B\x03\x02\x02\x02\u0371\u0372\x05\x82B\x02" +
		"\u0372\u0373\x07n\x02\x02\u0373\x8D\x03\x02\x02\x02\u0374\u0375\t\x16" +
		"\x02\x02\u0375\x8F\x03\x02\x02\x02\u0376\u0377\t\x17\x02\x02\u0377\x91" +
		"\x03\x02\x02\x02\u0378\u0379\t\x18\x02\x02\u0379\x93\x03\x02\x02\x02\u037A" +
		"\u037C\x05\xD2j\x02\u037B\u037D\x05\x90I\x02\u037C\u037B\x03\x02\x02\x02" +
		"\u037C\u037D\x03\x02\x02\x02\u037D\u0382\x03\x02\x02\x02\u037E\u037F\x05" +
		"\x92J\x02\u037F\u0380\x05\xD2j\x02\u0380\u0382\x03\x02\x02\x02\u0381\u037A" +
		"\x03\x02\x02\x02\u0381\u037E\x03\x02\x02\x02\u0382\x95\x03\x02\x02\x02" +
		"\u0383\u0385\x07\x8B\x02\x02\u0384\u0383\x03\x02\x02\x02\u0384\u0385\x03" +
		"\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386\u038C\t\x19\x02\x02\u0387" +
		"\u0389\t\x19\x02\x02\u0388\u038A\x07\x8E\x02\x02\u0389\u0388\x03\x02\x02" +
		"\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038C\x03\x02\x02\x02\u038B\u0384" +
		"\x03\x02\x02\x02\u038B\u0387\x03\x02\x02\x02\u038C\x97\x03\x02\x02\x02" +
		"\u038D\u038F\t\x1A\x02\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F\x03" +
		"\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0392\x07\x92\x02\x02\u0391" +
		"\u0393\x05\x82B\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02" +
		"\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0397\x05\x8EH\x02\u0395\u0397" +
		"\x07@\x02\x02\u0396\u0394\x03\x02\x02\x02\u0396\u0395\x03\x02\x02\x02" +
		"\u0397\u0399\x03\x02\x02\x02\u0398\u039A\t\x10\x02\x02\u0399\u0398\x03" +
		"\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u03DF\x03\x02\x02\x02\u039B" +
		"\u039D\x07C\x02\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02" +
		"\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A0\x07\x93\x02\x02\u039F\u03A1" +
		"\x05\x8CG\x02\u03A0\u039F\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02" +
		"\u03A1\u03A3\x03\x02\x02\x02\u03A2\u03A4\t\x10\x02\x02\u03A3\u03A2\x03" +
		"\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03DF\x03\x02\x02\x02\u03A5" +
		"\u03A7\t\x1A\x02\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02" +
		"\x02\u03A7\u03A9\x03\x02\x02\x02\u03A8\u03AA\x07C\x02\x02\u03A9\u03A8" +
		"\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02" +
		"\u03AB\u03AD\t\x1B\x02\x02\u03AC\u03AE\x05\x8CG\x02\u03AD\u03AC\x03\x02" +
		"\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03DF\x03\x02\x02\x02\u03AF" +
		"\u03B1\t\x1A\x02\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02" +
		"\x02\u03B1\u03B3\x03\x02\x02\x02\u03B2\u03B4\x05\x94K\x02\u03B3\u03B2" +
		"\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02" +
		"\u03B5\u03B7\x05\x96L\x02\u03B6\u03B8\x05\x8CG\x02\u03B7\u03B6\x03\x02" +
		"\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03BA\x03\x02\x02\x02\u03B9" +
		"\u03BB\t\x10\x02\x02\u03BA\u03B9\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02" +
		"\x02\u03BB\u03DF\x03\x02\x02\x02\u03BC\u03BE\t\x1A\x02\x02\u03BD\u03BC" +
		"\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C0\x03\x02\x02\x02" +
		"\u03BF\u03C1\x07C\x02\x02\u03C0\u03BF\x03\x02\x02\x02\u03C0\u03C1\x03" +
		"\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3\x07\x96\x02\x02\u03C3" +
		"\u03C4\x05\xD2j\x02\u03C4\u03C6\x07n\x02\x02\u03C5\u03C7\t\x10\x02\x02" +
		"\u03C6\u03C5\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03DF\x03" +
		"\x02\x02\x02\u03C8\u03CA\x07\x97\x02\x02\u03C9\u03CB\t\x19\x02\x02\u03CA" +
		"\u03C9\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CD\x03\x02" +
		"\x02\x02\u03CC\u03CE\x05\x8CG\x02\u03CD\u03CC\x03\x02\x02\x02\u03CD\u03CE" +
		"\x03\x02\x02\x02\u03CE\u03DF\x03\x02\x02\x02\u03CF\u03D1\x07\x98\x02\x02" +
		"\u03D0\u03D2\t\x19\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D1\u03D2\x03" +
		"\x02\x02\x02\u03D2\u03D4\x03\x02\x02\x02\u03D3\u03D5\x05\x8CG\x02\u03D4" +
		"\u03D3\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03DF\x03\x02" +
		"\x02\x02\u03D6\u03D8\x07\x8F\x02\x02\u03D7\u03D9\x05\x8CG\x02\u03D8\u03D7" +
		"\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DF\x03\x02\x02\x02" +
		"\u03DA\u03DC\x07\x90\x02\x02\u03DB\u03DD\x05\x8CG\x02\u03DC\u03DB\x03" +
		"\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03\x02\x02\x02\u03DE" +
		"\u038E\x03\x02\x02\x02\u03DE\u039C\x03\x02\x02\x02\u03DE\u03A6\x03\x02" +
		"\x02\x02\u03DE\u03B0\x03\x02\x02\x02\u03DE\u03BD\x03\x02\x02\x02\u03DE" +
		"\u03C8\x03\x02\x02\x02\u03DE\u03CF\x03\x02\x02\x02\u03DE\u03D6\x03\x02" +
		"\x02\x02\u03DE\u03DA\x03\x02\x02\x02\u03DF\x99\x03\x02\x02\x02\u03E0\u03EE" +
		"\x05\xA0Q\x02\u03E1\u03EE\x05\xA6T\x02\u03E2\u03EE\x05\xCEh\x02\u03E3" +
		"\u03EE\x05\xA8U\x02\u03E4\u03EE\x05\xAAV\x02\u03E5\u03EE\x05\xAEX\x02" +
		"\u03E6\u03EE\x05\xB2Z\x02\u03E7\u03EE\x05\xB6\\\x02\u03E8\u03EE\x05\xB8" +
		"]\x02\u03E9\u03EA\x07!\x02\x02\u03EA\u03EB\x05\x80A\x02\u03EB\u03EC\x07" +
		"\"\x02\x02\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03E0\x03\x02\x02\x02\u03ED" +
		"\u03E1\x03\x02\x02\x02\u03ED\u03E2\x03\x02\x02\x02\u03ED\u03E3\x03\x02" +
		"\x02\x02\u03ED\u03E4\x03\x02\x02\x02\u03ED\u03E5\x03\x02\x02\x02\u03ED" +
		"\u03E6\x03\x02\x02\x02\u03ED\u03E7\x03\x02\x02\x02\u03ED\u03E8\x03\x02" +
		"\x02\x02\u03ED\u03E9\x03\x02\x02\x02\u03EE\x9B\x03\x02\x02\x02\u03EF\u03F2" +
		"\x05\xC6d\x02\u03F0\u03F2\x05\x9EP\x02\u03F1\u03EF\x03\x02\x02\x02\u03F1" +
		"\u03F0\x03\x02\x02\x02\u03F2\x9D\x03\x02\x02\x02\u03F3\u03F4\x05\xCAf" +
		"\x02\u03F4\u03F6\x07!\x02\x02\u03F5\u03F7\x05\xD0i\x02\u03F6\u03F5\x03" +
		"\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8" +
		"\u03F9\x07\"\x02\x02\u03F9\x9F\x03\x02\x02\x02\u03FA\u0400\x05\xC6d\x02" +
		"\u03FB\u0400\x05\xA2R\x02\u03FC\u0400\x07\x99\x02\x02\u03FD\u0400\x07" +
		"\x9A\x02\x02\u03FE\u0400\x07\x9B\x02\x02\u03FF\u03FA\x03\x02\x02\x02\u03FF" +
		"\u03FB\x03\x02\x02\x02\u03FF\u03FC\x03\x02\x02\x02\u03FF\u03FD\x03\x02" +
		"\x02\x02\u03FF\u03FE\x03\x02\x02\x02\u0400\xA1\x03\x02\x02\x02\u0401\u0402" +
		"\x05\xC6d\x02\u0402\u0404\x07!\x02\x02\u0403\u0405\x05\xD0i\x02\u0404" +
		"\u0403\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\u0406\x03\x02" +
		"\x02\x02\u0406\u0407\x07\"\x02\x02\u0407\xA3\x03\x02\x02\x02\u0408\u0409" +
		"\x05\xD2j\x02\u0409\u040A\x07\r\x02\x02\u040A\u040B\x05\xD2j\x02\u040B" +
		"\xA5\x03\x02\x02\x02\u040C\u0417\t\x1C\x02\x02\u040D\u0417\x07=\x02\x02" +
		"\u040E\u0417\x07\xA7\x02\x02\u040F\u0417\x07\xA8\x02\x02\u0410\u0417\x07" +
		"\xA2\x02\x02\u0411\u0417\x07\xA1\x02\x02\u0412\u0417\x07\xA3\x02\x02\u0413" +
		"\u0417\x07\xA4\x02\x02\u0414\u0417\x05\xD2j\x02\u0415\u0417\x05\xA4S\x02" +
		"\u0416\u040C\x03\x02\x02\x02\u0416\u040D\x03\x02\x02\x02\u0416\u040E\x03" +
		"\x02\x02\x02\u0416\u040F\x03\x02\x02\x02\u0416\u0410\x03\x02\x02\x02\u0416" +
		"\u0411\x03\x02\x02\x02\u0416\u0412\x03\x02\x02\x02\u0416\u0413\x03\x02" +
		"\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0415\x03\x02\x02\x02\u0417" +
		"\xA7\x03\x02\x02\x02\u0418\u0419\x07\x1A\x02\x02\u0419\u041A\t\x1D\x02" +
		"\x02\u041A\u041B\x05\x80A\x02\u041B\u041C\x07\x11\x02\x02\u041C\u041D" +
		"\x05\x80A\x02\u041D\u041E\t\x1E\x02\x02\u041E\xA9\x03\x02\x02\x02\u041F" +
		"\u0421\x07\x1B\x02\x02\u0420\u041F\x03\x02\x02\x02\u0420\u0421\x03\x02" +
		"\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u042C\x07\x10\x02\x02\u0423" +
		"\u042D\x07\r\x02\x02\u0424\u0429\x05\xACW\x02\u0425\u0426\x07\x11\x02" +
		"\x02\u0426\u0428\x05\xACW\x02\u0427\u0425\x03\x02\x02\x02\u0428\u042B" +
		"\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02" +
		"\u042A\u042D\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02\u042C\u0423\x03" +
		"\x02\x02\x02\u042C\u0424\x03\x02\x02\x02\u042D";
	private static readonly _serializedATNSegment2: string =
		"\u042E\x03\x02\x02\x02\u042E\u042F\x07\x12\x02\x02\u042F\xAB\x03\x02\x02" +
		"\x02\u0430\u0431\x05\xC6d\x02\u0431\u0432\x07\r\x02\x02\u0432\u0433\x05" +
		"\x80A\x02\u0433\xAD\x03\x02\x02\x02\u0434\u0435\x05,\x17\x02\u0435\u043F" +
		"\x07\x10\x02\x02\u0436\u0440\x07\r\x02\x02\u0437\u043C\x05\xB0Y\x02\u0438" +
		"\u0439\x07\x11\x02\x02\u0439\u043B\x05\xB0Y\x02\u043A\u0438\x03\x02\x02" +
		"\x02\u043B\u043E\x03\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043C\u043D" +
		"\x03\x02\x02\x02\u043D\u0440\x03\x02\x02\x02\u043E\u043C\x03\x02\x02\x02" +
		"\u043F\u0436\x03\x02\x02\x02\u043F\u0437\x03\x02\x02\x02\u0440\u0441\x03" +
		"\x02\x02\x02\u0441\u0442\x07\x12\x02\x02\u0442\xAF\x03\x02\x02\x02\u0443" +
		"\u0444\x05\xC6d\x02\u0444\u0445\x07\r\x02\x02\u0445\u0446\x05\x80A\x02" +
		"\u0446\xB1\x03\x02\x02\x02\u0447\u044C\x07\x17\x02\x02\u0448\u0449\x07" +
		"\x18\x02\x02\u0449\u044A\x05*\x16\x02\u044A\u044B\x07\x19\x02\x02\u044B" +
		"\u044D\x03\x02\x02\x02\u044C\u0448\x03\x02\x02\x02\u044C\u044D\x03\x02" +
		"\x02\x02\u044D\u044F\x03\x02\x02\x02\u044E\u0447\x03\x02\x02\x02\u044E" +
		"\u044F\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0459\x07\x10" +
		"\x02\x02\u0451\u0456\x05\x80A\x02\u0452\u0453\x07\x11\x02\x02\u0453\u0455" +
		"\x05\x80A\x02\u0454\u0452\x03\x02\x02\x02\u0455\u0458\x03\x02\x02\x02" +
		"\u0456\u0454\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u045A\x03" +
		"\x02\x02\x02\u0458\u0456\x03\x02\x02\x02\u0459\u0451\x03\x02\x02\x02\u0459" +
		"\u045A\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045C\x07\x12" +
		"\x02\x02\u045C\xB3\x03\x02\x02\x02\u045D\u045E\x07\x9C\x02\x02\u045E\u045F" +
		"\x07\xA7\x02\x02\u045F\xB5\x03\x02\x02\x02\u0460\u0461\x07\x9D\x02\x02" +
		"\u0461\u0462\x07\xA7\x02\x02\u0462\u0463\x07\x15\x02\x02\u0463\u0465\x05" +
		"\x18\r\x02\u0464\u0466\x05\xB4[\x02\u0465\u0464\x03\x02\x02\x02\u0465" +
		"\u0466\x03\x02\x02\x02\u0466\xB7\x03\x02\x02\x02\u0467\u0468\x07\x9E\x02" +
		"\x02\u0468\u0469\x07\x10\x02\x02\u0469\u046E\x05\xB6\\\x02\u046A\u046B" +
		"\x07\x11\x02\x02\u046B\u046D\x05\xB6\\\x02\u046C\u046A\x03\x02\x02\x02" +
		"\u046D\u0470\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046E\u046F\x03" +
		"\x02\x02\x02\u046F\u0471\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0471" +
		"\u0473\x07\x12\x02\x02\u0472\u0474\x05\xB4[\x02\u0473\u0472\x03\x02\x02" +
		"\x02\u0473\u0474\x03\x02\x02\x02\u0474\xB9\x03\x02\x02\x02\u0475\u0476" +
		"\t\x1F\x02\x02\u0476\xBB\x03\x02\x02\x02\u0477\u0478\t \x02\x02\u0478" +
		"\xBD\x03\x02\x02\x02\u0479\u047A\t!\x02\x02\u047A\xBF\x03\x02\x02\x02" +
		"\u047B\u047C\t\"\x02\x02\u047C\xC1\x03\x02\x02\x02\u047D\u047E\t#\x02" +
		"\x02\u047E\xC3\x03\x02\x02\x02\u047F\u0480\t$\x02\x02\u0480\xC5\x03\x02" +
		"\x02\x02\u0481\u0484\x05\xCCg\x02\u0482\u0484\x05\xBE`\x02\u0483\u0481" +
		"\x03\x02\x02\x02\u0483\u0482\x03\x02\x02\x02\u0484\xC7\x03\x02\x02\x02" +
		"\u0485\u0488\x05\xC6d\x02\u0486\u0488\x05\xC4c\x02\u0487\u0485\x03\x02" +
		"\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488\xC9\x03\x02\x02\x02\u0489\u048C" +
		"\x05\xCCg\x02\u048A\u048C\x05\xC2b\x02\u048B\u0489\x03\x02\x02\x02\u048B" +
		"\u048A\x03\x02\x02\x02\u048C\xCB\x03\x02\x02\x02\u048D\u048E\t%\x02\x02" +
		"\u048E\xCD\x03\x02\x02\x02\u048F\u0492\x07\x9F\x02\x02\u0490\u0493\x05" +
		"\xCCg\x02\u0491\u0493\x07\xA7\x02\x02\u0492\u0490\x03\x02\x02\x02\u0492" +
		"\u0491\x03\x02\x02\x02\u0493\xCF\x03\x02\x02\x02\u0494\u0499\x05\x80A" +
		"\x02\u0495\u0496\x07\x11\x02\x02\u0496\u0498\x05\x80A\x02\u0497\u0495" +
		"\x03\x02\x02\x02\u0498\u049B\x03\x02\x02\x02\u0499\u0497\x03\x02\x02\x02" +
		"\u0499\u049A\x03\x02\x02\x02\u049A\xD1\x03\x02\x02\x02\u049B\u0499\x03" +
		"\x02\x02\x02\u049C\u049E\x07\xA8\x02\x02\u049D\u049F\x05\xD4k\x02\u049E" +
		"\u049D\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F\xD3\x03\x02\x02" +
		"\x02\u04A0\u04A4\x05\x82B\x02\u04A1\u04A4\x05\x86D\x02\u04A2\u04A4\x07" +
		"\xA7\x02\x02\u04A3\u04A0\x03\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A3" +
		"\u04A2\x03\x02\x02\x02\u04A4\xD5\x03\x02\x02\x02\x88\xDD\xE0\xE5\xEB\xF4" +
		"\xFA\xFE\u0104\u0108\u010F\u0114\u0118\u011B\u0123\u0126\u012E\u0131\u013A" +
		"\u0142\u0149\u0152\u0155\u0160\u0165\u016A\u017B\u0182\u019A\u01A9\u01B1" +
		"\u01B5\u01BF\u01C7\u01CA\u01D4\u01D7\u01DC\u01E1\u01EE\u01F7\u0207\u020E" +
		"\u0211\u021D\u0223\u0228\u022C\u0230\u0233\u0236\u023D\u0246\u0252\u0258" +
		"\u025C\u0268\u0272\u0275\u027B\u0282\u028C\u029E\u02A0\u02A5\u02B6\u02C6" +
		"\u02D5\u02E7\u02EF\u02F6\u02F8\u0302\u030D\u033E\u0343\u0350\u0352\u0354" +
		"\u0367\u0369\u037C\u0381\u0384\u0389\u038B\u038E\u0392\u0396\u0399\u039C" +
		"\u03A0\u03A3\u03A6\u03A9\u03AD\u03B0\u03B3\u03B7\u03BA\u03BD\u03C0\u03C6" +
		"\u03CA\u03CD\u03D1\u03D4\u03D8\u03DC\u03DE\u03ED\u03F1\u03F6\u03FF\u0404" +
		"\u0416\u0420\u0429\u042C\u043C\u043F\u044C\u044E\u0456\u0459\u0465\u046E" +
		"\u0473\u0483\u0487\u048B\u0492\u0499\u049E\u04A3";
	public static readonly _serializedATN: string = Utils.join(
		[
			cqlParser._serializedATNSegment0,
			cqlParser._serializedATNSegment1,
			cqlParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!cqlParser.__ATN) {
			cqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(cqlParser._serializedATN));
		}

		return cqlParser.__ATN;
	}

}

export class DefinitionContext extends ParserRuleContext {
	public usingDefinition(): UsingDefinitionContext | undefined {
		return this.tryGetRuleContext(0, UsingDefinitionContext);
	}
	public includeDefinition(): IncludeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, IncludeDefinitionContext);
	}
	public codesystemDefinition(): CodesystemDefinitionContext | undefined {
		return this.tryGetRuleContext(0, CodesystemDefinitionContext);
	}
	public valuesetDefinition(): ValuesetDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ValuesetDefinitionContext);
	}
	public codeDefinition(): CodeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, CodeDefinitionContext);
	}
	public conceptDefinition(): ConceptDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ConceptDefinitionContext);
	}
	public parameterDefinition(): ParameterDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ParameterDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_definition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(cqlParser.EOF, 0); }
	public libraryDefinition(): LibraryDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LibraryDefinitionContext);
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_library; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterLibrary) {
			listener.enterLibrary(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitLibrary) {
			listener.exitLibrary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitLibrary) {
			return visitor.visitLibrary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryDefinitionContext extends ParserRuleContext {
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	public versionSpecifier(): VersionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, VersionSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_libraryDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterLibraryDefinition) {
			listener.enterLibraryDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitLibraryDefinition) {
			listener.exitLibraryDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitLibraryDefinition) {
			return visitor.visitLibraryDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingDefinitionContext extends ParserRuleContext {
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	public versionSpecifier(): VersionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, VersionSpecifierContext);
	}
	public localIdentifier(): LocalIdentifierContext | undefined {
		return this.tryGetRuleContext(0, LocalIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_usingDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterUsingDefinition) {
			listener.enterUsingDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitUsingDefinition) {
			listener.exitUsingDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitUsingDefinition) {
			return visitor.visitUsingDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeDefinitionContext extends ParserRuleContext {
	public qualifiedIdentifier(): QualifiedIdentifierContext {
		return this.getRuleContext(0, QualifiedIdentifierContext);
	}
	public versionSpecifier(): VersionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, VersionSpecifierContext);
	}
	public localIdentifier(): LocalIdentifierContext | undefined {
		return this.tryGetRuleContext(0, LocalIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_includeDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIncludeDefinition) {
			listener.enterIncludeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIncludeDefinition) {
			listener.exitIncludeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIncludeDefinition) {
			return visitor.visitIncludeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_localIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterLocalIdentifier) {
			listener.enterLocalIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitLocalIdentifier) {
			listener.exitLocalIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitLocalIdentifier) {
			return visitor.visitLocalIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccessModifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_accessModifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterAccessModifier) {
			listener.enterAccessModifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitAccessModifier) {
			listener.exitAccessModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitAccessModifier) {
			return visitor.visitAccessModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public accessModifier(): AccessModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessModifierContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_parameterDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterParameterDefinition) {
			listener.enterParameterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitParameterDefinition) {
			listener.exitParameterDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitParameterDefinition) {
			return visitor.visitParameterDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodesystemDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public codesystemId(): CodesystemIdContext {
		return this.getRuleContext(0, CodesystemIdContext);
	}
	public accessModifier(): AccessModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessModifierContext);
	}
	public versionSpecifier(): VersionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, VersionSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codesystemDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodesystemDefinition) {
			listener.enterCodesystemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodesystemDefinition) {
			listener.exitCodesystemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodesystemDefinition) {
			return visitor.visitCodesystemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesetDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public valuesetId(): ValuesetIdContext {
		return this.getRuleContext(0, ValuesetIdContext);
	}
	public accessModifier(): AccessModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessModifierContext);
	}
	public versionSpecifier(): VersionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, VersionSpecifierContext);
	}
	public codesystems(): CodesystemsContext | undefined {
		return this.tryGetRuleContext(0, CodesystemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_valuesetDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterValuesetDefinition) {
			listener.enterValuesetDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitValuesetDefinition) {
			listener.exitValuesetDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitValuesetDefinition) {
			return visitor.visitValuesetDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodesystemsContext extends ParserRuleContext {
	public codesystemIdentifier(): CodesystemIdentifierContext[];
	public codesystemIdentifier(i: number): CodesystemIdentifierContext;
	public codesystemIdentifier(i?: number): CodesystemIdentifierContext | CodesystemIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodesystemIdentifierContext);
		} else {
			return this.getRuleContext(i, CodesystemIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codesystems; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodesystems) {
			listener.enterCodesystems(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodesystems) {
			listener.exitCodesystems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodesystems) {
			return visitor.visitCodesystems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodesystemIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public libraryIdentifier(): LibraryIdentifierContext | undefined {
		return this.tryGetRuleContext(0, LibraryIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codesystemIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodesystemIdentifier) {
			listener.enterCodesystemIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodesystemIdentifier) {
			listener.exitCodesystemIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodesystemIdentifier) {
			return visitor.visitCodesystemIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_libraryIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterLibraryIdentifier) {
			listener.enterLibraryIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitLibraryIdentifier) {
			listener.exitLibraryIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitLibraryIdentifier) {
			return visitor.visitLibraryIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public codeId(): CodeIdContext {
		return this.getRuleContext(0, CodeIdContext);
	}
	public codesystemIdentifier(): CodesystemIdentifierContext {
		return this.getRuleContext(0, CodesystemIdentifierContext);
	}
	public accessModifier(): AccessModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessModifierContext);
	}
	public displayClause(): DisplayClauseContext | undefined {
		return this.tryGetRuleContext(0, DisplayClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codeDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodeDefinition) {
			listener.enterCodeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodeDefinition) {
			listener.exitCodeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodeDefinition) {
			return visitor.visitCodeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConceptDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public codeIdentifier(): CodeIdentifierContext[];
	public codeIdentifier(i: number): CodeIdentifierContext;
	public codeIdentifier(i?: number): CodeIdentifierContext | CodeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeIdentifierContext);
		} else {
			return this.getRuleContext(i, CodeIdentifierContext);
		}
	}
	public accessModifier(): AccessModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessModifierContext);
	}
	public displayClause(): DisplayClauseContext | undefined {
		return this.tryGetRuleContext(0, DisplayClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_conceptDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterConceptDefinition) {
			listener.enterConceptDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitConceptDefinition) {
			listener.exitConceptDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitConceptDefinition) {
			return visitor.visitConceptDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public libraryIdentifier(): LibraryIdentifierContext | undefined {
		return this.tryGetRuleContext(0, LibraryIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codeIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodeIdentifier) {
			listener.enterCodeIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodeIdentifier) {
			listener.exitCodeIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodeIdentifier) {
			return visitor.visitCodeIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodesystemIdContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(cqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codesystemId; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodesystemId) {
			listener.enterCodesystemId(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodesystemId) {
			listener.exitCodesystemId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodesystemId) {
			return visitor.visitCodesystemId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesetIdContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(cqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_valuesetId; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterValuesetId) {
			listener.enterValuesetId(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitValuesetId) {
			listener.exitValuesetId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitValuesetId) {
			return visitor.visitValuesetId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionSpecifierContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(cqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_versionSpecifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterVersionSpecifier) {
			listener.enterVersionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitVersionSpecifier) {
			listener.exitVersionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitVersionSpecifier) {
			return visitor.visitVersionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeIdContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(cqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codeId; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodeId) {
			listener.enterCodeId(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodeId) {
			listener.exitCodeId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodeId) {
			return visitor.visitCodeId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public namedTypeSpecifier(): NamedTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeSpecifierContext);
	}
	public listTypeSpecifier(): ListTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, ListTypeSpecifierContext);
	}
	public intervalTypeSpecifier(): IntervalTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, IntervalTypeSpecifierContext);
	}
	public tupleTypeSpecifier(): TupleTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TupleTypeSpecifierContext);
	}
	public choiceTypeSpecifier(): ChoiceTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, ChoiceTypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedTypeSpecifierContext extends ParserRuleContext {
	public referentialOrTypeNameIdentifier(): ReferentialOrTypeNameIdentifierContext {
		return this.getRuleContext(0, ReferentialOrTypeNameIdentifierContext);
	}
	public qualifier(): QualifierContext[];
	public qualifier(i: number): QualifierContext;
	public qualifier(i?: number): QualifierContext | QualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifierContext);
		} else {
			return this.getRuleContext(i, QualifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_namedTypeSpecifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterNamedTypeSpecifier) {
			listener.enterNamedTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitNamedTypeSpecifier) {
			listener.exitNamedTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitNamedTypeSpecifier) {
			return visitor.visitNamedTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModelIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_modelIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterModelIdentifier) {
			listener.enterModelIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitModelIdentifier) {
			listener.exitModelIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitModelIdentifier) {
			return visitor.visitModelIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListTypeSpecifierContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_listTypeSpecifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterListTypeSpecifier) {
			listener.enterListTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitListTypeSpecifier) {
			listener.exitListTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitListTypeSpecifier) {
			return visitor.visitListTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalTypeSpecifierContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_intervalTypeSpecifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIntervalTypeSpecifier) {
			listener.enterIntervalTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIntervalTypeSpecifier) {
			listener.exitIntervalTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIntervalTypeSpecifier) {
			return visitor.visitIntervalTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleTypeSpecifierContext extends ParserRuleContext {
	public tupleElementDefinition(): TupleElementDefinitionContext[];
	public tupleElementDefinition(i: number): TupleElementDefinitionContext;
	public tupleElementDefinition(i?: number): TupleElementDefinitionContext | TupleElementDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TupleElementDefinitionContext);
		} else {
			return this.getRuleContext(i, TupleElementDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_tupleTypeSpecifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTupleTypeSpecifier) {
			listener.enterTupleTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTupleTypeSpecifier) {
			listener.exitTupleTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTupleTypeSpecifier) {
			return visitor.visitTupleTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleElementDefinitionContext extends ParserRuleContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_tupleElementDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTupleElementDefinition) {
			listener.enterTupleElementDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTupleElementDefinition) {
			listener.exitTupleElementDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTupleElementDefinition) {
			return visitor.visitTupleElementDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChoiceTypeSpecifierContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext[];
	public typeSpecifier(i: number): TypeSpecifierContext;
	public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_choiceTypeSpecifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterChoiceTypeSpecifier) {
			listener.enterChoiceTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitChoiceTypeSpecifier) {
			listener.exitChoiceTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitChoiceTypeSpecifier) {
			return visitor.visitChoiceTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expressionDefinition(): ExpressionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionDefinitionContext);
	}
	public contextDefinition(): ContextDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ContextDefinitionContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_statement; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public accessModifier(): AccessModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessModifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_expressionDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterExpressionDefinition) {
			listener.enterExpressionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitExpressionDefinition) {
			listener.exitExpressionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitExpressionDefinition) {
			return visitor.visitExpressionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContextDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public modelIdentifier(): ModelIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ModelIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_contextDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterContextDefinition) {
			listener.enterContextDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitContextDefinition) {
			listener.exitContextDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitContextDefinition) {
			return visitor.visitContextDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FluentModifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_fluentModifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterFluentModifier) {
			listener.enterFluentModifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitFluentModifier) {
			listener.exitFluentModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitFluentModifier) {
			return visitor.visitFluentModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext {
		return this.getRuleContext(0, IdentifierOrFunctionIdentifierContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public accessModifier(): AccessModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessModifierContext);
	}
	public fluentModifier(): FluentModifierContext | undefined {
		return this.tryGetRuleContext(0, FluentModifierContext);
	}
	public operandDefinition(): OperandDefinitionContext[];
	public operandDefinition(i: number): OperandDefinitionContext;
	public operandDefinition(i?: number): OperandDefinitionContext | OperandDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperandDefinitionContext);
		} else {
			return this.getRuleContext(i, OperandDefinitionContext);
		}
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandDefinitionContext extends ParserRuleContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_operandDefinition; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterOperandDefinition) {
			listener.enterOperandDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitOperandDefinition) {
			listener.exitOperandDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitOperandDefinition) {
			return visitor.visitOperandDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuerySourceContext extends ParserRuleContext {
	public retrieve(): RetrieveContext | undefined {
		return this.tryGetRuleContext(0, RetrieveContext);
	}
	public qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentifierExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_querySource; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQuerySource) {
			listener.enterQuerySource(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQuerySource) {
			listener.exitQuerySource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQuerySource) {
			return visitor.visitQuerySource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasedQuerySourceContext extends ParserRuleContext {
	public querySource(): QuerySourceContext {
		return this.getRuleContext(0, QuerySourceContext);
	}
	public alias(): AliasContext {
		return this.getRuleContext(0, AliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_aliasedQuerySource; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterAliasedQuerySource) {
			listener.enterAliasedQuerySource(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitAliasedQuerySource) {
			listener.exitAliasedQuerySource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitAliasedQuerySource) {
			return visitor.visitAliasedQuerySource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_alias; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterAlias) {
			listener.enterAlias(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitAlias) {
			listener.exitAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitAlias) {
			return visitor.visitAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryInclusionClauseContext extends ParserRuleContext {
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	public withoutClause(): WithoutClauseContext | undefined {
		return this.tryGetRuleContext(0, WithoutClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_queryInclusionClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQueryInclusionClause) {
			listener.enterQueryInclusionClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQueryInclusionClause) {
			listener.exitQueryInclusionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQueryInclusionClause) {
			return visitor.visitQueryInclusionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	public aliasedQuerySource(): AliasedQuerySourceContext {
		return this.getRuleContext(0, AliasedQuerySourceContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_withClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterWithClause) {
			listener.enterWithClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitWithClause) {
			listener.exitWithClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitWithClause) {
			return visitor.visitWithClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithoutClauseContext extends ParserRuleContext {
	public aliasedQuerySource(): AliasedQuerySourceContext {
		return this.getRuleContext(0, AliasedQuerySourceContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_withoutClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterWithoutClause) {
			listener.enterWithoutClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitWithoutClause) {
			listener.exitWithoutClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitWithoutClause) {
			return visitor.visitWithoutClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RetrieveContext extends ParserRuleContext {
	public namedTypeSpecifier(): NamedTypeSpecifierContext {
		return this.getRuleContext(0, NamedTypeSpecifierContext);
	}
	public contextIdentifier(): ContextIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ContextIdentifierContext);
	}
	public terminology(): TerminologyContext | undefined {
		return this.tryGetRuleContext(0, TerminologyContext);
	}
	public codePath(): CodePathContext | undefined {
		return this.tryGetRuleContext(0, CodePathContext);
	}
	public codeComparator(): CodeComparatorContext | undefined {
		return this.tryGetRuleContext(0, CodeComparatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_retrieve; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterRetrieve) {
			listener.enterRetrieve(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitRetrieve) {
			listener.exitRetrieve(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitRetrieve) {
			return visitor.visitRetrieve(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContextIdentifierContext extends ParserRuleContext {
	public qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext {
		return this.getRuleContext(0, QualifiedIdentifierExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_contextIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterContextIdentifier) {
			listener.enterContextIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitContextIdentifier) {
			listener.exitContextIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitContextIdentifier) {
			return visitor.visitContextIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodePathContext extends ParserRuleContext {
	public simplePath(): SimplePathContext {
		return this.getRuleContext(0, SimplePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codePath; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodePath) {
			listener.enterCodePath(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodePath) {
			listener.exitCodePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodePath) {
			return visitor.visitCodePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeComparatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codeComparator; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodeComparator) {
			listener.enterCodeComparator(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodeComparator) {
			listener.exitCodeComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodeComparator) {
			return visitor.visitCodeComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TerminologyContext extends ParserRuleContext {
	public qualifiedIdentifierExpression(): QualifiedIdentifierExpressionContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdentifierExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_terminology; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTerminology) {
			listener.enterTerminology(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTerminology) {
			listener.exitTerminology(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTerminology) {
			return visitor.visitTerminology(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_qualifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQualifier) {
			listener.enterQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQualifier) {
			listener.exitQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQualifier) {
			return visitor.visitQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public sourceClause(): SourceClauseContext {
		return this.getRuleContext(0, SourceClauseContext);
	}
	public letClause(): LetClauseContext | undefined {
		return this.tryGetRuleContext(0, LetClauseContext);
	}
	public queryInclusionClause(): QueryInclusionClauseContext[];
	public queryInclusionClause(i: number): QueryInclusionClauseContext;
	public queryInclusionClause(i?: number): QueryInclusionClauseContext | QueryInclusionClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryInclusionClauseContext);
		} else {
			return this.getRuleContext(i, QueryInclusionClauseContext);
		}
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public aggregateClause(): AggregateClauseContext | undefined {
		return this.tryGetRuleContext(0, AggregateClauseContext);
	}
	public returnClause(): ReturnClauseContext | undefined {
		return this.tryGetRuleContext(0, ReturnClauseContext);
	}
	public sortClause(): SortClauseContext | undefined {
		return this.tryGetRuleContext(0, SortClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_query; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceClauseContext extends ParserRuleContext {
	public aliasedQuerySource(): AliasedQuerySourceContext[];
	public aliasedQuerySource(i: number): AliasedQuerySourceContext;
	public aliasedQuerySource(i?: number): AliasedQuerySourceContext | AliasedQuerySourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasedQuerySourceContext);
		} else {
			return this.getRuleContext(i, AliasedQuerySourceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_sourceClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSourceClause) {
			listener.enterSourceClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSourceClause) {
			listener.exitSourceClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSourceClause) {
			return visitor.visitSourceClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetClauseContext extends ParserRuleContext {
	public letClauseItem(): LetClauseItemContext[];
	public letClauseItem(i: number): LetClauseItemContext;
	public letClauseItem(i?: number): LetClauseItemContext | LetClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LetClauseItemContext);
		} else {
			return this.getRuleContext(i, LetClauseItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_letClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterLetClause) {
			listener.enterLetClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitLetClause) {
			listener.exitLetClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitLetClause) {
			return visitor.visitLetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetClauseItemContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_letClauseItem; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterLetClauseItem) {
			listener.enterLetClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitLetClauseItem) {
			listener.exitLetClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitLetClauseItem) {
			return visitor.visitLetClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitWhereClause) {
			listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnClauseContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_returnClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterReturnClause) {
			listener.enterReturnClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitReturnClause) {
			listener.exitReturnClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitReturnClause) {
			return visitor.visitReturnClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateClauseContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public startingClause(): StartingClauseContext | undefined {
		return this.tryGetRuleContext(0, StartingClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_aggregateClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterAggregateClause) {
			listener.enterAggregateClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitAggregateClause) {
			listener.exitAggregateClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitAggregateClause) {
			return visitor.visitAggregateClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartingClauseContext extends ParserRuleContext {
	public simpleLiteral(): SimpleLiteralContext | undefined {
		return this.tryGetRuleContext(0, SimpleLiteralContext);
	}
	public quantity(): QuantityContext | undefined {
		return this.tryGetRuleContext(0, QuantityContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_startingClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterStartingClause) {
			listener.enterStartingClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitStartingClause) {
			listener.exitStartingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitStartingClause) {
			return visitor.visitStartingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortClauseContext extends ParserRuleContext {
	public sortDirection(): SortDirectionContext | undefined {
		return this.tryGetRuleContext(0, SortDirectionContext);
	}
	public sortByItem(): SortByItemContext[];
	public sortByItem(i: number): SortByItemContext;
	public sortByItem(i?: number): SortByItemContext | SortByItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortByItemContext);
		} else {
			return this.getRuleContext(i, SortByItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_sortClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSortClause) {
			listener.enterSortClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSortClause) {
			listener.exitSortClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSortClause) {
			return visitor.visitSortClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortDirectionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_sortDirection; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSortDirection) {
			listener.enterSortDirection(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSortDirection) {
			listener.exitSortDirection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSortDirection) {
			return visitor.visitSortDirection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortByItemContext extends ParserRuleContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	public sortDirection(): SortDirectionContext | undefined {
		return this.tryGetRuleContext(0, SortDirectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_sortByItem; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSortByItem) {
			listener.enterSortByItem(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSortByItem) {
			listener.exitSortByItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSortByItem) {
			return visitor.visitSortByItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public qualifier(): QualifierContext[];
	public qualifier(i: number): QualifierContext;
	public qualifier(i?: number): QualifierContext | QualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifierContext);
		} else {
			return this.getRuleContext(i, QualifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_qualifiedIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQualifiedIdentifier) {
			listener.enterQualifiedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQualifiedIdentifier) {
			listener.exitQualifiedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQualifiedIdentifier) {
			return visitor.visitQualifiedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedIdentifierExpressionContext extends ParserRuleContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	public qualifierExpression(): QualifierExpressionContext[];
	public qualifierExpression(i: number): QualifierExpressionContext;
	public qualifierExpression(i?: number): QualifierExpressionContext | QualifierExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifierExpressionContext);
		} else {
			return this.getRuleContext(i, QualifierExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_qualifiedIdentifierExpression; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQualifiedIdentifierExpression) {
			listener.enterQualifiedIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQualifiedIdentifierExpression) {
			listener.exitQualifiedIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQualifiedIdentifierExpression) {
			return visitor.visitQualifiedIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifierExpressionContext extends ParserRuleContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_qualifierExpression; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQualifierExpression) {
			listener.enterQualifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQualifierExpression) {
			listener.exitQualifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQualifierExpression) {
			return visitor.visitQualifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimplePathContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_simplePath; }
	public copyFrom(ctx: SimplePathContext): void {
		super.copyFrom(ctx);
	}
}
export class SimplePathReferentialIdentifierContext extends SimplePathContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	constructor(ctx: SimplePathContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSimplePathReferentialIdentifier) {
			listener.enterSimplePathReferentialIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSimplePathReferentialIdentifier) {
			listener.exitSimplePathReferentialIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSimplePathReferentialIdentifier) {
			return visitor.visitSimplePathReferentialIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimplePathQualifiedIdentifierContext extends SimplePathContext {
	public simplePath(): SimplePathContext {
		return this.getRuleContext(0, SimplePathContext);
	}
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	constructor(ctx: SimplePathContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSimplePathQualifiedIdentifier) {
			listener.enterSimplePathQualifiedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSimplePathQualifiedIdentifier) {
			listener.exitSimplePathQualifiedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSimplePathQualifiedIdentifier) {
			return visitor.visitSimplePathQualifiedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimplePathIndexerContext extends SimplePathContext {
	public simplePath(): SimplePathContext {
		return this.getRuleContext(0, SimplePathContext);
	}
	public simpleLiteral(): SimpleLiteralContext {
		return this.getRuleContext(0, SimpleLiteralContext);
	}
	constructor(ctx: SimplePathContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSimplePathIndexer) {
			listener.enterSimplePathIndexer(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSimplePathIndexer) {
			listener.exitSimplePathIndexer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSimplePathIndexer) {
			return visitor.visitSimplePathIndexer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_simpleLiteral; }
	public copyFrom(ctx: SimpleLiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class SimpleStringLiteralContext extends SimpleLiteralContext {
	public STRING(): TerminalNode { return this.getToken(cqlParser.STRING, 0); }
	constructor(ctx: SimpleLiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSimpleStringLiteral) {
			listener.enterSimpleStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSimpleStringLiteral) {
			listener.exitSimpleStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSimpleStringLiteral) {
			return visitor.visitSimpleStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleNumberLiteralContext extends SimpleLiteralContext {
	public NUMBER(): TerminalNode { return this.getToken(cqlParser.NUMBER, 0); }
	constructor(ctx: SimpleLiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSimpleNumberLiteral) {
			listener.enterSimpleNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSimpleNumberLiteral) {
			listener.exitSimpleNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSimpleNumberLiteral) {
			return visitor.visitSimpleNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TermExpressionContext extends ExpressionContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTermExpression) {
			listener.enterTermExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTermExpression) {
			listener.exitTermExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTermExpression) {
			return visitor.visitTermExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RetrieveExpressionContext extends ExpressionContext {
	public retrieve(): RetrieveContext {
		return this.getRuleContext(0, RetrieveContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterRetrieveExpression) {
			listener.enterRetrieveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitRetrieveExpression) {
			listener.exitRetrieveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitRetrieveExpression) {
			return visitor.visitRetrieveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryExpressionContext extends ExpressionContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQueryExpression) {
			listener.enterQueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQueryExpression) {
			listener.exitQueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQueryExpression) {
			return visitor.visitQueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterBooleanExpression) {
			listener.enterBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitBooleanExpression) {
			listener.exitBooleanExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitBooleanExpression) {
			return visitor.visitBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTypeExpression) {
			listener.enterTypeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTypeExpression) {
			listener.exitTypeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTypeExpression) {
			return visitor.visitTypeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistenceExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterExistenceExpression) {
			listener.enterExistenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitExistenceExpression) {
			listener.exitExistenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitExistenceExpression) {
			return visitor.visitExistenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expressionTerm(): ExpressionTermContext[];
	public expressionTerm(i: number): ExpressionTermContext;
	public expressionTerm(i?: number): ExpressionTermContext | ExpressionTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionTermContext);
		} else {
			return this.getRuleContext(i, ExpressionTermContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterBetweenExpression) {
			listener.enterBetweenExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitBetweenExpression) {
			listener.exitBetweenExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitBetweenExpression) {
			return visitor.visitBetweenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DurationBetweenExpressionContext extends ExpressionContext {
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
		return this.getRuleContext(0, PluralDateTimePrecisionContext);
	}
	public expressionTerm(): ExpressionTermContext[];
	public expressionTerm(i: number): ExpressionTermContext;
	public expressionTerm(i?: number): ExpressionTermContext | ExpressionTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionTermContext);
		} else {
			return this.getRuleContext(i, ExpressionTermContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDurationBetweenExpression) {
			listener.enterDurationBetweenExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDurationBetweenExpression) {
			listener.exitDurationBetweenExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDurationBetweenExpression) {
			return visitor.visitDurationBetweenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DifferenceBetweenExpressionContext extends ExpressionContext {
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
		return this.getRuleContext(0, PluralDateTimePrecisionContext);
	}
	public expressionTerm(): ExpressionTermContext[];
	public expressionTerm(i: number): ExpressionTermContext;
	public expressionTerm(i?: number): ExpressionTermContext | ExpressionTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionTermContext);
		} else {
			return this.getRuleContext(i, ExpressionTermContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDifferenceBetweenExpression) {
			listener.enterDifferenceBetweenExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDifferenceBetweenExpression) {
			listener.exitDifferenceBetweenExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDifferenceBetweenExpression) {
			return visitor.visitDifferenceBetweenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InequalityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterInequalityExpression) {
			listener.enterInequalityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitInequalityExpression) {
			listener.exitInequalityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitInequalityExpression) {
			return visitor.visitInequalityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimingExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public intervalOperatorPhrase(): IntervalOperatorPhraseContext {
		return this.getRuleContext(0, IntervalOperatorPhraseContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTimingExpression) {
			listener.enterTimingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTimingExpression) {
			listener.exitTimingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTimingExpression) {
			return visitor.visitTimingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MembershipExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterMembershipExpression) {
			listener.enterMembershipExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitMembershipExpression) {
			listener.exitMembershipExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitMembershipExpression) {
			return visitor.visitMembershipExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImpliesExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterImpliesExpression) {
			listener.enterImpliesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitImpliesExpression) {
			listener.exitImpliesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitImpliesExpression) {
			return visitor.visitImpliesExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InFixSetExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterInFixSetExpression) {
			listener.enterInFixSetExpression(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitInFixSetExpression) {
			listener.exitInFixSetExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitInFixSetExpression) {
			return visitor.visitInFixSetExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateTimePrecisionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_dateTimePrecision; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDateTimePrecision) {
			listener.enterDateTimePrecision(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDateTimePrecision) {
			listener.exitDateTimePrecision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDateTimePrecision) {
			return visitor.visitDateTimePrecision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateTimeComponentContext extends ParserRuleContext {
	public dateTimePrecision(): DateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_dateTimeComponent; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDateTimeComponent) {
			listener.enterDateTimeComponent(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDateTimeComponent) {
			listener.exitDateTimeComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDateTimeComponent) {
			return visitor.visitDateTimeComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PluralDateTimePrecisionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_pluralDateTimePrecision; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterPluralDateTimePrecision) {
			listener.enterPluralDateTimePrecision(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitPluralDateTimePrecision) {
			listener.exitPluralDateTimePrecision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitPluralDateTimePrecision) {
			return visitor.visitPluralDateTimePrecision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionTermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_expressionTerm; }
	public copyFrom(ctx: ExpressionTermContext): void {
		super.copyFrom(ctx);
	}
}
export class TermExpressionTermContext extends ExpressionTermContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTermExpressionTerm) {
			listener.enterTermExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTermExpressionTerm) {
			listener.exitTermExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTermExpressionTerm) {
			return visitor.visitTermExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InvocationExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	public qualifiedInvocation(): QualifiedInvocationContext {
		return this.getRuleContext(0, QualifiedInvocationContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterInvocationExpressionTerm) {
			listener.enterInvocationExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitInvocationExpressionTerm) {
			listener.exitInvocationExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitInvocationExpressionTerm) {
			return visitor.visitInvocationExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexedExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIndexedExpressionTerm) {
			listener.enterIndexedExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIndexedExpressionTerm) {
			listener.exitIndexedExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIndexedExpressionTerm) {
			return visitor.visitIndexedExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConversionExpressionTermContext extends ExpressionTermContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterConversionExpressionTerm) {
			listener.enterConversionExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitConversionExpressionTerm) {
			listener.exitConversionExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitConversionExpressionTerm) {
			return visitor.visitConversionExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PolarityExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterPolarityExpressionTerm) {
			listener.enterPolarityExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitPolarityExpressionTerm) {
			listener.exitPolarityExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitPolarityExpressionTerm) {
			return visitor.visitPolarityExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeBoundaryExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTimeBoundaryExpressionTerm) {
			listener.enterTimeBoundaryExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTimeBoundaryExpressionTerm) {
			listener.exitTimeBoundaryExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTimeBoundaryExpressionTerm) {
			return visitor.visitTimeBoundaryExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeUnitExpressionTermContext extends ExpressionTermContext {
	public dateTimeComponent(): DateTimeComponentContext {
		return this.getRuleContext(0, DateTimeComponentContext);
	}
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTimeUnitExpressionTerm) {
			listener.enterTimeUnitExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTimeUnitExpressionTerm) {
			listener.exitTimeUnitExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTimeUnitExpressionTerm) {
			return visitor.visitTimeUnitExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DurationExpressionTermContext extends ExpressionTermContext {
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
		return this.getRuleContext(0, PluralDateTimePrecisionContext);
	}
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDurationExpressionTerm) {
			listener.enterDurationExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDurationExpressionTerm) {
			listener.exitDurationExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDurationExpressionTerm) {
			return visitor.visitDurationExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DifferenceExpressionTermContext extends ExpressionTermContext {
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext {
		return this.getRuleContext(0, PluralDateTimePrecisionContext);
	}
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDifferenceExpressionTerm) {
			listener.enterDifferenceExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDifferenceExpressionTerm) {
			listener.exitDifferenceExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDifferenceExpressionTerm) {
			return visitor.visitDifferenceExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WidthExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterWidthExpressionTerm) {
			listener.enterWidthExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitWidthExpressionTerm) {
			listener.exitWidthExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitWidthExpressionTerm) {
			return visitor.visitWidthExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuccessorExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSuccessorExpressionTerm) {
			listener.enterSuccessorExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSuccessorExpressionTerm) {
			listener.exitSuccessorExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSuccessorExpressionTerm) {
			return visitor.visitSuccessorExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredecessorExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterPredecessorExpressionTerm) {
			listener.enterPredecessorExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitPredecessorExpressionTerm) {
			listener.exitPredecessorExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitPredecessorExpressionTerm) {
			return visitor.visitPredecessorExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ElementExtractorExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterElementExtractorExpressionTerm) {
			listener.enterElementExtractorExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitElementExtractorExpressionTerm) {
			listener.exitElementExtractorExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitElementExtractorExpressionTerm) {
			return visitor.visitElementExtractorExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PointExtractorExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext {
		return this.getRuleContext(0, ExpressionTermContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterPointExtractorExpressionTerm) {
			listener.enterPointExtractorExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitPointExtractorExpressionTerm) {
			listener.exitPointExtractorExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitPointExtractorExpressionTerm) {
			return visitor.visitPointExtractorExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeExtentExpressionTermContext extends ExpressionTermContext {
	public namedTypeSpecifier(): NamedTypeSpecifierContext {
		return this.getRuleContext(0, NamedTypeSpecifierContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTypeExtentExpressionTerm) {
			listener.enterTypeExtentExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTypeExtentExpressionTerm) {
			listener.exitTypeExtentExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTypeExtentExpressionTerm) {
			return visitor.visitTypeExtentExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext[];
	public expressionTerm(i: number): ExpressionTermContext;
	public expressionTerm(i?: number): ExpressionTermContext | ExpressionTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionTermContext);
		} else {
			return this.getRuleContext(i, ExpressionTermContext);
		}
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterPowerExpressionTerm) {
			listener.enterPowerExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitPowerExpressionTerm) {
			listener.exitPowerExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitPowerExpressionTerm) {
			return visitor.visitPowerExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicationExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext[];
	public expressionTerm(i: number): ExpressionTermContext;
	public expressionTerm(i?: number): ExpressionTermContext | ExpressionTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionTermContext);
		} else {
			return this.getRuleContext(i, ExpressionTermContext);
		}
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterMultiplicationExpressionTerm) {
			listener.enterMultiplicationExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitMultiplicationExpressionTerm) {
			listener.exitMultiplicationExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitMultiplicationExpressionTerm) {
			return visitor.visitMultiplicationExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionExpressionTermContext extends ExpressionTermContext {
	public expressionTerm(): ExpressionTermContext[];
	public expressionTerm(i: number): ExpressionTermContext;
	public expressionTerm(i?: number): ExpressionTermContext | ExpressionTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionTermContext);
		} else {
			return this.getRuleContext(i, ExpressionTermContext);
		}
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterAdditionExpressionTerm) {
			listener.enterAdditionExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitAdditionExpressionTerm) {
			listener.exitAdditionExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitAdditionExpressionTerm) {
			return visitor.visitAdditionExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfThenElseExpressionTermContext extends ExpressionTermContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIfThenElseExpressionTerm) {
			listener.enterIfThenElseExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIfThenElseExpressionTerm) {
			listener.exitIfThenElseExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIfThenElseExpressionTerm) {
			return visitor.visitIfThenElseExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseExpressionTermContext extends ExpressionTermContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public caseExpressionItem(): CaseExpressionItemContext[];
	public caseExpressionItem(i: number): CaseExpressionItemContext;
	public caseExpressionItem(i?: number): CaseExpressionItemContext | CaseExpressionItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseExpressionItemContext);
		} else {
			return this.getRuleContext(i, CaseExpressionItemContext);
		}
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCaseExpressionTerm) {
			listener.enterCaseExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCaseExpressionTerm) {
			listener.exitCaseExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCaseExpressionTerm) {
			return visitor.visitCaseExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AggregateExpressionTermContext extends ExpressionTermContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterAggregateExpressionTerm) {
			listener.enterAggregateExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitAggregateExpressionTerm) {
			listener.exitAggregateExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitAggregateExpressionTerm) {
			return visitor.visitAggregateExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetAggregateExpressionTermContext extends ExpressionTermContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public dateTimePrecision(): DateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionContext);
	}
	constructor(ctx: ExpressionTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSetAggregateExpressionTerm) {
			listener.enterSetAggregateExpressionTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSetAggregateExpressionTerm) {
			listener.exitSetAggregateExpressionTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitSetAggregateExpressionTerm) {
			return visitor.visitSetAggregateExpressionTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseExpressionItemContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_caseExpressionItem; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCaseExpressionItem) {
			listener.enterCaseExpressionItem(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCaseExpressionItem) {
			listener.exitCaseExpressionItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCaseExpressionItem) {
			return visitor.visitCaseExpressionItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateTimePrecisionSpecifierContext extends ParserRuleContext {
	public dateTimePrecision(): DateTimePrecisionContext {
		return this.getRuleContext(0, DateTimePrecisionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_dateTimePrecisionSpecifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDateTimePrecisionSpecifier) {
			listener.enterDateTimePrecisionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDateTimePrecisionSpecifier) {
			listener.exitDateTimePrecisionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDateTimePrecisionSpecifier) {
			return visitor.visitDateTimePrecisionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelativeQualifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_relativeQualifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterRelativeQualifier) {
			listener.enterRelativeQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitRelativeQualifier) {
			listener.exitRelativeQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitRelativeQualifier) {
			return visitor.visitRelativeQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetRelativeQualifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_offsetRelativeQualifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterOffsetRelativeQualifier) {
			listener.enterOffsetRelativeQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitOffsetRelativeQualifier) {
			listener.exitOffsetRelativeQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitOffsetRelativeQualifier) {
			return visitor.visitOffsetRelativeQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveRelativeQualifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_exclusiveRelativeQualifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterExclusiveRelativeQualifier) {
			listener.enterExclusiveRelativeQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitExclusiveRelativeQualifier) {
			listener.exitExclusiveRelativeQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitExclusiveRelativeQualifier) {
			return visitor.visitExclusiveRelativeQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantityOffsetContext extends ParserRuleContext {
	public quantity(): QuantityContext | undefined {
		return this.tryGetRuleContext(0, QuantityContext);
	}
	public offsetRelativeQualifier(): OffsetRelativeQualifierContext | undefined {
		return this.tryGetRuleContext(0, OffsetRelativeQualifierContext);
	}
	public exclusiveRelativeQualifier(): ExclusiveRelativeQualifierContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveRelativeQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_quantityOffset; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQuantityOffset) {
			listener.enterQuantityOffset(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQuantityOffset) {
			listener.exitQuantityOffset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQuantityOffset) {
			return visitor.visitQuantityOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemporalRelationshipContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_temporalRelationship; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTemporalRelationship) {
			listener.enterTemporalRelationship(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTemporalRelationship) {
			listener.exitTemporalRelationship(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTemporalRelationship) {
			return visitor.visitTemporalRelationship(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalOperatorPhraseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_intervalOperatorPhrase; }
	public copyFrom(ctx: IntervalOperatorPhraseContext): void {
		super.copyFrom(ctx);
	}
}
export class ConcurrentWithIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public relativeQualifier(): RelativeQualifierContext | undefined {
		return this.tryGetRuleContext(0, RelativeQualifierContext);
	}
	public dateTimePrecision(): DateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterConcurrentWithIntervalOperatorPhrase) {
			listener.enterConcurrentWithIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitConcurrentWithIntervalOperatorPhrase) {
			listener.exitConcurrentWithIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitConcurrentWithIntervalOperatorPhrase) {
			return visitor.visitConcurrentWithIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncludesIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIncludesIntervalOperatorPhrase) {
			listener.enterIncludesIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIncludesIntervalOperatorPhrase) {
			listener.exitIncludesIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIncludesIntervalOperatorPhrase) {
			return visitor.visitIncludesIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncludedInIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIncludedInIntervalOperatorPhrase) {
			listener.enterIncludedInIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIncludedInIntervalOperatorPhrase) {
			listener.exitIncludedInIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIncludedInIntervalOperatorPhrase) {
			return visitor.visitIncludedInIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BeforeOrAfterIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public temporalRelationship(): TemporalRelationshipContext {
		return this.getRuleContext(0, TemporalRelationshipContext);
	}
	public quantityOffset(): QuantityOffsetContext | undefined {
		return this.tryGetRuleContext(0, QuantityOffsetContext);
	}
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterBeforeOrAfterIntervalOperatorPhrase) {
			listener.enterBeforeOrAfterIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitBeforeOrAfterIntervalOperatorPhrase) {
			listener.exitBeforeOrAfterIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitBeforeOrAfterIntervalOperatorPhrase) {
			return visitor.visitBeforeOrAfterIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WithinIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public quantity(): QuantityContext {
		return this.getRuleContext(0, QuantityContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterWithinIntervalOperatorPhrase) {
			listener.enterWithinIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitWithinIntervalOperatorPhrase) {
			listener.exitWithinIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitWithinIntervalOperatorPhrase) {
			return visitor.visitWithinIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MeetsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterMeetsIntervalOperatorPhrase) {
			listener.enterMeetsIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitMeetsIntervalOperatorPhrase) {
			listener.exitMeetsIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitMeetsIntervalOperatorPhrase) {
			return visitor.visitMeetsIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OverlapsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterOverlapsIntervalOperatorPhrase) {
			listener.enterOverlapsIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitOverlapsIntervalOperatorPhrase) {
			listener.exitOverlapsIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitOverlapsIntervalOperatorPhrase) {
			return visitor.visitOverlapsIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StartsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterStartsIntervalOperatorPhrase) {
			listener.enterStartsIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitStartsIntervalOperatorPhrase) {
			listener.exitStartsIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitStartsIntervalOperatorPhrase) {
			return visitor.visitStartsIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EndsIntervalOperatorPhraseContext extends IntervalOperatorPhraseContext {
	public dateTimePrecisionSpecifier(): DateTimePrecisionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionSpecifierContext);
	}
	constructor(ctx: IntervalOperatorPhraseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterEndsIntervalOperatorPhrase) {
			listener.enterEndsIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitEndsIntervalOperatorPhrase) {
			listener.exitEndsIntervalOperatorPhrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitEndsIntervalOperatorPhrase) {
			return visitor.visitEndsIntervalOperatorPhrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_term; }
	public copyFrom(ctx: TermContext): void {
		super.copyFrom(ctx);
	}
}
export class InvocationTermContext extends TermContext {
	public invocation(): InvocationContext {
		return this.getRuleContext(0, InvocationContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterInvocationTerm) {
			listener.enterInvocationTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitInvocationTerm) {
			listener.exitInvocationTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitInvocationTerm) {
			return visitor.visitInvocationTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralTermContext extends TermContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterLiteralTerm) {
			listener.enterLiteralTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitLiteralTerm) {
			listener.exitLiteralTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitLiteralTerm) {
			return visitor.visitLiteralTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExternalConstantTermContext extends TermContext {
	public externalConstant(): ExternalConstantContext {
		return this.getRuleContext(0, ExternalConstantContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterExternalConstantTerm) {
			listener.enterExternalConstantTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitExternalConstantTerm) {
			listener.exitExternalConstantTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitExternalConstantTerm) {
			return visitor.visitExternalConstantTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalSelectorTermContext extends TermContext {
	public intervalSelector(): IntervalSelectorContext {
		return this.getRuleContext(0, IntervalSelectorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIntervalSelectorTerm) {
			listener.enterIntervalSelectorTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIntervalSelectorTerm) {
			listener.exitIntervalSelectorTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIntervalSelectorTerm) {
			return visitor.visitIntervalSelectorTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleSelectorTermContext extends TermContext {
	public tupleSelector(): TupleSelectorContext {
		return this.getRuleContext(0, TupleSelectorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTupleSelectorTerm) {
			listener.enterTupleSelectorTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTupleSelectorTerm) {
			listener.exitTupleSelectorTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTupleSelectorTerm) {
			return visitor.visitTupleSelectorTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceSelectorTermContext extends TermContext {
	public instanceSelector(): InstanceSelectorContext {
		return this.getRuleContext(0, InstanceSelectorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterInstanceSelectorTerm) {
			listener.enterInstanceSelectorTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitInstanceSelectorTerm) {
			listener.exitInstanceSelectorTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitInstanceSelectorTerm) {
			return visitor.visitInstanceSelectorTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListSelectorTermContext extends TermContext {
	public listSelector(): ListSelectorContext {
		return this.getRuleContext(0, ListSelectorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterListSelectorTerm) {
			listener.enterListSelectorTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitListSelectorTerm) {
			listener.exitListSelectorTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitListSelectorTerm) {
			return visitor.visitListSelectorTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CodeSelectorTermContext extends TermContext {
	public codeSelector(): CodeSelectorContext {
		return this.getRuleContext(0, CodeSelectorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodeSelectorTerm) {
			listener.enterCodeSelectorTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodeSelectorTerm) {
			listener.exitCodeSelectorTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodeSelectorTerm) {
			return visitor.visitCodeSelectorTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConceptSelectorTermContext extends TermContext {
	public conceptSelector(): ConceptSelectorContext {
		return this.getRuleContext(0, ConceptSelectorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterConceptSelectorTerm) {
			listener.enterConceptSelectorTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitConceptSelectorTerm) {
			listener.exitConceptSelectorTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitConceptSelectorTerm) {
			return visitor.visitConceptSelectorTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedTermContext extends TermContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterParenthesizedTerm) {
			listener.enterParenthesizedTerm(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitParenthesizedTerm) {
			listener.exitParenthesizedTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitParenthesizedTerm) {
			return visitor.visitParenthesizedTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedInvocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_qualifiedInvocation; }
	public copyFrom(ctx: QualifiedInvocationContext): void {
		super.copyFrom(ctx);
	}
}
export class QualifiedMemberInvocationContext extends QualifiedInvocationContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	constructor(ctx: QualifiedInvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQualifiedMemberInvocation) {
			listener.enterQualifiedMemberInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQualifiedMemberInvocation) {
			listener.exitQualifiedMemberInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQualifiedMemberInvocation) {
			return visitor.visitQualifiedMemberInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QualifiedFunctionInvocationContext extends QualifiedInvocationContext {
	public qualifiedFunction(): QualifiedFunctionContext {
		return this.getRuleContext(0, QualifiedFunctionContext);
	}
	constructor(ctx: QualifiedInvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQualifiedFunctionInvocation) {
			listener.enterQualifiedFunctionInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQualifiedFunctionInvocation) {
			listener.exitQualifiedFunctionInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQualifiedFunctionInvocation) {
			return visitor.visitQualifiedFunctionInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedFunctionContext extends ParserRuleContext {
	public identifierOrFunctionIdentifier(): IdentifierOrFunctionIdentifierContext {
		return this.getRuleContext(0, IdentifierOrFunctionIdentifierContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_qualifiedFunction; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQualifiedFunction) {
			listener.enterQualifiedFunction(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQualifiedFunction) {
			listener.exitQualifiedFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQualifiedFunction) {
			return visitor.visitQualifiedFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InvocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_invocation; }
	public copyFrom(ctx: InvocationContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberInvocationContext extends InvocationContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterMemberInvocation) {
			listener.enterMemberInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitMemberInvocation) {
			listener.exitMemberInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitMemberInvocation) {
			return visitor.visitMemberInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionInvocationContext extends InvocationContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterFunctionInvocation) {
			listener.enterFunctionInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitFunctionInvocation) {
			listener.exitFunctionInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitFunctionInvocation) {
			return visitor.visitFunctionInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisInvocationContext extends InvocationContext {
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterThisInvocation) {
			listener.enterThisInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitThisInvocation) {
			listener.exitThisInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitThisInvocation) {
			return visitor.visitThisInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexInvocationContext extends InvocationContext {
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIndexInvocation) {
			listener.enterIndexInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIndexInvocation) {
			listener.exitIndexInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIndexInvocation) {
			return visitor.visitIndexInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TotalInvocationContext extends InvocationContext {
	constructor(ctx: InvocationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTotalInvocation) {
			listener.enterTotalInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTotalInvocation) {
			listener.exitTotalInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTotalInvocation) {
			return visitor.visitTotalInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_function; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RatioContext extends ParserRuleContext {
	public quantity(): QuantityContext[];
	public quantity(i: number): QuantityContext;
	public quantity(i?: number): QuantityContext | QuantityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuantityContext);
		} else {
			return this.getRuleContext(i, QuantityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_ratio; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterRatio) {
			listener.enterRatio(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitRatio) {
			listener.exitRatio(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitRatio) {
			return visitor.visitRatio(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanLiteralContext extends LiteralContext {
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralContext extends LiteralContext {
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(cqlParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberLiteralContext extends LiteralContext {
	public NUMBER(): TerminalNode { return this.getToken(cqlParser.NUMBER, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LongNumberLiteralContext extends LiteralContext {
	public LONGNUMBER(): TerminalNode { return this.getToken(cqlParser.LONGNUMBER, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterLongNumberLiteral) {
			listener.enterLongNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitLongNumberLiteral) {
			listener.exitLongNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitLongNumberLiteral) {
			return visitor.visitLongNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateTimeLiteralContext extends LiteralContext {
	public DATETIME(): TerminalNode { return this.getToken(cqlParser.DATETIME, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDateTimeLiteral) {
			listener.enterDateTimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDateTimeLiteral) {
			listener.exitDateTimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDateTimeLiteral) {
			return visitor.visitDateTimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateLiteralContext extends LiteralContext {
	public DATE(): TerminalNode { return this.getToken(cqlParser.DATE, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDateLiteral) {
			listener.enterDateLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDateLiteral) {
			listener.exitDateLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDateLiteral) {
			return visitor.visitDateLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeLiteralContext extends LiteralContext {
	public TIME(): TerminalNode { return this.getToken(cqlParser.TIME, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTimeLiteral) {
			listener.enterTimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTimeLiteral) {
			listener.exitTimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTimeLiteral) {
			return visitor.visitTimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantityLiteralContext extends LiteralContext {
	public quantity(): QuantityContext {
		return this.getRuleContext(0, QuantityContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQuantityLiteral) {
			listener.enterQuantityLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQuantityLiteral) {
			listener.exitQuantityLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQuantityLiteral) {
			return visitor.visitQuantityLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RatioLiteralContext extends LiteralContext {
	public ratio(): RatioContext {
		return this.getRuleContext(0, RatioContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterRatioLiteral) {
			listener.enterRatioLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitRatioLiteral) {
			listener.exitRatioLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitRatioLiteral) {
			return visitor.visitRatioLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalSelectorContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_intervalSelector; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIntervalSelector) {
			listener.enterIntervalSelector(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIntervalSelector) {
			listener.exitIntervalSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIntervalSelector) {
			return visitor.visitIntervalSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleSelectorContext extends ParserRuleContext {
	public tupleElementSelector(): TupleElementSelectorContext[];
	public tupleElementSelector(i: number): TupleElementSelectorContext;
	public tupleElementSelector(i?: number): TupleElementSelectorContext | TupleElementSelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TupleElementSelectorContext);
		} else {
			return this.getRuleContext(i, TupleElementSelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_tupleSelector; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTupleSelector) {
			listener.enterTupleSelector(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTupleSelector) {
			listener.exitTupleSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTupleSelector) {
			return visitor.visitTupleSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleElementSelectorContext extends ParserRuleContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_tupleElementSelector; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTupleElementSelector) {
			listener.enterTupleElementSelector(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTupleElementSelector) {
			listener.exitTupleElementSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTupleElementSelector) {
			return visitor.visitTupleElementSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceSelectorContext extends ParserRuleContext {
	public namedTypeSpecifier(): NamedTypeSpecifierContext {
		return this.getRuleContext(0, NamedTypeSpecifierContext);
	}
	public instanceElementSelector(): InstanceElementSelectorContext[];
	public instanceElementSelector(i: number): InstanceElementSelectorContext;
	public instanceElementSelector(i?: number): InstanceElementSelectorContext | InstanceElementSelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstanceElementSelectorContext);
		} else {
			return this.getRuleContext(i, InstanceElementSelectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_instanceSelector; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterInstanceSelector) {
			listener.enterInstanceSelector(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitInstanceSelector) {
			listener.exitInstanceSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitInstanceSelector) {
			return visitor.visitInstanceSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceElementSelectorContext extends ParserRuleContext {
	public referentialIdentifier(): ReferentialIdentifierContext {
		return this.getRuleContext(0, ReferentialIdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_instanceElementSelector; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterInstanceElementSelector) {
			listener.enterInstanceElementSelector(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitInstanceElementSelector) {
			listener.exitInstanceElementSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitInstanceElementSelector) {
			return visitor.visitInstanceElementSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListSelectorContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_listSelector; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterListSelector) {
			listener.enterListSelector(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitListSelector) {
			listener.exitListSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitListSelector) {
			return visitor.visitListSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DisplayClauseContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(cqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_displayClause; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterDisplayClause) {
			listener.enterDisplayClause(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitDisplayClause) {
			listener.exitDisplayClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitDisplayClause) {
			return visitor.visitDisplayClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeSelectorContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(cqlParser.STRING, 0); }
	public codesystemIdentifier(): CodesystemIdentifierContext {
		return this.getRuleContext(0, CodesystemIdentifierContext);
	}
	public displayClause(): DisplayClauseContext | undefined {
		return this.tryGetRuleContext(0, DisplayClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_codeSelector; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterCodeSelector) {
			listener.enterCodeSelector(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitCodeSelector) {
			listener.exitCodeSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitCodeSelector) {
			return visitor.visitCodeSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConceptSelectorContext extends ParserRuleContext {
	public codeSelector(): CodeSelectorContext[];
	public codeSelector(i: number): CodeSelectorContext;
	public codeSelector(i?: number): CodeSelectorContext | CodeSelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeSelectorContext);
		} else {
			return this.getRuleContext(i, CodeSelectorContext);
		}
	}
	public displayClause(): DisplayClauseContext | undefined {
		return this.tryGetRuleContext(0, DisplayClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_conceptSelector; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterConceptSelector) {
			listener.enterConceptSelector(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitConceptSelector) {
			listener.exitConceptSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitConceptSelector) {
			return visitor.visitConceptSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_keyword; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_keywordIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterKeywordIdentifier) {
			listener.enterKeywordIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitKeywordIdentifier) {
			listener.exitKeywordIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitKeywordIdentifier) {
			return visitor.visitKeywordIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObsoleteIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_obsoleteIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterObsoleteIdentifier) {
			listener.enterObsoleteIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitObsoleteIdentifier) {
			listener.exitObsoleteIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitObsoleteIdentifier) {
			return visitor.visitObsoleteIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_functionIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterFunctionIdentifier) {
			listener.enterFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitFunctionIdentifier) {
			listener.exitFunctionIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitFunctionIdentifier) {
			return visitor.visitFunctionIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_typeNameIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterTypeNameIdentifier) {
			listener.enterTypeNameIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitTypeNameIdentifier) {
			listener.exitTypeNameIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitTypeNameIdentifier) {
			return visitor.visitTypeNameIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferentialIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public keywordIdentifier(): KeywordIdentifierContext | undefined {
		return this.tryGetRuleContext(0, KeywordIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_referentialIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterReferentialIdentifier) {
			listener.enterReferentialIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitReferentialIdentifier) {
			listener.exitReferentialIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitReferentialIdentifier) {
			return visitor.visitReferentialIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferentialOrTypeNameIdentifierContext extends ParserRuleContext {
	public referentialIdentifier(): ReferentialIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ReferentialIdentifierContext);
	}
	public typeNameIdentifier(): TypeNameIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeNameIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_referentialOrTypeNameIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterReferentialOrTypeNameIdentifier) {
			listener.enterReferentialOrTypeNameIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitReferentialOrTypeNameIdentifier) {
			listener.exitReferentialOrTypeNameIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitReferentialOrTypeNameIdentifier) {
			return visitor.visitReferentialOrTypeNameIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierOrFunctionIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public functionIdentifier(): FunctionIdentifierContext | undefined {
		return this.tryGetRuleContext(0, FunctionIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_identifierOrFunctionIdentifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIdentifierOrFunctionIdentifier) {
			listener.enterIdentifierOrFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIdentifierOrFunctionIdentifier) {
			listener.exitIdentifierOrFunctionIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIdentifierOrFunctionIdentifier) {
			return visitor.visitIdentifierOrFunctionIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(cqlParser.IDENTIFIER, 0); }
	public DELIMITEDIDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(cqlParser.DELIMITEDIDENTIFIER, 0); }
	public QUOTEDIDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(cqlParser.QUOTEDIDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_identifier; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalConstantContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(cqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_externalConstant; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterExternalConstant) {
			listener.enterExternalConstant(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitExternalConstant) {
			listener.exitExternalConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitExternalConstant) {
			return visitor.visitExternalConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_paramList; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantityContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(cqlParser.NUMBER, 0); }
	public unit(): UnitContext | undefined {
		return this.tryGetRuleContext(0, UnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_quantity; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterQuantity) {
			listener.enterQuantity(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitQuantity) {
			listener.exitQuantity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitQuantity) {
			return visitor.visitQuantity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	public dateTimePrecision(): DateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, DateTimePrecisionContext);
	}
	public pluralDateTimePrecision(): PluralDateTimePrecisionContext | undefined {
		return this.tryGetRuleContext(0, PluralDateTimePrecisionContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(cqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_unit; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: cqlVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


