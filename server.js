const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname+'/dist/public')))

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/public/', 'index.html'));
});


app.listen(3000, () => {
	console.log('now listening on port 3k')
})