NODE       := $(shell which node 2>/dev/null || echo node)
KINDLING   := $(NODE) ../kindling/hopper
PARSER_DIR := ../kindling/src/parser_c_api
RT_DIR     := ../kindling/src/compiler_rt
BUILD      := ../build

PARSER_A   := $(PARSER_DIR)/libhopperparse.a
RT_OBJ     := $(RT_DIR)/compiler_rt.o

HOP_SRCS   := main.hop

all: $(BUILD)/hopper

$(RT_OBJ): $(RT_DIR)/compiler_rt.c
	cc -c $< -o $@

$(PARSER_A):
	$(MAKE) -C $(PARSER_DIR)

$(BUILD)/hopper: $(HOP_SRCS) $(RT_OBJ) $(PARSER_A)
	$(KINDLING) build $(HOP_SRCS) -o $(BUILD)/hopper \
	    $(RT_OBJ) $(PARSER_A) \
	    -Wl,-Bstatic -lstdc++ -Wl,-Bdynamic -lgcc_s -lgcc

clean:
	rm -f $(BUILD)/hopper $(RT_OBJ)

.PHONY: all clean
