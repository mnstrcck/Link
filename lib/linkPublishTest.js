// Generated by CoffeeScript 1.6.3
(function() {
  var LinkPublisher, bitcoin, client, readline, rl;

  readline = require("readline");

  LinkPublisher = require("./linkPublisher").LinkPublisher;

  bitcoin = require("bitcoin");

  client = new bitcoin.Client({
    host: 'localhost',
    port: 8332,
    user: 'Kevlar',
    pass: 'zabbas',
    version: 14
  });

  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Payload: ", function(magnet) {
    return rl.question("Name: ", function(name) {
      return rl.question("Keywords: ", function(keywords) {
        var publisher;
        publisher = new LinkPublisher(client);
        publisher.publish({
          payloadInline: magnet,
          name: name,
          keywords: keywords
        }, console.log);
        return rl.close();
      });
    });
  });

}).call(this);
