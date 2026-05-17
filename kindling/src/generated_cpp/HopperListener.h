
// Generated from kindling/grammar/Hopper.g4 by ANTLR 4.13.1

#pragma once


#include "antlr4-runtime.h"
#include "HopperParser.h"


/**
 * This interface defines an abstract listener for a parse tree produced by HopperParser.
 */
class  HopperListener : public antlr4::tree::ParseTreeListener {
public:

  virtual void enterProgram(HopperParser::ProgramContext *ctx) = 0;
  virtual void exitProgram(HopperParser::ProgramContext *ctx) = 0;

  virtual void enterTopLevelDecl(HopperParser::TopLevelDeclContext *ctx) = 0;
  virtual void exitTopLevelDecl(HopperParser::TopLevelDeclContext *ctx) = 0;

  virtual void enterImportFrom(HopperParser::ImportFromContext *ctx) = 0;
  virtual void exitImportFrom(HopperParser::ImportFromContext *ctx) = 0;

  virtual void enterImportModule(HopperParser::ImportModuleContext *ctx) = 0;
  virtual void exitImportModule(HopperParser::ImportModuleContext *ctx) = 0;

  virtual void enterBindDecl(HopperParser::BindDeclContext *ctx) = 0;
  virtual void exitBindDecl(HopperParser::BindDeclContext *ctx) = 0;

  virtual void enterStrictDecl(HopperParser::StrictDeclContext *ctx) = 0;
  virtual void exitStrictDecl(HopperParser::StrictDeclContext *ctx) = 0;

  virtual void enterEntryBlockParams(HopperParser::EntryBlockParamsContext *ctx) = 0;
  virtual void exitEntryBlockParams(HopperParser::EntryBlockParamsContext *ctx) = 0;

  virtual void enterEntryBlock(HopperParser::EntryBlockContext *ctx) = 0;
  virtual void exitEntryBlock(HopperParser::EntryBlockContext *ctx) = 0;

  virtual void enterEntryAddr(HopperParser::EntryAddrContext *ctx) = 0;
  virtual void exitEntryAddr(HopperParser::EntryAddrContext *ctx) = 0;

  virtual void enterConstDecl(HopperParser::ConstDeclContext *ctx) = 0;
  virtual void exitConstDecl(HopperParser::ConstDeclContext *ctx) = 0;

  virtual void enterAliasDecl(HopperParser::AliasDeclContext *ctx) = 0;
  virtual void exitAliasDecl(HopperParser::AliasDeclContext *ctx) = 0;

  virtual void enterExternFuncDecl(HopperParser::ExternFuncDeclContext *ctx) = 0;
  virtual void exitExternFuncDecl(HopperParser::ExternFuncDeclContext *ctx) = 0;

  virtual void enterExternProcDecl(HopperParser::ExternProcDeclContext *ctx) = 0;
  virtual void exitExternProcDecl(HopperParser::ExternProcDeclContext *ctx) = 0;

  virtual void enterFuncDecl(HopperParser::FuncDeclContext *ctx) = 0;
  virtual void exitFuncDecl(HopperParser::FuncDeclContext *ctx) = 0;

  virtual void enterProcDecl(HopperParser::ProcDeclContext *ctx) = 0;
  virtual void exitProcDecl(HopperParser::ProcDeclContext *ctx) = 0;

  virtual void enterRequiresClause(HopperParser::RequiresClauseContext *ctx) = 0;
  virtual void exitRequiresClause(HopperParser::RequiresClauseContext *ctx) = 0;

  virtual void enterEnsuresClause(HopperParser::EnsuresClauseContext *ctx) = 0;
  virtual void exitEnsuresClause(HopperParser::EnsuresClauseContext *ctx) = 0;

  virtual void enterStructDecl(HopperParser::StructDeclContext *ctx) = 0;
  virtual void exitStructDecl(HopperParser::StructDeclContext *ctx) = 0;

  virtual void enterStructField(HopperParser::StructFieldContext *ctx) = 0;
  virtual void exitStructField(HopperParser::StructFieldContext *ctx) = 0;

  virtual void enterStructPad(HopperParser::StructPadContext *ctx) = 0;
  virtual void exitStructPad(HopperParser::StructPadContext *ctx) = 0;

  virtual void enterBitfieldDecl(HopperParser::BitfieldDeclContext *ctx) = 0;
  virtual void exitBitfieldDecl(HopperParser::BitfieldDeclContext *ctx) = 0;

  virtual void enterBitfieldArrayField(HopperParser::BitfieldArrayFieldContext *ctx) = 0;
  virtual void exitBitfieldArrayField(HopperParser::BitfieldArrayFieldContext *ctx) = 0;

  virtual void enterBitfieldField(HopperParser::BitfieldFieldContext *ctx) = 0;
  virtual void exitBitfieldField(HopperParser::BitfieldFieldContext *ctx) = 0;

  virtual void enterBitfieldPad(HopperParser::BitfieldPadContext *ctx) = 0;
  virtual void exitBitfieldPad(HopperParser::BitfieldPadContext *ctx) = 0;

  virtual void enterTemplateDecl(HopperParser::TemplateDeclContext *ctx) = 0;
  virtual void exitTemplateDecl(HopperParser::TemplateDeclContext *ctx) = 0;

  virtual void enterTemplateName(HopperParser::TemplateNameContext *ctx) = 0;
  virtual void exitTemplateName(HopperParser::TemplateNameContext *ctx) = 0;

  virtual void enterFreeParam(HopperParser::FreeParamContext *ctx) = 0;
  virtual void exitFreeParam(HopperParser::FreeParamContext *ctx) = 0;

  virtual void enterFixedParam(HopperParser::FixedParamContext *ctx) = 0;
  virtual void exitFixedParam(HopperParser::FixedParamContext *ctx) = 0;

  virtual void enterInterfaceDecl(HopperParser::InterfaceDeclContext *ctx) = 0;
  virtual void exitInterfaceDecl(HopperParser::InterfaceDeclContext *ctx) = 0;

  virtual void enterInterfaceFunc(HopperParser::InterfaceFuncContext *ctx) = 0;
  virtual void exitInterfaceFunc(HopperParser::InterfaceFuncContext *ctx) = 0;

  virtual void enterInterfaceProc(HopperParser::InterfaceProcContext *ctx) = 0;
  virtual void exitInterfaceProc(HopperParser::InterfaceProcContext *ctx) = 0;

  virtual void enterClassDecl(HopperParser::ClassDeclContext *ctx) = 0;
  virtual void exitClassDecl(HopperParser::ClassDeclContext *ctx) = 0;

  virtual void enterClassName(HopperParser::ClassNameContext *ctx) = 0;
  virtual void exitClassName(HopperParser::ClassNameContext *ctx) = 0;

  virtual void enterImplementsList(HopperParser::ImplementsListContext *ctx) = 0;
  virtual void exitImplementsList(HopperParser::ImplementsListContext *ctx) = 0;

  virtual void enterClassField(HopperParser::ClassFieldContext *ctx) = 0;
  virtual void exitClassField(HopperParser::ClassFieldContext *ctx) = 0;

  virtual void enterClassMethod(HopperParser::ClassMethodContext *ctx) = 0;
  virtual void exitClassMethod(HopperParser::ClassMethodContext *ctx) = 0;

  virtual void enterClassProcMethod(HopperParser::ClassProcMethodContext *ctx) = 0;
  virtual void exitClassProcMethod(HopperParser::ClassProcMethodContext *ctx) = 0;

  virtual void enterClassOperator(HopperParser::ClassOperatorContext *ctx) = 0;
  virtual void exitClassOperator(HopperParser::ClassOperatorContext *ctx) = 0;

  virtual void enterClassConstructor(HopperParser::ClassConstructorContext *ctx) = 0;
  virtual void exitClassConstructor(HopperParser::ClassConstructorContext *ctx) = 0;

  virtual void enterClassDestructor(HopperParser::ClassDestructorContext *ctx) = 0;
  virtual void exitClassDestructor(HopperParser::ClassDestructorContext *ctx) = 0;

  virtual void enterFieldName(HopperParser::FieldNameContext *ctx) = 0;
  virtual void exitFieldName(HopperParser::FieldNameContext *ctx) = 0;

  virtual void enterOperatorSymbol(HopperParser::OperatorSymbolContext *ctx) = 0;
  virtual void exitOperatorSymbol(HopperParser::OperatorSymbolContext *ctx) = 0;

  virtual void enterParamList(HopperParser::ParamListContext *ctx) = 0;
  virtual void exitParamList(HopperParser::ParamListContext *ctx) = 0;

  virtual void enterExternParamList(HopperParser::ExternParamListContext *ctx) = 0;
  virtual void exitExternParamList(HopperParser::ExternParamListContext *ctx) = 0;

  virtual void enterParam(HopperParser::ParamContext *ctx) = 0;
  virtual void exitParam(HopperParser::ParamContext *ctx) = 0;

  virtual void enterParamName(HopperParser::ParamNameContext *ctx) = 0;
  virtual void exitParamName(HopperParser::ParamNameContext *ctx) = 0;

  virtual void enterType(HopperParser::TypeContext *ctx) = 0;
  virtual void exitType(HopperParser::TypeContext *ctx) = 0;

  virtual void enterBlock(HopperParser::BlockContext *ctx) = 0;
  virtual void exitBlock(HopperParser::BlockContext *ctx) = 0;

  virtual void enterArrayDeclInit(HopperParser::ArrayDeclInitContext *ctx) = 0;
  virtual void exitArrayDeclInit(HopperParser::ArrayDeclInitContext *ctx) = 0;

  virtual void enterArrayDecl(HopperParser::ArrayDeclContext *ctx) = 0;
  virtual void exitArrayDecl(HopperParser::ArrayDeclContext *ctx) = 0;

  virtual void enterAllocateVarDecl(HopperParser::AllocateVarDeclContext *ctx) = 0;
  virtual void exitAllocateVarDecl(HopperParser::AllocateVarDeclContext *ctx) = 0;

  virtual void enterVarDecl(HopperParser::VarDeclContext *ctx) = 0;
  virtual void exitVarDecl(HopperParser::VarDeclContext *ctx) = 0;

  virtual void enterVarDeclNoInit(HopperParser::VarDeclNoInitContext *ctx) = 0;
  virtual void exitVarDeclNoInit(HopperParser::VarDeclNoInitContext *ctx) = 0;

  virtual void enterArrayAssign(HopperParser::ArrayAssignContext *ctx) = 0;
  virtual void exitArrayAssign(HopperParser::ArrayAssignContext *ctx) = 0;

  virtual void enterAllocateAssign(HopperParser::AllocateAssignContext *ctx) = 0;
  virtual void exitAllocateAssign(HopperParser::AllocateAssignContext *ctx) = 0;

  virtual void enterAssign(HopperParser::AssignContext *ctx) = 0;
  virtual void exitAssign(HopperParser::AssignContext *ctx) = 0;

  virtual void enterNestedFieldAssign(HopperParser::NestedFieldAssignContext *ctx) = 0;
  virtual void exitNestedFieldAssign(HopperParser::NestedFieldAssignContext *ctx) = 0;

  virtual void enterAllocateFieldAssign(HopperParser::AllocateFieldAssignContext *ctx) = 0;
  virtual void exitAllocateFieldAssign(HopperParser::AllocateFieldAssignContext *ctx) = 0;

  virtual void enterFieldAssign(HopperParser::FieldAssignContext *ctx) = 0;
  virtual void exitFieldAssign(HopperParser::FieldAssignContext *ctx) = 0;

  virtual void enterDerefAssign(HopperParser::DerefAssignContext *ctx) = 0;
  virtual void exitDerefAssign(HopperParser::DerefAssignContext *ctx) = 0;

  virtual void enterExprStmt(HopperParser::ExprStmtContext *ctx) = 0;
  virtual void exitExprStmt(HopperParser::ExprStmtContext *ctx) = 0;

  virtual void enterIfStmt(HopperParser::IfStmtContext *ctx) = 0;
  virtual void exitIfStmt(HopperParser::IfStmtContext *ctx) = 0;

  virtual void enterWhileStmt(HopperParser::WhileStmtContext *ctx) = 0;
  virtual void exitWhileStmt(HopperParser::WhileStmtContext *ctx) = 0;

  virtual void enterForStmt(HopperParser::ForStmtContext *ctx) = 0;
  virtual void exitForStmt(HopperParser::ForStmtContext *ctx) = 0;

  virtual void enterBreakStmt(HopperParser::BreakStmtContext *ctx) = 0;
  virtual void exitBreakStmt(HopperParser::BreakStmtContext *ctx) = 0;

  virtual void enterContinueStmt(HopperParser::ContinueStmtContext *ctx) = 0;
  virtual void exitContinueStmt(HopperParser::ContinueStmtContext *ctx) = 0;

  virtual void enterReturnStmt(HopperParser::ReturnStmtContext *ctx) = 0;
  virtual void exitReturnStmt(HopperParser::ReturnStmtContext *ctx) = 0;

  virtual void enterDeferStmt(HopperParser::DeferStmtContext *ctx) = 0;
  virtual void exitDeferStmt(HopperParser::DeferStmtContext *ctx) = 0;

  virtual void enterDeallocateStmt(HopperParser::DeallocateStmtContext *ctx) = 0;
  virtual void exitDeallocateStmt(HopperParser::DeallocateStmtContext *ctx) = 0;

  virtual void enterAsmStmt(HopperParser::AsmStmtContext *ctx) = 0;
  virtual void exitAsmStmt(HopperParser::AsmStmtContext *ctx) = 0;

  virtual void enterConstrainClause(HopperParser::ConstrainClauseContext *ctx) = 0;
  virtual void exitConstrainClause(HopperParser::ConstrainClauseContext *ctx) = 0;

  virtual void enterInvariantClause(HopperParser::InvariantClauseContext *ctx) = 0;
  virtual void exitInvariantClause(HopperParser::InvariantClauseContext *ctx) = 0;

  virtual void enterAsmBlock(HopperParser::AsmBlockContext *ctx) = 0;
  virtual void exitAsmBlock(HopperParser::AsmBlockContext *ctx) = 0;

  virtual void enterAsmLineAssign(HopperParser::AsmLineAssignContext *ctx) = 0;
  virtual void exitAsmLineAssign(HopperParser::AsmLineAssignContext *ctx) = 0;

  virtual void enterAsmLineOp(HopperParser::AsmLineOpContext *ctx) = 0;
  virtual void exitAsmLineOp(HopperParser::AsmLineOpContext *ctx) = 0;

  virtual void enterAsmOperand(HopperParser::AsmOperandContext *ctx) = 0;
  virtual void exitAsmOperand(HopperParser::AsmOperandContext *ctx) = 0;

  virtual void enterForInitDecl(HopperParser::ForInitDeclContext *ctx) = 0;
  virtual void exitForInitDecl(HopperParser::ForInitDeclContext *ctx) = 0;

  virtual void enterForInitAssign(HopperParser::ForInitAssignContext *ctx) = 0;
  virtual void exitForInitAssign(HopperParser::ForInitAssignContext *ctx) = 0;

  virtual void enterForUpdate(HopperParser::ForUpdateContext *ctx) = 0;
  virtual void exitForUpdate(HopperParser::ForUpdateContext *ctx) = 0;

  virtual void enterExpression(HopperParser::ExpressionContext *ctx) = 0;
  virtual void exitExpression(HopperParser::ExpressionContext *ctx) = 0;

  virtual void enterLogicalOr(HopperParser::LogicalOrContext *ctx) = 0;
  virtual void exitLogicalOr(HopperParser::LogicalOrContext *ctx) = 0;

  virtual void enterLogicalAnd(HopperParser::LogicalAndContext *ctx) = 0;
  virtual void exitLogicalAnd(HopperParser::LogicalAndContext *ctx) = 0;

  virtual void enterBitwiseOr(HopperParser::BitwiseOrContext *ctx) = 0;
  virtual void exitBitwiseOr(HopperParser::BitwiseOrContext *ctx) = 0;

  virtual void enterBitwiseXor(HopperParser::BitwiseXorContext *ctx) = 0;
  virtual void exitBitwiseXor(HopperParser::BitwiseXorContext *ctx) = 0;

  virtual void enterBitwiseAnd(HopperParser::BitwiseAndContext *ctx) = 0;
  virtual void exitBitwiseAnd(HopperParser::BitwiseAndContext *ctx) = 0;

  virtual void enterEquality(HopperParser::EqualityContext *ctx) = 0;
  virtual void exitEquality(HopperParser::EqualityContext *ctx) = 0;

  virtual void enterRelational(HopperParser::RelationalContext *ctx) = 0;
  virtual void exitRelational(HopperParser::RelationalContext *ctx) = 0;

  virtual void enterShift(HopperParser::ShiftContext *ctx) = 0;
  virtual void exitShift(HopperParser::ShiftContext *ctx) = 0;

  virtual void enterAdditive(HopperParser::AdditiveContext *ctx) = 0;
  virtual void exitAdditive(HopperParser::AdditiveContext *ctx) = 0;

  virtual void enterMultiplicative(HopperParser::MultiplicativeContext *ctx) = 0;
  virtual void exitMultiplicative(HopperParser::MultiplicativeContext *ctx) = 0;

  virtual void enterUnary(HopperParser::UnaryContext *ctx) = 0;
  virtual void exitUnary(HopperParser::UnaryContext *ctx) = 0;

  virtual void enterPrimary(HopperParser::PrimaryContext *ctx) = 0;
  virtual void exitPrimary(HopperParser::PrimaryContext *ctx) = 0;

  virtual void enterArgList(HopperParser::ArgListContext *ctx) = 0;
  virtual void exitArgList(HopperParser::ArgListContext *ctx) = 0;

  virtual void enterLiteral(HopperParser::LiteralContext *ctx) = 0;
  virtual void exitLiteral(HopperParser::LiteralContext *ctx) = 0;


};

