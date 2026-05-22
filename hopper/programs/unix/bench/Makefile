CC      = cc
CFLAGS  = -O2 -Wall -Wextra
TARGET  = bench

$(TARGET): bench.c
	$(CC) $(CFLAGS) -o $(TARGET) bench.c

clean:
	rm -f $(TARGET)

.PHONY: clean
