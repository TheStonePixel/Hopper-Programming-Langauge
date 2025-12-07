; Hopper module

declare i32 @putchar(i32)
define i32 @add(i32 %p0, i32 %p1) {
entry:
%t0 = alloca i32
store i32 %p0, i32* %t0
%t1 = alloca i32
store i32 %p1, i32* %t1
%t2 = load i32, i32* %t0
%t3 = load i32, i32* %t1
%t4 = add i32 %t2, %t3
ret i32 %t4
ret i32 0
}

define i32 @main() {
entry:
%t0 = alloca i32
store i32 0, i32* %t0
%t1 = alloca i32
store i32 25, i32* %t1
br label %while.cond.0
while.cond.0:
%t2 = load i32, i32* %t0
%t3 = icmp slt i32 %t2, 26
br i1 %t3, label %while.body.1, label %while.end.2
while.body.1:
%t4 = load i32, i32* %t0
%t5 = add i32 65, %t4
%t6 = call i32 @putchar(i32 %t5)
%t7 = load i32, i32* %t0
%t8 = add i32 %t7, 1
store i32 %t8, i32* %t0
br label %while.cond.0
while.end.2:
%t9 = call i32 @putchar(i32 10)
ret i32 0
ret i32 0
}


