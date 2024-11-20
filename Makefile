gendiff:
	node bin/gendiff.js

lint:
	npm run lint

test-coverage:
	npm test -- --coverage --coverageProvider=v8

fix: 
	npx eslint --fix