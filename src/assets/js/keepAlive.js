var http = require("http");
setInterval(function() {
    http.get("www.asmuch.xyz");
}, 1500000); // every 25 minutes (1500000)