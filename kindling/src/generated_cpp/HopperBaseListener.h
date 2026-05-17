
// Generated from kindling/grammar/Hopper.g4 by ANTLR 4.13.1

#pragma once


#include "antlr4-runtime.h"
#include "HopperListener.h"


/**
 * This class provides an empty implementation of HopperListener,
 * which can be extended to create a listener which only needs to handle a subset
 * of the available methods.
 */
class  HopperBaseListener : public HopperListener {
public:

  virtual void enterProgram(HopperParser::ProgramContext * /*ctx*/) override { }
  virtual void exitProgram(HopperParser::ProgramContext * /*ctx*/) override { }

  virtual void enterTopLevelDecl(HopperParser::TopLevelDeclContext * /*ctx*/) override { }
  virtual void exitTopLevelDecl(HopperParser::TopLevelDeclContext * /*ctx*/) override { }

  virtual void enterImportFrom(HopperParser::ImportFromContext * /*ctx*/) override { }
  virtual void exitImportFrom(HopperParser::ImportFromContext * /*ctx*/) override { }

  virtual void enterImportModule(HopperParser::ImportModuleContext * /*ctx*/) override { }
  virtual void exitImportModule(HopperParser::ImportModuleContext * /*ctx*/) override { }

  virtual void enterBindDecl(HopperParser::BindDeclContext * /*ctx*/) override { }
  virtual void exitBindDecl(HopperParser::BindDeclContext * /*ctx*/) override { }

  virtual void enterStrictDecl(HopperParser::StrictDeclContext * /*ctx*/) override { }
  virtual void exitStrictDecl(HopperParser::StrictDeclContext * /*ctx*/) override { }

  virtual void enterEntryBlockParams(HopperParser::EntryBlockParamsContext * /*ctx*/) override { }
  virtual void exitEntryBlockParams(HopperParser::EntryBlockParamsContext * /*ctx*/) override { }

  virtual void enterEntryBlock(HopperParser::EntryBlockContext * /*ctx*/) override { }
  virtual void exitEntryBlock(HopperParser::EntryBlockContext * /*ctx*/) override { }

  virtual void enterEntryAddr(HopperParser::EntryAddrContext * /*ctx*/) override { }
  virtual void exitEntryAddr(HopperParser::EntryAddrContext * /*ctx*/) override { }

  virtual void enterConstDecl(HopperParser::ConstDeclContext * /*ctx*/) override { }
  virtual void exitConstDecl(HopperParser::ConstDeclContext * /*ctx*/) override { }

  virtual void enterAliasDecl(HopperParser::AliasDeclContext * /*ctx*/) override { }
  virtual void exitAliasDecl(HopperParser::AliasDeclContext * /*ctx*/) override { }

  virtual void enterExternFuncDecl(HopperParser::ExternFuncDeclContext * /*ctx*/) override { }
  virtual void exitExternFuncDecl(HopperParser::ExternFuncDeclContext * /*ctx*/) override { }

  virtual void enterExternProcDecl(HopperParser::ExternProcDeclContext * /*ctx*/) override { }
  virtual void exitExternProcDecl(HopperParser::ExternProcDeclContext * /*ctx*/) override { }

  virtual void enterFuncDecl(HopperParser::FuncDeclContext * /*ctx*/) override { }
  virtual void exitFuncDecl(HopperParser::FuncDeclContext * /*ctx*/) override { }

  virtual void enterProcDecl(HopperParser::ProcDeclContext * /*ctx*/) override { }
  virtual void exitProcDecl(HopperParser::ProcDeclContext * /*ctx*/) override { }

  virtual void enterRequiresClause(HopperParser::RequiresClauseContext * /*ctx*/) override { }
  virtual void exitRequiresClause(HopperParser::RequiresClauseContext * /*ctx*/) override { }

  virtual void enterEnsuresClause(HopperParser::EnsuresClauseContext * /*ctx*/) override { }
  virtual void exitEnsuresClause(HopperParser::EnsuresClauseContext * /*ctx*/) override { }

  virtual void enterStructDecl(HopperParser::StructDeclContext * /*ctx*/) override { }
  virtual void exitStructDecl(HopperParser::StructDeclContext * /*ctx*/) override { }

  virtual void enterStructField(HopperParser::StructFieldContext * /*ctx*/) override { }
  virtual void exitStructField(HopperParser::StructFieldContext * /*ctx*/) override { }

  virtual void enterStructPad(HopperParser::StructPadContext * /*ctx*/) override { }
  virtual void exitStructPad(HopperParser::StructPadContext * /*ctx*/) override { }

  virtual void enterBitfieldDecl(HopperParser::BitfieldDeclContext * /*ctx*/) override { }
  virtual void exitBitfieldDecl(HopperParser::BitfieldDeclContext * /*ctx*/) override { }

  virtual void enterBitfieldArrayField(HopperParser::BitfieldArrayFieldContext * /*ctx*/) override { }
  virtual void exitBitfieldArrayField(HopperParser::BitfieldArrayFieldContext * /*ctx*/) override { }

  virtual void enterBitfieldField(HopperParser::BitfieldFieldContext * /*ctx*/) override { }
  virtual void exitBitfieldField(HopperParser::BitfieldFieldContext * /*ctx*/) override { }

  virtual void enterBitfieldPad(HopperParser::BitfieldPadContext * /*ctx*/) override { }
  virtual void exitBitfieldPad(HopperParser::BitfieldPadContext * /*ctx*/) override { }

  virtual void enterTemplateDecl(HopperParser::TemplateDeclContext * /*ctx*/) override { }
  virtual void exitTemplateDecl(HopperParser::TemplateDeclContext * /*ctx*/) override { }

  virtual void enterTemplateName(HopperParser::TemplateNameContext * /*ctx*/) override { }
  virtual void exitTemplateName(HopperParser::TemplateNameContext * /*ctx*/) override { }

  virtual void enterFreeParam(HopperParser::FreeParamContext * /*ctx*/) override { }
  virtual void exitFreeParam(HopperParser::FreeParamContext * /*ctx*/) override { }

  virtual void enterFixedParam(HopperParser::FixedParamContext * /*ctx*/) override { }
  virtual void exitFixedParam(HopperParser::FixedParamContext * /*ctx*/) override { }

  virtual void enterInterfaceDecl(HopperParser::InterfaceDeclContext * /*ctx*/) override { }
  virtual void exitInterfaceDecl(HopperParser::InterfaceDeclContext * /*ctx*/) override { }

  virtual void enterInterfaceFunc(HopperParser::InterfaceFuncContext * /*ctx*/) override { }
  virtual void exitInterfaceFunc(HopperParser::InterfaceFuncContext * /*ctx*/) override { }

  virtual void enterInterfaceProc(HopperParser::InterfaceProcContext * /*ctx*/) override { }
  virtual void exitInterfaceProc(HopperParser::InterfaceProcContext * /*ctx*/) override { }

  virtual void enterClassDecl(HopperParser::ClassDeclContext * /*ctx*/) override { }
  virtual void exitClassDecl(HopperParser::ClassDeclContext * /*ctx*/) override { }

  virtual void enterClassName(HopperParser::ClassNameContext * /*ctx*/) override { }
  virtual void exitClassName(HopperParser::ClassNameContext * /*ctx*/) override { }

  virtual void enterImplementsList(HopperParser::ImplementsListContext * /*ctx*/) override { }
  virtual void exitImplementsList(HopperParser::ImplementsListContext * /*ctx*/) override { }

  virtual void enterClassField(HopperParser::ClassFieldContext * /*ctx*/) override { }
  virtual void exitClassField(HopperParser::ClassFieldContext * /*ctx*/) override { }

  virtual void enterClassMethod(HopperParser::ClassMethodContext * /*ctx*/) override { }
  virtual void exitClassMethod(HopperParser::ClassMethodContext * /*ctx*/) override { }

  virtual void enterClassProcMethod(HopperParser::ClassProcMethodContext * /*ctx*/) override { }
  virtual void exitClassProcMethod(HopperParser::ClassProcMethodContext * /*ctx*/) override { }

  virtual void enterClassOperator(HopperParser::ClassOperatorContext * /*ctx*/) override { }
  virtual void exitClassOperator(HopperParser::ClassOperatorContext * /*ctx*/) override { }

  virtual void enterClassConstructor(HopperParser::ClassConstructorContext * /*ctx*/) override { }
  virtual void exitClassConstructor(HopperParser::ClassConstructorContext * /*ctx*/) override { }

  virtual void enterClassDestructor(HopperParser::ClassDestructorContext * /*ctx*/) override { }
  virtual void exitClassDestructor(HopperParser::ClassDestructorContext * /*ctx*/) override { }

  virtual void enterFieldName(HopperParser::FieldNameContext * /*ctx*/) override { }
  virtual void exitFieldName(HopperParser::FieldNameContext * /*ctx*/) override { }

  virtual void enterOperatorSymbol(HopperParser::OperatorSymbolContext * /*ctx*/) override { }
  virtual void exitOperatorSymbol(HopperParser::OperatorSymbolContext * /*ctx*/) override { }

  virtual void enterParamList(HopperParser::ParamListContext * /*ctx*/) override { }
  virtual void exitParamList(HopperParser::ParamListContext * /*ctx*/) override { }

  virtual void enterExternParamList(HopperParser::ExternParamListContext * /*ctx*/) override { }
  virtual void exitExternParamList(HopperParser::ExternParamListContext * /*ctx*/) override { }

  virtual void enterParam(HopperParser::ParamContext * /*ctx*/) override { }
  virtual void exitParam(HopperParser::ParamContext * /*ctx*/) override { }

  virtual void enterParamName(HopperParser::ParamNameContext * /*ctx*/) override { }
  virtual void exitParamName(HopperParser::ParamNameContext * /*ctx*/) override { }

  virtual void enterType(HopperParser::TypeContext * /*ctx*/) override { }
  virtual void exitType(HopperParser::TypeContext * /*ctx*/) override { }

  virtual void enterBlock(HopperParser::BlockContext * /*ctx*/) override { }
  virtual void exitBlock(HopperParser::BlockContext * /*ctx*/) override { }

  virtual void enterArrayDeclInit(HopperParser::ArrayDeclInitContext * /*ctx*/) override { }
  virtual void exitArrayDeclInit(HopperParser::ArrayDeclInitContext * /*ctx*/) override { }

  virtual void enterArrayDecl(HopperParser::ArrayDeclContext * /*ctx*/) override { }
  virtual void exitArrayDecl(HopperParser::ArrayDeclContext * /*ctx*/) override { }

  virtual void enterAllocateVarDecl(HopperParser::AllocateVarDeclContext * /*ctx*/) override { }
  virtual void exitAllocateVarDecl(HopperParser::AllocateVarDeclContext * /*ctx*/) override { }

  virtual void enterVarDecl(HopperParser::VarDeclContext * /*ctx*/) override { }
  virtual void exitVarDecl(HopperParser::VarDeclContext * /*ctx*/) override { }

  virtual void enterVarDeclNoInit(HopperParser::VarDeclNoInitContext * /*ctx*/) override { }
  virtual void exitVarDeclNoInit(HopperParser::VarDeclNoInitContext * /*ctx*/) override { }

  virtual void enterArrayAssign(HopperParser::ArrayAssignContext * /*ctx*/) override { }
  virtual void exitArrayAssign(HopperParser::ArrayAssignContext * /*ctx*/) override { }

  virtual void enterAllocateAssign(HopperParser::AllocateAssignContext * /*ctx*/) override { }
  virtual void exitAllocateAssign(HopperParser::AllocateAssignContext * /*ctx*/) override { }

  virtual void enterAssign(HopperParser::AssignContext * /*ctx*/) override { }
  virtual void exitAssign(HopperParser::AssignContext * /*ctx*/) override { }

  virtual void enterNestedFieldAssign(HopperParser::NestedFieldAssignContext * /*ctx*/) override { }
  virtual void exitNestedFieldAssign(HopperParser::NestedFieldAssignContext * /*ctx*/) override { }

  virtual void enterAllocateFieldAssign(HopperParser::AllocateFieldAssignContext * /*ctx*/) override { }
  virtual void exitAllocateFieldAssign(HopperParser::AllocateFieldAssignContext * /*ctx*/) override { }

  virtual void enterFieldAssign(HopperParser::FieldAssignContext * /*ctx*/) override { }
  virtual void exitFieldAssign(HopperParser::FieldAssignContext * /*ctx*/) override { }

  virtual void enterDerefAssign(HopperParser::DerefAssignContext * /*ctx*/) override { }
  virtual void exitDerefAssign(HopperParser::DerefAssignContext * /*ctx*/) override { }

  virtual void enterExprStmt(HopperParser::ExprStmtContext * /*ctx*/) override { }
  virtual void exitExprStmt(HopperParser::ExprStmtContext * /*ctx*/) override { }

  virtual void enterIfStmt(HopperParser::IfStmtContext * /*ctx*/) override { }
  virtual void exitIfStmt(HopperParser::IfStmtContext * /*ctx*/) override { }

  virtual void enterWhileStmt(HopperParser::WhileStmtContext * /*ctx*/) override { }
  virtual void exitWhileStmt(HopperParser::WhileStmtContext * /*ctx*/) override { }

  virtual void enterForStmt(HopperParser::ForStmtContext * /*ctx*/) override { }
  virtual void exitForStmt(HopperParser::ForStmtContext * /*ctx*/) override { }

  virtual void enterBreakStmt(HopperParser::BreakStmtContext * /*ctx*/) override { }
  virtual void exitBreakStmt(HopperParser::BreakStmtContext * /*ctx*/) override { }

  virtual void enterContinueStmt(HopperParser::ContinueStmtContext * /*ctx*/) override { }
  virtual void exitContinueStmt(HopperParser::ContinueStmtContext * /*ctx*/) override { }

  virtual void enterReturnStmt(HopperParser::ReturnStmtContext * /*ctx*/) override { }
  virtual void exitReturnStmt(HopperParser::ReturnStmtContext * /*ctx*/) override { }

  virtual void enterDeferStmt(HopperParser::DeferStmtContext * /*ctx*/) override { }
  virtual void exitDeferStmt(HopperParser::DeferStmtContext * /*ctx*/) override { }

  virtual void enterDeallocateStmt(HopperParser::DeallocateStmtContext * /*ctx*/) override { }
  virtual void exitDeallocateStmt(HopperParser::DeallocateStmtContext * /*ctx*/) override { }

  virtual void enterAsmStmt(HopperParser::AsmStmtContext * /*ctx*/) override { }
  virtual void exitAsmStmt(HopperParser::AsmStmtContext * /*ctx*/) override { }

  virtual void enterConstrainClause(HopperParser::ConstrainClauseContext * /*ctx*/) override { }
  virtual void exitConstrainClause(HopperParser::ConstrainClauseContext * /*ctx*/) override { }

  virtual void enterInvariantClause(HopperParser::InvariantClauseContext * /*ctx*/) override { }
  virtual void exitInvariantClause(HopperParser::InvariantClauseContext * /*ctx*/) override { }

  virtual void enterAsmBlock(HopperParser::AsmBlockContext * /*ctx*/) override { }
  virtual void exitAsmBlock(HopperParser::AsmBlockContext * /*ctx*/) override { }

  virtual void enterAsmLineAssign(HopperParser::AsmLineAssignContext * /*ctx*/) override { }
  virtual void exitAsmLineAssign(HopperParser::AsmLineAssignContext * /*ctx*/) override { }

  virtual void enterAsmLineOp(HopperParser::AsmLineOpContext * /*ctx*/) override { }
  virtual void exitAsmLineOp(HopperParser::AsmLineOpContext * /*ctx*/) override { }

  virtual void enterAsmOperand(HopperParser::AsmOperandContext * /*ctx*/) override { }
  virtual void exitAsmOperand(HopperParser::AsmOperandContext * /*ctx*/) override { }

  virtual void enterForInitDecl(HopperParser::ForInitDeclContext * /*ctx*/) override { }
  virtual void exitForInitDecl(HopperParser::ForInitDeclContext * /*ctx*/) override { }

  virtual void enterForInitAssign(HopperParser::ForInitAssignContext * /*ctx*/) override { }
  virtual void exitForInitAssign(HopperParser::ForInitAssignContext * /*ctx*/) override { }

  virtual void enterForUpdate(HopperParser::ForUpdateContext * /*ctx*/) override { }
  virtual void exitForUpdate(HopperParser::ForUpdateContext * /*ctx*/) override { }

  virtual void enterExpression(HopperParser::ExpressionContext * /*ctx*/) override { }
  virtual void exitExpression(HopperParser::ExpressionContext * /*ctx*/) override { }

  virtual void enterLogicalOr(HopperParser::LogicalOrContext * /*ctx*/) override { }
  virtual void exitLogicalOr(HopperParser::LogicalOrContext * /*ctx*/) override { }

  virtual void enterLogicalAnd(HopperParser::LogicalAndContext * /*ctx*/) override { }
  virtual void exitLogicalAnd(HopperParser::LogicalAndContext * /*ctx*/) override { }

  virtual void enterBitwiseOr(HopperParser::BitwiseOrContext * /*ctx*/) override { }
  virtual void exitBitwiseOr(HopperParser::BitwiseOrContext * /*ctx*/) override { }

  virtual void enterBitwiseXor(HopperParser::BitwiseXorContext * /*ctx*/) override { }
  virtual void exitBitwiseXor(HopperParser::BitwiseXorContext * /*ctx*/) override { }

  virtual void enterBitwiseAnd(HopperParser::BitwiseAndContext * /*ctx*/) override { }
  virtual void exitBitwiseAnd(HopperParser::BitwiseAndContext * /*ctx*/) override { }

  virtual void enterEquality(HopperParser::EqualityContext * /*ctx*/) override { }
  virtual void exitEquality(HopperParser::EqualityContext * /*ctx*/) override { }

  virtual void enterRelational(HopperParser::RelationalContext * /*ctx*/) override { }
  virtual void exitRelational(HopperParser::RelationalContext * /*ctx*/) override { }

  virtual void enterShift(HopperParser::ShiftContext * /*ctx*/) override { }
  virtual void exitShift(HopperParser::ShiftContext * /*ctx*/) override { }

  virtual void enterAdditive(HopperParser::AdditiveContext * /*ctx*/) override { }
  virtual void exitAdditive(HopperParser::AdditiveContext * /*ctx*/) override { }

  virtual void enterMultiplicative(HopperParser::MultiplicativeContext * /*ctx*/) override { }
  virtual void exitMultiplicative(HopperParser::MultiplicativeContext * /*ctx*/) override { }

  virtual void enterUnary(HopperParser::UnaryContext * /*ctx*/) override { }
  virtual void exitUnary(HopperParser::UnaryContext * /*ctx*/) override { }

  virtual void enterPrimary(HopperParser::PrimaryContext * /*ctx*/) override { }
  virtual void exitPrimary(HopperParser::PrimaryContext * /*ctx*/) override { }

  virtual void enterArgList(HopperParser::ArgListContext * /*ctx*/) override { }
  virtual void exitArgList(HopperParser::ArgListContext * /*ctx*/) override { }

  virtual void enterLiteral(HopperParser::LiteralContext * /*ctx*/) override { }
  virtual void exitLiteral(HopperParser::LiteralContext * /*ctx*/) override { }


  virtual void enterEveryRule(antlr4::ParserRuleContext * /*ctx*/) override { }
  virtual void exitEveryRule(antlr4::ParserRuleContext * /*ctx*/) override { }
  virtual void visitTerminal(antlr4::tree::TerminalNode * /*node*/) override { }
  virtual void visitErrorNode(antlr4::tree::ErrorNode * /*node*/) override { }

};

