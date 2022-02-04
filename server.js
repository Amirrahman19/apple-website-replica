const express = require('express');
const serveStatic = require('serve-static');

var hostname = "localhost";
var port = 3001;

var app = express();

app.use(function (req, res, next) {
  console.log(req.url);
  console.log(req.method);
  console.log(req.path);
  console.log(req.query.id);

  if (req.method != "GET") {
    res.type('.html');
    var msg = "<html><body>This server only serves web pages with GET!</body></html>";
    res.end(msg);
  } else {
    next();
  }
});

app.get("/login/", (req, res) => {
  res.sendFile("/public/Login.html", { root: __dirname });
});

app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

// app.get("/admin/users/", (req, res) => {
//   res.sendFile("/public/admin/index.html", { root: __dirname });
// });

// app.get("/reviews/:id", (req, res) => {
//   req.productId = req.params.id
//   res.sendfile("/public/reviews.html", { root: __dirname })
// })

app.use(serveStatic(__dirname + "/public"));


app.listen(port, hostname, function () {

  console.log(`Server hosted at http://${hostname}:${port}`);
});