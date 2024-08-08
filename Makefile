.PHONY: all clean package

all: package

package:
	name=transgender-pride-3-$$(jshon -e version -u < manifest.json).zip && \
	7z a -tzip $$name '-xr!*~' -'xr!.*' '-xr!*.zip' '-xr!system_theme_watcher*' '-xr!Makefile' . && \
	7z l $$name

clean:
	-rm *.zip
