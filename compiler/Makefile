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

# Prefer static libstdc++ to avoid requiring libstdc++-dev on the target machine,
# but fall back to dynamic if the static version isn't installed.
LIBSTDCXX_A := $(shell g++ -print-file-name=libstdc++.a 2>/dev/null)
ifneq ($(LIBSTDCXX_A),libstdc++.a)
    STDCXX_LINK := -Wl,-Bstatic -lstdc++ -Wl,-Bdynamic -lgcc_s -lgcc
else
    STDCXX_LINK := -lstdc++
endif

$(BUILD)/hopper: $(HOP_SRCS) $(RT_OBJ) $(PARSER_A)
	$(KINDLING) build $(HOP_SRCS) -o $(BUILD)/hopper \
	    $(RT_OBJ) $(PARSER_A) $(STDCXX_LINK)

clean:
	rm -f $(BUILD)/hopper $(RT_OBJ)

.PHONY: all clean
