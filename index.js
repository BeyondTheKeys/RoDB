const express = require('express');
const db = require('quick.db')

const app = express();

app.get('/', (req, res) => {
  res.send('RoDB: <a href="https://github.com/BeyondTheKeys/RoDB">Github</a>')
});
app.get('/api/get', (req, res) => {
	const getData = db.get(req.body.key)
	res.json({success: 'true', value: getData})
});
app.get('/api/all', (req, res) => {
	const getData = db.all()
	res.json({success: 'true', value: getData})
});
app.post('/api/set', (req, res) => {
	try {
		db.set(req.body.key, req.body.value)
		res.json({success: 'true'})
	} catch(error) {
		res.json({success: 'false'})
	}
});

app.listen(3000, () => {
  console.log('Server Started');
});
