var http = require("http");
setInterval(function() {
  http.get("http://asmuch.herokuapp.com");
}, 600000); // every 10 minutes (300000)
