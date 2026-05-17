CXX      := g++
CXXFLAGS := -std=c++17 -fPIC -O2 -I/usr/include/antlr4-runtime -I../generated_cpp
LDFLAGS  := -shared -lantlr4-runtime
OUT      := libhopperparse.so

GENERATED_SRC := \
    ../generated_cpp/HopperLexer.cpp  \
    ../generated_cpp/HopperParser.cpp \
    ../generated_cpp/HopperBaseVisitor.cpp \
    ../generated_cpp/HopperVisitor.cpp

SRC := hopper_parse_api.cpp $(GENERATED_SRC)

$(OUT): $(SRC)
	$(CXX) $(CXXFLAGS) $(LDFLAGS) $^ -o $@

clean:
	rm -f $(OUT) *.o

.PHONY: clean
