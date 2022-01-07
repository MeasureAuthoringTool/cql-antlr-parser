// Generated from generated/cql.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { LongNumberLiteralContext } from "./cqlParser";
import { DateTimeLiteralContext } from "./cqlParser";
import { DateLiteralContext } from "./cqlParser";
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
import { SimpleStringLiteralContext } from "./cqlParser";
import { SimpleNumberLiteralContext } from "./cqlParser";
import { ConcurrentWithIntervalOperatorPhraseContext } from "./cqlParser";
import { IncludesIntervalOperatorPhraseContext } from "./cqlParser";
import { IncludedInIntervalOperatorPhraseContext } from "./cqlParser";
import { BeforeOrAfterIntervalOperatorPhraseContext } from "./cqlParser";
import { WithinIntervalOperatorPhraseContext } from "./cqlParser";
import { MeetsIntervalOperatorPhraseContext } from "./cqlParser";
import { OverlapsIntervalOperatorPhraseContext } from "./cqlParser";
import { StartsIntervalOperatorPhraseContext } from "./cqlParser";
import { EndsIntervalOperatorPhraseContext } from "./cqlParser";
import { DefinitionContext } from "./cqlParser";
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
import { FluentModifierContext } from "./cqlParser";
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
import { CodeComparatorContext } from "./cqlParser";
import { TerminologyContext } from "./cqlParser";
import { QualifierContext } from "./cqlParser";
import { QueryContext } from "./cqlParser";
import { SourceClauseContext } from "./cqlParser";
import { LetClauseContext } from "./cqlParser";
import { LetClauseItemContext } from "./cqlParser";
import { WhereClauseContext } from "./cqlParser";
import { ReturnClauseContext } from "./cqlParser";
import { AggregateClauseContext } from "./cqlParser";
import { StartingClauseContext } from "./cqlParser";
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
import { FunctionContext } from "./cqlParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `cqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface cqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `memberInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberInvocation?: (ctx: MemberInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionInvocation?: (ctx: FunctionInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisInvocation?: (ctx: ThisInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `indexInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexInvocation?: (ctx: IndexInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `totalInvocation`
	 * labeled alternative in `cqlParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTotalInvocation?: (ctx: TotalInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `termExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermExpressionTerm?: (ctx: TermExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `invocationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocationExpressionTerm?: (ctx: InvocationExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `indexedExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexedExpressionTerm?: (ctx: IndexedExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `conversionExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversionExpressionTerm?: (ctx: ConversionExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `polarityExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolarityExpressionTerm?: (ctx: PolarityExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeBoundaryExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeBoundaryExpressionTerm?: (ctx: TimeBoundaryExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeUnitExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeUnitExpressionTerm?: (ctx: TimeUnitExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `durationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurationExpressionTerm?: (ctx: DurationExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `differenceExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDifferenceExpressionTerm?: (ctx: DifferenceExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `widthExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWidthExpressionTerm?: (ctx: WidthExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `successorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuccessorExpressionTerm?: (ctx: SuccessorExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `predecessorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredecessorExpressionTerm?: (ctx: PredecessorExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `elementExtractorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementExtractorExpressionTerm?: (ctx: ElementExtractorExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `pointExtractorExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointExtractorExpressionTerm?: (ctx: PointExtractorExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeExtentExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExtentExpressionTerm?: (ctx: TypeExtentExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpressionTerm?: (ctx: PowerExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplicationExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicationExpressionTerm?: (ctx: MultiplicationExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `additionExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionExpressionTerm?: (ctx: AdditionExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifThenElseExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseExpressionTerm?: (ctx: IfThenElseExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseExpressionTerm?: (ctx: CaseExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `aggregateExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateExpressionTerm?: (ctx: AggregateExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `setAggregateExpressionTerm`
	 * labeled alternative in `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAggregateExpressionTerm?: (ctx: SetAggregateExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `longNumberLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLongNumberLiteral?: (ctx: LongNumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `dateTimeLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeLiteral?: (ctx: DateTimeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `dateLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateLiteral?: (ctx: DateLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeLiteral?: (ctx: TimeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantityLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantityLiteral?: (ctx: QuantityLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `ratioLiteral`
	 * labeled alternative in `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRatioLiteral?: (ctx: RatioLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `invocationTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocationTerm?: (ctx: InvocationTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralTerm?: (ctx: LiteralTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `externalConstantTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalConstantTerm?: (ctx: ExternalConstantTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalSelectorTerm?: (ctx: IntervalSelectorTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `tupleSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleSelectorTerm?: (ctx: TupleSelectorTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `instanceSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceSelectorTerm?: (ctx: InstanceSelectorTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `listSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListSelectorTerm?: (ctx: ListSelectorTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `codeSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeSelectorTerm?: (ctx: CodeSelectorTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `conceptSelectorTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConceptSelectorTerm?: (ctx: ConceptSelectorTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedTerm`
	 * labeled alternative in `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedTerm?: (ctx: ParenthesizedTermContext) => Result;

	/**
	 * Visit a parse tree produced by the `simplePathReferentialIdentifier`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplePathReferentialIdentifier?: (ctx: SimplePathReferentialIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `simplePathQualifiedIdentifier`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplePathQualifiedIdentifier?: (ctx: SimplePathQualifiedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `simplePathIndexer`
	 * labeled alternative in `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplePathIndexer?: (ctx: SimplePathIndexerContext) => Result;

	/**
	 * Visit a parse tree produced by the `termExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermExpression?: (ctx: TermExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `retrieveExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetrieveExpression?: (ctx: RetrieveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryExpression?: (ctx: QueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExpression?: (ctx: TypeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `notExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `existenceExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistenceExpression?: (ctx: ExistenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `betweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetweenExpression?: (ctx: BetweenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `durationBetweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurationBetweenExpression?: (ctx: DurationBetweenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `differenceBetweenExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDifferenceBetweenExpression?: (ctx: DifferenceBetweenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `inequalityExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInequalityExpression?: (ctx: InequalityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `timingExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingExpression?: (ctx: TimingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `membershipExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMembershipExpression?: (ctx: MembershipExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `orExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `impliesExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpliesExpression?: (ctx: ImpliesExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `inFixSetExpression`
	 * labeled alternative in `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInFixSetExpression?: (ctx: InFixSetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `qualifiedMemberInvocation`
	 * labeled alternative in `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedMemberInvocation?: (ctx: QualifiedMemberInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `qualifiedFunctionInvocation`
	 * labeled alternative in `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedFunctionInvocation?: (ctx: QualifiedFunctionInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleStringLiteral`
	 * labeled alternative in `cqlParser.simpleLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStringLiteral?: (ctx: SimpleStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleNumberLiteral`
	 * labeled alternative in `cqlParser.simpleLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleNumberLiteral?: (ctx: SimpleNumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `concurrentWithIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcurrentWithIntervalOperatorPhrase?: (ctx: ConcurrentWithIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by the `includesIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludesIntervalOperatorPhrase?: (ctx: IncludesIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by the `includedInIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludedInIntervalOperatorPhrase?: (ctx: IncludedInIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by the `beforeOrAfterIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeforeOrAfterIntervalOperatorPhrase?: (ctx: BeforeOrAfterIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by the `withinIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithinIntervalOperatorPhrase?: (ctx: WithinIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by the `meetsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeetsIntervalOperatorPhrase?: (ctx: MeetsIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by the `overlapsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverlapsIntervalOperatorPhrase?: (ctx: OverlapsIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by the `startsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartsIntervalOperatorPhrase?: (ctx: StartsIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by the `endsIntervalOperatorPhrase`
	 * labeled alternative in `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndsIntervalOperatorPhrase?: (ctx: EndsIntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.library`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibrary?: (ctx: LibraryContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.libraryDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryDefinition?: (ctx: LibraryDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.usingDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingDefinition?: (ctx: UsingDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.includeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeDefinition?: (ctx: IncludeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.localIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalIdentifier?: (ctx: LocalIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.accessModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessModifier?: (ctx: AccessModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.parameterDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDefinition?: (ctx: ParameterDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codesystemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodesystemDefinition?: (ctx: CodesystemDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.valuesetDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesetDefinition?: (ctx: ValuesetDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codesystems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodesystems?: (ctx: CodesystemsContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codesystemIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodesystemIdentifier?: (ctx: CodesystemIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.libraryIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryIdentifier?: (ctx: LibraryIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeDefinition?: (ctx: CodeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.conceptDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConceptDefinition?: (ctx: ConceptDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codeIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeIdentifier?: (ctx: CodeIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codesystemId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodesystemId?: (ctx: CodesystemIdContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.valuesetId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesetId?: (ctx: ValuesetIdContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.versionSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersionSpecifier?: (ctx: VersionSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codeId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeId?: (ctx: CodeIdContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.namedTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedTypeSpecifier?: (ctx: NamedTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.modelIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModelIdentifier?: (ctx: ModelIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.listTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListTypeSpecifier?: (ctx: ListTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.intervalTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalTypeSpecifier?: (ctx: IntervalTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.tupleTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTypeSpecifier?: (ctx: TupleTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.tupleElementDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleElementDefinition?: (ctx: TupleElementDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.choiceTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceTypeSpecifier?: (ctx: ChoiceTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.expressionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionDefinition?: (ctx: ExpressionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.contextDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContextDefinition?: (ctx: ContextDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.fluentModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFluentModifier?: (ctx: FluentModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.operandDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperandDefinition?: (ctx: OperandDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.querySource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySource?: (ctx: QuerySourceContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.aliasedQuerySource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedQuerySource?: (ctx: AliasedQuerySourceContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias?: (ctx: AliasContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.queryInclusionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryInclusionClause?: (ctx: QueryInclusionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.withoutClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithoutClause?: (ctx: WithoutClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.retrieve`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetrieve?: (ctx: RetrieveContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.contextIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContextIdentifier?: (ctx: ContextIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodePath?: (ctx: CodePathContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codeComparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeComparator?: (ctx: CodeComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.terminology`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerminology?: (ctx: TerminologyContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifier?: (ctx: QualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.sourceClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceClause?: (ctx: SourceClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.letClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetClause?: (ctx: LetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.letClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetClauseItem?: (ctx: LetClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.returnClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnClause?: (ctx: ReturnClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.aggregateClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateClause?: (ctx: AggregateClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.startingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartingClause?: (ctx: StartingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.sortClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortClause?: (ctx: SortClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.sortDirection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortDirection?: (ctx: SortDirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.sortByItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortByItem?: (ctx: SortByItemContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.qualifiedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedIdentifier?: (ctx: QualifiedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.qualifiedIdentifierExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedIdentifierExpression?: (ctx: QualifiedIdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.qualifierExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifierExpression?: (ctx: QualifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.simplePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimplePath?: (ctx: SimplePathContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.simpleLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleLiteral?: (ctx: SimpleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.dateTimePrecision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimePrecision?: (ctx: DateTimePrecisionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.dateTimeComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimeComponent?: (ctx: DateTimeComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.pluralDateTimePrecision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPluralDateTimePrecision?: (ctx: PluralDateTimePrecisionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.expressionTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionTerm?: (ctx: ExpressionTermContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.caseExpressionItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseExpressionItem?: (ctx: CaseExpressionItemContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.dateTimePrecisionSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateTimePrecisionSpecifier?: (ctx: DateTimePrecisionSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.relativeQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelativeQualifier?: (ctx: RelativeQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.offsetRelativeQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffsetRelativeQualifier?: (ctx: OffsetRelativeQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.exclusiveRelativeQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveRelativeQualifier?: (ctx: ExclusiveRelativeQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.quantityOffset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantityOffset?: (ctx: QuantityOffsetContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.temporalRelationship`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemporalRelationship?: (ctx: TemporalRelationshipContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.intervalOperatorPhrase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalOperatorPhrase?: (ctx: IntervalOperatorPhraseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.qualifiedInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedInvocation?: (ctx: QualifiedInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.qualifiedFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedFunction?: (ctx: QualifiedFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocation?: (ctx: InvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.ratio`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRatio?: (ctx: RatioContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.intervalSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalSelector?: (ctx: IntervalSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.tupleSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleSelector?: (ctx: TupleSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.tupleElementSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleElementSelector?: (ctx: TupleElementSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.instanceSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceSelector?: (ctx: InstanceSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.instanceElementSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceElementSelector?: (ctx: InstanceElementSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.listSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListSelector?: (ctx: ListSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.displayClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayClause?: (ctx: DisplayClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.codeSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeSelector?: (ctx: CodeSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.conceptSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConceptSelector?: (ctx: ConceptSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.reservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedWord?: (ctx: ReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.keywordIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordIdentifier?: (ctx: KeywordIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.obsoleteIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObsoleteIdentifier?: (ctx: ObsoleteIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.functionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.typeNameIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNameIdentifier?: (ctx: TypeNameIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.referentialIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferentialIdentifier?: (ctx: ReferentialIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.referentialOrTypeNameIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferentialOrTypeNameIdentifier?: (ctx: ReferentialOrTypeNameIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.identifierOrFunctionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrFunctionIdentifier?: (ctx: IdentifierOrFunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.externalConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalConstant?: (ctx: ExternalConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.quantity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantity?: (ctx: QuantityContext) => Result;

	/**
	 * Visit a parse tree produced by `cqlParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;
}

