CXX      := g++
CXXFLAGS := -std=c++17 -O2 -I/usr/include/antlr4-runtime -I../generated_cpp
OUT      := libhopperparse.a
TEST_BIN := test_api

ANTLR4_A     := $(shell find /usr -name "libantlr4-runtime.a" 2>/dev/null | head -1)
ANTLR4_HDR   := $(shell find /usr/include -name "antlr4-runtime.h" 2>/dev/null | head -1)
HAS_GPP      := $(shell command -v g++ 2>/dev/null)

define PREREQ_MSG
Missing build dependencies. Install with:
  sudo apt install g++ libantlr4-runtime-dev
endef
export PREREQ_MSG

GENERATED_SRC := \
    ../generated_cpp/HopperLexer.cpp  \
    ../generated_cpp/HopperParser.cpp \
    ../generated_cpp/HopperBaseVisitor.cpp \
    ../generated_cpp/HopperVisitor.cpp

SRC     := hopper_parse_api.cpp $(GENERATED_SRC)
OBJS    := $(SRC:.cpp=.o)

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

check-prereqs:
	@if [ -z "$(HAS_GPP)" ] || [ -z "$(ANTLR4_HDR)" ] || [ -z "$(ANTLR4_A)" ]; then \
	    echo "$$PREREQ_MSG"; exit 1; fi

# Bundle our object files + all ANTLR4 objects into one static archive.
$(OUT): check-prereqs $(OBJS)
	cp $(ANTLR4_A) $@
	ar rs $@ $(OBJS)

$(TEST_BIN): test_api.cpp $(OUT)
	$(CXX) -std=c++17 -I/usr/include/antlr4-runtime -I../generated_cpp \
	    test_api.cpp $(OUT) -lstdc++ -o $@

test: $(TEST_BIN)
	./$(TEST_BIN)

clean:
	rm -f $(OUT) $(TEST_BIN) *.o ../generated_cpp/*.o

.PHONY: test clean
