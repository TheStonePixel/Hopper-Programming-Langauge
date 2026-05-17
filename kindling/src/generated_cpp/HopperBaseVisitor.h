
// Generated from kindling/grammar/Hopper.g4 by ANTLR 4.13.1

#pragma once


#include "antlr4-runtime.h"
#include "HopperVisitor.h"


/**
 * This class provides an empty implementation of HopperVisitor, which can be
 * extended to create a visitor which only needs to handle a subset of the available methods.
 */
class  HopperBaseVisitor : public HopperVisitor {
public:

  virtual std::any visitProgram(HopperParser::ProgramContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTopLevelDecl(HopperParser::TopLevelDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitImportFrom(HopperParser::ImportFromContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitImportModule(HopperParser::ImportModuleContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBindDecl(HopperParser::BindDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitStrictDecl(HopperParser::StrictDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitEntryBlockParams(HopperParser::EntryBlockParamsContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitEntryBlock(HopperParser::EntryBlockContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitEntryAddr(HopperParser::EntryAddrContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitConstDecl(HopperParser::ConstDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAliasDecl(HopperParser::AliasDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitExternFuncDecl(HopperParser::ExternFuncDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitExternProcDecl(HopperParser::ExternProcDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitFuncDecl(HopperParser::FuncDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitProcDecl(HopperParser::ProcDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitRequiresClause(HopperParser::RequiresClauseContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitEnsuresClause(HopperParser::EnsuresClauseContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitStructDecl(HopperParser::StructDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitStructField(HopperParser::StructFieldContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitStructPad(HopperParser::StructPadContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBitfieldDecl(HopperParser::BitfieldDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBitfieldArrayField(HopperParser::BitfieldArrayFieldContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBitfieldField(HopperParser::BitfieldFieldContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBitfieldPad(HopperParser::BitfieldPadContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTemplateDecl(HopperParser::TemplateDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTemplateName(HopperParser::TemplateNameContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitFreeParam(HopperParser::FreeParamContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitFixedParam(HopperParser::FixedParamContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitInterfaceDecl(HopperParser::InterfaceDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitInterfaceFunc(HopperParser::InterfaceFuncContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitInterfaceProc(HopperParser::InterfaceProcContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitClassDecl(HopperParser::ClassDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitClassName(HopperParser::ClassNameContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitImplementsList(HopperParser::ImplementsListContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitClassField(HopperParser::ClassFieldContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitClassMethod(HopperParser::ClassMethodContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitClassProcMethod(HopperParser::ClassProcMethodContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitClassOperator(HopperParser::ClassOperatorContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitClassConstructor(HopperParser::ClassConstructorContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitClassDestructor(HopperParser::ClassDestructorContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitFieldName(HopperParser::FieldNameContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitOperatorSymbol(HopperParser::OperatorSymbolContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitParamList(HopperParser::ParamListContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitExternParamList(HopperParser::ExternParamListContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitParam(HopperParser::ParamContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitParamName(HopperParser::ParamNameContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitType(HopperParser::TypeContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBlock(HopperParser::BlockContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitArrayDeclInit(HopperParser::ArrayDeclInitContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitArrayDecl(HopperParser::ArrayDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAllocateVarDecl(HopperParser::AllocateVarDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitVarDecl(HopperParser::VarDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitVarDeclNoInit(HopperParser::VarDeclNoInitContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitArrayAssign(HopperParser::ArrayAssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAllocateAssign(HopperParser::AllocateAssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAssign(HopperParser::AssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitNestedFieldAssign(HopperParser::NestedFieldAssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAllocateFieldAssign(HopperParser::AllocateFieldAssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitFieldAssign(HopperParser::FieldAssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitDerefAssign(HopperParser::DerefAssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitExprStmt(HopperParser::ExprStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitIfStmt(HopperParser::IfStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitWhileStmt(HopperParser::WhileStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitForStmt(HopperParser::ForStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBreakStmt(HopperParser::BreakStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitContinueStmt(HopperParser::ContinueStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitReturnStmt(HopperParser::ReturnStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitDeferStmt(HopperParser::DeferStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitDeallocateStmt(HopperParser::DeallocateStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAsmStmt(HopperParser::AsmStmtContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitConstrainClause(HopperParser::ConstrainClauseContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitInvariantClause(HopperParser::InvariantClauseContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAsmBlock(HopperParser::AsmBlockContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAsmLineAssign(HopperParser::AsmLineAssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAsmLineOp(HopperParser::AsmLineOpContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAsmOperand(HopperParser::AsmOperandContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitForInitDecl(HopperParser::ForInitDeclContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitForInitAssign(HopperParser::ForInitAssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitForUpdate(HopperParser::ForUpdateContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitExpression(HopperParser::ExpressionContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitLogicalOr(HopperParser::LogicalOrContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitLogicalAnd(HopperParser::LogicalAndContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBitwiseOr(HopperParser::BitwiseOrContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBitwiseXor(HopperParser::BitwiseXorContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBitwiseAnd(HopperParser::BitwiseAndContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitEquality(HopperParser::EqualityContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitRelational(HopperParser::RelationalContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitShift(HopperParser::ShiftContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAdditive(HopperParser::AdditiveContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitMultiplicative(HopperParser::MultiplicativeContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitUnary(HopperParser::UnaryContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitPrimary(HopperParser::PrimaryContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitArgList(HopperParser::ArgListContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitLiteral(HopperParser::LiteralContext *ctx) override {
    return visitChildren(ctx);
  }


};

