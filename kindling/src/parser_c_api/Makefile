CXX      := g++
CXXFLAGS := -std=c++17 -O2 -I/usr/include/antlr4-runtime -I../generated_cpp
OUT      := libhopperparse.a
TEST_BIN := test_api

ANTLR4_A := $(shell find /usr -name "libantlr4-runtime.a" 2>/dev/null | head -1)

GENERATED_SRC := \
    ../generated_cpp/HopperLexer.cpp  \
    ../generated_cpp/HopperParser.cpp \
    ../generated_cpp/HopperBaseVisitor.cpp \
    ../generated_cpp/HopperVisitor.cpp

SRC     := hopper_parse_api.cpp $(GENERATED_SRC)
OBJS    := $(SRC:.cpp=.o)

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Bundle our object files + all ANTLR4 objects into one static archive.
$(OUT): $(OBJS)
	@if [ -z "$(ANTLR4_A)" ]; then \
	    echo "error: libantlr4-runtime.a not found — install libantlr4-dev"; exit 1; fi
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
