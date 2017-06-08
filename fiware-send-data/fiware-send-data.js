module.exports = function(RED) {
    //use this module to make requests
    var d = require('debug')('fiware')
    var request=require('request');

    function FiwareSendData(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.status();

        node.server = RED.nodes.getNode(config.server);
        node.on('input', function(msg) {

            payload = JSON.parse(msg.payload);

            var deviceid = config.deviceid || payload.deviceID;
            var attribute = config.attribute || payload.componentID;

            if (deviceid == "" || attribute == "") {
              node.status({fill:"red",shape:"ring",text:"Missing parameters"});
              RED.log.warn('Invalid deviceid or attribute');
              return;
            }

            node.status({fill:"blue",shape:"ring",text:"sending"});
            d("Testing debug");
            d(`Trying to send payload ${msg.payload} to ${deviceid}.${attribute}`);

            var options = {
                url: node.server.idas_server_url,
                qs: { k: node.server.apikey, i: deviceid },
                method: 'POST',
                headers: {
                    'Fiware-Service':node.server.service,
                    'Fiware-ServicePath':node.server.servicepath,
                    'Content-Type':'text/plain'
                },
                body: `${attribute}|${payload.value}`
            };

            request(options, function(err, res, body) {
                if (err) {
                    node.status({fill:"red",shape:"ring",text:"disconnected"});
                }
                else {
                  console.log(res.statusCode +' ' + res.body);

                  if (res.statusCode===200) {
                      node.status({fill:"green",shape:"dot",text:"sent"});
                  }

                  if(res.statusCode===403) {
                      node.status({fill:"yellow", shape:"ring", text:"Unauthorized"});
                  }
                }
            })

        });

    }

    RED.nodes.registerType("fiware-send-data", FiwareSendData);
}
