var http = require("http");
setInterval(function() {
  http.get("www.asmuch.xyz");
}, 300000);
// 300000 request all 5 min
