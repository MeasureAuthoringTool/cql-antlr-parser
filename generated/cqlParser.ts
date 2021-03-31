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
	public static readonly QUOTEDIDENTIFIER = 154;
	public static readonly DATETIME = 155;
	public static readonly TIME = 156;
	public static readonly IDENTIFIER = 157;
	public static readonly DELIMITEDIDENTIFIER = 158;
	public static readonly STRING = 159;
	public static readonly NUMBER = 160;
	public static readonly WS = 161;
	public static readonly COMMENT = 162;
	public static readonly LINE_COMMENT = 163;
	public static readonly RULE_library = 0;
	public static readonly RULE_libraryDefinition = 1;
	public static readonly RULE_usingDefinition = 2;
	public static readonly RULE_includeDefinition = 3;
	public static readonly RULE_localIdentifier = 4;
	public static readonly RULE_accessModifier = 5;
	public static readonly RULE_parameterDefinition = 6;
	public static readonly RULE_codesystemDefinition = 7;
	public static readonly RULE_valuesetDefinition = 8;
	public static readonly RULE_codesystems = 9;
	public static readonly RULE_codesystemIdentifier = 10;
	public static readonly RULE_libraryIdentifier = 11;
	public static readonly RULE_codeDefinition = 12;
	public static readonly RULE_conceptDefinition = 13;
	public static readonly RULE_codeIdentifier = 14;
	public static readonly RULE_codesystemId = 15;
	public static readonly RULE_valuesetId = 16;
	public static readonly RULE_versionSpecifier = 17;
	public static readonly RULE_codeId = 18;
	public static readonly RULE_typeSpecifier = 19;
	public static readonly RULE_namedTypeSpecifier = 20;
	public static readonly RULE_modelIdentifier = 21;
	public static readonly RULE_listTypeSpecifier = 22;
	public static readonly RULE_intervalTypeSpecifier = 23;
	public static readonly RULE_tupleTypeSpecifier = 24;
	public static readonly RULE_tupleElementDefinition = 25;
	public static readonly RULE_choiceTypeSpecifier = 26;
	public static readonly RULE_statement = 27;
	public static readonly RULE_expressionDefinition = 28;
	public static readonly RULE_contextDefinition = 29;
	public static readonly RULE_functionDefinition = 30;
	public static readonly RULE_operandDefinition = 31;
	public static readonly RULE_functionBody = 32;
	public static readonly RULE_querySource = 33;
	public static readonly RULE_aliasedQuerySource = 34;
	public static readonly RULE_alias = 35;
	public static readonly RULE_queryInclusionClause = 36;
	public static readonly RULE_withClause = 37;
	public static readonly RULE_withoutClause = 38;
	public static readonly RULE_retrieve = 39;
	public static readonly RULE_contextIdentifier = 40;
	public static readonly RULE_codePath = 41;
	public static readonly RULE_terminology = 42;
	public static readonly RULE_qualifier = 43;
	public static readonly RULE_query = 44;
	public static readonly RULE_sourceClause = 45;
	public static readonly RULE_letClause = 46;
	public static readonly RULE_letClauseItem = 47;
	public static readonly RULE_whereClause = 48;
	public static readonly RULE_returnClause = 49;
	public static readonly RULE_sortClause = 50;
	public static readonly RULE_sortDirection = 51;
	public static readonly RULE_sortByItem = 52;
	public static readonly RULE_qualifiedIdentifier = 53;
	public static readonly RULE_qualifiedIdentifierExpression = 54;
	public static readonly RULE_qualifierExpression = 55;
	public static readonly RULE_simplePath = 56;
	public static readonly RULE_simpleLiteral = 57;
	public static readonly RULE_expression = 58;
	public static readonly RULE_dateTimePrecision = 59;
	public static readonly RULE_dateTimeComponent = 60;
	public static readonly RULE_pluralDateTimePrecision = 61;
	public static readonly RULE_expressionTerm = 62;
	public static readonly RULE_caseExpressionItem = 63;
	public static readonly RULE_dateTimePrecisionSpecifier = 64;
	public static readonly RULE_relativeQualifier = 65;
	public static readonly RULE_offsetRelativeQualifier = 66;
	public static readonly RULE_exclusiveRelativeQualifier = 67;
	public static readonly RULE_quantityOffset = 68;
	public static readonly RULE_temporalRelationship = 69;
	public static readonly RULE_intervalOperatorPhrase = 70;
	public static readonly RULE_term = 71;
	public static readonly RULE_qualifiedInvocation = 72;
	public static readonly RULE_qualifiedFunction = 73;
	public static readonly RULE_invocation = 74;
	public static readonly RULE_c_function = 75;
	public static readonly RULE_ratio = 76;
	public static readonly RULE_literal = 77;
	public static readonly RULE_intervalSelector = 78;
	public static readonly RULE_tupleSelector = 79;
	public static readonly RULE_tupleElementSelector = 80;
	public static readonly RULE_instanceSelector = 81;
	public static readonly RULE_instanceElementSelector = 82;
	public static readonly RULE_listSelector = 83;
	public static readonly RULE_displayClause = 84;
	public static readonly RULE_codeSelector = 85;
	public static readonly RULE_conceptSelector = 86;
	public static readonly RULE_keyword = 87;
	public static readonly RULE_reservedWord = 88;
	public static readonly RULE_keywordIdentifier = 89;
	public static readonly RULE_obsoleteIdentifier = 90;
	public static readonly RULE_functionIdentifier = 91;
	public static readonly RULE_typeNameIdentifier = 92;
	public static readonly RULE_referentialIdentifier = 93;
	public static readonly RULE_referentialOrTypeNameIdentifier = 94;
	public static readonly RULE_identifierOrFunctionIdentifier = 95;
	public static readonly RULE_identifier = 96;
	public static readonly RULE_externalConstant = 97;
	public static readonly RULE_paramList = 98;
	public static readonly RULE_quantity = 99;
	public static readonly RULE_unit = 100;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"library", "libraryDefinition", "usingDefinition", "includeDefinition", 
		"localIdentifier", "accessModifier", "parameterDefinition", "codesystemDefinition", 
		"valuesetDefinition", "codesystems", "codesystemIdentifier", "libraryIdentifier", 
		"codeDefinition", "conceptDefinition", "codeIdentifier", "codesystemId", 
		"valuesetId", "versionSpecifier", "codeId", "typeSpecifier", "namedTypeSpecifier", 
		"modelIdentifier", "listTypeSpecifier", "intervalTypeSpecifier", "tupleTypeSpecifier", 
		"tupleElementDefinition", "choiceTypeSpecifier", "statement", "expressionDefinition", 
		"contextDefinition", "functionDefinition", "operandDefinition", "functionBody", 
		"querySource", "aliasedQuerySource", "alias", "queryInclusionClause", 
		"withClause", "withoutClause", "retrieve", "contextIdentifier", "codePath", 
		"terminology", "qualifier", "query", "sourceClause", "letClause", "letClauseItem", 
		"whereClause", "returnClause", "sortClause", "sortDirection", "sortByItem", 
		"qualifiedIdentifier", "qualifiedIdentifierExpression", "qualifierExpression", 
		"simplePath", "simpleLiteral", "expression", "dateTimePrecision", "dateTimeComponent", 
		"pluralDateTimePrecision", "expressionTerm", "caseExpressionItem", "dateTimePrecisionSpecifier", 
		"relativeQualifier", "offsetRelativeQualifier", "exclusiveRelativeQualifier", 
		"quantityOffset", "temporalRelationship", "intervalOperatorPhrase", "term", 
		"qualifiedInvocation", "qualifiedFunction", "invocation", "c_function", 
		"ratio", "literal", "intervalSelector", "tupleSelector", "tupleElementSelector", 
		"instanceSelector", "instanceElementSelector", "listSelector", "displayClause", 
		"codeSelector", "conceptSelector", "keyword", "reservedWord", "keywordIdentifier", 
		"obsoleteIdentifier", "functionIdentifier", "typeNameIdentifier", "referentialIdentifier", 
		"referentialOrTypeNameIdentifier", "identifierOrFunctionIdentifier", "identifier", 
		"externalConstant", "paramList", "quantity", "unit",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'library'", "'version'", "'using'", "'include'", "'called'", 
		"'public'", "'private'", "'parameter'", "'default'", "'codesystem'", "':'", 
		"'valueset'", "'codesystems'", "'{'", "','", "'}'", "'.'", "'code'", "'from'", 
		"'concept'", "'List'", "'<'", "'>'", "'Interval'", "'Tuple'", "'Choice'", 
		"'define'", "'context'", "'function'", "'('", "')'", "'returns'", "'external'", 
		"'with'", "'such that'", "'without'", "'['", "'->'", "'in'", "']'", "'let'", 
		"'where'", "'return'", "'all'", "'distinct'", "'sort'", "'by'", "'asc'", 
		"'ascending'", "'desc'", "'descending'", "'is'", "'not'", "'null'", "'true'", 
		"'false'", "'as'", "'cast'", "'exists'", "'properly'", "'between'", "'and'", 
		"'duration'", "'difference'", "'<='", "'>='", "'='", "'!='", "'~'", "'!~'", 
		"'contains'", "'or'", "'xor'", "'implies'", "'|'", "'union'", "'intersect'", 
		"'except'", "'year'", "'month'", "'week'", "'day'", "'hour'", "'minute'", 
		"'second'", "'millisecond'", "'date'", "'time'", "'timezoneoffset'", "'years'", 
		"'months'", "'weeks'", "'days'", "'hours'", "'minutes'", "'seconds'", 
		"'milliseconds'", "'convert'", "'to'", "'+'", "'-'", "'start'", "'end'", 
		"'of'", "'width'", "'successor'", "'predecessor'", "'singleton'", "'point'", 
		"'minimum'", "'maximum'", "'^'", "'*'", "'/'", "'div'", "'mod'", "'&'", 
		"'if'", "'then'", "'else'", "'case'", "'flatten'", "'expand'", "'collapse'", 
		"'per'", "'when'", "'or before'", "'or after'", "'or more'", "'or less'", 
		"'less than'", "'more than'", "'on or'", "'before'", "'after'", "'or on'", 
		"'starts'", "'ends'", "'occurs'", "'same'", "'includes'", "'during'", 
		"'included in'", "'within'", "'meets'", "'overlaps'", "'$this'", "'$index'", 
		"'$total'", "'display'", "'Code'", "'Concept'", "'%'",
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
		"QUOTEDIDENTIFIER", "DATETIME", "TIME", "IDENTIFIER", "DELIMITEDIDENTIFIER", 
		"STRING", "NUMBER", "WS", "COMMENT", "LINE_COMMENT",
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
	public library(): LibraryContext {
		let _localctx: LibraryContext = new LibraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, cqlParser.RULE_library);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__0) {
				{
				this.state = 202;
				this.libraryDefinition();
				}
			}

			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__2) {
				{
				{
				this.state = 205;
				this.usingDefinition();
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__3) {
				{
				{
				this.state = 211;
				this.includeDefinition();
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 220;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 217;
					this.codesystemDefinition();
					}
					}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 226;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 223;
					this.valuesetDefinition();
					}
					}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 232;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 229;
					this.codeDefinition();
					}
					}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 238;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 235;
					this.conceptDefinition();
					}
					}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7))) !== 0)) {
				{
				{
				this.state = 241;
				this.parameterDefinition();
				}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__26 || _la === cqlParser.T__27) {
				{
				{
				this.state = 247;
				this.statement();
				}
				}
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 253;
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
		this.enterRule(_localctx, 2, cqlParser.RULE_libraryDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.match(cqlParser.T__0);
			this.state = 256;
			this.qualifiedIdentifier();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 257;
				this.match(cqlParser.T__1);
				this.state = 258;
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
		this.enterRule(_localctx, 4, cqlParser.RULE_usingDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(cqlParser.T__2);
			this.state = 262;
			this.modelIdentifier();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 263;
				this.match(cqlParser.T__1);
				this.state = 264;
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
	public includeDefinition(): IncludeDefinitionContext {
		let _localctx: IncludeDefinitionContext = new IncludeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, cqlParser.RULE_includeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(cqlParser.T__3);
			this.state = 268;
			this.qualifiedIdentifier();
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 269;
				this.match(cqlParser.T__1);
				this.state = 270;
				this.versionSpecifier();
				}
			}

			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__4) {
				{
				this.state = 273;
				this.match(cqlParser.T__4);
				this.state = 274;
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
		this.enterRule(_localctx, 8, cqlParser.RULE_localIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
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
		this.enterRule(_localctx, 10, cqlParser.RULE_accessModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
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
		this.enterRule(_localctx, 12, cqlParser.RULE_parameterDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 281;
				this.accessModifier();
				}
			}

			this.state = 284;
			this.match(cqlParser.T__7);
			this.state = 285;
			this.identifier();
			this.state = 287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 286;
				this.typeSpecifier();
				}
				break;
			}
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__8) {
				{
				this.state = 289;
				this.match(cqlParser.T__8);
				this.state = 290;
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
		this.enterRule(_localctx, 14, cqlParser.RULE_codesystemDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 293;
				this.accessModifier();
				}
			}

			this.state = 296;
			this.match(cqlParser.T__9);
			this.state = 297;
			this.identifier();
			this.state = 298;
			this.match(cqlParser.T__10);
			this.state = 299;
			this.codesystemId();
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 300;
				this.match(cqlParser.T__1);
				this.state = 301;
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
		this.enterRule(_localctx, 16, cqlParser.RULE_valuesetDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 304;
				this.accessModifier();
				}
			}

			this.state = 307;
			this.match(cqlParser.T__11);
			this.state = 308;
			this.identifier();
			this.state = 309;
			this.match(cqlParser.T__10);
			this.state = 310;
			this.valuesetId();
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__1) {
				{
				this.state = 311;
				this.match(cqlParser.T__1);
				this.state = 312;
				this.versionSpecifier();
				}
			}

			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__12) {
				{
				this.state = 315;
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
		this.enterRule(_localctx, 18, cqlParser.RULE_codesystems);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(cqlParser.T__12);
			this.state = 319;
			this.match(cqlParser.T__13);
			this.state = 320;
			this.codesystemIdentifier();
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 321;
				this.match(cqlParser.T__14);
				this.state = 322;
				this.codesystemIdentifier();
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 328;
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
		this.enterRule(_localctx, 20, cqlParser.RULE_codesystemIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 330;
				this.libraryIdentifier();
				this.state = 331;
				this.match(cqlParser.T__16);
				}
				break;
			}
			this.state = 335;
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
		this.enterRule(_localctx, 22, cqlParser.RULE_libraryIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
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
		this.enterRule(_localctx, 24, cqlParser.RULE_codeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 339;
				this.accessModifier();
				}
			}

			this.state = 342;
			this.match(cqlParser.T__17);
			this.state = 343;
			this.identifier();
			this.state = 344;
			this.match(cqlParser.T__10);
			this.state = 345;
			this.codeId();
			this.state = 346;
			this.match(cqlParser.T__18);
			this.state = 347;
			this.codesystemIdentifier();
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__149) {
				{
				this.state = 348;
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
		this.enterRule(_localctx, 26, cqlParser.RULE_conceptDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 351;
				this.accessModifier();
				}
			}

			this.state = 354;
			this.match(cqlParser.T__19);
			this.state = 355;
			this.identifier();
			this.state = 356;
			this.match(cqlParser.T__10);
			this.state = 357;
			this.match(cqlParser.T__13);
			this.state = 358;
			this.codeIdentifier();
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 359;
				this.match(cqlParser.T__14);
				this.state = 360;
				this.codeIdentifier();
				}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 366;
			this.match(cqlParser.T__15);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__149) {
				{
				this.state = 367;
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
		this.enterRule(_localctx, 28, cqlParser.RULE_codeIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 370;
				this.libraryIdentifier();
				this.state = 371;
				this.match(cqlParser.T__16);
				}
				break;
			}
			this.state = 375;
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
		this.enterRule(_localctx, 30, cqlParser.RULE_codesystemId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
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
		this.enterRule(_localctx, 32, cqlParser.RULE_valuesetId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
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
		this.enterRule(_localctx, 34, cqlParser.RULE_versionSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
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
		this.enterRule(_localctx, 36, cqlParser.RULE_codeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
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
		this.enterRule(_localctx, 38, cqlParser.RULE_typeSpecifier);
		try {
			this.state = 390;
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
			case cqlParser.T__41:
			case cqlParser.T__46:
			case cqlParser.T__47:
			case cqlParser.T__48:
			case cqlParser.T__49:
			case cqlParser.T__50:
			case cqlParser.T__70:
			case cqlParser.T__72:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__77:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
			case cqlParser.T__101:
			case cqlParser.T__102:
			case cqlParser.T__104:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__114:
			case cqlParser.T__115:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__128:
			case cqlParser.T__129:
			case cqlParser.T__136:
			case cqlParser.T__137:
			case cqlParser.T__140:
			case cqlParser.T__144:
			case cqlParser.T__145:
			case cqlParser.T__149:
			case cqlParser.T__150:
			case cqlParser.T__151:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 385;
				this.namedTypeSpecifier();
				}
				break;
			case cqlParser.T__20:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 386;
				this.listTypeSpecifier();
				}
				break;
			case cqlParser.T__23:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 387;
				this.intervalTypeSpecifier();
				}
				break;
			case cqlParser.T__24:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 388;
				this.tupleTypeSpecifier();
				}
				break;
			case cqlParser.T__25:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 389;
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
		this.enterRule(_localctx, 40, cqlParser.RULE_namedTypeSpecifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 392;
					this.qualifier();
					this.state = 393;
					this.match(cqlParser.T__16);
					}
					}
				}
				this.state = 399;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 400;
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
		this.enterRule(_localctx, 42, cqlParser.RULE_modelIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
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
		this.enterRule(_localctx, 44, cqlParser.RULE_listTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(cqlParser.T__20);
			this.state = 405;
			this.match(cqlParser.T__21);
			this.state = 406;
			this.typeSpecifier();
			this.state = 407;
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
		this.enterRule(_localctx, 46, cqlParser.RULE_intervalTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(cqlParser.T__23);
			this.state = 410;
			this.match(cqlParser.T__21);
			this.state = 411;
			this.typeSpecifier();
			this.state = 412;
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
		this.enterRule(_localctx, 48, cqlParser.RULE_tupleTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(cqlParser.T__24);
			this.state = 415;
			this.match(cqlParser.T__13);
			this.state = 416;
			this.tupleElementDefinition();
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 417;
				this.match(cqlParser.T__14);
				this.state = 418;
				this.tupleElementDefinition();
				}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 424;
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
		this.enterRule(_localctx, 50, cqlParser.RULE_tupleElementDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.referentialIdentifier();
			this.state = 427;
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
		this.enterRule(_localctx, 52, cqlParser.RULE_choiceTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(cqlParser.T__25);
			this.state = 430;
			this.match(cqlParser.T__21);
			this.state = 431;
			this.typeSpecifier();
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 432;
				this.match(cqlParser.T__14);
				this.state = 433;
				this.typeSpecifier();
				}
				}
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 439;
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
		this.enterRule(_localctx, 54, cqlParser.RULE_statement);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 441;
				this.expressionDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.contextDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 443;
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
		this.enterRule(_localctx, 56, cqlParser.RULE_expressionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(cqlParser.T__26);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 447;
				this.accessModifier();
				}
			}

			this.state = 450;
			this.identifier();
			this.state = 451;
			this.match(cqlParser.T__10);
			this.state = 452;
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
		this.enterRule(_localctx, 58, cqlParser.RULE_contextDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(cqlParser.T__27);
			this.state = 458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 455;
				this.modelIdentifier();
				this.state = 456;
				this.match(cqlParser.T__16);
				}
				break;
			}
			this.state = 460;
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, cqlParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(cqlParser.T__26);
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__5 || _la === cqlParser.T__6) {
				{
				this.state = 463;
				this.accessModifier();
				}
			}

			this.state = 466;
			this.match(cqlParser.T__28);
			this.state = 467;
			this.identifierOrFunctionIdentifier();
			this.state = 468;
			this.match(cqlParser.T__29);
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (cqlParser.T__41 - 42)) | (1 << (cqlParser.T__46 - 42)) | (1 << (cqlParser.T__47 - 42)) | (1 << (cqlParser.T__48 - 42)) | (1 << (cqlParser.T__49 - 42)) | (1 << (cqlParser.T__50 - 42)) | (1 << (cqlParser.T__70 - 42)) | (1 << (cqlParser.T__72 - 42)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (cqlParser.T__73 - 74)) | (1 << (cqlParser.T__75 - 74)) | (1 << (cqlParser.T__76 - 74)) | (1 << (cqlParser.T__77 - 74)) | (1 << (cqlParser.T__86 - 74)) | (1 << (cqlParser.T__87 - 74)) | (1 << (cqlParser.T__88 - 74)) | (1 << (cqlParser.T__101 - 74)) | (1 << (cqlParser.T__102 - 74)) | (1 << (cqlParser.T__104 - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (cqlParser.T__105 - 106)) | (1 << (cqlParser.T__106 - 106)) | (1 << (cqlParser.T__114 - 106)) | (1 << (cqlParser.T__115 - 106)) | (1 << (cqlParser.T__126 - 106)) | (1 << (cqlParser.T__127 - 106)) | (1 << (cqlParser.T__128 - 106)) | (1 << (cqlParser.T__129 - 106)) | (1 << (cqlParser.T__136 - 106)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (cqlParser.T__137 - 138)) | (1 << (cqlParser.T__140 - 138)) | (1 << (cqlParser.T__144 - 138)) | (1 << (cqlParser.T__145 - 138)) | (1 << (cqlParser.T__149 - 138)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 138)) | (1 << (cqlParser.IDENTIFIER - 138)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 138)))) !== 0)) {
				{
				this.state = 469;
				this.operandDefinition();
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === cqlParser.T__14) {
					{
					{
					this.state = 470;
					this.match(cqlParser.T__14);
					this.state = 471;
					this.operandDefinition();
					}
					}
					this.state = 476;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 479;
			this.match(cqlParser.T__30);
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__31) {
				{
				this.state = 480;
				this.match(cqlParser.T__31);
				this.state = 481;
				this.typeSpecifier();
				}
			}

			this.state = 484;
			this.match(cqlParser.T__10);
			this.state = 487;
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
			case cqlParser.T__36:
			case cqlParser.T__41:
			case cqlParser.T__44:
			case cqlParser.T__46:
			case cqlParser.T__47:
			case cqlParser.T__48:
			case cqlParser.T__49:
			case cqlParser.T__50:
			case cqlParser.T__52:
			case cqlParser.T__53:
			case cqlParser.T__54:
			case cqlParser.T__55:
			case cqlParser.T__57:
			case cqlParser.T__58:
			case cqlParser.T__62:
			case cqlParser.T__63:
			case cqlParser.T__70:
			case cqlParser.T__72:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__77:
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
			case cqlParser.T__99:
			case cqlParser.T__100:
			case cqlParser.T__101:
			case cqlParser.T__102:
			case cqlParser.T__104:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__107:
			case cqlParser.T__108:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__114:
			case cqlParser.T__115:
			case cqlParser.T__117:
			case cqlParser.T__120:
			case cqlParser.T__121:
			case cqlParser.T__122:
			case cqlParser.T__123:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__128:
			case cqlParser.T__129:
			case cqlParser.T__136:
			case cqlParser.T__137:
			case cqlParser.T__140:
			case cqlParser.T__144:
			case cqlParser.T__145:
			case cqlParser.T__146:
			case cqlParser.T__147:
			case cqlParser.T__148:
			case cqlParser.T__149:
			case cqlParser.T__150:
			case cqlParser.T__151:
			case cqlParser.T__152:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.DATETIME:
			case cqlParser.TIME:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
			case cqlParser.STRING:
			case cqlParser.NUMBER:
				{
				this.state = 485;
				this.functionBody();
				}
				break;
			case cqlParser.T__32:
				{
				this.state = 486;
				this.match(cqlParser.T__32);
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
		this.enterRule(_localctx, 62, cqlParser.RULE_operandDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.referentialIdentifier();
			this.state = 490;
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
		this.enterRule(_localctx, 64, cqlParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
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
		this.enterRule(_localctx, 66, cqlParser.RULE_querySource);
		try {
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__36:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 494;
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
			case cqlParser.T__41:
			case cqlParser.T__46:
			case cqlParser.T__47:
			case cqlParser.T__48:
			case cqlParser.T__49:
			case cqlParser.T__50:
			case cqlParser.T__70:
			case cqlParser.T__72:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__77:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
			case cqlParser.T__101:
			case cqlParser.T__102:
			case cqlParser.T__104:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__114:
			case cqlParser.T__115:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__128:
			case cqlParser.T__129:
			case cqlParser.T__136:
			case cqlParser.T__137:
			case cqlParser.T__140:
			case cqlParser.T__144:
			case cqlParser.T__145:
			case cqlParser.T__149:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 495;
				this.qualifiedIdentifierExpression();
				}
				break;
			case cqlParser.T__29:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 496;
				this.match(cqlParser.T__29);
				this.state = 497;
				this.expression(0);
				this.state = 498;
				this.match(cqlParser.T__30);
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
		this.enterRule(_localctx, 68, cqlParser.RULE_aliasedQuerySource);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.querySource();
			this.state = 503;
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
		this.enterRule(_localctx, 70, cqlParser.RULE_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
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
		this.enterRule(_localctx, 72, cqlParser.RULE_queryInclusionClause);
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__33:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.withClause();
				}
				break;
			case cqlParser.T__35:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
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
		this.enterRule(_localctx, 74, cqlParser.RULE_withClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(cqlParser.T__33);
			this.state = 512;
			this.aliasedQuerySource();
			this.state = 513;
			this.match(cqlParser.T__34);
			this.state = 514;
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
		this.enterRule(_localctx, 76, cqlParser.RULE_withoutClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.match(cqlParser.T__35);
			this.state = 517;
			this.aliasedQuerySource();
			this.state = 518;
			this.match(cqlParser.T__34);
			this.state = 519;
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
		this.enterRule(_localctx, 78, cqlParser.RULE_retrieve);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(cqlParser.T__36);
			this.state = 525;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 522;
				this.contextIdentifier();
				this.state = 523;
				this.match(cqlParser.T__37);
				}
				break;
			}
			this.state = 527;
			this.namedTypeSpecifier();
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__10) {
				{
				this.state = 528;
				this.match(cqlParser.T__10);
				this.state = 532;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 529;
					this.codePath();
					this.state = 530;
					this.match(cqlParser.T__38);
					}
					break;
				}
				this.state = 534;
				this.terminology();
				}
			}

			this.state = 537;
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
		this.enterRule(_localctx, 80, cqlParser.RULE_contextIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
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
		this.enterRule(_localctx, 82, cqlParser.RULE_codePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
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
	public terminology(): TerminologyContext {
		let _localctx: TerminologyContext = new TerminologyContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, cqlParser.RULE_terminology);
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.qualifiedIdentifierExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
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
		this.enterRule(_localctx, 86, cqlParser.RULE_qualifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
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
		this.enterRule(_localctx, 88, cqlParser.RULE_query);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.sourceClause();
			this.state = 551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 550;
				this.letClause();
				}
				break;
			}
			this.state = 556;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 553;
					this.queryInclusionClause();
					}
					}
				}
				this.state = 558;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 559;
				this.whereClause();
				}
				break;
			}
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 562;
				this.returnClause();
				}
				break;
			}
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 565;
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
		this.enterRule(_localctx, 90, cqlParser.RULE_sourceClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__18) {
				{
				this.state = 568;
				this.match(cqlParser.T__18);
				}
			}

			this.state = 571;
			this.aliasedQuerySource();
			this.state = 576;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 572;
					this.match(cqlParser.T__14);
					this.state = 573;
					this.aliasedQuerySource();
					}
					}
				}
				this.state = 578;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
		this.enterRule(_localctx, 92, cqlParser.RULE_letClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.match(cqlParser.T__40);
			this.state = 580;
			this.letClauseItem();
			this.state = 585;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 581;
					this.match(cqlParser.T__14);
					this.state = 582;
					this.letClauseItem();
					}
					}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
		this.enterRule(_localctx, 94, cqlParser.RULE_letClauseItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.identifier();
			this.state = 589;
			this.match(cqlParser.T__10);
			this.state = 590;
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
		this.enterRule(_localctx, 96, cqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(cqlParser.T__41);
			this.state = 593;
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
		this.enterRule(_localctx, 98, cqlParser.RULE_returnClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(cqlParser.T__42);
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 596;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__43 || _la === cqlParser.T__44)) {
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
			this.state = 599;
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
	public sortClause(): SortClauseContext {
		let _localctx: SortClauseContext = new SortClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, cqlParser.RULE_sortClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(cqlParser.T__45);
			this.state = 612;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__47:
			case cqlParser.T__48:
			case cqlParser.T__49:
			case cqlParser.T__50:
				{
				this.state = 602;
				this.sortDirection();
				}
				break;
			case cqlParser.T__46:
				{
				{
				this.state = 603;
				this.match(cqlParser.T__46);
				this.state = 604;
				this.sortByItem();
				this.state = 609;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 605;
						this.match(cqlParser.T__14);
						this.state = 606;
						this.sortByItem();
						}
						}
					}
					this.state = 611;
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
		this.enterRule(_localctx, 102, cqlParser.RULE_sortDirection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (cqlParser.T__47 - 48)) | (1 << (cqlParser.T__48 - 48)) | (1 << (cqlParser.T__49 - 48)) | (1 << (cqlParser.T__50 - 48)))) !== 0))) {
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
		this.enterRule(_localctx, 104, cqlParser.RULE_sortByItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.expressionTerm(0);
			this.state = 618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 617;
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
		this.enterRule(_localctx, 106, cqlParser.RULE_qualifiedIdentifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 625;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 620;
					this.qualifier();
					this.state = 621;
					this.match(cqlParser.T__16);
					}
					}
				}
				this.state = 627;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			}
			this.state = 628;
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
		this.enterRule(_localctx, 108, cqlParser.RULE_qualifiedIdentifierExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 630;
					this.qualifierExpression();
					this.state = 631;
					this.match(cqlParser.T__16);
					}
					}
				}
				this.state = 637;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 638;
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
		this.enterRule(_localctx, 110, cqlParser.RULE_qualifierExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
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
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, cqlParser.RULE_simplePath, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new SimplePathReferentialIdentifierContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 643;
			this.referentialIdentifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 655;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 653;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new SimplePathQualifiedIdentifierContext(new SimplePathContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_simplePath);
						this.state = 645;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 646;
						this.match(cqlParser.T__16);
						this.state = 647;
						this.referentialIdentifier();
						}
						break;

					case 2:
						{
						_localctx = new SimplePathIndexerContext(new SimplePathContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_simplePath);
						this.state = 648;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 649;
						this.match(cqlParser.T__36);
						this.state = 650;
						this.simpleLiteral();
						this.state = 651;
						this.match(cqlParser.T__39);
						}
						break;
					}
					}
				}
				this.state = 657;
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
		this.enterRule(_localctx, 114, cqlParser.RULE_simpleLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.STRING || _la === cqlParser.NUMBER)) {
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
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, cqlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				_localctx = new TermExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 661;
				this.expressionTerm(0);
				}
				break;

			case 2:
				{
				_localctx = new RetrieveExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 662;
				this.retrieve();
				}
				break;

			case 3:
				{
				_localctx = new QueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 663;
				this.query();
				}
				break;

			case 4:
				{
				_localctx = new CastExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 664;
				this.match(cqlParser.T__57);
				this.state = 665;
				this.expression(0);
				this.state = 666;
				this.match(cqlParser.T__56);
				this.state = 667;
				this.typeSpecifier();
				}
				break;

			case 5:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 669;
				this.match(cqlParser.T__52);
				this.state = 670;
				this.expression(13);
				}
				break;

			case 6:
				{
				_localctx = new ExistenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 671;
				this.match(cqlParser.T__58);
				this.state = 672;
				this.expression(12);
				}
				break;

			case 7:
				{
				_localctx = new DurationBetweenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__62) {
					{
					this.state = 673;
					this.match(cqlParser.T__62);
					this.state = 674;
					this.match(cqlParser.T__38);
					}
				}

				this.state = 677;
				this.pluralDateTimePrecision();
				this.state = 678;
				this.match(cqlParser.T__60);
				this.state = 679;
				this.expressionTerm(0);
				this.state = 680;
				this.match(cqlParser.T__61);
				this.state = 681;
				this.expressionTerm(0);
				}
				break;

			case 8:
				{
				_localctx = new DifferenceBetweenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 683;
				this.match(cqlParser.T__63);
				this.state = 684;
				this.match(cqlParser.T__38);
				this.state = 685;
				this.pluralDateTimePrecision();
				this.state = 686;
				this.match(cqlParser.T__60);
				this.state = 687;
				this.expressionTerm(0);
				this.state = 688;
				this.match(cqlParser.T__61);
				this.state = 689;
				this.expressionTerm(0);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 741;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 739;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
					case 1:
						{
						_localctx = new InequalityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 693;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 694;
						_la = this._input.LA(1);
						if (!(_la === cqlParser.T__21 || _la === cqlParser.T__22 || _la === cqlParser.T__64 || _la === cqlParser.T__65)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 695;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new TimingExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 696;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 697;
						this.intervalOperatorPhrase();
						this.state = 698;
						this.expression(8);
						}
						break;

					case 3:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 700;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 701;
						_la = this._input.LA(1);
						if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (cqlParser.T__66 - 67)) | (1 << (cqlParser.T__67 - 67)) | (1 << (cqlParser.T__68 - 67)) | (1 << (cqlParser.T__69 - 67)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 702;
						this.expression(7);
						}
						break;

					case 4:
						{
						_localctx = new MembershipExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 703;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 704;
						_la = this._input.LA(1);
						if (!(_la === cqlParser.T__38 || _la === cqlParser.T__70)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 706;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
						case 1:
							{
							this.state = 705;
							this.dateTimePrecisionSpecifier();
							}
							break;
						}
						this.state = 708;
						this.expression(6);
						}
						break;

					case 5:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 709;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 710;
						this.match(cqlParser.T__61);
						this.state = 711;
						this.expression(5);
						}
						break;

					case 6:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 712;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 713;
						_la = this._input.LA(1);
						if (!(_la === cqlParser.T__71 || _la === cqlParser.T__72)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 714;
						this.expression(4);
						}
						break;

					case 7:
						{
						_localctx = new ImpliesExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 715;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 716;
						this.match(cqlParser.T__73);
						this.state = 717;
						this.expression(3);
						}
						break;

					case 8:
						{
						_localctx = new InFixSetExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 718;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 719;
						_la = this._input.LA(1);
						if (!(((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (cqlParser.T__74 - 75)) | (1 << (cqlParser.T__75 - 75)) | (1 << (cqlParser.T__76 - 75)) | (1 << (cqlParser.T__77 - 75)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 720;
						this.expression(2);
						}
						break;

					case 9:
						{
						_localctx = new BooleanExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 721;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 722;
						this.match(cqlParser.T__51);
						this.state = 724;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === cqlParser.T__52) {
							{
							this.state = 723;
							this.match(cqlParser.T__52);
							}
						}

						this.state = 726;
						_la = this._input.LA(1);
						if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (cqlParser.T__53 - 54)) | (1 << (cqlParser.T__54 - 54)) | (1 << (cqlParser.T__55 - 54)))) !== 0))) {
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
						this.state = 727;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 728;
						_la = this._input.LA(1);
						if (!(_la === cqlParser.T__51 || _la === cqlParser.T__56)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 729;
						this.typeSpecifier();
						}
						break;

					case 11:
						{
						_localctx = new BetweenExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expression);
						this.state = 730;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 732;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === cqlParser.T__59) {
							{
							this.state = 731;
							this.match(cqlParser.T__59);
							}
						}

						this.state = 734;
						this.match(cqlParser.T__60);
						this.state = 735;
						this.expressionTerm(0);
						this.state = 736;
						this.match(cqlParser.T__61);
						this.state = 737;
						this.expressionTerm(0);
						}
						break;
					}
					}
				}
				this.state = 743;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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
		this.enterRule(_localctx, 118, cqlParser.RULE_dateTimePrecision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			_la = this._input.LA(1);
			if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (cqlParser.T__78 - 79)) | (1 << (cqlParser.T__79 - 79)) | (1 << (cqlParser.T__80 - 79)) | (1 << (cqlParser.T__81 - 79)) | (1 << (cqlParser.T__82 - 79)) | (1 << (cqlParser.T__83 - 79)) | (1 << (cqlParser.T__84 - 79)) | (1 << (cqlParser.T__85 - 79)))) !== 0))) {
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
		this.enterRule(_localctx, 120, cqlParser.RULE_dateTimeComponent);
		try {
			this.state = 750;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__81:
			case cqlParser.T__82:
			case cqlParser.T__83:
			case cqlParser.T__84:
			case cqlParser.T__85:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 746;
				this.dateTimePrecision();
				}
				break;
			case cqlParser.T__86:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.match(cqlParser.T__86);
				}
				break;
			case cqlParser.T__87:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 748;
				this.match(cqlParser.T__87);
				}
				break;
			case cqlParser.T__88:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 749;
				this.match(cqlParser.T__88);
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
		this.enterRule(_localctx, 122, cqlParser.RULE_pluralDateTimePrecision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			_la = this._input.LA(1);
			if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (cqlParser.T__89 - 90)) | (1 << (cqlParser.T__90 - 90)) | (1 << (cqlParser.T__91 - 90)) | (1 << (cqlParser.T__92 - 90)) | (1 << (cqlParser.T__93 - 90)) | (1 << (cqlParser.T__94 - 90)) | (1 << (cqlParser.T__95 - 90)) | (1 << (cqlParser.T__96 - 90)))) !== 0))) {
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
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, cqlParser.RULE_expressionTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				_localctx = new TermExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 755;
				this.term();
				}
				break;

			case 2:
				{
				_localctx = new ConversionExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 756;
				this.match(cqlParser.T__97);
				this.state = 757;
				this.expression(0);
				this.state = 758;
				this.match(cqlParser.T__98);
				this.state = 761;
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
				case cqlParser.T__41:
				case cqlParser.T__46:
				case cqlParser.T__47:
				case cqlParser.T__48:
				case cqlParser.T__49:
				case cqlParser.T__50:
				case cqlParser.T__70:
				case cqlParser.T__72:
				case cqlParser.T__73:
				case cqlParser.T__75:
				case cqlParser.T__76:
				case cqlParser.T__77:
				case cqlParser.T__86:
				case cqlParser.T__87:
				case cqlParser.T__88:
				case cqlParser.T__101:
				case cqlParser.T__102:
				case cqlParser.T__104:
				case cqlParser.T__105:
				case cqlParser.T__106:
				case cqlParser.T__114:
				case cqlParser.T__115:
				case cqlParser.T__126:
				case cqlParser.T__127:
				case cqlParser.T__128:
				case cqlParser.T__129:
				case cqlParser.T__136:
				case cqlParser.T__137:
				case cqlParser.T__140:
				case cqlParser.T__144:
				case cqlParser.T__145:
				case cqlParser.T__149:
				case cqlParser.T__150:
				case cqlParser.T__151:
				case cqlParser.QUOTEDIDENTIFIER:
				case cqlParser.IDENTIFIER:
				case cqlParser.DELIMITEDIDENTIFIER:
					{
					this.state = 759;
					this.typeSpecifier();
					}
					break;
				case cqlParser.T__78:
				case cqlParser.T__79:
				case cqlParser.T__80:
				case cqlParser.T__81:
				case cqlParser.T__82:
				case cqlParser.T__83:
				case cqlParser.T__84:
				case cqlParser.T__85:
				case cqlParser.T__89:
				case cqlParser.T__90:
				case cqlParser.T__91:
				case cqlParser.T__92:
				case cqlParser.T__93:
				case cqlParser.T__94:
				case cqlParser.T__95:
				case cqlParser.T__96:
				case cqlParser.STRING:
					{
					this.state = 760;
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
				this.state = 763;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__99 || _la === cqlParser.T__100)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 764;
				this.expressionTerm(18);
				}
				break;

			case 4:
				{
				_localctx = new TimeBoundaryExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 765;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 766;
				this.match(cqlParser.T__103);
				this.state = 767;
				this.expressionTerm(17);
				}
				break;

			case 5:
				{
				_localctx = new TimeUnitExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 768;
				this.dateTimeComponent();
				this.state = 769;
				this.match(cqlParser.T__18);
				this.state = 770;
				this.expressionTerm(16);
				}
				break;

			case 6:
				{
				_localctx = new DurationExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 772;
				this.match(cqlParser.T__62);
				this.state = 773;
				this.match(cqlParser.T__38);
				this.state = 774;
				this.pluralDateTimePrecision();
				this.state = 775;
				this.match(cqlParser.T__103);
				this.state = 776;
				this.expressionTerm(15);
				}
				break;

			case 7:
				{
				_localctx = new DifferenceExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 778;
				this.match(cqlParser.T__63);
				this.state = 779;
				this.match(cqlParser.T__38);
				this.state = 780;
				this.pluralDateTimePrecision();
				this.state = 781;
				this.match(cqlParser.T__103);
				this.state = 782;
				this.expressionTerm(14);
				}
				break;

			case 8:
				{
				_localctx = new WidthExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 784;
				this.match(cqlParser.T__104);
				this.state = 785;
				this.match(cqlParser.T__103);
				this.state = 786;
				this.expressionTerm(13);
				}
				break;

			case 9:
				{
				_localctx = new SuccessorExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 787;
				this.match(cqlParser.T__105);
				this.state = 788;
				this.match(cqlParser.T__103);
				this.state = 789;
				this.expressionTerm(12);
				}
				break;

			case 10:
				{
				_localctx = new PredecessorExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 790;
				this.match(cqlParser.T__106);
				this.state = 791;
				this.match(cqlParser.T__103);
				this.state = 792;
				this.expressionTerm(11);
				}
				break;

			case 11:
				{
				_localctx = new ElementExtractorExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 793;
				this.match(cqlParser.T__107);
				this.state = 794;
				this.match(cqlParser.T__18);
				this.state = 795;
				this.expressionTerm(10);
				}
				break;

			case 12:
				{
				_localctx = new PointExtractorExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 796;
				this.match(cqlParser.T__108);
				this.state = 797;
				this.match(cqlParser.T__18);
				this.state = 798;
				this.expressionTerm(9);
				}
				break;

			case 13:
				{
				_localctx = new TypeExtentExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 799;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__109 || _la === cqlParser.T__110)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 800;
				this.namedTypeSpecifier();
				}
				break;

			case 14:
				{
				_localctx = new IfThenElseExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 801;
				this.match(cqlParser.T__117);
				this.state = 802;
				this.expression(0);
				this.state = 803;
				this.match(cqlParser.T__118);
				this.state = 804;
				this.expression(0);
				this.state = 805;
				this.match(cqlParser.T__119);
				this.state = 806;
				this.expression(0);
				}
				break;

			case 15:
				{
				_localctx = new CaseExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 808;
				this.match(cqlParser.T__120);
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (cqlParser.T__36 - 37)) | (1 << (cqlParser.T__41 - 37)) | (1 << (cqlParser.T__44 - 37)) | (1 << (cqlParser.T__46 - 37)) | (1 << (cqlParser.T__47 - 37)) | (1 << (cqlParser.T__48 - 37)) | (1 << (cqlParser.T__49 - 37)) | (1 << (cqlParser.T__50 - 37)) | (1 << (cqlParser.T__52 - 37)) | (1 << (cqlParser.T__53 - 37)) | (1 << (cqlParser.T__54 - 37)) | (1 << (cqlParser.T__55 - 37)) | (1 << (cqlParser.T__57 - 37)) | (1 << (cqlParser.T__58 - 37)) | (1 << (cqlParser.T__62 - 37)) | (1 << (cqlParser.T__63 - 37)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__99 - 71)) | (1 << (cqlParser.T__100 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__108 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__140 - 137)) | (1 << (cqlParser.T__144 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__148 - 137)) | (1 << (cqlParser.T__149 - 137)) | (1 << (cqlParser.T__150 - 137)) | (1 << (cqlParser.T__151 - 137)) | (1 << (cqlParser.T__152 - 137)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 137)) | (1 << (cqlParser.DATETIME - 137)) | (1 << (cqlParser.TIME - 137)) | (1 << (cqlParser.IDENTIFIER - 137)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 137)) | (1 << (cqlParser.STRING - 137)) | (1 << (cqlParser.NUMBER - 137)))) !== 0)) {
					{
					this.state = 809;
					this.expression(0);
					}
				}

				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 812;
					this.caseExpressionItem();
					}
					}
					this.state = 815;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === cqlParser.T__125);
				this.state = 817;
				this.match(cqlParser.T__119);
				this.state = 818;
				this.expression(0);
				this.state = 819;
				this.match(cqlParser.T__102);
				}
				break;

			case 16:
				{
				_localctx = new AggregateExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 821;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__44 || _la === cqlParser.T__121)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 822;
				this.expression(0);
				}
				break;

			case 17:
				{
				_localctx = new SetAggregateExpressionTermContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 823;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__122 || _la === cqlParser.T__123)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 824;
				this.expression(0);
				this.state = 830;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 825;
					this.match(cqlParser.T__124);
					this.state = 828;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
					case 1:
						{
						this.state = 826;
						this.dateTimePrecision();
						}
						break;

					case 2:
						{
						this.state = 827;
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
			this.state = 853;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 851;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 834;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 835;
						this.match(cqlParser.T__111);
						this.state = 836;
						this.expressionTerm(8);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicationExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 837;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 838;
						_la = this._input.LA(1);
						if (!(((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (cqlParser.T__112 - 113)) | (1 << (cqlParser.T__113 - 113)) | (1 << (cqlParser.T__114 - 113)) | (1 << (cqlParser.T__115 - 113)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 839;
						this.expressionTerm(7);
						}
						break;

					case 3:
						{
						_localctx = new AdditionExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 840;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 841;
						_la = this._input.LA(1);
						if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (cqlParser.T__99 - 100)) | (1 << (cqlParser.T__100 - 100)) | (1 << (cqlParser.T__116 - 100)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 842;
						this.expressionTerm(6);
						}
						break;

					case 4:
						{
						_localctx = new InvocationExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 843;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 844;
						this.match(cqlParser.T__16);
						this.state = 845;
						this.qualifiedInvocation();
						}
						break;

					case 5:
						{
						_localctx = new IndexedExpressionTermContext(new ExpressionTermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, cqlParser.RULE_expressionTerm);
						this.state = 846;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 847;
						this.match(cqlParser.T__36);
						this.state = 848;
						this.expression(0);
						this.state = 849;
						this.match(cqlParser.T__39);
						}
						break;
					}
					}
				}
				this.state = 855;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
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
		this.enterRule(_localctx, 126, cqlParser.RULE_caseExpressionItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 856;
			this.match(cqlParser.T__125);
			this.state = 857;
			this.expression(0);
			this.state = 858;
			this.match(cqlParser.T__118);
			this.state = 859;
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
		this.enterRule(_localctx, 128, cqlParser.RULE_dateTimePrecisionSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.dateTimePrecision();
			this.state = 862;
			this.match(cqlParser.T__103);
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
		this.enterRule(_localctx, 130, cqlParser.RULE_relativeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
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
		this.enterRule(_localctx, 132, cqlParser.RULE_offsetRelativeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__128 || _la === cqlParser.T__129)) {
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
		this.enterRule(_localctx, 134, cqlParser.RULE_exclusiveRelativeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
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
	public quantityOffset(): QuantityOffsetContext {
		let _localctx: QuantityOffsetContext = new QuantityOffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, cqlParser.RULE_quantityOffset);
		let _la: number;
		try {
			this.state = 877;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 870;
				this.quantity();
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__128 || _la === cqlParser.T__129) {
					{
					this.state = 871;
					this.offsetRelativeQualifier();
					}
				}

				}
				}
				break;
			case cqlParser.T__130:
			case cqlParser.T__131:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 874;
				this.exclusiveRelativeQualifier();
				this.state = 875;
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
		this.enterRule(_localctx, 138, cqlParser.RULE_temporalRelationship);
		let _la: number;
		try {
			this.state = 887;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__132) {
					{
					this.state = 879;
					this.match(cqlParser.T__132);
					}
				}

				this.state = 882;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__133 || _la === cqlParser.T__134)) {
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
				this.state = 883;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__133 || _la === cqlParser.T__134)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__135) {
					{
					this.state = 884;
					this.match(cqlParser.T__135);
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
		this.enterRule(_localctx, 140, cqlParser.RULE_intervalOperatorPhrase);
		let _la: number;
		try {
			this.state = 970;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				_localctx = new ConcurrentWithIntervalOperatorPhraseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0)) {
					{
					this.state = 889;
					_la = this._input.LA(1);
					if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0))) {
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

				this.state = 892;
				this.match(cqlParser.T__139);
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (cqlParser.T__78 - 79)) | (1 << (cqlParser.T__79 - 79)) | (1 << (cqlParser.T__80 - 79)) | (1 << (cqlParser.T__81 - 79)) | (1 << (cqlParser.T__82 - 79)) | (1 << (cqlParser.T__83 - 79)) | (1 << (cqlParser.T__84 - 79)) | (1 << (cqlParser.T__85 - 79)))) !== 0)) {
					{
					this.state = 893;
					this.dateTimePrecision();
					}
				}

				this.state = 898;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case cqlParser.T__126:
				case cqlParser.T__127:
					{
					this.state = 896;
					this.relativeQualifier();
					}
					break;
				case cqlParser.T__56:
					{
					this.state = 897;
					this.match(cqlParser.T__56);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 901;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 900;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
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
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__59) {
					{
					this.state = 903;
					this.match(cqlParser.T__59);
					}
				}

				this.state = 906;
				this.match(cqlParser.T__140);
				this.state = 908;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 907;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				this.state = 911;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 910;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
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
				this.state = 914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0)) {
					{
					this.state = 913;
					_la = this._input.LA(1);
					if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0))) {
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

				this.state = 917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__59) {
					{
					this.state = 916;
					this.match(cqlParser.T__59);
					}
				}

				this.state = 919;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__141 || _la === cqlParser.T__142)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 921;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 920;
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
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0)) {
					{
					this.state = 923;
					_la = this._input.LA(1);
					if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0))) {
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

				this.state = 927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (cqlParser.T__130 - 131)) | (1 << (cqlParser.T__131 - 131)) | (1 << (cqlParser.NUMBER - 131)))) !== 0)) {
					{
					this.state = 926;
					this.quantityOffset();
					}
				}

				this.state = 929;
				this.temporalRelationship();
				this.state = 931;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
				case 1:
					{
					this.state = 930;
					this.dateTimePrecisionSpecifier();
					}
					break;
				}
				this.state = 934;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 933;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
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
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0)) {
					{
					this.state = 936;
					_la = this._input.LA(1);
					if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__138 - 137)))) !== 0))) {
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

				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__59) {
					{
					this.state = 939;
					this.match(cqlParser.T__59);
					}
				}

				this.state = 942;
				this.match(cqlParser.T__143);
				this.state = 943;
				this.quantity();
				this.state = 944;
				this.match(cqlParser.T__103);
				this.state = 946;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 945;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__101 || _la === cqlParser.T__102)) {
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
				this.state = 948;
				this.match(cqlParser.T__144);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__133 || _la === cqlParser.T__134) {
					{
					this.state = 949;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__133 || _la === cqlParser.T__134)) {
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

				this.state = 953;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 952;
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
				this.state = 955;
				this.match(cqlParser.T__145);
				this.state = 957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__133 || _la === cqlParser.T__134) {
					{
					this.state = 956;
					_la = this._input.LA(1);
					if (!(_la === cqlParser.T__133 || _la === cqlParser.T__134)) {
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

				this.state = 960;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 959;
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
				this.state = 962;
				this.match(cqlParser.T__136);
				this.state = 964;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 963;
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
				this.state = 966;
				this.match(cqlParser.T__137);
				this.state = 968;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 967;
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
		this.enterRule(_localctx, 142, cqlParser.RULE_term);
		try {
			this.state = 985;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				_localctx = new InvocationTermContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 972;
				this.invocation();
				}
				break;

			case 2:
				_localctx = new LiteralTermContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 973;
				this.literal();
				}
				break;

			case 3:
				_localctx = new ExternalConstantTermContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 974;
				this.externalConstant();
				}
				break;

			case 4:
				_localctx = new IntervalSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 975;
				this.intervalSelector();
				}
				break;

			case 5:
				_localctx = new TupleSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 976;
				this.tupleSelector();
				}
				break;

			case 6:
				_localctx = new InstanceSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 977;
				this.instanceSelector();
				}
				break;

			case 7:
				_localctx = new ListSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 978;
				this.listSelector();
				}
				break;

			case 8:
				_localctx = new CodeSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 979;
				this.codeSelector();
				}
				break;

			case 9:
				_localctx = new ConceptSelectorTermContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 980;
				this.conceptSelector();
				}
				break;

			case 10:
				_localctx = new ParenthesizedTermContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 981;
				this.match(cqlParser.T__29);
				this.state = 982;
				this.expression(0);
				this.state = 983;
				this.match(cqlParser.T__30);
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
		this.enterRule(_localctx, 144, cqlParser.RULE_qualifiedInvocation);
		try {
			this.state = 989;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				_localctx = new QualifiedMemberInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 987;
				this.referentialIdentifier();
				}
				break;

			case 2:
				_localctx = new QualifiedFunctionInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 988;
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
		this.enterRule(_localctx, 146, cqlParser.RULE_qualifiedFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.identifierOrFunctionIdentifier();
			this.state = 992;
			this.match(cqlParser.T__29);
			this.state = 994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (cqlParser.T__36 - 37)) | (1 << (cqlParser.T__41 - 37)) | (1 << (cqlParser.T__44 - 37)) | (1 << (cqlParser.T__46 - 37)) | (1 << (cqlParser.T__47 - 37)) | (1 << (cqlParser.T__48 - 37)) | (1 << (cqlParser.T__49 - 37)) | (1 << (cqlParser.T__50 - 37)) | (1 << (cqlParser.T__52 - 37)) | (1 << (cqlParser.T__53 - 37)) | (1 << (cqlParser.T__54 - 37)) | (1 << (cqlParser.T__55 - 37)) | (1 << (cqlParser.T__57 - 37)) | (1 << (cqlParser.T__58 - 37)) | (1 << (cqlParser.T__62 - 37)) | (1 << (cqlParser.T__63 - 37)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__99 - 71)) | (1 << (cqlParser.T__100 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__108 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__140 - 137)) | (1 << (cqlParser.T__144 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__148 - 137)) | (1 << (cqlParser.T__149 - 137)) | (1 << (cqlParser.T__150 - 137)) | (1 << (cqlParser.T__151 - 137)) | (1 << (cqlParser.T__152 - 137)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 137)) | (1 << (cqlParser.DATETIME - 137)) | (1 << (cqlParser.TIME - 137)) | (1 << (cqlParser.IDENTIFIER - 137)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 137)) | (1 << (cqlParser.STRING - 137)) | (1 << (cqlParser.NUMBER - 137)))) !== 0)) {
				{
				this.state = 993;
				this.paramList();
				}
			}

			this.state = 996;
			this.match(cqlParser.T__30);
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
		this.enterRule(_localctx, 148, cqlParser.RULE_invocation);
		try {
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				_localctx = new MemberInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 998;
				this.referentialIdentifier();
				}
				break;

			case 2:
				_localctx = new FunctionInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 999;
				this.c_function();
				}
				break;

			case 3:
				_localctx = new ThisInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1000;
				this.match(cqlParser.T__146);
				}
				break;

			case 4:
				_localctx = new IndexInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1001;
				this.match(cqlParser.T__147);
				}
				break;

			case 5:
				_localctx = new TotalInvocationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1002;
				this.match(cqlParser.T__148);
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
	public c_function(): C_functionContext {
		let _localctx: C_functionContext = new C_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, cqlParser.RULE_c_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1005;
			this.referentialIdentifier();
			this.state = 1006;
			this.match(cqlParser.T__29);
			this.state = 1008;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (cqlParser.T__36 - 37)) | (1 << (cqlParser.T__41 - 37)) | (1 << (cqlParser.T__44 - 37)) | (1 << (cqlParser.T__46 - 37)) | (1 << (cqlParser.T__47 - 37)) | (1 << (cqlParser.T__48 - 37)) | (1 << (cqlParser.T__49 - 37)) | (1 << (cqlParser.T__50 - 37)) | (1 << (cqlParser.T__52 - 37)) | (1 << (cqlParser.T__53 - 37)) | (1 << (cqlParser.T__54 - 37)) | (1 << (cqlParser.T__55 - 37)) | (1 << (cqlParser.T__57 - 37)) | (1 << (cqlParser.T__58 - 37)) | (1 << (cqlParser.T__62 - 37)) | (1 << (cqlParser.T__63 - 37)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__99 - 71)) | (1 << (cqlParser.T__100 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__108 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__140 - 137)) | (1 << (cqlParser.T__144 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__148 - 137)) | (1 << (cqlParser.T__149 - 137)) | (1 << (cqlParser.T__150 - 137)) | (1 << (cqlParser.T__151 - 137)) | (1 << (cqlParser.T__152 - 137)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 137)) | (1 << (cqlParser.DATETIME - 137)) | (1 << (cqlParser.TIME - 137)) | (1 << (cqlParser.IDENTIFIER - 137)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 137)) | (1 << (cqlParser.STRING - 137)) | (1 << (cqlParser.NUMBER - 137)))) !== 0)) {
				{
				this.state = 1007;
				this.paramList();
				}
			}

			this.state = 1010;
			this.match(cqlParser.T__30);
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
		this.enterRule(_localctx, 152, cqlParser.RULE_ratio);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1012;
			this.quantity();
			this.state = 1013;
			this.match(cqlParser.T__10);
			this.state = 1014;
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
		this.enterRule(_localctx, 154, cqlParser.RULE_literal);
		let _la: number;
		try {
			this.state = 1024;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1016;
				_la = this._input.LA(1);
				if (!(_la === cqlParser.T__54 || _la === cqlParser.T__55)) {
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
				this.state = 1017;
				this.match(cqlParser.T__53);
				}
				break;

			case 3:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1018;
				this.match(cqlParser.STRING);
				}
				break;

			case 4:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1019;
				this.match(cqlParser.NUMBER);
				}
				break;

			case 5:
				_localctx = new DateTimeLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1020;
				this.match(cqlParser.DATETIME);
				}
				break;

			case 6:
				_localctx = new TimeLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1021;
				this.match(cqlParser.TIME);
				}
				break;

			case 7:
				_localctx = new QuantityLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1022;
				this.quantity();
				}
				break;

			case 8:
				_localctx = new RatioLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1023;
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
		this.enterRule(_localctx, 156, cqlParser.RULE_intervalSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1026;
			this.match(cqlParser.T__23);
			this.state = 1027;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__29 || _la === cqlParser.T__36)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1028;
			this.expression(0);
			this.state = 1029;
			this.match(cqlParser.T__14);
			this.state = 1030;
			this.expression(0);
			this.state = 1031;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__30 || _la === cqlParser.T__39)) {
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
		this.enterRule(_localctx, 158, cqlParser.RULE_tupleSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__24) {
				{
				this.state = 1033;
				this.match(cqlParser.T__24);
				}
			}

			this.state = 1036;
			this.match(cqlParser.T__13);
			this.state = 1046;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__10:
				{
				this.state = 1037;
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
			case cqlParser.T__41:
			case cqlParser.T__46:
			case cqlParser.T__47:
			case cqlParser.T__48:
			case cqlParser.T__49:
			case cqlParser.T__50:
			case cqlParser.T__70:
			case cqlParser.T__72:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__77:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
			case cqlParser.T__101:
			case cqlParser.T__102:
			case cqlParser.T__104:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__114:
			case cqlParser.T__115:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__128:
			case cqlParser.T__129:
			case cqlParser.T__136:
			case cqlParser.T__137:
			case cqlParser.T__140:
			case cqlParser.T__144:
			case cqlParser.T__145:
			case cqlParser.T__149:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				{
				{
				this.state = 1038;
				this.tupleElementSelector();
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === cqlParser.T__14) {
					{
					{
					this.state = 1039;
					this.match(cqlParser.T__14);
					this.state = 1040;
					this.tupleElementSelector();
					}
					}
					this.state = 1045;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1048;
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
		this.enterRule(_localctx, 160, cqlParser.RULE_tupleElementSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1050;
			this.referentialIdentifier();
			this.state = 1051;
			this.match(cqlParser.T__10);
			this.state = 1052;
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
		this.enterRule(_localctx, 162, cqlParser.RULE_instanceSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this.namedTypeSpecifier();
			this.state = 1055;
			this.match(cqlParser.T__13);
			this.state = 1065;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__10:
				{
				this.state = 1056;
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
			case cqlParser.T__41:
			case cqlParser.T__46:
			case cqlParser.T__47:
			case cqlParser.T__48:
			case cqlParser.T__49:
			case cqlParser.T__50:
			case cqlParser.T__70:
			case cqlParser.T__72:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__77:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
			case cqlParser.T__101:
			case cqlParser.T__102:
			case cqlParser.T__104:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__114:
			case cqlParser.T__115:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__128:
			case cqlParser.T__129:
			case cqlParser.T__136:
			case cqlParser.T__137:
			case cqlParser.T__140:
			case cqlParser.T__144:
			case cqlParser.T__145:
			case cqlParser.T__149:
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				{
				{
				this.state = 1057;
				this.instanceElementSelector();
				this.state = 1062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === cqlParser.T__14) {
					{
					{
					this.state = 1058;
					this.match(cqlParser.T__14);
					this.state = 1059;
					this.instanceElementSelector();
					}
					}
					this.state = 1064;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1067;
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
		this.enterRule(_localctx, 164, cqlParser.RULE_instanceElementSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1069;
			this.referentialIdentifier();
			this.state = 1070;
			this.match(cqlParser.T__10);
			this.state = 1071;
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
		this.enterRule(_localctx, 166, cqlParser.RULE_listSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1080;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === cqlParser.T__20) {
				{
				this.state = 1073;
				this.match(cqlParser.T__20);
				this.state = 1078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === cqlParser.T__21) {
					{
					this.state = 1074;
					this.match(cqlParser.T__21);
					this.state = 1075;
					this.typeSpecifier();
					this.state = 1076;
					this.match(cqlParser.T__22);
					}
				}

				}
			}

			this.state = 1082;
			this.match(cqlParser.T__13);
			this.state = 1091;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__13) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28) | (1 << cqlParser.T__29))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (cqlParser.T__36 - 37)) | (1 << (cqlParser.T__41 - 37)) | (1 << (cqlParser.T__44 - 37)) | (1 << (cqlParser.T__46 - 37)) | (1 << (cqlParser.T__47 - 37)) | (1 << (cqlParser.T__48 - 37)) | (1 << (cqlParser.T__49 - 37)) | (1 << (cqlParser.T__50 - 37)) | (1 << (cqlParser.T__52 - 37)) | (1 << (cqlParser.T__53 - 37)) | (1 << (cqlParser.T__54 - 37)) | (1 << (cqlParser.T__55 - 37)) | (1 << (cqlParser.T__57 - 37)) | (1 << (cqlParser.T__58 - 37)) | (1 << (cqlParser.T__62 - 37)) | (1 << (cqlParser.T__63 - 37)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__99 - 71)) | (1 << (cqlParser.T__100 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__108 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (cqlParser.T__136 - 137)) | (1 << (cqlParser.T__137 - 137)) | (1 << (cqlParser.T__140 - 137)) | (1 << (cqlParser.T__144 - 137)) | (1 << (cqlParser.T__145 - 137)) | (1 << (cqlParser.T__146 - 137)) | (1 << (cqlParser.T__147 - 137)) | (1 << (cqlParser.T__148 - 137)) | (1 << (cqlParser.T__149 - 137)) | (1 << (cqlParser.T__150 - 137)) | (1 << (cqlParser.T__151 - 137)) | (1 << (cqlParser.T__152 - 137)) | (1 << (cqlParser.QUOTEDIDENTIFIER - 137)) | (1 << (cqlParser.DATETIME - 137)) | (1 << (cqlParser.TIME - 137)) | (1 << (cqlParser.IDENTIFIER - 137)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 137)) | (1 << (cqlParser.STRING - 137)) | (1 << (cqlParser.NUMBER - 137)))) !== 0)) {
				{
				this.state = 1083;
				this.expression(0);
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === cqlParser.T__14) {
					{
					{
					this.state = 1084;
					this.match(cqlParser.T__14);
					this.state = 1085;
					this.expression(0);
					}
					}
					this.state = 1090;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1093;
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
		this.enterRule(_localctx, 168, cqlParser.RULE_displayClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1095;
			this.match(cqlParser.T__149);
			this.state = 1096;
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
		this.enterRule(_localctx, 170, cqlParser.RULE_codeSelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1098;
			this.match(cqlParser.T__150);
			this.state = 1099;
			this.match(cqlParser.STRING);
			this.state = 1100;
			this.match(cqlParser.T__18);
			this.state = 1101;
			this.codesystemIdentifier();
			this.state = 1103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1102;
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
		this.enterRule(_localctx, 172, cqlParser.RULE_conceptSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1105;
			this.match(cqlParser.T__151);
			this.state = 1106;
			this.match(cqlParser.T__13);
			this.state = 1107;
			this.codeSelector();
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 1108;
				this.match(cqlParser.T__14);
				this.state = 1109;
				this.codeSelector();
				}
				}
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1115;
			this.match(cqlParser.T__15);
			this.state = 1117;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 1116;
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
		this.enterRule(_localctx, 174, cqlParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1119;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__34 - 34)) | (1 << (cqlParser.T__35 - 34)) | (1 << (cqlParser.T__38 - 34)) | (1 << (cqlParser.T__40 - 34)) | (1 << (cqlParser.T__41 - 34)) | (1 << (cqlParser.T__42 - 34)) | (1 << (cqlParser.T__43 - 34)) | (1 << (cqlParser.T__44 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__46 - 34)) | (1 << (cqlParser.T__47 - 34)) | (1 << (cqlParser.T__48 - 34)) | (1 << (cqlParser.T__49 - 34)) | (1 << (cqlParser.T__50 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__52 - 34)) | (1 << (cqlParser.T__53 - 34)) | (1 << (cqlParser.T__54 - 34)) | (1 << (cqlParser.T__55 - 34)) | (1 << (cqlParser.T__56 - 34)) | (1 << (cqlParser.T__57 - 34)) | (1 << (cqlParser.T__58 - 34)) | (1 << (cqlParser.T__59 - 34)) | (1 << (cqlParser.T__60 - 34)) | (1 << (cqlParser.T__61 - 34)) | (1 << (cqlParser.T__62 - 34)) | (1 << (cqlParser.T__63 - 34)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__71 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__98 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__103 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__118 - 103)) | (1 << (cqlParser.T__119 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__124 - 103)) | (1 << (cqlParser.T__125 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)) | (1 << (cqlParser.T__132 - 103)) | (1 << (cqlParser.T__133 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (cqlParser.T__134 - 135)) | (1 << (cqlParser.T__135 - 135)) | (1 << (cqlParser.T__136 - 135)) | (1 << (cqlParser.T__137 - 135)) | (1 << (cqlParser.T__138 - 135)) | (1 << (cqlParser.T__139 - 135)) | (1 << (cqlParser.T__140 - 135)) | (1 << (cqlParser.T__141 - 135)) | (1 << (cqlParser.T__142 - 135)) | (1 << (cqlParser.T__143 - 135)) | (1 << (cqlParser.T__144 - 135)) | (1 << (cqlParser.T__145 - 135)) | (1 << (cqlParser.T__149 - 135)) | (1 << (cqlParser.T__150 - 135)) | (1 << (cqlParser.T__151 - 135)))) !== 0))) {
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
		this.enterRule(_localctx, 176, cqlParser.RULE_reservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__18) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__34 - 34)) | (1 << (cqlParser.T__35 - 34)) | (1 << (cqlParser.T__38 - 34)) | (1 << (cqlParser.T__40 - 34)) | (1 << (cqlParser.T__42 - 34)) | (1 << (cqlParser.T__43 - 34)) | (1 << (cqlParser.T__44 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__52 - 34)) | (1 << (cqlParser.T__53 - 34)) | (1 << (cqlParser.T__54 - 34)) | (1 << (cqlParser.T__55 - 34)) | (1 << (cqlParser.T__56 - 34)) | (1 << (cqlParser.T__57 - 34)) | (1 << (cqlParser.T__58 - 34)) | (1 << (cqlParser.T__59 - 34)) | (1 << (cqlParser.T__60 - 34)) | (1 << (cqlParser.T__61 - 34)) | (1 << (cqlParser.T__62 - 34)) | (1 << (cqlParser.T__63 - 34)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (cqlParser.T__71 - 72)) | (1 << (cqlParser.T__78 - 72)) | (1 << (cqlParser.T__79 - 72)) | (1 << (cqlParser.T__80 - 72)) | (1 << (cqlParser.T__81 - 72)) | (1 << (cqlParser.T__82 - 72)) | (1 << (cqlParser.T__83 - 72)) | (1 << (cqlParser.T__84 - 72)) | (1 << (cqlParser.T__85 - 72)) | (1 << (cqlParser.T__89 - 72)) | (1 << (cqlParser.T__90 - 72)) | (1 << (cqlParser.T__91 - 72)) | (1 << (cqlParser.T__92 - 72)) | (1 << (cqlParser.T__93 - 72)) | (1 << (cqlParser.T__94 - 72)) | (1 << (cqlParser.T__95 - 72)) | (1 << (cqlParser.T__96 - 72)) | (1 << (cqlParser.T__97 - 72)) | (1 << (cqlParser.T__98 - 72)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (cqlParser.T__103 - 104)) | (1 << (cqlParser.T__107 - 104)) | (1 << (cqlParser.T__109 - 104)) | (1 << (cqlParser.T__110 - 104)) | (1 << (cqlParser.T__117 - 104)) | (1 << (cqlParser.T__118 - 104)) | (1 << (cqlParser.T__119 - 104)) | (1 << (cqlParser.T__120 - 104)) | (1 << (cqlParser.T__121 - 104)) | (1 << (cqlParser.T__122 - 104)) | (1 << (cqlParser.T__123 - 104)) | (1 << (cqlParser.T__124 - 104)) | (1 << (cqlParser.T__125 - 104)) | (1 << (cqlParser.T__132 - 104)) | (1 << (cqlParser.T__133 - 104)) | (1 << (cqlParser.T__134 - 104)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (cqlParser.T__135 - 136)) | (1 << (cqlParser.T__138 - 136)) | (1 << (cqlParser.T__139 - 136)) | (1 << (cqlParser.T__141 - 136)) | (1 << (cqlParser.T__142 - 136)) | (1 << (cqlParser.T__143 - 136)) | (1 << (cqlParser.T__150 - 136)) | (1 << (cqlParser.T__151 - 136)))) !== 0))) {
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
		this.enterRule(_localctx, 178, cqlParser.RULE_keywordIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (cqlParser.T__41 - 42)) | (1 << (cqlParser.T__46 - 42)) | (1 << (cqlParser.T__47 - 42)) | (1 << (cqlParser.T__48 - 42)) | (1 << (cqlParser.T__49 - 42)) | (1 << (cqlParser.T__50 - 42)) | (1 << (cqlParser.T__70 - 42)) | (1 << (cqlParser.T__72 - 42)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (cqlParser.T__73 - 74)) | (1 << (cqlParser.T__75 - 74)) | (1 << (cqlParser.T__76 - 74)) | (1 << (cqlParser.T__77 - 74)) | (1 << (cqlParser.T__86 - 74)) | (1 << (cqlParser.T__87 - 74)) | (1 << (cqlParser.T__88 - 74)) | (1 << (cqlParser.T__101 - 74)) | (1 << (cqlParser.T__102 - 74)) | (1 << (cqlParser.T__104 - 74)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (cqlParser.T__105 - 106)) | (1 << (cqlParser.T__106 - 106)) | (1 << (cqlParser.T__114 - 106)) | (1 << (cqlParser.T__115 - 106)) | (1 << (cqlParser.T__126 - 106)) | (1 << (cqlParser.T__127 - 106)) | (1 << (cqlParser.T__128 - 106)) | (1 << (cqlParser.T__129 - 106)) | (1 << (cqlParser.T__136 - 106)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (cqlParser.T__137 - 138)) | (1 << (cqlParser.T__140 - 138)) | (1 << (cqlParser.T__144 - 138)) | (1 << (cqlParser.T__145 - 138)) | (1 << (cqlParser.T__149 - 138)))) !== 0))) {
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
		this.enterRule(_localctx, 180, cqlParser.RULE_obsoleteIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1125;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__1) | (1 << cqlParser.T__17) | (1 << cqlParser.T__19))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (cqlParser.T__41 - 42)) | (1 << (cqlParser.T__43 - 42)) | (1 << (cqlParser.T__44 - 42)) | (1 << (cqlParser.T__52 - 42)) | (1 << (cqlParser.T__58 - 42)) | (1 << (cqlParser.T__70 - 42)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (cqlParser.T__86 - 87)) | (1 << (cqlParser.T__87 - 87)) | (1 << (cqlParser.T__88 - 87)) | (1 << (cqlParser.T__101 - 87)) | (1 << (cqlParser.T__102 - 87)))) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & ((1 << (cqlParser.T__149 - 150)) | (1 << (cqlParser.T__150 - 150)) | (1 << (cqlParser.T__151 - 150)))) !== 0))) {
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
		this.enterRule(_localctx, 182, cqlParser.RULE_functionIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1127;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << cqlParser.T__0) | (1 << cqlParser.T__1) | (1 << cqlParser.T__2) | (1 << cqlParser.T__3) | (1 << cqlParser.T__4) | (1 << cqlParser.T__5) | (1 << cqlParser.T__6) | (1 << cqlParser.T__7) | (1 << cqlParser.T__8) | (1 << cqlParser.T__9) | (1 << cqlParser.T__11) | (1 << cqlParser.T__12) | (1 << cqlParser.T__17) | (1 << cqlParser.T__18) | (1 << cqlParser.T__19) | (1 << cqlParser.T__20) | (1 << cqlParser.T__23) | (1 << cqlParser.T__24) | (1 << cqlParser.T__26) | (1 << cqlParser.T__27) | (1 << cqlParser.T__28))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (cqlParser.T__33 - 34)) | (1 << (cqlParser.T__34 - 34)) | (1 << (cqlParser.T__35 - 34)) | (1 << (cqlParser.T__38 - 34)) | (1 << (cqlParser.T__40 - 34)) | (1 << (cqlParser.T__41 - 34)) | (1 << (cqlParser.T__42 - 34)) | (1 << (cqlParser.T__43 - 34)) | (1 << (cqlParser.T__44 - 34)) | (1 << (cqlParser.T__45 - 34)) | (1 << (cqlParser.T__46 - 34)) | (1 << (cqlParser.T__47 - 34)) | (1 << (cqlParser.T__48 - 34)) | (1 << (cqlParser.T__49 - 34)) | (1 << (cqlParser.T__50 - 34)) | (1 << (cqlParser.T__51 - 34)) | (1 << (cqlParser.T__52 - 34)) | (1 << (cqlParser.T__53 - 34)) | (1 << (cqlParser.T__54 - 34)) | (1 << (cqlParser.T__55 - 34)) | (1 << (cqlParser.T__56 - 34)) | (1 << (cqlParser.T__57 - 34)) | (1 << (cqlParser.T__58 - 34)) | (1 << (cqlParser.T__59 - 34)) | (1 << (cqlParser.T__60 - 34)) | (1 << (cqlParser.T__61 - 34)) | (1 << (cqlParser.T__62 - 34)) | (1 << (cqlParser.T__63 - 34)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (cqlParser.T__70 - 71)) | (1 << (cqlParser.T__71 - 71)) | (1 << (cqlParser.T__72 - 71)) | (1 << (cqlParser.T__73 - 71)) | (1 << (cqlParser.T__75 - 71)) | (1 << (cqlParser.T__76 - 71)) | (1 << (cqlParser.T__77 - 71)) | (1 << (cqlParser.T__78 - 71)) | (1 << (cqlParser.T__79 - 71)) | (1 << (cqlParser.T__80 - 71)) | (1 << (cqlParser.T__81 - 71)) | (1 << (cqlParser.T__82 - 71)) | (1 << (cqlParser.T__83 - 71)) | (1 << (cqlParser.T__84 - 71)) | (1 << (cqlParser.T__85 - 71)) | (1 << (cqlParser.T__86 - 71)) | (1 << (cqlParser.T__87 - 71)) | (1 << (cqlParser.T__88 - 71)) | (1 << (cqlParser.T__89 - 71)) | (1 << (cqlParser.T__90 - 71)) | (1 << (cqlParser.T__91 - 71)) | (1 << (cqlParser.T__92 - 71)) | (1 << (cqlParser.T__93 - 71)) | (1 << (cqlParser.T__94 - 71)) | (1 << (cqlParser.T__95 - 71)) | (1 << (cqlParser.T__96 - 71)) | (1 << (cqlParser.T__97 - 71)) | (1 << (cqlParser.T__98 - 71)) | (1 << (cqlParser.T__101 - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (cqlParser.T__102 - 103)) | (1 << (cqlParser.T__103 - 103)) | (1 << (cqlParser.T__104 - 103)) | (1 << (cqlParser.T__105 - 103)) | (1 << (cqlParser.T__106 - 103)) | (1 << (cqlParser.T__107 - 103)) | (1 << (cqlParser.T__109 - 103)) | (1 << (cqlParser.T__110 - 103)) | (1 << (cqlParser.T__114 - 103)) | (1 << (cqlParser.T__115 - 103)) | (1 << (cqlParser.T__117 - 103)) | (1 << (cqlParser.T__118 - 103)) | (1 << (cqlParser.T__119 - 103)) | (1 << (cqlParser.T__120 - 103)) | (1 << (cqlParser.T__121 - 103)) | (1 << (cqlParser.T__122 - 103)) | (1 << (cqlParser.T__123 - 103)) | (1 << (cqlParser.T__124 - 103)) | (1 << (cqlParser.T__125 - 103)) | (1 << (cqlParser.T__126 - 103)) | (1 << (cqlParser.T__127 - 103)) | (1 << (cqlParser.T__128 - 103)) | (1 << (cqlParser.T__129 - 103)) | (1 << (cqlParser.T__133 - 103)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (cqlParser.T__134 - 135)) | (1 << (cqlParser.T__136 - 135)) | (1 << (cqlParser.T__137 - 135)) | (1 << (cqlParser.T__138 - 135)) | (1 << (cqlParser.T__139 - 135)) | (1 << (cqlParser.T__140 - 135)) | (1 << (cqlParser.T__141 - 135)) | (1 << (cqlParser.T__142 - 135)) | (1 << (cqlParser.T__143 - 135)) | (1 << (cqlParser.T__144 - 135)) | (1 << (cqlParser.T__145 - 135)) | (1 << (cqlParser.T__149 - 135)) | (1 << (cqlParser.T__150 - 135)) | (1 << (cqlParser.T__151 - 135)))) !== 0))) {
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
		this.enterRule(_localctx, 184, cqlParser.RULE_typeNameIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1129;
			_la = this._input.LA(1);
			if (!(_la === cqlParser.T__86 || _la === cqlParser.T__87 || _la === cqlParser.T__150 || _la === cqlParser.T__151)) {
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
		this.enterRule(_localctx, 186, cqlParser.RULE_referentialIdentifier);
		try {
			this.state = 1133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1131;
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
			case cqlParser.T__41:
			case cqlParser.T__46:
			case cqlParser.T__47:
			case cqlParser.T__48:
			case cqlParser.T__49:
			case cqlParser.T__50:
			case cqlParser.T__70:
			case cqlParser.T__72:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__77:
			case cqlParser.T__86:
			case cqlParser.T__87:
			case cqlParser.T__88:
			case cqlParser.T__101:
			case cqlParser.T__102:
			case cqlParser.T__104:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__114:
			case cqlParser.T__115:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__128:
			case cqlParser.T__129:
			case cqlParser.T__136:
			case cqlParser.T__137:
			case cqlParser.T__140:
			case cqlParser.T__144:
			case cqlParser.T__145:
			case cqlParser.T__149:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1132;
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
		this.enterRule(_localctx, 188, cqlParser.RULE_referentialOrTypeNameIdentifier);
		try {
			this.state = 1137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1135;
				this.referentialIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1136;
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
		this.enterRule(_localctx, 190, cqlParser.RULE_identifierOrFunctionIdentifier);
		try {
			this.state = 1141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1139;
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
			case cqlParser.T__33:
			case cqlParser.T__34:
			case cqlParser.T__35:
			case cqlParser.T__38:
			case cqlParser.T__40:
			case cqlParser.T__41:
			case cqlParser.T__42:
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
			case cqlParser.T__70:
			case cqlParser.T__71:
			case cqlParser.T__72:
			case cqlParser.T__73:
			case cqlParser.T__75:
			case cqlParser.T__76:
			case cqlParser.T__77:
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
			case cqlParser.T__101:
			case cqlParser.T__102:
			case cqlParser.T__103:
			case cqlParser.T__104:
			case cqlParser.T__105:
			case cqlParser.T__106:
			case cqlParser.T__107:
			case cqlParser.T__109:
			case cqlParser.T__110:
			case cqlParser.T__114:
			case cqlParser.T__115:
			case cqlParser.T__117:
			case cqlParser.T__118:
			case cqlParser.T__119:
			case cqlParser.T__120:
			case cqlParser.T__121:
			case cqlParser.T__122:
			case cqlParser.T__123:
			case cqlParser.T__124:
			case cqlParser.T__125:
			case cqlParser.T__126:
			case cqlParser.T__127:
			case cqlParser.T__128:
			case cqlParser.T__129:
			case cqlParser.T__133:
			case cqlParser.T__134:
			case cqlParser.T__136:
			case cqlParser.T__137:
			case cqlParser.T__138:
			case cqlParser.T__139:
			case cqlParser.T__140:
			case cqlParser.T__141:
			case cqlParser.T__142:
			case cqlParser.T__143:
			case cqlParser.T__144:
			case cqlParser.T__145:
			case cqlParser.T__149:
			case cqlParser.T__150:
			case cqlParser.T__151:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1140;
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
		this.enterRule(_localctx, 192, cqlParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1143;
			_la = this._input.LA(1);
			if (!(((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & ((1 << (cqlParser.QUOTEDIDENTIFIER - 154)) | (1 << (cqlParser.IDENTIFIER - 154)) | (1 << (cqlParser.DELIMITEDIDENTIFIER - 154)))) !== 0))) {
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
		this.enterRule(_localctx, 194, cqlParser.RULE_externalConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			this.match(cqlParser.T__152);
			this.state = 1148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.QUOTEDIDENTIFIER:
			case cqlParser.IDENTIFIER:
			case cqlParser.DELIMITEDIDENTIFIER:
				{
				this.state = 1146;
				this.identifier();
				}
				break;
			case cqlParser.STRING:
				{
				this.state = 1147;
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
		this.enterRule(_localctx, 196, cqlParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			this.expression(0);
			this.state = 1155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === cqlParser.T__14) {
				{
				{
				this.state = 1151;
				this.match(cqlParser.T__14);
				this.state = 1152;
				this.expression(0);
				}
				}
				this.state = 1157;
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
		this.enterRule(_localctx, 198, cqlParser.RULE_quantity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1158;
			this.match(cqlParser.NUMBER);
			this.state = 1160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1159;
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
		this.enterRule(_localctx, 200, cqlParser.RULE_unit);
		try {
			this.state = 1165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case cqlParser.T__78:
			case cqlParser.T__79:
			case cqlParser.T__80:
			case cqlParser.T__81:
			case cqlParser.T__82:
			case cqlParser.T__83:
			case cqlParser.T__84:
			case cqlParser.T__85:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1162;
				this.dateTimePrecision();
				}
				break;
			case cqlParser.T__89:
			case cqlParser.T__90:
			case cqlParser.T__91:
			case cqlParser.T__92:
			case cqlParser.T__93:
			case cqlParser.T__94:
			case cqlParser.T__95:
			case cqlParser.T__96:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1163;
				this.pluralDateTimePrecision();
				}
				break;
			case cqlParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1164;
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
		case 56:
			return this.simplePath_sempred(_localctx as SimplePathContext, predIndex);

		case 58:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 62:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xA5\u0492\x04" +
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
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x05\x02\xCE" +
		"\n\x02\x03\x02\x07\x02\xD1\n\x02\f\x02\x0E\x02\xD4\v\x02\x03\x02\x07\x02" +
		"\xD7\n\x02\f\x02\x0E\x02\xDA\v\x02\x03\x02\x07\x02\xDD\n\x02\f\x02\x0E" +
		"\x02\xE0\v\x02\x03\x02\x07\x02\xE3\n\x02\f\x02\x0E\x02\xE6\v\x02\x03\x02" +
		"\x07\x02\xE9\n\x02\f\x02\x0E\x02\xEC\v\x02\x03\x02\x07\x02\xEF\n\x02\f" +
		"\x02\x0E\x02\xF2\v\x02\x03\x02\x07\x02\xF5\n\x02\f\x02\x0E\x02\xF8\v\x02" +
		"\x03\x02\x07\x02\xFB\n\x02\f\x02\x0E\x02\xFE\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0106\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04\u010C\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0112" +
		"\n\x05\x03\x05\x03\x05\x05\x05\u0116\n\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\b\x05\b\u011D\n\b\x03\b\x03\b\x03\b\x05\b\u0122\n\b\x03\b\x03" +
		"\b\x05\b\u0126\n\b\x03\t\x05\t\u0129\n\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x05\t\u0131\n\t\x03\n\x05\n\u0134\n\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\u013C\n\n\x03\n\x05\n\u013F\n\n\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x07\v\u0146\n\v\f\v\x0E\v\u0149\v\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x05\f\u0150\n\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x05\x0E\u0157\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0160" +
		"\n\x0E\x03\x0F\x05\x0F\u0163\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\u016C\n\x0F\f\x0F\x0E\x0F\u016F\v\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u0173\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0178" +
		"\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0189" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x07\x16\u018E\n\x16\f\x16\x0E\x16\u0191" +
		"\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x07\x1A\u01A6\n\x1A\f\x1A\x0E\x1A\u01A9\v\x1A\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x07\x1C\u01B5\n\x1C\f\x1C\x0E\x1C\u01B8\v\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x05\x1D\u01BF\n\x1D\x03\x1E\x03\x1E\x05\x1E\u01C3\n\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u01CD\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u01D3\n \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x07 \u01DB\n \f \x0E \u01DE\v \x05 \u01E0\n \x03 \x03 \x03" +
		" \x05 \u01E5\n \x03 \x03 \x03 \x05 \u01EA\n \x03!\x03!\x03!\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01F7\n#\x03$\x03$\x03$\x03%\x03" +
		"%\x03&\x03&\x05&\u0200\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x05)\u0210\n)\x03)\x03)\x03)\x03)\x03" +
		")\x05)\u0217\n)\x03)\x05)\u021A\n)\x03)\x03)\x03*\x03*\x03+\x03+\x03," +
		"\x03,\x05,\u0224\n,\x03-\x03-\x03.\x03.\x05.\u022A\n.\x03.\x07.\u022D" +
		"\n.\f.\x0E.\u0230\v.\x03.\x05.\u0233\n.\x03.\x05.\u0236\n.\x03.\x05.\u0239" +
		"\n.\x03/\x05/\u023C\n/\x03/\x03/\x03/\x07/\u0241\n/\f/\x0E/\u0244\v/\x03" +
		"0\x030\x030\x030\x070\u024A\n0\f0\x0E0\u024D\v0\x031\x031\x031\x031\x03" +
		"2\x032\x032\x033\x033\x053\u0258\n3\x033\x033\x034\x034\x034\x034\x03" +
		"4\x034\x074\u0262\n4\f4\x0E4\u0265\v4\x054\u0267\n4\x035\x035\x036\x03" +
		"6\x056\u026D\n6\x037\x037\x037\x077\u0272\n7\f7\x0E7\u0275\v7\x037\x03" +
		"7\x038\x038\x038\x078\u027C\n8\f8\x0E8\u027F\v8\x038\x038\x039\x039\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u0290\n:\f:\x0E" +
		":\u0293\v:\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x05<\u02A6\n<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02B6\n<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02C5\n<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x05<\u02D7\n<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u02DF\n<\x03<" +
		"\x03<\x03<\x03<\x03<\x07<\u02E6\n<\f<\x0E<\u02E9\v<\x03=\x03=\x03>\x03" +
		">\x03>\x03>\x05>\u02F1\n>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x05@\u02FC\n@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u032D\n@\x03@\x06@\u0330" +
		"\n@\r@\x0E@\u0331\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x05@\u033F\n@\x05@\u0341\n@\x05@\u0343\n@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u0356\n" +
		"@\f@\x0E@\u0359\v@\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03" +
		"D\x03D\x03E\x03E\x03F\x03F\x05F\u036B\nF\x03F\x03F\x03F\x05F\u0370\nF" +
		"\x03G\x05G\u0373\nG\x03G\x03G\x03G\x05G\u0378\nG\x05G\u037A\nG\x03H\x05" +
		"H\u037D\nH\x03H\x03H\x05H\u0381\nH\x03H\x03H\x05H\u0385\nH\x03H\x05H\u0388" +
		"\nH\x03H\x05H\u038B\nH\x03H\x03H\x05H\u038F\nH\x03H\x05H\u0392\nH\x03" +
		"H\x05H\u0395\nH\x03H\x05H\u0398\nH\x03H\x03H\x05H\u039C\nH\x03H\x05H\u039F" +
		"\nH\x03H\x05H\u03A2\nH\x03H\x03H\x05H\u03A6\nH\x03H\x05H\u03A9\nH\x03" +
		"H\x05H\u03AC\nH\x03H\x05H\u03AF\nH\x03H\x03H\x03H\x03H\x05H\u03B5\nH\x03" +
		"H\x03H\x05H\u03B9\nH\x03H\x05H\u03BC\nH\x03H\x03H\x05H\u03C0\nH\x03H\x05" +
		"H\u03C3\nH\x03H\x03H\x05H\u03C7\nH\x03H\x03H\x05H\u03CB\nH\x05H\u03CD" +
		"\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05" +
		"I\u03DC\nI\x03J\x03J\x05J\u03E0\nJ\x03K\x03K\x03K\x05K\u03E5\nK\x03K\x03" +
		"K\x03L\x03L\x03L\x03L\x03L\x05L\u03EE\nL\x03M\x03M\x03M\x05M\u03F3\nM" +
		"\x03M\x03M\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x05O\u0403\nO\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03Q\x05Q\u040D\nQ" +
		"\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u0414\nQ\fQ\x0EQ\u0417\vQ\x05Q\u0419\n" +
		"Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x07S\u0427" +
		"\nS\fS\x0ES\u042A\vS\x05S\u042C\nS\x03S\x03S\x03T\x03T\x03T\x03T\x03U" +
		"\x03U\x03U\x03U\x03U\x05U\u0439\nU\x05U\u043B\nU\x03U\x03U\x03U\x03U\x07" +
		"U\u0441\nU\fU\x0EU\u0444\vU\x05U\u0446\nU\x03U\x03U\x03V\x03V\x03V\x03" +
		"W\x03W\x03W\x03W\x03W\x05W\u0452\nW\x03X\x03X\x03X\x03X\x03X\x07X\u0459" +
		"\nX\fX\x0EX\u045C\vX\x03X\x03X\x05X\u0460\nX\x03Y\x03Y\x03Z\x03Z\x03[" +
		"\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x05_\u0470\n_\x03`\x03" +
		"`\x05`\u0474\n`\x03a\x03a\x05a\u0478\na\x03b\x03b\x03c\x03c\x03c\x05c" +
		"\u047F\nc\x03d\x03d\x03d\x07d\u0484\nd\fd\x0Ed\u0487\vd\x03e\x03e\x05" +
		"e\u048B\ne\x03f\x03f\x03f\x05f\u0490\nf\x03f\x02\x02\x05rv~g\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\x02&\x03\x02\b\t\x03\x02./\x03\x0225\x03\x02\xA1\xA2\x04" +
		"\x02\x18\x19CD\x03\x02EH\x04\x02))II\x03\x02JK\x03\x02MP\x03\x028:\x04" +
		"\x0266;;\x03\x02QX\x03\x02\\c\x03\x02fg\x03\x02hi\x03\x02pq\x04\x02//" +
		"||\x03\x02}~\x03\x02sv\x04\x02fgww\x03\x02\x81\x82\x03\x02\x83\x84\x03" +
		"\x02\x85\x86\x03\x02\x88\x89\x03\x02\x8B\x8D\x03\x02\x90\x91\x03\x029" +
		":\x04\x02  \'\'\x04\x02!!**\x12\x02\x03\f\x0E\x0F\x14\x17\x1A\x1B\x1D" +
		"\x1F$&))+BILNehnpquvx\x84\x87\x94\x98\x9A\x15\x02\x15\x15\x17\x17\x1A" +
		"\x1B$&))++-06BJJQX\\ejjnnpqx\x80\x87\x8A\x8D\x8E\x90\x92\x99\x9A\x15\x02" +
		"\x03\f\x0E\x0F\x14\x14\x16\x16\x1D\x1F,,15IIKLNPY[hikmuv\x81\x84\x8B\x8C" +
		"\x8F\x8F\x93\x94\x98\x98\r\x02\x04\x04\x14\x14\x16\x16,,./77==IIY[hi\x98" +
		"\x9A\x13\x02\x03\f\x0E\x0F\x14\x17\x1A\x1B\x1D\x1F$&))+BILNehnpquvx\x84" +
		"\x88\x89\x8B\x94\x98\x9A\x04\x02YZ\x99\x9A\x04\x02\x9C\x9C\x9F\xA0\x02" +
		"\u04F2\x02\xCD\x03\x02\x02\x02\x04\u0101\x03\x02\x02\x02\x06\u0107\x03" +
		"\x02\x02\x02\b\u010D\x03\x02\x02\x02\n\u0117\x03\x02\x02\x02\f\u0119\x03" +
		"\x02\x02\x02\x0E\u011C\x03\x02\x02\x02\x10\u0128\x03\x02\x02\x02\x12\u0133" +
		"\x03\x02\x02\x02\x14\u0140\x03\x02\x02\x02\x16\u014F\x03\x02\x02\x02\x18" +
		"\u0153\x03\x02\x02\x02\x1A\u0156\x03\x02\x02\x02\x1C\u0162\x03\x02\x02" +
		"\x02\x1E\u0177\x03\x02\x02\x02 \u017B\x03\x02\x02\x02\"\u017D\x03\x02" +
		"\x02\x02$\u017F\x03\x02\x02\x02&\u0181\x03\x02\x02\x02(\u0188\x03\x02" +
		"\x02\x02*\u018F\x03\x02\x02\x02,\u0194\x03\x02\x02\x02.\u0196\x03\x02" +
		"\x02\x020\u019B\x03\x02\x02\x022\u01A0\x03\x02\x02\x024\u01AC\x03\x02" +
		"\x02\x026\u01AF\x03\x02\x02\x028\u01BE\x03\x02\x02\x02:\u01C0\x03\x02" +
		"\x02\x02<\u01C8\x03\x02\x02\x02>\u01D0\x03\x02\x02\x02@\u01EB\x03\x02" +
		"\x02\x02B\u01EE\x03\x02\x02\x02D\u01F6\x03\x02\x02\x02F\u01F8\x03\x02" +
		"\x02\x02H\u01FB\x03\x02\x02\x02J\u01FF\x03\x02\x02\x02L\u0201\x03\x02" +
		"\x02\x02N\u0206\x03\x02\x02\x02P\u020B\x03\x02\x02\x02R\u021D\x03\x02" +
		"\x02\x02T\u021F\x03\x02\x02\x02V\u0223\x03\x02\x02\x02X\u0225\x03\x02" +
		"\x02\x02Z\u0227\x03\x02\x02\x02\\\u023B\x03\x02\x02\x02^\u0245\x03\x02" +
		"\x02\x02`\u024E\x03\x02\x02\x02b\u0252\x03\x02\x02\x02d\u0255\x03\x02" +
		"\x02\x02f\u025B\x03\x02\x02\x02h\u0268\x03\x02\x02\x02j\u026A\x03\x02" +
		"\x02\x02l\u0273\x03\x02\x02\x02n\u027D\x03\x02\x02\x02p\u0282\x03\x02" +
		"\x02\x02r\u0284\x03\x02\x02\x02t\u0294\x03\x02\x02\x02v\u02B5\x03\x02" +
		"\x02\x02x\u02EA\x03\x02\x02\x02z\u02F0\x03\x02\x02\x02|\u02F2\x03\x02" +
		"\x02\x02~\u0342\x03\x02\x02\x02\x80\u035A\x03\x02\x02\x02\x82\u035F\x03" +
		"\x02\x02\x02\x84\u0362\x03\x02\x02\x02\x86\u0364\x03\x02\x02\x02\x88\u0366" +
		"\x03\x02\x02\x02\x8A\u036F\x03\x02\x02\x02\x8C\u0379\x03\x02\x02\x02\x8E" +
		"\u03CC\x03\x02\x02\x02\x90\u03DB\x03\x02\x02\x02\x92\u03DF\x03\x02\x02" +
		"\x02\x94\u03E1\x03\x02\x02\x02\x96\u03ED\x03\x02\x02\x02\x98\u03EF\x03" +
		"\x02\x02\x02\x9A\u03F6\x03\x02\x02\x02\x9C\u0402\x03\x02\x02\x02\x9E\u0404" +
		"\x03\x02\x02\x02\xA0\u040C\x03\x02\x02\x02\xA2\u041C\x03\x02\x02\x02\xA4" +
		"\u0420\x03\x02\x02\x02\xA6\u042F\x03\x02\x02\x02\xA8\u043A\x03\x02\x02" +
		"\x02\xAA\u0449\x03\x02\x02\x02\xAC\u044C\x03\x02\x02\x02\xAE\u0453\x03" +
		"\x02\x02\x02\xB0\u0461\x03\x02\x02\x02\xB2\u0463\x03\x02\x02\x02\xB4\u0465" +
		"\x03\x02\x02\x02\xB6\u0467\x03\x02\x02\x02\xB8\u0469\x03\x02\x02\x02\xBA" +
		"\u046B\x03\x02\x02\x02\xBC\u046F\x03\x02\x02\x02\xBE\u0473\x03\x02\x02" +
		"\x02\xC0\u0477\x03\x02\x02\x02\xC2\u0479\x03\x02\x02\x02\xC4\u047B\x03" +
		"\x02\x02\x02\xC6\u0480\x03\x02\x02\x02\xC8\u0488\x03\x02\x02\x02\xCA\u048F" +
		"\x03\x02\x02\x02\xCC\xCE\x05\x04\x03\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE" +
		"\x03\x02\x02\x02\xCE\xD2\x03\x02\x02\x02\xCF\xD1\x05\x06\x04\x02\xD0\xCF" +
		"\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3" +
		"\x03\x02\x02\x02\xD3\xD8\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD7" +
		"\x05\b\x05\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6" +
		"\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDE\x03\x02\x02\x02\xDA\xD8" +
		"\x03\x02\x02\x02\xDB\xDD\x05\x10\t\x02\xDC\xDB\x03\x02\x02\x02\xDD\xE0" +
		"\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE4" +
		"\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE3\x05\x12\n\x02\xE2\xE1" +
		"\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5" +
		"\x03\x02\x02\x02\xE5\xEA\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE9" +
		"\x05\x1A\x0E\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8" +
		"\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xF0\x03\x02\x02\x02\xEC\xEA" +
		"\x03\x02\x02\x02\xED\xEF\x05\x1C\x0F\x02\xEE\xED\x03\x02\x02\x02\xEF\xF2" +
		"\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF6" +
		"\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF5\x05\x0E\b\x02\xF4\xF3" +
		"\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7" +
		"\x03\x02\x02\x02\xF7\xFC\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB" +
		"\x058\x1D\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA" +
		"\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xFC" +
		"\x03\x02\x02\x02\xFF\u0100\x07\x02\x02\x03\u0100\x03\x03\x02\x02\x02\u0101" +
		"\u0102\x07\x03\x02\x02\u0102\u0105\x05l7\x02\u0103\u0104\x07\x04\x02\x02" +
		"\u0104\u0106\x05$\x13\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03" +
		"\x02\x02\x02\u0106\x05\x03\x02\x02\x02\u0107\u0108\x07\x05\x02\x02\u0108" +
		"\u010B\x05,\x17\x02\u0109\u010A\x07\x04\x02\x02\u010A\u010C\x05$\x13\x02" +
		"\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\x07\x03" +
		"\x02\x02\x02\u010D\u010E\x07\x06\x02\x02\u010E\u0111\x05l7\x02\u010F\u0110" +
		"\x07\x04\x02\x02\u0110\u0112\x05$\x13\x02\u0111\u010F\x03\x02\x02\x02" +
		"\u0111\u0112\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0114\x07" +
		"\x07\x02\x02\u0114\u0116\x05\n\x06\x02\u0115\u0113\x03\x02\x02\x02\u0115" +
		"\u0116\x03\x02\x02\x02\u0116\t\x03\x02\x02\x02\u0117\u0118\x05\xC2b\x02" +
		"\u0118\v\x03\x02\x02\x02\u0119\u011A\t\x02\x02\x02\u011A\r\x03\x02\x02" +
		"\x02\u011B\u011D\x05\f\x07\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D" +
		"\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x07\n\x02\x02" +
		"\u011F\u0121\x05\xC2b\x02\u0120\u0122\x05(\x15\x02\u0121\u0120\x03\x02" +
		"\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0125\x03\x02\x02\x02\u0123" +
		"\u0124\x07\v\x02\x02\u0124\u0126\x05v<\x02\u0125\u0123\x03\x02\x02\x02" +
		"\u0125\u0126\x03\x02\x02\x02\u0126\x0F\x03\x02\x02\x02\u0127\u0129\x05" +
		"\f\x07\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129" +
		"\u012A\x03\x02\x02\x02\u012A\u012B\x07\f\x02\x02\u012B\u012C\x05\xC2b" +
		"\x02\u012C\u012D\x07\r\x02\x02\u012D\u0130\x05 \x11\x02\u012E\u012F\x07" +
		"\x04\x02\x02\u012F\u0131\x05$\x13\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\x11\x03\x02\x02\x02\u0132\u0134\x05\f\x07" +
		"\x02\u0133\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135" +
		"\x03\x02\x02\x02\u0135\u0136\x07\x0E\x02\x02\u0136\u0137\x05\xC2b\x02" +
		"\u0137\u0138\x07\r\x02\x02\u0138\u013B\x05\"\x12\x02\u0139\u013A\x07\x04" +
		"\x02\x02\u013A\u013C\x05$\x13\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C" +
		"\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u013F\x05\x14\v\x02" +
		"\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\x13\x03" +
		"\x02\x02\x02\u0140\u0141\x07\x0F\x02\x02\u0141\u0142\x07\x10\x02\x02\u0142" +
		"\u0147\x05\x16\f\x02\u0143\u0144\x07\x11\x02\x02\u0144\u0146\x05\x16\f" +
		"\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0145" +
		"\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x03\x02\x02\x02" +
		"\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x07\x12\x02\x02\u014B\x15\x03" +
		"\x02\x02\x02\u014C\u014D\x05\x18\r\x02\u014D\u014E\x07\x13\x02\x02\u014E" +
		"\u0150\x03\x02\x02\x02\u014F\u014C\x03\x02\x02\x02\u014F\u0150\x03\x02" +
		"\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x05\xC2b\x02\u0152\x17" +
		"\x03\x02\x02\x02\u0153\u0154\x05\xC2b\x02\u0154\x19\x03\x02\x02\x02\u0155" +
		"\u0157\x05\f\x07\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02" +
		"\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x07\x14\x02\x02\u0159\u015A" +
		"\x05\xC2b\x02\u015A\u015B\x07\r\x02\x02\u015B\u015C\x05&\x14\x02\u015C" +
		"\u015D\x07\x15\x02\x02\u015D\u015F\x05\x16\f\x02\u015E\u0160\x05\xAAV" +
		"\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\x1B" +
		"\x03\x02\x02\x02\u0161\u0163\x05\f\x07\x02\u0162\u0161\x03\x02\x02\x02" +
		"\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x07" +
		"\x16\x02\x02\u0165\u0166\x05\xC2b\x02\u0166\u0167\x07\r\x02\x02\u0167" +
		"\u0168\x07\x10\x02\x02\u0168\u016D\x05\x1E\x10\x02\u0169\u016A\x07\x11" +
		"\x02\x02\u016A\u016C\x05\x1E\x10\x02\u016B\u0169\x03\x02\x02\x02\u016C" +
		"\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02" +
		"\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170" +
		"\u0172\x07\x12\x02\x02\u0171\u0173\x05\xAAV\x02\u0172\u0171\x03\x02\x02" +
		"\x02\u0172\u0173\x03\x02\x02\x02\u0173\x1D\x03\x02\x02\x02\u0174\u0175" +
		"\x05\x18\r\x02\u0175\u0176\x07\x13\x02\x02\u0176\u0178\x03\x02\x02\x02" +
		"\u0177\u0174\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03" +
		"\x02\x02\x02\u0179\u017A\x05\xC2b\x02\u017A\x1F\x03\x02\x02\x02\u017B" +
		"\u017C\x07\xA1\x02\x02\u017C!\x03\x02\x02\x02\u017D\u017E\x07\xA1\x02" +
		"\x02\u017E#\x03\x02\x02\x02\u017F\u0180\x07\xA1\x02\x02\u0180%\x03\x02" +
		"\x02\x02\u0181\u0182\x07\xA1\x02\x02\u0182\'\x03\x02\x02\x02\u0183\u0189" +
		"\x05*\x16\x02\u0184\u0189\x05.\x18\x02\u0185\u0189\x050\x19\x02\u0186" +
		"\u0189\x052\x1A\x02\u0187\u0189\x056\x1C\x02\u0188\u0183\x03\x02\x02\x02" +
		"\u0188\u0184\x03\x02\x02\x02\u0188\u0185\x03\x02\x02\x02\u0188\u0186\x03" +
		"\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189)\x03\x02\x02\x02\u018A" +
		"\u018B\x05X-\x02\u018B\u018C\x07\x13\x02\x02\u018C\u018E\x03\x02\x02\x02" +
		"\u018D\u018A";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02" +
		"\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191\u018F\x03" +
		"\x02\x02\x02\u0192\u0193\x05\xBE`\x02\u0193+\x03\x02\x02\x02\u0194\u0195" +
		"\x05\xC2b\x02\u0195-\x03\x02\x02\x02\u0196\u0197\x07\x17\x02\x02\u0197" +
		"\u0198\x07\x18\x02\x02\u0198\u0199\x05(\x15\x02\u0199\u019A\x07\x19\x02" +
		"\x02\u019A/\x03\x02\x02\x02\u019B\u019C\x07\x1A\x02\x02\u019C\u019D\x07" +
		"\x18\x02\x02\u019D\u019E\x05(\x15\x02\u019E\u019F\x07\x19\x02\x02\u019F" +
		"1\x03\x02\x02\x02\u01A0\u01A1\x07\x1B\x02\x02\u01A1\u01A2\x07\x10\x02" +
		"\x02\u01A2\u01A7\x054\x1B\x02\u01A3\u01A4\x07\x11\x02\x02\u01A4\u01A6" +
		"\x054\x1B\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02" +
		"\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AA\x03" +
		"\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AB\x07\x12\x02\x02\u01AB" +
		"3\x03\x02\x02\x02\u01AC\u01AD\x05\xBC_\x02\u01AD\u01AE\x05(\x15\x02\u01AE" +
		"5\x03\x02\x02\x02\u01AF\u01B0\x07\x1C\x02\x02\u01B0\u01B1\x07\x18\x02" +
		"\x02\u01B1\u01B6\x05(\x15\x02\u01B2\u01B3\x07\x11\x02\x02\u01B3\u01B5" +
		"\x05(\x15\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02" +
		"\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03" +
		"\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9\u01BA\x07\x19\x02\x02\u01BA" +
		"7\x03\x02\x02\x02\u01BB\u01BF\x05:\x1E\x02\u01BC\u01BF\x05<\x1F\x02\u01BD" +
		"\u01BF\x05> \x02\u01BE\u01BB\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02" +
		"\u01BE\u01BD\x03\x02\x02\x02\u01BF9\x03\x02\x02\x02\u01C0\u01C2\x07\x1D" +
		"\x02\x02\u01C1\u01C3\x05\f\x07\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3" +
		"\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x05\xC2b\x02" +
		"\u01C5\u01C6\x07\r\x02\x02\u01C6\u01C7\x05v<\x02\u01C7;\x03\x02\x02\x02" +
		"\u01C8\u01CC\x07\x1E\x02\x02\u01C9\u01CA\x05,\x17\x02\u01CA\u01CB\x07" +
		"\x13\x02\x02\u01CB\u01CD\x03\x02\x02\x02\u01CC\u01C9\x03\x02\x02\x02\u01CC" +
		"\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x05\xC2" +
		"b\x02\u01CF=\x03\x02\x02\x02\u01D0\u01D2\x07\x1D\x02\x02\u01D1\u01D3\x05" +
		"\f\x07\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3" +
		"\u01D4\x03\x02\x02\x02\u01D4\u01D5\x07\x1F\x02\x02\u01D5\u01D6\x05\xC0" +
		"a\x02\u01D6\u01DF\x07 \x02\x02\u01D7\u01DC\x05@!\x02\u01D8\u01D9\x07\x11" +
		"\x02\x02\u01D9\u01DB\x05@!\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DE" +
		"\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02" +
		"\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01D7\x03" +
		"\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
		"\u01E4\x07!\x02\x02\u01E2\u01E3\x07\"\x02\x02\u01E3\u01E5\x05(\x15\x02" +
		"\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x03" +
		"\x02\x02\x02\u01E6\u01E9\x07\r\x02\x02\u01E7\u01EA\x05B\"\x02\u01E8\u01EA" +
		"\x07#\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02" +
		"\u01EA?\x03\x02\x02\x02\u01EB\u01EC\x05\xBC_\x02\u01EC\u01ED\x05(\x15" +
		"\x02\u01EDA\x03\x02\x02\x02\u01EE\u01EF\x05v<\x02\u01EFC\x03\x02\x02\x02" +
		"\u01F0\u01F7\x05P)\x02\u01F1\u01F7\x05n8\x02\u01F2\u01F3\x07 \x02\x02" +
		"\u01F3\u01F4\x05v<\x02\u01F4\u01F5\x07!\x02\x02\u01F5\u01F7\x03\x02\x02" +
		"\x02\u01F6\u01F0\x03\x02\x02\x02\u01F6\u01F1\x03\x02\x02\x02\u01F6\u01F2" +
		"\x03\x02\x02\x02\u01F7E\x03\x02\x02\x02\u01F8\u01F9\x05D#\x02\u01F9\u01FA" +
		"\x05H%\x02\u01FAG\x03\x02\x02\x02\u01FB\u01FC\x05\xC2b\x02\u01FCI\x03" +
		"\x02\x02\x02\u01FD\u0200\x05L\'\x02\u01FE\u0200\x05N(\x02\u01FF\u01FD" +
		"\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200K\x03\x02\x02\x02\u0201" +
		"\u0202\x07$\x02\x02\u0202\u0203\x05F$\x02\u0203\u0204\x07%\x02\x02\u0204" +
		"\u0205\x05v<\x02\u0205M\x03\x02\x02\x02\u0206\u0207\x07&\x02\x02\u0207" +
		"\u0208\x05F$\x02\u0208\u0209\x07%\x02\x02\u0209\u020A\x05v<\x02\u020A" +
		"O\x03\x02\x02\x02\u020B\u020F\x07\'\x02\x02\u020C\u020D\x05R*\x02\u020D" +
		"\u020E\x07(\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F\u020C\x03\x02\x02" +
		"\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0219" +
		"\x05*\x16\x02\u0212\u0216\x07\r\x02\x02\u0213\u0214\x05T+\x02\u0214\u0215" +
		"\x07)\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216\u0213\x03\x02\x02\x02" +
		"\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x05" +
		"V,\x02\u0219\u0212\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B" +
		"\x03\x02\x02\x02\u021B\u021C\x07*\x02\x02\u021CQ\x03\x02\x02\x02\u021D" +
		"\u021E\x05n8\x02\u021ES\x03\x02\x02\x02\u021F\u0220\x05r:\x02\u0220U\x03" +
		"\x02\x02\x02\u0221\u0224\x05n8\x02\u0222\u0224\x05v<\x02\u0223\u0221\x03" +
		"\x02\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224W\x03\x02\x02\x02\u0225" +
		"\u0226\x05\xC2b\x02\u0226Y\x03\x02\x02\x02\u0227\u0229\x05\\/\x02\u0228" +
		"\u022A\x05^0\x02\u0229\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02" +
		"\u022A\u022E\x03\x02\x02\x02\u022B\u022D\x05J&\x02\u022C\u022B\x03\x02" +
		"\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02" +
		"\x02\x02\u0231\u0233\x05b2\x02\u0232\u0231\x03\x02\x02\x02\u0232\u0233" +
		"\x03\x02\x02\x02\u0233\u0235\x03\x02\x02\x02\u0234\u0236\x05d3\x02\u0235" +
		"\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0238\x03\x02" +
		"\x02\x02\u0237\u0239\x05f4\x02\u0238\u0237\x03\x02\x02\x02\u0238\u0239" +
		"\x03\x02\x02\x02\u0239[\x03\x02\x02\x02\u023A\u023C\x07\x15\x02\x02\u023B" +
		"\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x03\x02" +
		"\x02\x02\u023D\u0242\x05F$\x02\u023E\u023F\x07\x11\x02\x02\u023F\u0241" +
		"\x05F$\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242" +
		"\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243]\x03\x02\x02" +
		"\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0246\x07+\x02\x02\u0246\u024B" +
		"\x05`1\x02\u0247\u0248\x07\x11\x02\x02\u0248\u024A\x05`1\x02\u0249\u0247" +
		"\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02" +
		"\u024B\u024C\x03\x02\x02\x02\u024C_\x03\x02\x02\x02\u024D\u024B\x03\x02" +
		"\x02\x02\u024E\u024F\x05\xC2b\x02\u024F\u0250\x07\r\x02\x02\u0250\u0251" +
		"\x05v<\x02\u0251a\x03\x02\x02\x02\u0252\u0253\x07,\x02\x02\u0253\u0254" +
		"\x05v<\x02\u0254c\x03\x02\x02\x02\u0255\u0257\x07-\x02\x02\u0256\u0258" +
		"\t\x03\x02\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02" +
		"\u0258\u0259\x03\x02\x02\x02\u0259\u025A\x05v<\x02\u025Ae\x03\x02\x02" +
		"\x02\u025B\u0266\x070\x02\x02\u025C\u0267\x05h5\x02\u025D\u025E\x071\x02" +
		"\x02\u025E\u0263\x05j6\x02\u025F\u0260\x07\x11\x02\x02\u0260\u0262\x05" +
		"j6\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263\u0261" +
		"\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0267\x03\x02\x02\x02" +
		"\u0265\u0263\x03\x02\x02\x02\u0266\u025C\x03\x02\x02\x02\u0266\u025D\x03" +
		"\x02\x02\x02\u0267g\x03\x02\x02\x02\u0268\u0269\t\x04\x02\x02\u0269i\x03" +
		"\x02\x02\x02\u026A\u026C\x05~@\x02\u026B\u026D\x05h5\x02\u026C\u026B\x03" +
		"\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026Dk\x03\x02\x02\x02\u026E" +
		"\u026F\x05X-\x02\u026F\u0270\x07\x13\x02\x02\u0270\u0272\x03\x02\x02\x02" +
		"\u0271\u026E\x03\x02\x02\x02\u0272\u0275\x03\x02\x02\x02\u0273\u0271\x03" +
		"\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0276\x03\x02\x02\x02\u0275" +
		"\u0273\x03\x02\x02\x02\u0276\u0277\x05\xC2b\x02\u0277m\x03\x02\x02\x02" +
		"\u0278\u0279\x05p9\x02\u0279\u027A\x07\x13\x02\x02\u027A\u027C\x03\x02" +
		"\x02\x02\u027B\u0278\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D" +
		"\u027B\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0280\x03\x02" +
		"\x02\x02\u027F\u027D\x03\x02\x02\x02\u0280\u0281\x05\xBC_\x02\u0281o\x03" +
		"\x02\x02\x02\u0282\u0283\x05\xBC_\x02\u0283q\x03\x02\x02\x02\u0284\u0285" +
		"\b:\x01\x02\u0285\u0286\x05\xBC_\x02\u0286\u0291\x03\x02\x02\x02\u0287" +
		"\u0288\f\x04\x02\x02\u0288\u0289\x07\x13\x02\x02\u0289\u0290\x05\xBC_" +
		"\x02\u028A\u028B\f\x03\x02\x02\u028B\u028C\x07\'\x02\x02\u028C\u028D\x05" +
		"t;\x02\u028D\u028E\x07*\x02\x02\u028E\u0290\x03\x02\x02\x02\u028F\u0287" +
		"\x03\x02\x02\x02\u028F\u028A\x03\x02\x02\x02\u0290\u0293\x03\x02\x02\x02" +
		"\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292s\x03\x02" +
		"\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0295\t\x05\x02\x02\u0295u" +
		"\x03\x02\x02\x02\u0296\u0297\b<\x01\x02\u0297\u02B6\x05~@\x02\u0298\u02B6" +
		"\x05P)\x02\u0299\u02B6\x05Z.\x02\u029A\u029B\x07<\x02\x02\u029B\u029C" +
		"\x05v<\x02\u029C\u029D\x07;\x02\x02\u029D\u029E\x05(\x15\x02\u029E\u02B6" +
		"\x03\x02\x02\x02\u029F\u02A0\x077\x02\x02\u02A0\u02B6\x05v<\x0F\u02A1" +
		"\u02A2\x07=\x02\x02\u02A2\u02B6\x05v<\x0E\u02A3\u02A4\x07A\x02\x02\u02A4" +
		"\u02A6\x07)\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02" +
		"\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8\x05|?\x02\u02A8\u02A9\x07" +
		"?\x02\x02\u02A9\u02AA\x05~@\x02\u02AA\u02AB\x07@\x02\x02\u02AB\u02AC\x05" +
		"~@\x02\u02AC\u02B6\x03\x02\x02\x02\u02AD\u02AE\x07B\x02\x02\u02AE\u02AF" +
		"\x07)\x02\x02\u02AF\u02B0\x05|?\x02\u02B0\u02B1\x07?\x02\x02\u02B1\u02B2" +
		"\x05~@\x02\u02B2\u02B3\x07@\x02\x02\u02B3\u02B4\x05~@\x02\u02B4\u02B6" +
		"\x03\x02\x02\x02\u02B5\u0296\x03\x02\x02\x02\u02B5\u0298\x03\x02\x02\x02" +
		"\u02B5\u0299\x03\x02\x02\x02\u02B5\u029A\x03\x02\x02\x02\u02B5\u029F\x03" +
		"\x02\x02\x02\u02B5\u02A1\x03\x02\x02\x02\u02B5\u02A5\x03\x02\x02\x02\u02B5" +
		"\u02AD\x03\x02\x02\x02\u02B6\u02E7\x03\x02\x02\x02\u02B7\u02B8\f\n\x02" +
		"\x02\u02B8\u02B9\t\x06\x02\x02\u02B9\u02E6\x05v<\v\u02BA\u02BB\f\t\x02" +
		"\x02\u02BB\u02BC\x05\x8EH\x02\u02BC\u02BD\x05v<\n\u02BD\u02E6\x03\x02" +
		"\x02\x02\u02BE\u02BF\f\b\x02\x02\u02BF\u02C0\t\x07\x02\x02\u02C0\u02E6" +
		"\x05v<\t\u02C1\u02C2\f\x07\x02\x02\u02C2\u02C4\t\b\x02\x02\u02C3\u02C5" +
		"\x05\x82B\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02" +
		"\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02E6\x05v<\b\u02C7\u02C8\f\x06\x02" +
		"\x02\u02C8\u02C9\x07@\x02\x02\u02C9\u02E6\x05v<\x07\u02CA\u02CB\f\x05" +
		"\x02\x02\u02CB\u02CC\t\t\x02\x02\u02CC\u02E6\x05v<\x06\u02CD\u02CE\f\x04" +
		"\x02\x02\u02CE\u02CF\x07L\x02\x02\u02CF\u02E6\x05v<\x05\u02D0\u02D1\f" +
		"\x03\x02\x02\u02D1\u02D2\t\n\x02\x02\u02D2\u02E6\x05v<\x04\u02D3\u02D4" +
		"\f\x12\x02\x02\u02D4\u02D6\x076\x02\x02\u02D5\u02D7\x077\x02\x02\u02D6" +
		"\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02" +
		"\x02\x02\u02D8\u02E6\t\v\x02\x02\u02D9\u02DA\f\x11\x02\x02\u02DA\u02DB" +
		"\t\f\x02\x02\u02DB\u02E6\x05(\x15\x02\u02DC\u02DE\f\r\x02\x02\u02DD\u02DF" +
		"\x07>\x02\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02" +
		"\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E1\x07?\x02\x02\u02E1\u02E2\x05" +
		"~@\x02\u02E2\u02E3\x07@\x02\x02\u02E3\u02E4\x05~@\x02\u02E4\u02E6\x03" +
		"\x02\x02\x02\u02E5\u02B7\x03\x02\x02\x02\u02E5\u02BA\x03\x02\x02\x02\u02E5" +
		"\u02BE\x03\x02\x02\x02\u02E5\u02C1\x03\x02\x02\x02\u02E5\u02C7\x03\x02" +
		"\x02\x02\u02E5\u02CA\x03\x02\x02\x02\u02E5\u02CD\x03\x02\x02\x02\u02E5" +
		"\u02D0\x03\x02\x02\x02\u02E5\u02D3\x03\x02\x02\x02\u02E5\u02D9\x03\x02" +
		"\x02\x02\u02E5\u02DC\x03\x02\x02\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7" +
		"\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8w\x03\x02\x02" +
		"\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA\u02EB\t\r\x02\x02\u02EBy\x03\x02" +
		"\x02\x02\u02EC\u02F1\x05x=\x02\u02ED\u02F1\x07Y\x02\x02\u02EE\u02F1\x07" +
		"Z\x02\x02\u02EF\u02F1\x07[\x02\x02\u02F0\u02EC\x03\x02\x02\x02\u02F0\u02ED" +
		"\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02" +
		"\u02F1{\x03\x02\x02\x02\u02F2\u02F3\t\x0E\x02\x02\u02F3}\x03\x02\x02\x02" +
		"\u02F4\u02F5\b@\x01\x02\u02F5\u0343\x05\x90I\x02\u02F6\u02F7\x07d\x02" +
		"\x02\u02F7\u02F8\x05v<\x02\u02F8\u02FB\x07e\x02\x02\u02F9\u02FC\x05(\x15" +
		"\x02\u02FA\u02FC\x05\xCAf\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FA" +
		"\x03\x02\x02\x02\u02FC\u0343\x03\x02\x02\x02\u02FD\u02FE\t\x0F\x02\x02" +
		"\u02FE\u0343\x05~@\x14\u02FF\u0300\t\x10\x02\x02\u0300\u0301\x07j\x02" +
		"\x02\u0301\u0343\x05~@\x13\u0302\u0303\x05z>\x02\u0303\u0304\x07\x15\x02" +
		"\x02\u0304\u0305\x05~@\x12\u0305\u0343\x03\x02\x02\x02\u0306\u0307\x07" +
		"A\x02\x02\u0307\u0308\x07)\x02\x02\u0308\u0309\x05|?\x02\u0309\u030A\x07" +
		"j\x02\x02\u030A\u030B\x05~@\x11\u030B\u0343\x03\x02\x02\x02\u030C\u030D" +
		"\x07B\x02\x02\u030D\u030E\x07)\x02\x02\u030E\u030F\x05|?\x02\u030F\u0310" +
		"\x07j\x02\x02\u0310\u0311\x05~@\x10\u0311\u0343\x03\x02\x02\x02\u0312" +
		"\u0313\x07k\x02\x02\u0313\u0314\x07j\x02\x02\u0314\u0343\x05~@\x0F\u0315" +
		"\u0316\x07l\x02\x02\u0316\u0317\x07j\x02\x02\u0317\u0343\x05~@\x0E\u0318" +
		"\u0319\x07m\x02\x02\u0319\u031A\x07j\x02\x02\u031A\u0343\x05~@\r\u031B" +
		"\u031C\x07n\x02\x02\u031C\u031D\x07\x15\x02\x02\u031D\u0343\x05~@\f\u031E" +
		"\u031F\x07o\x02\x02\u031F\u0320\x07\x15\x02\x02\u0320\u0343\x05~@\v\u0321" +
		"\u0322\t\x11\x02\x02\u0322\u0343\x05*\x16\x02\u0323\u0324\x07x\x02\x02" +
		"\u0324\u0325\x05v<\x02\u0325\u0326\x07y\x02\x02\u0326\u0327\x05v<\x02" +
		"\u0327\u0328\x07z\x02\x02\u0328\u0329\x05v<\x02\u0329\u0343\x03\x02\x02" +
		"\x02\u032A\u032C\x07{\x02\x02\u032B\u032D\x05v<\x02\u032C\u032B\x03\x02" +
		"\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u032F\x03\x02\x02\x02\u032E" +
		"\u0330\x05\x80A\x02\u032F\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02" +
		"\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0333" +
		"\x03\x02\x02\x02\u0333\u0334\x07z\x02\x02\u0334\u0335\x05v<\x02\u0335" +
		"\u0336\x07i\x02\x02\u0336\u0343\x03\x02\x02\x02\u0337\u0338\t\x12\x02" +
		"\x02\u0338\u0343\x05v<\x02\u0339\u033A\t\x13\x02\x02\u033A\u0340\x05v" +
		"<\x02\u033B\u033E\x07\x7F\x02\x02\u033C\u033F\x05x=\x02\u033D\u033F\x05" +
		"v<\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033D\x03\x02\x02\x02\u033F\u0341" +
		"\x03\x02\x02\x02\u0340\u033B\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02" +
		"\u0341\u0343\x03\x02\x02\x02\u0342\u02F4\x03\x02\x02\x02\u0342\u02F6\x03" +
		"\x02\x02\x02\u0342\u02FD\x03\x02\x02\x02\u0342\u02FF\x03\x02\x02\x02\u0342" +
		"\u0302\x03\x02\x02\x02\u0342\u0306\x03\x02\x02\x02\u0342\u030C\x03\x02" +
		"\x02\x02\u0342\u0312\x03\x02\x02\x02\u0342\u0315\x03\x02\x02\x02\u0342" +
		"\u0318\x03\x02\x02\x02\u0342\u031B\x03\x02\x02\x02\u0342\u031E\x03\x02" +
		"\x02\x02\u0342\u0321\x03\x02\x02\x02\u0342\u0323\x03\x02\x02\x02\u0342" +
		"\u032A\x03\x02\x02\x02\u0342\u0337\x03\x02\x02\x02\u0342\u0339\x03\x02" +
		"\x02\x02\u0343\u0357\x03\x02\x02\x02\u0344\u0345\f\t\x02\x02\u0345\u0346" +
		"\x07r\x02\x02\u0346\u0356\x05~@\n\u0347\u0348\f\b\x02\x02\u0348\u0349" +
		"\t\x14\x02\x02\u0349\u0356\x05~@\t\u034A\u034B\f\x07\x02\x02\u034B\u034C" +
		"\t\x15\x02\x02\u034C\u0356\x05~@\b\u034D\u034E\f\x17\x02\x02\u034E\u034F" +
		"\x07\x13\x02\x02\u034F\u0356\x05\x92J\x02\u0350\u0351\f\x16\x02\x02\u0351" +
		"\u0352\x07\'\x02\x02\u0352\u0353\x05v<\x02\u0353\u0354\x07*\x02\x02\u0354" +
		"\u0356\x03\x02\x02\x02\u0355\u0344\x03\x02\x02\x02\u0355\u0347\x03\x02" +
		"\x02\x02\u0355\u034A\x03\x02\x02\x02\u0355\u034D\x03\x02\x02\x02\u0355" +
		"\u0350\x03\x02\x02\x02\u0356\u0359\x03\x02\x02\x02\u0357\u0355\x03\x02" +
		"\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\x7F\x03\x02\x02\x02\u0359\u0357" +
		"\x03\x02\x02\x02\u035A\u035B\x07\x80\x02\x02\u035B\u035C\x05v<\x02\u035C" +
		"\u035D\x07y\x02\x02\u035D\u035E\x05v<\x02\u035E\x81\x03\x02\x02\x02\u035F" +
		"\u0360\x05x=\x02\u0360\u0361\x07j\x02\x02\u0361\x83\x03\x02\x02\x02\u0362" +
		"\u0363\t\x16\x02\x02\u0363\x85\x03\x02\x02\x02\u0364\u0365\t\x17\x02\x02" +
		"\u0365\x87\x03\x02\x02\x02\u0366\u0367\t\x18\x02\x02\u0367\x89\x03\x02" +
		"\x02\x02\u0368\u036A\x05\xC8e\x02\u0369\u036B\x05\x86D\x02\u036A\u0369" +
		"\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u0370\x03\x02\x02\x02" +
		"\u036C\u036D\x05\x88E\x02\u036D\u036E\x05\xC8e\x02\u036E\u0370\x03\x02" +
		"\x02\x02\u036F\u0368\x03\x02\x02\x02\u036F\u036C\x03\x02\x02\x02\u0370" +
		"\x8B\x03\x02\x02\x02\u0371\u0373\x07\x87\x02\x02\u0372\u0371\x03\x02\x02" +
		"\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u037A" +
		"\t\x19\x02\x02\u0375\u0377\t\x19\x02\x02\u0376\u0378\x07\x8A\x02\x02\u0377" +
		"\u0376\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037A\x03\x02" +
		"\x02\x02\u0379\u0372\x03\x02\x02\x02\u0379\u0375\x03\x02\x02\x02\u037A" +
		"\x8D\x03\x02\x02\x02\u037B\u037D\t\x1A\x02\x02\u037C\u037B\x03\x02\x02" +
		"\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\u0380" +
		"\x07\x8E\x02\x02\u037F\u0381\x05x=\x02\u0380\u037F\x03\x02\x02\x02\u0380" +
		"\u0381\x03\x02\x02\x02\u0381\u0384\x03\x02\x02\x02\u0382\u0385\x05\x84" +
		"C\x02\u0383\u0385\x07;\x02\x02\u0384\u0382\x03\x02\x02\x02\u0384\u0383" +
		"\x03\x02\x02\x02\u0385\u0387\x03\x02\x02\x02\u0386\u0388\t\x10\x02\x02" +
		"\u0387\u0386\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u03CD\x03" +
		"\x02\x02\x02\u0389\u038B\x07>\x02\x02\u038A\u0389\x03\x02\x02\x02\u038A" +
		"\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038E\x07\x8F" +
		"\x02\x02\u038D\u038F\x05\x82B\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F" +
		"\x03\x02\x02\x02\u038F\u0391\x03\x02\x02\x02\u0390\u0392\t\x10\x02\x02" +
		"\u0391\u0390\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u03CD\x03" +
		"\x02\x02\x02\u0393\u0395\t\x1A\x02\x02\u0394\u0393\x03\x02\x02\x02\u0394" +
		"\u0395\x03\x02\x02\x02\u0395\u0397\x03\x02\x02\x02\u0396\u0398\x07>\x02" +
		"\x02\u0397\u0396\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u0399" +
		"\x03\x02\x02\x02\u0399\u039B\t\x1B\x02\x02\u039A\u039C\x05\x82B\x02\u039B" +
		"\u039A\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u03CD\x03\x02" +
		"\x02\x02\u039D\u039F\t\x1A\x02\x02\u039E\u039D\x03\x02\x02\x02\u039E\u039F" +
		"\x03\x02\x02\x02\u039F\u03A1\x03\x02\x02\x02\u03A0\u03A2\x05\x8AF\x02" +
		"\u03A1\u03A0\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A3\x03" +
		"\x02\x02\x02\u03A3\u03A5\x05\x8CG\x02\u03A4\u03A6\x05\x82B\x02\u03A5\u03A4" +
		"\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A8\x03\x02\x02\x02" +
		"\u03A7\u03A9\t\x10\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A8\u03A9\x03" +
		"\x02\x02\x02\u03A9\u03CD\x03\x02\x02\x02\u03AA\u03AC\t\x1A\x02\x02\u03AB" +
		"\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AE\x03\x02" +
		"\x02\x02\u03AD\u03AF\x07>\x02\x02\u03AE\u03AD\x03\x02\x02\x02\u03AE\u03AF" +
		"\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B1\x07\x92\x02\x02" +
		"\u03B1\u03B2\x05\xC8e\x02\u03B2\u03B4\x07j\x02\x02\u03B3\u03B5\t\x10\x02" +
		"\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03CD" +
		"\x03\x02\x02\x02\u03B6\u03B8\x07\x93\x02\x02\u03B7\u03B9\t\x19\x02\x02" +
		"\u03B8\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BB\x03" +
		"\x02\x02\x02\u03BA\u03BC\x05\x82B\x02\u03BB\u03BA\x03\x02\x02\x02\u03BB" +
		"\u03BC\x03\x02\x02\x02\u03BC\u03CD\x03\x02\x02\x02\u03BD\u03BF\x07\x94" +
		"\x02\x02\u03BE\u03C0\t\x19\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0" +
		"\x03\x02\x02\x02\u03C0\u03C2\x03\x02\x02\x02\u03C1\u03C3\x05\x82B\x02" +
		"\u03C2\u03C1\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03CD\x03" +
		"\x02\x02\x02\u03C4\u03C6\x07\x8B\x02\x02\u03C5\u03C7\x05\x82B\x02\u03C6" +
		"\u03C5\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03CD\x03\x02" +
		"\x02\x02\u03C8\u03CA\x07\x8C\x02\x02\u03C9\u03CB\x05\x82B\x02\u03CA\u03C9" +
		"\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03CD\x03\x02\x02\x02" +
		"\u03CC\u037C\x03\x02\x02\x02\u03CC\u038A\x03\x02\x02\x02\u03CC\u0394\x03" +
		"\x02\x02\x02\u03CC\u039E\x03\x02\x02\x02\u03CC\u03AB\x03\x02\x02\x02\u03CC" +
		"\u03B6\x03\x02\x02\x02\u03CC\u03BD\x03\x02\x02\x02\u03CC\u03C4\x03\x02" +
		"\x02\x02\u03CC\u03C8\x03\x02\x02\x02\u03CD\x8F\x03\x02\x02\x02\u03CE\u03DC" +
		"\x05\x96L\x02\u03CF\u03DC\x05\x9CO\x02\u03D0\u03DC\x05\xC4c\x02\u03D1" +
		"\u03DC\x05\x9EP\x02\u03D2\u03DC\x05\xA0Q\x02\u03D3\u03DC\x05\xA4S\x02" +
		"\u03D4\u03DC\x05\xA8U\x02\u03D5\u03DC\x05\xACW\x02\u03D6\u03DC\x05\xAE" +
		"X\x02\u03D7\u03D8\x07 \x02\x02\u03D8\u03D9\x05v<\x02\u03D9\u03DA\x07!" +
		"\x02\x02\u03DA\u03DC\x03\x02\x02\x02\u03DB\u03CE\x03\x02\x02\x02\u03DB" +
		"\u03CF\x03\x02\x02\x02\u03DB\u03D0\x03\x02\x02\x02\u03DB\u03D1\x03\x02" +
		"\x02\x02\u03DB\u03D2\x03\x02\x02\x02\u03DB\u03D3\x03\x02\x02\x02\u03DB" +
		"\u03D4\x03\x02\x02\x02\u03DB\u03D5\x03\x02\x02\x02\u03DB\u03D6\x03\x02" +
		"\x02\x02\u03DB\u03D7\x03\x02\x02\x02\u03DC\x91\x03\x02\x02\x02\u03DD\u03E0" +
		"\x05\xBC_\x02\u03DE\u03E0\x05\x94K\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF" +
		"\u03DE\x03\x02\x02\x02\u03E0\x93\x03\x02\x02\x02\u03E1\u03E2\x05\xC0a" +
		"\x02\u03E2\u03E4\x07 \x02\x02\u03E3\u03E5\x05\xC6d\x02\u03E4\u03E3\x03" +
		"\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6" +
		"\u03E7\x07!\x02\x02\u03E7\x95\x03\x02\x02\x02\u03E8\u03EE\x05\xBC_\x02" +
		"\u03E9\u03EE\x05\x98M\x02\u03EA\u03EE\x07\x95\x02\x02\u03EB\u03EE\x07" +
		"\x96\x02\x02\u03EC\u03EE\x07\x97\x02\x02\u03ED\u03E8\x03\x02\x02\x02\u03ED" +
		"\u03E9\x03\x02\x02\x02\u03ED\u03EA\x03\x02\x02\x02\u03ED\u03EB\x03\x02" +
		"\x02\x02\u03ED\u03EC\x03\x02\x02\x02\u03EE\x97\x03\x02\x02\x02\u03EF\u03F0" +
		"\x05\xBC_\x02\u03F0\u03F2\x07 \x02\x02\u03F1\u03F3\x05\xC6d\x02\u03F2" +
		"\u03F1\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F4\x03\x02" +
		"\x02\x02\u03F4\u03F5\x07!\x02\x02\u03F5\x99\x03\x02\x02\x02\u03F6\u03F7" +
		"\x05\xC8e\x02\u03F7\u03F8\x07\r\x02\x02\u03F8\u03F9\x05\xC8e\x02\u03F9" +
		"\x9B\x03\x02\x02\x02\u03FA\u0403\t\x1C\x02\x02\u03FB\u0403\x078\x02\x02" +
		"\u03FC\u0403\x07\xA1\x02\x02\u03FD\u0403\x07\xA2\x02\x02\u03FE\u0403\x07" +
		"\x9D\x02\x02\u03FF\u0403\x07\x9E\x02\x02\u0400\u0403\x05\xC8e\x02\u0401" +
		"\u0403\x05\x9AN\x02\u0402\u03FA\x03\x02\x02\x02\u0402\u03FB\x03\x02\x02" +
		"\x02\u0402\u03FC\x03\x02\x02\x02\u0402\u03FD\x03\x02\x02\x02\u0402\u03FE" +
		"\x03\x02\x02\x02\u0402\u03FF\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02" +
		"\u0402\u0401\x03\x02\x02\x02\u0403\x9D\x03\x02\x02\x02\u0404\u0405\x07" +
		"\x1A\x02\x02\u0405\u0406\t\x1D\x02\x02\u0406\u0407\x05v<\x02\u0407\u0408" +
		"\x07\x11\x02\x02\u0408\u0409\x05v<\x02\u0409\u040A\t\x1E\x02\x02\u040A" +
		"\x9F\x03\x02\x02\x02\u040B\u040D\x07\x1B\x02\x02\u040C\u040B\x03\x02\x02" +
		"\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u0418" +
		"\x07\x10\x02\x02\u040F\u0419\x07\r\x02\x02\u0410\u0415\x05\xA2R\x02\u0411" +
		"\u0412\x07\x11\x02\x02\u0412\u0414\x05\xA2R\x02\u0413\u0411\x03\x02\x02" +
		"\x02\u0414\u0417\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0415\u0416" +
		"\x03\x02\x02\x02\u0416\u0419\x03\x02\x02\x02\u0417\u0415\x03\x02\x02\x02" +
		"\u0418\u040F\x03\x02\x02\x02\u0418\u0410\x03\x02\x02\x02\u0419\u041A\x03" +
		"\x02\x02\x02\u041A\u041B\x07\x12\x02\x02\u041B\xA1\x03\x02\x02\x02\u041C" +
		"\u041D\x05\xBC_\x02\u041D\u041E\x07\r\x02\x02\u041E\u041F\x05v<\x02\u041F" +
		"\xA3\x03\x02\x02\x02\u0420\u0421\x05*\x16\x02\u0421\u042B\x07\x10\x02" +
		"\x02\u0422\u042C\x07\r\x02\x02\u0423\u0428\x05\xA6T\x02\u0424\u0425\x07" +
		"\x11\x02\x02\u0425\u0427\x05\xA6T\x02\u0426\u0424\x03\x02\x02\x02\u0427" +
		"\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02\u0428\u0429\x03\x02" +
		"\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042B" +
		"\u0422\x03\x02\x02\x02\u042B\u0423\x03\x02\x02\x02\u042C\u042D\x03\x02" +
		"\x02\x02\u042D\u042E\x07\x12\x02\x02\u042E\xA5\x03\x02\x02\x02\u042F\u0430" +
		"\x05\xBC_\x02\u0430\u0431\x07\r\x02\x02\u0431\u0432\x05v<\x02\u0432\xA7" +
		"\x03\x02\x02\x02\u0433\u0438\x07\x17\x02\x02\u0434\u0435\x07\x18\x02\x02" +
		"\u0435\u0436\x05(\x15\x02\u0436\u0437\x07\x19\x02\x02\u0437\u0439\x03" +
		"\x02\x02\x02\u0438\u0434\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043B\x03\x02\x02\x02\u043A" +
		"\u0433\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043C\x03\x02" +
		"\x02\x02\u043C\u0445\x07\x10\x02\x02\u043D\u0442\x05v<\x02\u043E\u043F" +
		"\x07\x11\x02\x02\u043F\u0441\x05v<\x02\u0440\u043E\x03\x02\x02\x02\u0441" +
		"\u0444\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0442\u0443\x03\x02" +
		"\x02\x02\u0443\u0446\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0445" +
		"\u043D\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0447\x03\x02" +
		"\x02\x02\u0447\u0448\x07\x12\x02\x02\u0448\xA9\x03\x02\x02\x02\u0449\u044A" +
		"\x07\x98\x02\x02\u044A\u044B\x07\xA1\x02\x02\u044B\xAB\x03\x02\x02\x02" +
		"\u044C\u044D\x07\x99\x02\x02\u044D\u044E\x07\xA1\x02\x02\u044E\u044F\x07" +
		"\x15\x02\x02\u044F\u0451\x05\x16\f\x02\u0450\u0452\x05\xAAV\x02\u0451" +
		"\u0450\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\xAD\x03\x02\x02" +
		"\x02\u0453\u0454\x07\x9A\x02\x02\u0454\u0455\x07\x10\x02\x02\u0455\u045A" +
		"\x05\xACW\x02\u0456\u0457\x07\x11\x02\x02\u0457\u0459\x05\xACW\x02\u0458" +
		"\u0456\x03\x02\x02\x02\u0459\u045C\x03\x02\x02\x02\u045A\u0458\x03\x02" +
		"\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045D\x03\x02\x02\x02\u045C" +
		"\u045A\x03\x02\x02\x02\u045D\u045F\x07\x12\x02\x02\u045E\u0460\x05\xAA" +
		"V\x02\u045F\u045E\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\xAF" +
		"\x03\x02\x02\x02\u0461\u0462\t\x1F\x02\x02\u0462\xB1\x03\x02\x02\x02\u0463" +
		"\u0464\t \x02\x02\u0464\xB3\x03\x02\x02\x02\u0465\u0466\t!\x02\x02\u0466" +
		"\xB5\x03\x02\x02\x02\u0467\u0468\t\"\x02\x02\u0468\xB7\x03\x02\x02\x02" +
		"\u0469\u046A\t#\x02\x02\u046A\xB9\x03\x02\x02\x02\u046B\u046C\t$\x02\x02" +
		"\u046C\xBB\x03\x02\x02\x02\u046D\u0470\x05\xC2b\x02\u046E\u0470\x05\xB4" +
		"[\x02\u046F\u046D\x03\x02\x02\x02\u046F\u046E\x03\x02\x02\x02\u0470\xBD" +
		"\x03\x02\x02\x02\u0471\u0474\x05\xBC_\x02\u0472\u0474\x05\xBA^\x02\u0473" +
		"\u0471\x03\x02\x02\x02\u0473\u0472\x03\x02\x02\x02\u0474\xBF\x03\x02\x02" +
		"\x02\u0475\u0478\x05\xC2b\x02\u0476\u0478\x05\xB8]\x02\u0477\u0475\x03" +
		"\x02\x02\x02\u0477\u0476\x03\x02\x02\x02\u0478\xC1\x03\x02\x02\x02\u0479" +
		"\u047A\t%\x02\x02\u047A\xC3\x03\x02\x02\x02\u047B\u047E\x07\x9B\x02\x02" +
		"\u047C\u047F\x05\xC2b\x02\u047D\u047F\x07\xA1\x02\x02\u047E\u047C\x03" +
		"\x02\x02\x02\u047E\u047D\x03\x02\x02\x02\u047F\xC5\x03\x02\x02\x02\u0480" +
		"\u0485\x05v<\x02\u0481\u0482\x07\x11\x02\x02\u0482\u0484\x05v<\x02\u0483" +
		"\u0481\x03\x02\x02\x02\u0484\u0487\x03\x02\x02\x02\u0485\u0483\x03\x02" +
		"\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\xC7\x03\x02\x02\x02\u0487\u0485" +
		"\x03\x02\x02\x02\u0488\u048A\x07\xA2\x02\x02\u0489\u048B\x05\xCAf\x02" +
		"\u048A\u0489\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\xC9\x03" +
		"\x02\x02\x02\u048C\u0490\x05x=\x02\u048D\u0490\x05|?\x02\u048E\u0490\x07" +
		"\xA1\x02\x02\u048F\u048C\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02\u048F" +
		"\u048E\x03\x02\x02\x02\u0490\xCB\x03\x02\x02\x02\x87\xCD\xD2\xD8\xDE\xE4" +
		"\xEA\xF0\xF6\xFC\u0105\u010B\u0111\u0115\u011C\u0121\u0125\u0128\u0130" +
		"\u0133\u013B\u013E\u0147\u014F\u0156\u015F\u0162\u016D\u0172\u0177\u0188" +
		"\u018F\u01A7\u01B6\u01BE\u01C2\u01CC\u01D2\u01DC\u01DF\u01E4\u01E9\u01F6" +
		"\u01FF\u020F\u0216\u0219\u0223\u0229\u022E\u0232\u0235\u0238\u023B\u0242" +
		"\u024B\u0257\u0263\u0266\u026C\u0273\u027D\u028F\u0291\u02A5\u02B5\u02C4" +
		"\u02D6\u02DE\u02E5\u02E7\u02F0\u02FB\u032C\u0331\u033E\u0340\u0342\u0355" +
		"\u0357\u036A\u036F\u0372\u0377\u0379\u037C\u0380\u0384\u0387\u038A\u038E" +
		"\u0391\u0394\u0397\u039B\u039E\u03A1\u03A5\u03A8\u03AB\u03AE\u03B4\u03B8" +
		"\u03BB\u03BF\u03C2\u03C6\u03CA\u03CC\u03DB\u03DF\u03E4\u03ED\u03F2\u0402" +
		"\u040C\u0415\u0418\u0428\u042B\u0438\u043A\u0442\u0445\u0451\u045A\u045F" +
		"\u046F\u0473\u0477\u047E\u0485\u048A\u048F";
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

export class LibraryContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(cqlParser.EOF, 0); }
	public libraryDefinition(): LibraryDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LibraryDefinitionContext);
	}
	public usingDefinition(): UsingDefinitionContext[];
	public usingDefinition(i: number): UsingDefinitionContext;
	public usingDefinition(i?: number): UsingDefinitionContext | UsingDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsingDefinitionContext);
		} else {
			return this.getRuleContext(i, UsingDefinitionContext);
		}
	}
	public includeDefinition(): IncludeDefinitionContext[];
	public includeDefinition(i: number): IncludeDefinitionContext;
	public includeDefinition(i?: number): IncludeDefinitionContext | IncludeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IncludeDefinitionContext);
		} else {
			return this.getRuleContext(i, IncludeDefinitionContext);
		}
	}
	public codesystemDefinition(): CodesystemDefinitionContext[];
	public codesystemDefinition(i: number): CodesystemDefinitionContext;
	public codesystemDefinition(i?: number): CodesystemDefinitionContext | CodesystemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodesystemDefinitionContext);
		} else {
			return this.getRuleContext(i, CodesystemDefinitionContext);
		}
	}
	public valuesetDefinition(): ValuesetDefinitionContext[];
	public valuesetDefinition(i: number): ValuesetDefinitionContext;
	public valuesetDefinition(i?: number): ValuesetDefinitionContext | ValuesetDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValuesetDefinitionContext);
		} else {
			return this.getRuleContext(i, ValuesetDefinitionContext);
		}
	}
	public codeDefinition(): CodeDefinitionContext[];
	public codeDefinition(i: number): CodeDefinitionContext;
	public codeDefinition(i?: number): CodeDefinitionContext | CodeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeDefinitionContext);
		} else {
			return this.getRuleContext(i, CodeDefinitionContext);
		}
	}
	public conceptDefinition(): ConceptDefinitionContext[];
	public conceptDefinition(i: number): ConceptDefinitionContext;
	public conceptDefinition(i?: number): ConceptDefinitionContext | ConceptDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConceptDefinitionContext);
		} else {
			return this.getRuleContext(i, ConceptDefinitionContext);
		}
	}
	public parameterDefinition(): ParameterDefinitionContext[];
	public parameterDefinition(i: number): ParameterDefinitionContext;
	public parameterDefinition(i?: number): ParameterDefinitionContext | ParameterDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDefinitionContext);
		} else {
			return this.getRuleContext(i, ParameterDefinitionContext);
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
}


export class UsingDefinitionContext extends ParserRuleContext {
	public modelIdentifier(): ModelIdentifierContext {
		return this.getRuleContext(0, ModelIdentifierContext);
	}
	public versionSpecifier(): VersionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, VersionSpecifierContext);
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
}


export class SimpleLiteralContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(cqlParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(cqlParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return cqlParser.RULE_simpleLiteral; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterSimpleLiteral) {
			listener.enterSimpleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitSimpleLiteral) {
			listener.exitSimpleLiteral(this);
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
}
export class FunctionInvocationContext extends InvocationContext {
	public c_function(): C_functionContext {
		return this.getRuleContext(0, C_functionContext);
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
}


export class C_functionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return cqlParser.RULE_c_function; }
	// @Override
	public enterRule(listener: cqlListener): void {
		if (listener.enterC_function) {
			listener.enterC_function(this);
		}
	}
	// @Override
	public exitRule(listener: cqlListener): void {
		if (listener.exitC_function) {
			listener.exitC_function(this);
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
}


