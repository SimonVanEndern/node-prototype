var express = require('express')

var app = express();

app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res, err) {
	res.status(200);
	res.send("Hello world");
});

app.listen(8000, function (err) {
	if (err) console.log(err)
	else console.log("Running")
});
