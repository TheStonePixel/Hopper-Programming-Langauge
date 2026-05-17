NODE     := $(shell which node 2>/dev/null || echo node)
KINDLING := $(NODE) ../kindling/hopper
BUILD    := ../build

HOP_SRCS := compiler.hop

all: $(BUILD)/hopper

$(BUILD)/hopper: $(HOP_SRCS)
	$(KINDLING) build $(HOP_SRCS) -o $(BUILD)/hopper

clean:
	rm -f $(BUILD)/hopper

.PHONY: all clean
