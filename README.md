# dst-crafting-guide

A quick web browser crafting list for Don't Starve Together where you customize your own list and quickly search for it.

## DONE:
- search - returns any row that has the search keyword
- add item
- add item success message
- remove function
- add local libraries
- sortable columns
- edit function

## TODO:
- add jasmine bdd testing
- add item value checking - delay until other functions are done
	- use ngRequired or form required, only name for now
- add item persist

## BUGS/ISSUES:
- edit item name does not allow more than one character
	- solved by using id key
- but using counter for each item creates static id, if all items are deleted except newest item, then duplicate id will appear..
	- simple reproduce: add new item, delete item 2 and 3 and you get a duplicate id, where editing item makes two rows appear
- sorting column is not available anymore
- search does not work with track by in ng-repeat for search (taking out and add back as needed)
	- after removing track by $index, the search shifts the index of list when user is searching for item

## TESTING:
- run `npm install -g karma-cli` to install karma cli globally so no need to re-run `./node_modules/karma/bin/karma start`
- ~~instead just use `karma start karma.conf.js` to run testing~~
- `npm test` should be sufficient
- when you save new changes to the test JS file, the console should update on test results

## DEBUG:
- use this for debugging karma `karma start my.conf.js --log-level debug --single-run`