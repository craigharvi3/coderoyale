.PHONY: clean build

clean:
	rm -rf assets dist yarn-error.log

build: clean
	### Install the dependencies and the dev dependencies
	yarn install
	### Run the tests
	yarn test
	### Build the code for the app
	yarn build
	### Prepare the source file and templates
	cp -r src/views dist/views
	### Prune the dev dependencies out and remove duplicates
	# yarn install --production