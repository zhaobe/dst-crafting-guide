# dst-crafting-guide

A quick web browser crafting list for Don't Starve Together where you customize your own list and quickly search for it.

DONE:
- search - returns any row that has the search keyword
- add item
- add item success message
- remove function
- add local libraries
- sortable columns
- edit function

TODO:
- add item value checking - delay until other functions are done
	- use ngRequired or form required, only name for now
- add item persist



BUGS/ISSUES:
- edit item name does not allow more than one character
	- solved by using id key
- but using counter for each item creates static id, if all items are deleted except newest item, then duplicate id will appear..
