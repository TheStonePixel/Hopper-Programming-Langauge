CXX      := g++
CXXFLAGS := -std=c++17 -fPIC -O2 -I/usr/include/antlr4-runtime -I../generated_cpp
LDFLAGS  := -shared -lantlr4-runtime
OUT      := libhopperparse.so
TEST_BIN := test_api

GENERATED_SRC := \
    ../generated_cpp/HopperLexer.cpp  \
    ../generated_cpp/HopperParser.cpp \
    ../generated_cpp/HopperBaseVisitor.cpp \
    ../generated_cpp/HopperVisitor.cpp

SRC := hopper_parse_api.cpp $(GENERATED_SRC)

$(OUT): $(SRC)
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $^ -o $@

$(TEST_BIN): test_api.cpp $(OUT)
	$(CXX) -std=c++17 -I/usr/include/antlr4-runtime -I../generated_cpp \
	    test_api.cpp -o $@ -L. -lhopperparse -lantlr4-runtime -lstdc++

test: $(TEST_BIN)
	LD_LIBRARY_PATH=. ./$(TEST_BIN)

clean:
	rm -f $(OUT) $(TEST_BIN) *.o

.PHONY: test clean
