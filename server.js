const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	// console.log(req)
	if (!req.query.journalId ) {
		res.render('jSelect', {
			action: "Select",
			alertMessage: "Please choose Journal to open."
		})
	} else {
		// lookup req.characterName and req.journalName and put in
		journalEntryFound = false;
		if (!journalEntryFound) {
			console.log('can not find journalEntry')
			res.render('jSelect', {
				action: "Alert",
				alertMessage: "Requested entry not found"
			})
		} else {
			const journalEntry = {}
			res.render('main', journalEntry)
		}
	}
})

app.route('/j/:journalName/:id')
	.get( (req, res) => {
		console.log(req.params)
		res.render('main')
		// res.send(`GET ${req.params['journalName']} id: ${req.params['id']}`)
	})
	.post((req, res) => {
		console.log(req.params)
		res.send(`POST ${req.params['journalName']} id: ${req.params['id']}`)
	})
	.delete((req, res) => {
		console.log(req.params)
		res.send(`DELETE ${req.params['journalName']} id: ${req.params['id']}`)		
	})
app.listen(PORT, () => console.log(`app listening on ${PORT}`))