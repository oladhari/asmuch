import { get } from "http";
setInterval(function() {
  get("http://asmuch.herokuapp.com");
}, 600000); // every 10 minutes (300000)
