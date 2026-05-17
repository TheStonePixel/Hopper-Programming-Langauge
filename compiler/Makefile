KINDLING   := node ../kindling/hopper
PARSER_DIR := ../kindling/src/parser_c_api
RT_DIR     := ../kindling/src/compiler_rt
BUILD      := ../build

PARSER_SO  := $(PARSER_DIR)/libhopperparse.so
RT_OBJ     := $(RT_DIR)/compiler_rt.o

HOP_SRCS   := main.hop

all: $(BUILD)/hopper

$(RT_OBJ): $(RT_DIR)/compiler_rt.c
	cc -c $< -o $@

$(PARSER_SO):
	$(MAKE) -C $(PARSER_DIR)

$(BUILD)/hopper: $(HOP_SRCS) $(RT_OBJ) $(PARSER_SO)
	$(KINDLING) build $(HOP_SRCS) -o $(BUILD)/hopper \
	    $(RT_OBJ) \
	    -L$(PARSER_DIR) -lhopperparse -lantlr4-runtime -lstdc++ \
	    '-Wl,-rpath,$$ORIGIN'
	cp $(PARSER_SO) $(BUILD)/libhopperparse.so

clean:
	rm -f $(BUILD)/hopper $(BUILD)/libhopperparse.so $(RT_OBJ)

.PHONY: all clean
