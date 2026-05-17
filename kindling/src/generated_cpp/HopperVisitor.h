
// Generated from kindling/grammar/Hopper.g4 by ANTLR 4.13.1

#pragma once


#include "antlr4-runtime.h"
#include "HopperParser.h"



/**
 * This class defines an abstract visitor for a parse tree
 * produced by HopperParser.
 */
class  HopperVisitor : public antlr4::tree::AbstractParseTreeVisitor {
public:

  /**
   * Visit parse trees produced by HopperParser.
   */
    virtual std::any visitProgram(HopperParser::ProgramContext *context) = 0;

    virtual std::any visitTopLevelDecl(HopperParser::TopLevelDeclContext *context) = 0;

    virtual std::any visitImportFrom(HopperParser::ImportFromContext *context) = 0;

    virtual std::any visitImportModule(HopperParser::ImportModuleContext *context) = 0;

    virtual std::any visitBindDecl(HopperParser::BindDeclContext *context) = 0;

    virtual std::any visitStrictDecl(HopperParser::StrictDeclContext *context) = 0;

    virtual std::any visitEntryBlockParams(HopperParser::EntryBlockParamsContext *context) = 0;

    virtual std::any visitEntryBlock(HopperParser::EntryBlockContext *context) = 0;

    virtual std::any visitEntryAddr(HopperParser::EntryAddrContext *context) = 0;

    virtual std::any visitConstDecl(HopperParser::ConstDeclContext *context) = 0;

    virtual std::any visitAliasDecl(HopperParser::AliasDeclContext *context) = 0;

    virtual std::any visitExternFuncDecl(HopperParser::ExternFuncDeclContext *context) = 0;

    virtual std::any visitExternProcDecl(HopperParser::ExternProcDeclContext *context) = 0;

    virtual std::any visitFuncDecl(HopperParser::FuncDeclContext *context) = 0;

    virtual std::any visitProcDecl(HopperParser::ProcDeclContext *context) = 0;

    virtual std::any visitRequiresClause(HopperParser::RequiresClauseContext *context) = 0;

    virtual std::any visitEnsuresClause(HopperParser::EnsuresClauseContext *context) = 0;

    virtual std::any visitStructDecl(HopperParser::StructDeclContext *context) = 0;

    virtual std::any visitStructField(HopperParser::StructFieldContext *context) = 0;

    virtual std::any visitStructPad(HopperParser::StructPadContext *context) = 0;

    virtual std::any visitBitfieldDecl(HopperParser::BitfieldDeclContext *context) = 0;

    virtual std::any visitBitfieldArrayField(HopperParser::BitfieldArrayFieldContext *context) = 0;

    virtual std::any visitBitfieldField(HopperParser::BitfieldFieldContext *context) = 0;

    virtual std::any visitBitfieldPad(HopperParser::BitfieldPadContext *context) = 0;

    virtual std::any visitTemplateDecl(HopperParser::TemplateDeclContext *context) = 0;

    virtual std::any visitTemplateName(HopperParser::TemplateNameContext *context) = 0;

    virtual std::any visitFreeParam(HopperParser::FreeParamContext *context) = 0;

    virtual std::any visitFixedParam(HopperParser::FixedParamContext *context) = 0;

    virtual std::any visitInterfaceDecl(HopperParser::InterfaceDeclContext *context) = 0;

    virtual std::any visitInterfaceFunc(HopperParser::InterfaceFuncContext *context) = 0;

    virtual std::any visitInterfaceProc(HopperParser::InterfaceProcContext *context) = 0;

    virtual std::any visitClassDecl(HopperParser::ClassDeclContext *context) = 0;

    virtual std::any visitClassName(HopperParser::ClassNameContext *context) = 0;

    virtual std::any visitImplementsList(HopperParser::ImplementsListContext *context) = 0;

    virtual std::any visitClassField(HopperParser::ClassFieldContext *context) = 0;

    virtual std::any visitClassMethod(HopperParser::ClassMethodContext *context) = 0;

    virtual std::any visitClassProcMethod(HopperParser::ClassProcMethodContext *context) = 0;

    virtual std::any visitClassOperator(HopperParser::ClassOperatorContext *context) = 0;

    virtual std::any visitClassConstructor(HopperParser::ClassConstructorContext *context) = 0;

    virtual std::any visitClassDestructor(HopperParser::ClassDestructorContext *context) = 0;

    virtual std::any visitFieldName(HopperParser::FieldNameContext *context) = 0;

    virtual std::any visitOperatorSymbol(HopperParser::OperatorSymbolContext *context) = 0;

    virtual std::any visitParamList(HopperParser::ParamListContext *context) = 0;

    virtual std::any visitExternParamList(HopperParser::ExternParamListContext *context) = 0;

    virtual std::any visitParam(HopperParser::ParamContext *context) = 0;

    virtual std::any visitParamName(HopperParser::ParamNameContext *context) = 0;

    virtual std::any visitType(HopperParser::TypeContext *context) = 0;

    virtual std::any visitBlock(HopperParser::BlockContext *context) = 0;

    virtual std::any visitArrayDeclInit(HopperParser::ArrayDeclInitContext *context) = 0;

    virtual std::any visitArrayDecl(HopperParser::ArrayDeclContext *context) = 0;

    virtual std::any visitAllocateVarDecl(HopperParser::AllocateVarDeclContext *context) = 0;

    virtual std::any visitVarDecl(HopperParser::VarDeclContext *context) = 0;

    virtual std::any visitVarDeclNoInit(HopperParser::VarDeclNoInitContext *context) = 0;

    virtual std::any visitArrayAssign(HopperParser::ArrayAssignContext *context) = 0;

    virtual std::any visitAllocateAssign(HopperParser::AllocateAssignContext *context) = 0;

    virtual std::any visitAssign(HopperParser::AssignContext *context) = 0;

    virtual std::any visitNestedFieldAssign(HopperParser::NestedFieldAssignContext *context) = 0;

    virtual std::any visitAllocateFieldAssign(HopperParser::AllocateFieldAssignContext *context) = 0;

    virtual std::any visitFieldAssign(HopperParser::FieldAssignContext *context) = 0;

    virtual std::any visitDerefAssign(HopperParser::DerefAssignContext *context) = 0;

    virtual std::any visitExprStmt(HopperParser::ExprStmtContext *context) = 0;

    virtual std::any visitIfStmt(HopperParser::IfStmtContext *context) = 0;

    virtual std::any visitWhileStmt(HopperParser::WhileStmtContext *context) = 0;

    virtual std::any visitForStmt(HopperParser::ForStmtContext *context) = 0;

    virtual std::any visitBreakStmt(HopperParser::BreakStmtContext *context) = 0;

    virtual std::any visitContinueStmt(HopperParser::ContinueStmtContext *context) = 0;

    virtual std::any visitReturnStmt(HopperParser::ReturnStmtContext *context) = 0;

    virtual std::any visitDeferStmt(HopperParser::DeferStmtContext *context) = 0;

    virtual std::any visitDeallocateStmt(HopperParser::DeallocateStmtContext *context) = 0;

    virtual std::any visitAsmStmt(HopperParser::AsmStmtContext *context) = 0;

    virtual std::any visitConstrainClause(HopperParser::ConstrainClauseContext *context) = 0;

    virtual std::any visitInvariantClause(HopperParser::InvariantClauseContext *context) = 0;

    virtual std::any visitAsmBlock(HopperParser::AsmBlockContext *context) = 0;

    virtual std::any visitAsmLineAssign(HopperParser::AsmLineAssignContext *context) = 0;

    virtual std::any visitAsmLineOp(HopperParser::AsmLineOpContext *context) = 0;

    virtual std::any visitAsmOperand(HopperParser::AsmOperandContext *context) = 0;

    virtual std::any visitForInitDecl(HopperParser::ForInitDeclContext *context) = 0;

    virtual std::any visitForInitAssign(HopperParser::ForInitAssignContext *context) = 0;

    virtual std::any visitForUpdate(HopperParser::ForUpdateContext *context) = 0;

    virtual std::any visitExpression(HopperParser::ExpressionContext *context) = 0;

    virtual std::any visitLogicalOr(HopperParser::LogicalOrContext *context) = 0;

    virtual std::any visitLogicalAnd(HopperParser::LogicalAndContext *context) = 0;

    virtual std::any visitBitwiseOr(HopperParser::BitwiseOrContext *context) = 0;

    virtual std::any visitBitwiseXor(HopperParser::BitwiseXorContext *context) = 0;

    virtual std::any visitBitwiseAnd(HopperParser::BitwiseAndContext *context) = 0;

    virtual std::any visitEquality(HopperParser::EqualityContext *context) = 0;

    virtual std::any visitRelational(HopperParser::RelationalContext *context) = 0;

    virtual std::any visitShift(HopperParser::ShiftContext *context) = 0;

    virtual std::any visitAdditive(HopperParser::AdditiveContext *context) = 0;

    virtual std::any visitMultiplicative(HopperParser::MultiplicativeContext *context) = 0;

    virtual std::any visitUnary(HopperParser::UnaryContext *context) = 0;

    virtual std::any visitPrimary(HopperParser::PrimaryContext *context) = 0;

    virtual std::any visitArgList(HopperParser::ArgListContext *context) = 0;

    virtual std::any visitLiteral(HopperParser::LiteralContext *context) = 0;


};

