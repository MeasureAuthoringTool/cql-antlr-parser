// Generated from cql.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MemberInvocationContext } from "./cqlParser";
import { FunctionInvocationContext } from "./cqlParser";
import { ThisInvocationContext } from "./cqlParser";
import { IndexInvocationContext } from "./cqlParser";
import { TotalInvocationContext } from "./cqlParser";
import { TermExpressionTermContext } from "./cqlParser";
import { InvocationExpressionTermContext } from "./cqlParser";
import { IndexedExpressionTermContext } from "./cqlParser";
import { ConversionExpressionTermContext } from "./cqlParser";
import { PolarityExpressionTermContext } from "./cqlParser";
import { TimeBoundaryExpressionTermContext } from "./cqlParser";
import { TimeUnitExpressionTermContext } from "./cqlParser";
import { DurationExpressionTermContext } from "./cqlParser";
import { DifferenceExpressionTermContext } from "./cqlParser";
import { WidthExpressionTermContext } from "./cqlParser";
import { SuccessorExpressionTermContext } from "./cqlParser";
import { PredecessorExpressionTermContext } from "./cqlParser";
import { ElementExtractorExpressionTermContext } from "./cqlParser";
import { PointExtractorExpressionTermContext } from "./cqlParser";
import { TypeExtentExpressionTermContext } from "./cqlParser";
import { PowerExpressionTermContext } from "./cqlParser";
import { MultiplicationExpressionTermContext } from "./cqlParser";
import { AdditionExpressionTermContext } from "./cqlParser";
import { IfThenElseExpressionTermContext } from "./cqlParser";
import { CaseExpressionTermContext } from "./cqlParser";
import { AggregateExpressionTermContext } from "./cqlParser";
import { SetAggregateExpressionTermContext } from "./cqlParser";
import { BooleanLiteralContext } from "./cqlParser";
import { NullLiteralContext } from "./cqlParser";
import { StringLiteralContext } from "./cqlParser";
import { NumberLiteralContext } from "./cqlParser";
import { DateTimeLiteralContext } from "./cqlParser";
import { TimeLiteralContext } from "./cqlParser";
import { QuantityLiteralContext } from "./cqlParser";
import { RatioLiteralContext } from "./cqlParser";
import { InvocationTermContext } from "./cqlParser";
import { LiteralTermContext } from "./cqlParser";
import { ExternalConstantTermContext } from "./cqlParser";
import { IntervalSelectorTermContext } from "./cqlParser";
import { TupleSelectorTermContext } from "./cqlParser";
import { InstanceSelectorTermContext } from "./cqlParser";
import { ListSelectorTermContext } from "./cqlParser";
import { CodeSelectorTermContext } from "./cqlParser";
import { ConceptSelectorTermContext } from "./cqlParser";
import { ParenthesizedTermContext } from "./cqlParser";
import { SimplePathReferentialIdentifierContext } from "./cqlParser";
import { SimplePathQualifiedIdentifierContext } from "./cqlParser";
import { SimplePathIndexerContext } from "./cqlParser";
import { TermExpressionContext } from "./cqlParser";
import { RetrieveExpressionContext } from "./cqlParser";
import { QueryExpressionContext } from "./cqlParser";
import { BooleanExpressionContext } from "./cqlParser";
import { TypeExpressionContext } from "./cqlParser";
import { CastExpressionContext } from "./cqlParser";
import { NotExpressionContext } from "./cqlParser";
import { ExistenceExpressionContext } from "./cqlParser";
import { BetweenExpressionContext } from "./cqlParser";
import { DurationBetweenExpressionContext } from "./cqlParser";
import { DifferenceBetweenExpressionContext } from "./cqlParser";
import { InequalityExpressionContext } from "./cqlParser";
import { TimingExpressionContext } from "./cqlParser";
import { EqualityExpressionContext } from "./cqlParser";
import { MembershipExpressionContext } from "./cqlParser";
import { AndExpressionContext } from "./cqlParser";
import { OrExpressionContext } from "./cqlParser";
import { ImpliesExpressionContext } from "./cqlParser";
import { InFixSetExpressionContext } from "./cqlParser";
import { QualifiedMemberInvocationContext } from "./cqlParser";
import { QualifiedFunctionInvocationContext } from "./cqlParser";
import { ConcurrentWithIntervalOperatorPhraseContext } from "./cqlParser";
import { IncludesIntervalOperatorPhraseContext } from "./cqlParser";
import { IncludedInIntervalOperatorPhraseContext } from "./cqlParser";
import { BeforeOrAfterIntervalOperatorPhraseContext } from "./cqlParser";
import { WithinIntervalOperatorPhraseContext } from "./cqlParser";
import { MeetsIntervalOperatorPhraseContext } from "./cqlParser";
import { OverlapsIntervalOperatorPhraseContext } from "./cqlParser";
import { StartsIntervalOperatorPhraseContext } from "./cqlParser";
import { EndsIntervalOperatorPhraseContext } from "./cqlParser";
import { LibraryContext } from "./cqlParser";
import { LibraryDefinitionContext } from "./cqlParser";
import { UsingDefinitionContext } from "./cqlParser";
import { IncludeDefinitionContext } from "./cqlParser";
import { LocalIdentifierContext } from "./cqlParser";
import { AccessModifierContext } from "./cqlParser";
import { ParameterDefinitionContext } from "./cqlParser";
import { CodesystemDefinitionContext } from "./cqlParser";
import { ValuesetDefinitionContext } from "./cqlParser";
import { CodesystemsContext } from "./cqlParser";
import { CodesystemIdentifierContext } from "./cqlParser";
import { LibraryIdentifierContext } from "./cqlParser";
import { CodeDefinitionContext } from "./cqlParser";
import { ConceptDefinitionContext } from "./cqlParser";
import { CodeIdentifierContext } from "./cqlParser";
import { CodesystemIdContext } from "./cqlParser";
import { ValuesetIdContext } from "./cqlParser";
import { VersionSpecifierContext } from "./cqlParser";
import { CodeIdContext } from "./cqlParser";
import { TypeSpecifierContext } from "./cqlParser";
import { NamedTypeSpecifierContext } from "./cqlParser";
import { ModelIdentifierContext } from "./cqlParser";
import { ListTypeSpecifierContext } from "./cqlParser";
import { IntervalTypeSpecifierContext } from "./cqlParser";
import { TupleTypeSpecifierContext } from "./cqlParser";
import { TupleElementDefinitionContext } from "./cqlParser";
import { ChoiceTypeSpecifierContext } from "./cqlParser";
import { StatementContext } from "./cqlParser";
import { ExpressionDefinitionContext } from "./cqlParser";
import { ContextDefinitionContext } from "./cqlParser";
import { FunctionDefinitionContext } from "./cqlParser";
import { OperandDefinitionContext } from "./cqlParser";
import { FunctionBodyContext } from "./cqlParser";
import { QuerySourceContext } from "./cqlParser";
import { AliasedQuerySourceContext } from "./cqlParser";
import { AliasContext } from "./cqlParser";
import { QueryInclusionClauseContext } from "./cqlParser";
import { WithClauseContext } from "./cqlParser";
import { WithoutClauseContext } from "./cqlParser";
import { RetrieveContext } from "./cqlParser";
import { ContextIdentifierContext } from "./cqlParser";
import { CodePathContext } from "./cqlParser";
import { TerminologyContext } from "./cqlParser";
import { QualifierContext } from "./cqlParser";
import { QueryContext } from "./cqlParser";
import { SourceClauseContext } from "./cqlParser";
import { LetClauseContext } from "./cqlParser";
import { LetClauseItemContext } from "./cqlParser";
import { WhereClauseContext } from "./cqlParser";
import { ReturnClauseContext } from "./cqlParser";
import { SortClauseContext } from "./cqlParser";
import { SortDirectionContext } from "./cqlParser";
import { SortByItemContext } from "./cqlParser";
import { QualifiedIdentifierContext } from "./cqlParser";
import { QualifiedIdentifierExpressionContext } from "./cqlParser";
import { QualifierExpressionContext } from "./cqlParser";
import { SimplePathContext } from "./cqlParser";
import { SimpleLiteralContext } from "./cqlParser";
import { ExpressionContext } from "./cqlParser";
import { DateTimePrecisionContext } from "./cqlParser";
import { DateTimeComponentContext } from "./cqlParser";
import { PluralDateTimePrecisionContext } from "./cqlParser";
import { ExpressionTermContext } from "./cqlParser";
import { CaseExpressionItemContext } from "./cqlParser";
import { DateTimePrecisionSpecifierContext } from "./cqlParser";
import { RelativeQualifierContext } from "./cqlParser";
import { OffsetRelativeQualifierContext } from "./cqlParser";
import { ExclusiveRelativeQualifierContext } from "./cqlParser";
import { QuantityOffsetContext } from "./cqlParser";
import { TemporalRelationshipContext } from "./cqlParser";
import { IntervalOperatorPhraseContext } from "./cqlParser";
import { TermContext } from "./cqlParser";
import { QualifiedInvocationContext } from "./cqlParser";
import { QualifiedFunctionContext } from "./cqlParser";
import { InvocationContext } from "./cqlParser";
import { C_functionContext } from "./cqlParser";
import { RatioContext } from "./cqlParser";
import { LiteralContext } from "./cqlParser";
import { IntervalSelectorContext } from "./cqlParser";
import { TupleSelectorContext } from "./cqlParser";
import { TupleElementSelectorContext } from "./cqlParser";
import { InstanceSelectorContext } from "./cqlParser";
import { InstanceElementSelectorContext } from "./cqlParser";
import { ListSelectorContext } from "./cqlParser";
import { DisplayClauseContext } from "./cqlParser";
import { CodeSelectorContext } from "./cqlParser";
import { ConceptSelectorContext } from "./cqlParser";
import { KeywordContext } from "./cqlParser";
import { ReservedWordContext } from "./cqlParser";
import { KeywordIdentifierContext } from "./cqlParser";
import { ObsoleteIdentifierContext } from "./cqlParser";
import { FunctionIdentifierContext } from "./cqlParser";
import { TypeNameIdentifierContext } from "./cqlParser";
import { ReferentialIdentifierContext } from "./cqlParser";
import { ReferentialOrTypeNameIdentifierContext } from "./cqlParser";
import { IdentifierOrFunctionIdentifierContext } from "./cqlParser";
import { IdentifierContext } from "./cqlParser";
import { ExternalConstantContext } from "./cqlParser";
import { ParamListContext } from "./cqlParser";
import { QuantityContext } from "./cqlParser";
import { UnitContext } from "./cqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `cqlParser`.
 */
export interface cqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `memberInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterMemberInvocation?: (ctx: MemberInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `memberInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitMemberInvocation?: (ctx: MemberInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `functionInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterFunctionInvocation?: (ctx: FunctionInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `functionInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitFunctionInvocation?: (ctx: FunctionInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `thisInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterThisInvocation?: (ctx: ThisInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `thisInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitThisInvocation?: (ctx: ThisInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `indexInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterIndexInvocation?: (ctx: IndexInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `indexInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitIndexInvocation?: (ctx: IndexInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `totalInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterTotalInvocation?: (ctx: TotalInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `totalInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitTotalInvocation?: (ctx: TotalInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `termExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterTermExpressionTerm?: (ctx: TermExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `termExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitTermExpressionTerm?: (ctx: TermExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `invocationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterInvocationExpressionTerm?: (ctx: InvocationExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `invocationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitInvocationExpressionTerm?: (ctx: InvocationExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `indexedExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterIndexedExpressionTerm?: (ctx: IndexedExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `indexedExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitIndexedExpressionTerm?: (ctx: IndexedExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `conversionExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterConversionExpressionTerm?: (ctx: ConversionExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `conversionExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitConversionExpressionTerm?: (ctx: ConversionExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `polarityExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterPolarityExpressionTerm?: (ctx: PolarityExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `polarityExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitPolarityExpressionTerm?: (ctx: PolarityExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `timeBoundaryExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterTimeBoundaryExpressionTerm?: (ctx: TimeBoundaryExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `timeBoundaryExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitTimeBoundaryExpressionTerm?: (ctx: TimeBoundaryExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `timeUnitExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterTimeUnitExpressionTerm?: (ctx: TimeUnitExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `timeUnitExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitTimeUnitExpressionTerm?: (ctx: TimeUnitExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `durationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterDurationExpressionTerm?: (ctx: DurationExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `durationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitDurationExpressionTerm?: (ctx: DurationExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `differenceExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterDifferenceExpressionTerm?: (ctx: DifferenceExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `differenceExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitDifferenceExpressionTerm?: (ctx: DifferenceExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `widthExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterWidthExpressionTerm?: (ctx: WidthExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `widthExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitWidthExpressionTerm?: (ctx: WidthExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `successorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterSuccessorExpressionTerm?: (ctx: SuccessorExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `successorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitSuccessorExpressionTerm?: (ctx: SuccessorExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `predecessorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterPredecessorExpressionTerm?: (ctx: PredecessorExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `predecessorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitPredecessorExpressionTerm?: (ctx: PredecessorExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `elementExtractorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterElementExtractorExpressionTerm?: (ctx: ElementExtractorExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `elementExtractorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitElementExtractorExpressionTerm?: (ctx: ElementExtractorExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `pointExtractorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterPointExtractorExpressionTerm?: (ctx: PointExtractorExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `pointExtractorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitPointExtractorExpressionTerm?: (ctx: PointExtractorExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `typeExtentExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterTypeExtentExpressionTerm?: (ctx: TypeExtentExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `typeExtentExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitTypeExtentExpressionTerm?: (ctx: TypeExtentExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `powerExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterPowerExpressionTerm?: (ctx: PowerExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitPowerExpressionTerm?: (ctx: PowerExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `multiplicationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterMultiplicationExpressionTerm?: (ctx: MultiplicationExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitMultiplicationExpressionTerm?: (ctx: MultiplicationExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `additionExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterAdditionExpressionTerm?: (ctx: AdditionExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `additionExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitAdditionExpressionTerm?: (ctx: AdditionExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `ifThenElseExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterIfThenElseExpressionTerm?: (ctx: IfThenElseExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `ifThenElseExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitIfThenElseExpressionTerm?: (ctx: IfThenElseExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `caseExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterCaseExpressionTerm?: (ctx: CaseExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `caseExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitCaseExpressionTerm?: (ctx: CaseExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `aggregateExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterAggregateExpressionTerm?: (ctx: AggregateExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `aggregateExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitAggregateExpressionTerm?: (ctx: AggregateExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `setAggregateExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterSetAggregateExpressionTerm?: (ctx: SetAggregateExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by the `setAggregateExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitSetAggregateExpressionTerm?: (ctx: SetAggregateExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `numberLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numberLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNumberLiteral?: (ctx: NumberLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `dateTimeLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterDateTimeLiteral?: (ctx: DateTimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `dateTimeLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitDateTimeLiteral?: (ctx: DateTimeLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `timeLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterTimeLiteral?: (ctx: TimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `timeLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitTimeLiteral?: (ctx: TimeLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `quantityLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterQuantityLiteral?: (ctx: QuantityLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `quantityLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitQuantityLiteral?: (ctx: QuantityLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `ratioLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterRatioLiteral?: (ctx: RatioLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `ratioLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitRatioLiteral?: (ctx: RatioLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `invocationTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterInvocationTerm?: (ctx: InvocationTermContext) => void;
	/**
	 * Exit a parse tree produced by the `invocationTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitInvocationTerm?: (ctx: InvocationTermContext) => void;

	/**
	 * Enter a parse tree produced by the `literalTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterLiteralTerm?: (ctx: LiteralTermContext) => void;
	/**
	 * Exit a parse tree produced by the `literalTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitLiteralTerm?: (ctx: LiteralTermContext) => void;

	/**
	 * Enter a parse tree produced by the `externalConstantTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterExternalConstantTerm?: (ctx: ExternalConstantTermContext) => void;
	/**
	 * Exit a parse tree produced by the `externalConstantTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitExternalConstantTerm?: (ctx: ExternalConstantTermContext) => void;

	/**
	 * Enter a parse tree produced by the `intervalSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterIntervalSelectorTerm?: (ctx: IntervalSelectorTermContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitIntervalSelectorTerm?: (ctx: IntervalSelectorTermContext) => void;

	/**
	 * Enter a parse tree produced by the `tupleSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterTupleSelectorTerm?: (ctx: TupleSelectorTermContext) => void;
	/**
	 * Exit a parse tree produced by the `tupleSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitTupleSelectorTerm?: (ctx: TupleSelectorTermContext) => void;

	/**
	 * Enter a parse tree produced by the `instanceSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterInstanceSelectorTerm?: (ctx: InstanceSelectorTermContext) => void;
	/**
	 * Exit a parse tree produced by the `instanceSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitInstanceSelectorTerm?: (ctx: InstanceSelectorTermContext) => void;

	/**
	 * Enter a parse tree produced by the `listSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterListSelectorTerm?: (ctx: ListSelectorTermContext) => void;
	/**
	 * Exit a parse tree produced by the `listSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitListSelectorTerm?: (ctx: ListSelectorTermContext) => void;

	/**
	 * Enter a parse tree produced by the `codeSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterCodeSelectorTerm?: (ctx: CodeSelectorTermContext) => void;
	/**
	 * Exit a parse tree produced by the `codeSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitCodeSelectorTerm?: (ctx: CodeSelectorTermContext) => void;

	/**
	 * Enter a parse tree produced by the `conceptSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterConceptSelectorTerm?: (ctx: ConceptSelectorTermContext) => void;
	/**
	 * Exit a parse tree produced by the `conceptSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitConceptSelectorTerm?: (ctx: ConceptSelectorTermContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedTerm?: (ctx: ParenthesizedTermContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedTerm?: (ctx: ParenthesizedTermContext) => void;

	/**
	 * Enter a parse tree produced by the `simplePathReferentialIdentifier`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 */
	enterSimplePathReferentialIdentifier?: (ctx: SimplePathReferentialIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `simplePathReferentialIdentifier`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 */
	exitSimplePathReferentialIdentifier?: (ctx: SimplePathReferentialIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `simplePathQualifiedIdentifier`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 */
	enterSimplePathQualifiedIdentifier?: (ctx: SimplePathQualifiedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `simplePathQualifiedIdentifier`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 */
	exitSimplePathQualifiedIdentifier?: (ctx: SimplePathQualifiedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `simplePathIndexer`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 */
	enterSimplePathIndexer?: (ctx: SimplePathIndexerContext) => void;
	/**
	 * Exit a parse tree produced by the `simplePathIndexer`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 */
	exitSimplePathIndexer?: (ctx: SimplePathIndexerContext) => void;

	/**
	 * Enter a parse tree produced by the `termExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTermExpression?: (ctx: TermExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `termExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTermExpression?: (ctx: TermExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `retrieveExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRetrieveExpression?: (ctx: RetrieveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `retrieveExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRetrieveExpression?: (ctx: RetrieveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `queryExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterQueryExpression?: (ctx: QueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `queryExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitQueryExpression?: (ctx: QueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `typeExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTypeExpression?: (ctx: TypeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `typeExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTypeExpression?: (ctx: TypeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `castExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `castExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `notExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `notExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `existenceExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExistenceExpression?: (ctx: ExistenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `existenceExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExistenceExpression?: (ctx: ExistenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `betweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBetweenExpression?: (ctx: BetweenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `betweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBetweenExpression?: (ctx: BetweenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `durationBetweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDurationBetweenExpression?: (ctx: DurationBetweenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `durationBetweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDurationBetweenExpression?: (ctx: DurationBetweenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `differenceBetweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDifferenceBetweenExpression?: (ctx: DifferenceBetweenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `differenceBetweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDifferenceBetweenExpression?: (ctx: DifferenceBetweenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inequalityExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInequalityExpression?: (ctx: InequalityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inequalityExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInequalityExpression?: (ctx: InequalityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `timingExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTimingExpression?: (ctx: TimingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `timingExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTimingExpression?: (ctx: TimingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `membershipExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMembershipExpression?: (ctx: MembershipExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `membershipExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMembershipExpression?: (ctx: MembershipExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `andExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `andExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `orExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `orExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `impliesExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterImpliesExpression?: (ctx: ImpliesExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `impliesExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitImpliesExpression?: (ctx: ImpliesExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inFixSetExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInFixSetExpression?: (ctx: InFixSetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inFixSetExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInFixSetExpression?: (ctx: InFixSetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `qualifiedMemberInvocation`
	 * labeled alternative in `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 */
	enterQualifiedMemberInvocation?: (ctx: QualifiedMemberInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `qualifiedMemberInvocation`
	 * labeled alternative in `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 */
	exitQualifiedMemberInvocation?: (ctx: QualifiedMemberInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `qualifiedFunctionInvocation`
	 * labeled alternative in `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 */
	enterQualifiedFunctionInvocation?: (ctx: QualifiedFunctionInvocationContext) => void;
	/**
	 * Exit a parse tree produced by the `qualifiedFunctionInvocation`
	 * labeled alternative in `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 */
	exitQualifiedFunctionInvocation?: (ctx: QualifiedFunctionInvocationContext) => void;

	/**
	 * Enter a parse tree produced by the `concurrentWithIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterConcurrentWithIntervalOperatorPhrase?: (ctx: ConcurrentWithIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `concurrentWithIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitConcurrentWithIntervalOperatorPhrase?: (ctx: ConcurrentWithIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by the `includesIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterIncludesIntervalOperatorPhrase?: (ctx: IncludesIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `includesIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitIncludesIntervalOperatorPhrase?: (ctx: IncludesIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by the `includedInIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterIncludedInIntervalOperatorPhrase?: (ctx: IncludedInIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `includedInIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitIncludedInIntervalOperatorPhrase?: (ctx: IncludedInIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by the `beforeOrAfterIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterBeforeOrAfterIntervalOperatorPhrase?: (ctx: BeforeOrAfterIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `beforeOrAfterIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitBeforeOrAfterIntervalOperatorPhrase?: (ctx: BeforeOrAfterIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by the `withinIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterWithinIntervalOperatorPhrase?: (ctx: WithinIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `withinIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitWithinIntervalOperatorPhrase?: (ctx: WithinIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by the `meetsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterMeetsIntervalOperatorPhrase?: (ctx: MeetsIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `meetsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitMeetsIntervalOperatorPhrase?: (ctx: MeetsIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by the `overlapsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterOverlapsIntervalOperatorPhrase?: (ctx: OverlapsIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `overlapsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitOverlapsIntervalOperatorPhrase?: (ctx: OverlapsIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by the `startsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterStartsIntervalOperatorPhrase?: (ctx: StartsIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `startsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitStartsIntervalOperatorPhrase?: (ctx: StartsIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by the `endsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterEndsIntervalOperatorPhrase?: (ctx: EndsIntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by the `endsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitEndsIntervalOperatorPhrase?: (ctx: EndsIntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.library`.
	 * @param ctx the parse tree
	 */
	enterLibrary?: (ctx: LibraryContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.library`.
	 * @param ctx the parse tree
	 */
	exitLibrary?: (ctx: LibraryContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.libraryDefinition`.
	 * @param ctx the parse tree
	 */
	enterLibraryDefinition?: (ctx: LibraryDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.libraryDefinition`.
	 * @param ctx the parse tree
	 */
	exitLibraryDefinition?: (ctx: LibraryDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.usingDefinition`.
	 * @param ctx the parse tree
	 */
	enterUsingDefinition?: (ctx: UsingDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.usingDefinition`.
	 * @param ctx the parse tree
	 */
	exitUsingDefinition?: (ctx: UsingDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.includeDefinition`.
	 * @param ctx the parse tree
	 */
	enterIncludeDefinition?: (ctx: IncludeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.includeDefinition`.
	 * @param ctx the parse tree
	 */
	exitIncludeDefinition?: (ctx: IncludeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.localIdentifier`.
	 * @param ctx the parse tree
	 */
	enterLocalIdentifier?: (ctx: LocalIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.localIdentifier`.
	 * @param ctx the parse tree
	 */
	exitLocalIdentifier?: (ctx: LocalIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.accessModifier`.
	 * @param ctx the parse tree
	 */
	enterAccessModifier?: (ctx: AccessModifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.accessModifier`.
	 * @param ctx the parse tree
	 */
	exitAccessModifier?: (ctx: AccessModifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.parameterDefinition`.
	 * @param ctx the parse tree
	 */
	enterParameterDefinition?: (ctx: ParameterDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.parameterDefinition`.
	 * @param ctx the parse tree
	 */
	exitParameterDefinition?: (ctx: ParameterDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codesystemDefinition`.
	 * @param ctx the parse tree
	 */
	enterCodesystemDefinition?: (ctx: CodesystemDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codesystemDefinition`.
	 * @param ctx the parse tree
	 */
	exitCodesystemDefinition?: (ctx: CodesystemDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.valuesetDefinition`.
	 * @param ctx the parse tree
	 */
	enterValuesetDefinition?: (ctx: ValuesetDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.valuesetDefinition`.
	 * @param ctx the parse tree
	 */
	exitValuesetDefinition?: (ctx: ValuesetDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codesystems`.
	 * @param ctx the parse tree
	 */
	enterCodesystems?: (ctx: CodesystemsContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codesystems`.
	 * @param ctx the parse tree
	 */
	exitCodesystems?: (ctx: CodesystemsContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codesystemIdentifier`.
	 * @param ctx the parse tree
	 */
	enterCodesystemIdentifier?: (ctx: CodesystemIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codesystemIdentifier`.
	 * @param ctx the parse tree
	 */
	exitCodesystemIdentifier?: (ctx: CodesystemIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.libraryIdentifier`.
	 * @param ctx the parse tree
	 */
	enterLibraryIdentifier?: (ctx: LibraryIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.libraryIdentifier`.
	 * @param ctx the parse tree
	 */
	exitLibraryIdentifier?: (ctx: LibraryIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codeDefinition`.
	 * @param ctx the parse tree
	 */
	enterCodeDefinition?: (ctx: CodeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codeDefinition`.
	 * @param ctx the parse tree
	 */
	exitCodeDefinition?: (ctx: CodeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.conceptDefinition`.
	 * @param ctx the parse tree
	 */
	enterConceptDefinition?: (ctx: ConceptDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.conceptDefinition`.
	 * @param ctx the parse tree
	 */
	exitConceptDefinition?: (ctx: ConceptDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codeIdentifier`.
	 * @param ctx the parse tree
	 */
	enterCodeIdentifier?: (ctx: CodeIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codeIdentifier`.
	 * @param ctx the parse tree
	 */
	exitCodeIdentifier?: (ctx: CodeIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codesystemId`.
	 * @param ctx the parse tree
	 */
	enterCodesystemId?: (ctx: CodesystemIdContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codesystemId`.
	 * @param ctx the parse tree
	 */
	exitCodesystemId?: (ctx: CodesystemIdContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.valuesetId`.
	 * @param ctx the parse tree
	 */
	enterValuesetId?: (ctx: ValuesetIdContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.valuesetId`.
	 * @param ctx the parse tree
	 */
	exitValuesetId?: (ctx: ValuesetIdContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.versionSpecifier`.
	 * @param ctx the parse tree
	 */
	enterVersionSpecifier?: (ctx: VersionSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.versionSpecifier`.
	 * @param ctx the parse tree
	 */
	exitVersionSpecifier?: (ctx: VersionSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codeId`.
	 * @param ctx the parse tree
	 */
	enterCodeId?: (ctx: CodeIdContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codeId`.
	 * @param ctx the parse tree
	 */
	exitCodeId?: (ctx: CodeIdContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.namedTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterNamedTypeSpecifier?: (ctx: NamedTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.namedTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitNamedTypeSpecifier?: (ctx: NamedTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.modelIdentifier`.
	 * @param ctx the parse tree
	 */
	enterModelIdentifier?: (ctx: ModelIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.modelIdentifier`.
	 * @param ctx the parse tree
	 */
	exitModelIdentifier?: (ctx: ModelIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.listTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterListTypeSpecifier?: (ctx: ListTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.listTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitListTypeSpecifier?: (ctx: ListTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.intervalTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterIntervalTypeSpecifier?: (ctx: IntervalTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.intervalTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitIntervalTypeSpecifier?: (ctx: IntervalTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.tupleTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTupleTypeSpecifier?: (ctx: TupleTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.tupleTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTupleTypeSpecifier?: (ctx: TupleTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.tupleElementDefinition`.
	 * @param ctx the parse tree
	 */
	enterTupleElementDefinition?: (ctx: TupleElementDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.tupleElementDefinition`.
	 * @param ctx the parse tree
	 */
	exitTupleElementDefinition?: (ctx: TupleElementDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.choiceTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterChoiceTypeSpecifier?: (ctx: ChoiceTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.choiceTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitChoiceTypeSpecifier?: (ctx: ChoiceTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.expressionDefinition`.
	 * @param ctx the parse tree
	 */
	enterExpressionDefinition?: (ctx: ExpressionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.expressionDefinition`.
	 * @param ctx the parse tree
	 */
	exitExpressionDefinition?: (ctx: ExpressionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.contextDefinition`.
	 * @param ctx the parse tree
	 */
	enterContextDefinition?: (ctx: ContextDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.contextDefinition`.
	 * @param ctx the parse tree
	 */
	exitContextDefinition?: (ctx: ContextDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.operandDefinition`.
	 * @param ctx the parse tree
	 */
	enterOperandDefinition?: (ctx: OperandDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.operandDefinition`.
	 * @param ctx the parse tree
	 */
	exitOperandDefinition?: (ctx: OperandDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.querySource`.
	 * @param ctx the parse tree
	 */
	enterQuerySource?: (ctx: QuerySourceContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.querySource`.
	 * @param ctx the parse tree
	 */
	exitQuerySource?: (ctx: QuerySourceContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.aliasedQuerySource`.
	 * @param ctx the parse tree
	 */
	enterAliasedQuerySource?: (ctx: AliasedQuerySourceContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.aliasedQuerySource`.
	 * @param ctx the parse tree
	 */
	exitAliasedQuerySource?: (ctx: AliasedQuerySourceContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.queryInclusionClause`.
	 * @param ctx the parse tree
	 */
	enterQueryInclusionClause?: (ctx: QueryInclusionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.queryInclusionClause`.
	 * @param ctx the parse tree
	 */
	exitQueryInclusionClause?: (ctx: QueryInclusionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.withClause`.
	 * @param ctx the parse tree
	 */
	enterWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.withClause`.
	 * @param ctx the parse tree
	 */
	exitWithClause?: (ctx: WithClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.withoutClause`.
	 * @param ctx the parse tree
	 */
	enterWithoutClause?: (ctx: WithoutClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.withoutClause`.
	 * @param ctx the parse tree
	 */
	exitWithoutClause?: (ctx: WithoutClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.retrieve`.
	 * @param ctx the parse tree
	 */
	enterRetrieve?: (ctx: RetrieveContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.retrieve`.
	 * @param ctx the parse tree
	 */
	exitRetrieve?: (ctx: RetrieveContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.contextIdentifier`.
	 * @param ctx the parse tree
	 */
	enterContextIdentifier?: (ctx: ContextIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.contextIdentifier`.
	 * @param ctx the parse tree
	 */
	exitContextIdentifier?: (ctx: ContextIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codePath`.
	 * @param ctx the parse tree
	 */
	enterCodePath?: (ctx: CodePathContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codePath`.
	 * @param ctx the parse tree
	 */
	exitCodePath?: (ctx: CodePathContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.terminology`.
	 * @param ctx the parse tree
	 */
	enterTerminology?: (ctx: TerminologyContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.terminology`.
	 * @param ctx the parse tree
	 */
	exitTerminology?: (ctx: TerminologyContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.qualifier`.
	 * @param ctx the parse tree
	 */
	enterQualifier?: (ctx: QualifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.qualifier`.
	 * @param ctx the parse tree
	 */
	exitQualifier?: (ctx: QualifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.sourceClause`.
	 * @param ctx the parse tree
	 */
	enterSourceClause?: (ctx: SourceClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.sourceClause`.
	 * @param ctx the parse tree
	 */
	exitSourceClause?: (ctx: SourceClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.letClause`.
	 * @param ctx the parse tree
	 */
	enterLetClause?: (ctx: LetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.letClause`.
	 * @param ctx the parse tree
	 */
	exitLetClause?: (ctx: LetClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.letClauseItem`.
	 * @param ctx the parse tree
	 */
	enterLetClauseItem?: (ctx: LetClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.letClauseItem`.
	 * @param ctx the parse tree
	 */
	exitLetClauseItem?: (ctx: LetClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.returnClause`.
	 * @param ctx the parse tree
	 */
	enterReturnClause?: (ctx: ReturnClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.returnClause`.
	 * @param ctx the parse tree
	 */
	exitReturnClause?: (ctx: ReturnClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.sortClause`.
	 * @param ctx the parse tree
	 */
	enterSortClause?: (ctx: SortClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.sortClause`.
	 * @param ctx the parse tree
	 */
	exitSortClause?: (ctx: SortClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.sortDirection`.
	 * @param ctx the parse tree
	 */
	enterSortDirection?: (ctx: SortDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.sortDirection`.
	 * @param ctx the parse tree
	 */
	exitSortDirection?: (ctx: SortDirectionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.sortByItem`.
	 * @param ctx the parse tree
	 */
	enterSortByItem?: (ctx: SortByItemContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.sortByItem`.
	 * @param ctx the parse tree
	 */
	exitSortByItem?: (ctx: SortByItemContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.qualifiedIdentifierExpression`.
	 * @param ctx the parse tree
	 */
	enterQualifiedIdentifierExpression?: (ctx: QualifiedIdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.qualifiedIdentifierExpression`.
	 * @param ctx the parse tree
	 */
	exitQualifiedIdentifierExpression?: (ctx: QualifiedIdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.qualifierExpression`.
	 * @param ctx the parse tree
	 */
	enterQualifierExpression?: (ctx: QualifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.qualifierExpression`.
	 * @param ctx the parse tree
	 */
	exitQualifierExpression?: (ctx: QualifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 */
	enterSimplePath?: (ctx: SimplePathContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 */
	exitSimplePath?: (ctx: SimplePathContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.simpleLiteral`.
	 * @param ctx the parse tree
	 */
	enterSimpleLiteral?: (ctx: SimpleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.simpleLiteral`.
	 * @param ctx the parse tree
	 */
	exitSimpleLiteral?: (ctx: SimpleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.dateTimePrecision`.
	 * @param ctx the parse tree
	 */
	enterDateTimePrecision?: (ctx: DateTimePrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.dateTimePrecision`.
	 * @param ctx the parse tree
	 */
	exitDateTimePrecision?: (ctx: DateTimePrecisionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.dateTimeComponent`.
	 * @param ctx the parse tree
	 */
	enterDateTimeComponent?: (ctx: DateTimeComponentContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.dateTimeComponent`.
	 * @param ctx the parse tree
	 */
	exitDateTimeComponent?: (ctx: DateTimeComponentContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.pluralDateTimePrecision`.
	 * @param ctx the parse tree
	 */
	enterPluralDateTimePrecision?: (ctx: PluralDateTimePrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.pluralDateTimePrecision`.
	 * @param ctx the parse tree
	 */
	exitPluralDateTimePrecision?: (ctx: PluralDateTimePrecisionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	enterExpressionTerm?: (ctx: ExpressionTermContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 */
	exitExpressionTerm?: (ctx: ExpressionTermContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.caseExpressionItem`.
	 * @param ctx the parse tree
	 */
	enterCaseExpressionItem?: (ctx: CaseExpressionItemContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.caseExpressionItem`.
	 * @param ctx the parse tree
	 */
	exitCaseExpressionItem?: (ctx: CaseExpressionItemContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.dateTimePrecisionSpecifier`.
	 * @param ctx the parse tree
	 */
	enterDateTimePrecisionSpecifier?: (ctx: DateTimePrecisionSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.dateTimePrecisionSpecifier`.
	 * @param ctx the parse tree
	 */
	exitDateTimePrecisionSpecifier?: (ctx: DateTimePrecisionSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.relativeQualifier`.
	 * @param ctx the parse tree
	 */
	enterRelativeQualifier?: (ctx: RelativeQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.relativeQualifier`.
	 * @param ctx the parse tree
	 */
	exitRelativeQualifier?: (ctx: RelativeQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.offsetRelativeQualifier`.
	 * @param ctx the parse tree
	 */
	enterOffsetRelativeQualifier?: (ctx: OffsetRelativeQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.offsetRelativeQualifier`.
	 * @param ctx the parse tree
	 */
	exitOffsetRelativeQualifier?: (ctx: OffsetRelativeQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.exclusiveRelativeQualifier`.
	 * @param ctx the parse tree
	 */
	enterExclusiveRelativeQualifier?: (ctx: ExclusiveRelativeQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.exclusiveRelativeQualifier`.
	 * @param ctx the parse tree
	 */
	exitExclusiveRelativeQualifier?: (ctx: ExclusiveRelativeQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.quantityOffset`.
	 * @param ctx the parse tree
	 */
	enterQuantityOffset?: (ctx: QuantityOffsetContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.quantityOffset`.
	 * @param ctx the parse tree
	 */
	exitQuantityOffset?: (ctx: QuantityOffsetContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.temporalRelationship`.
	 * @param ctx the parse tree
	 */
	enterTemporalRelationship?: (ctx: TemporalRelationshipContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.temporalRelationship`.
	 * @param ctx the parse tree
	 */
	exitTemporalRelationship?: (ctx: TemporalRelationshipContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	enterIntervalOperatorPhrase?: (ctx: IntervalOperatorPhraseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 */
	exitIntervalOperatorPhrase?: (ctx: IntervalOperatorPhraseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 */
	enterQualifiedInvocation?: (ctx: QualifiedInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 */
	exitQualifiedInvocation?: (ctx: QualifiedInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.qualifiedFunction`.
	 * @param ctx the parse tree
	 */
	enterQualifiedFunction?: (ctx: QualifiedFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.qualifiedFunction`.
	 * @param ctx the parse tree
	 */
	exitQualifiedFunction?: (ctx: QualifiedFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterInvocation?: (ctx: InvocationContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitInvocation?: (ctx: InvocationContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.c_function`.
	 * @param ctx the parse tree
	 */
	enterC_function?: (ctx: C_functionContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.c_function`.
	 * @param ctx the parse tree
	 */
	exitC_function?: (ctx: C_functionContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.ratio`.
	 * @param ctx the parse tree
	 */
	enterRatio?: (ctx: RatioContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.ratio`.
	 * @param ctx the parse tree
	 */
	exitRatio?: (ctx: RatioContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.intervalSelector`.
	 * @param ctx the parse tree
	 */
	enterIntervalSelector?: (ctx: IntervalSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.intervalSelector`.
	 * @param ctx the parse tree
	 */
	exitIntervalSelector?: (ctx: IntervalSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.tupleSelector`.
	 * @param ctx the parse tree
	 */
	enterTupleSelector?: (ctx: TupleSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.tupleSelector`.
	 * @param ctx the parse tree
	 */
	exitTupleSelector?: (ctx: TupleSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.tupleElementSelector`.
	 * @param ctx the parse tree
	 */
	enterTupleElementSelector?: (ctx: TupleElementSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.tupleElementSelector`.
	 * @param ctx the parse tree
	 */
	exitTupleElementSelector?: (ctx: TupleElementSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.instanceSelector`.
	 * @param ctx the parse tree
	 */
	enterInstanceSelector?: (ctx: InstanceSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.instanceSelector`.
	 * @param ctx the parse tree
	 */
	exitInstanceSelector?: (ctx: InstanceSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.instanceElementSelector`.
	 * @param ctx the parse tree
	 */
	enterInstanceElementSelector?: (ctx: InstanceElementSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.instanceElementSelector`.
	 * @param ctx the parse tree
	 */
	exitInstanceElementSelector?: (ctx: InstanceElementSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.listSelector`.
	 * @param ctx the parse tree
	 */
	enterListSelector?: (ctx: ListSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.listSelector`.
	 * @param ctx the parse tree
	 */
	exitListSelector?: (ctx: ListSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.displayClause`.
	 * @param ctx the parse tree
	 */
	enterDisplayClause?: (ctx: DisplayClauseContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.displayClause`.
	 * @param ctx the parse tree
	 */
	exitDisplayClause?: (ctx: DisplayClauseContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.codeSelector`.
	 * @param ctx the parse tree
	 */
	enterCodeSelector?: (ctx: CodeSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.codeSelector`.
	 * @param ctx the parse tree
	 */
	exitCodeSelector?: (ctx: CodeSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.conceptSelector`.
	 * @param ctx the parse tree
	 */
	enterConceptSelector?: (ctx: ConceptSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.conceptSelector`.
	 * @param ctx the parse tree
	 */
	exitConceptSelector?: (ctx: ConceptSelectorContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.keywordIdentifier`.
	 * @param ctx the parse tree
	 */
	enterKeywordIdentifier?: (ctx: KeywordIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.keywordIdentifier`.
	 * @param ctx the parse tree
	 */
	exitKeywordIdentifier?: (ctx: KeywordIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.obsoleteIdentifier`.
	 * @param ctx the parse tree
	 */
	enterObsoleteIdentifier?: (ctx: ObsoleteIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.obsoleteIdentifier`.
	 * @param ctx the parse tree
	 */
	exitObsoleteIdentifier?: (ctx: ObsoleteIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.typeNameIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTypeNameIdentifier?: (ctx: TypeNameIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.typeNameIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTypeNameIdentifier?: (ctx: TypeNameIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.referentialIdentifier`.
	 * @param ctx the parse tree
	 */
	enterReferentialIdentifier?: (ctx: ReferentialIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.referentialIdentifier`.
	 * @param ctx the parse tree
	 */
	exitReferentialIdentifier?: (ctx: ReferentialIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.referentialOrTypeNameIdentifier`.
	 * @param ctx the parse tree
	 */
	enterReferentialOrTypeNameIdentifier?: (ctx: ReferentialOrTypeNameIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.referentialOrTypeNameIdentifier`.
	 * @param ctx the parse tree
	 */
	exitReferentialOrTypeNameIdentifier?: (ctx: ReferentialOrTypeNameIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.identifierOrFunctionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrFunctionIdentifier?: (ctx: IdentifierOrFunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.identifierOrFunctionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrFunctionIdentifier?: (ctx: IdentifierOrFunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.externalConstant`.
	 * @param ctx the parse tree
	 */
	enterExternalConstant?: (ctx: ExternalConstantContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.externalConstant`.
	 * @param ctx the parse tree
	 */
	exitExternalConstant?: (ctx: ExternalConstantContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.quantity`.
	 * @param ctx the parse tree
	 */
	enterQuantity?: (ctx: QuantityContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.quantity`.
	 * @param ctx the parse tree
	 */
	exitQuantity?: (ctx: QuantityContext) => void;

	/**
	 * Enter a parse tree produced by `cqlParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `cqlParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;
}

