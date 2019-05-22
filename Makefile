.DEFAULT_GOAL := build_all

build_zip:
	@echo "Packaging to zip"
	@zip -r -FS Rasmus-Pandekage.zip * --exclude *.git*

build_xpi: build_zip
	@echo "Building xpi for Firefox"
	@cp Rasmus-Pandekage.zip Rasmus-Pandekage.xpi
	@echo "Built xpi for Firefox"

#build_crx: build_zip
#	@echo "Building crx for Chrome"
#	@cp Rasmus-Pandekage.zip Rasmus-Pandekage.crx
#	@echo "Built crx for Chrome"

build_all: build_xpi #build_crx
	@echo "All builds complete"

clean:
	@echo "Removing build artefacts"
	@rm Rasmus-Pandekage.zip Rasmus-Pandekage.xpi #Rasmus-Pandekage.crx