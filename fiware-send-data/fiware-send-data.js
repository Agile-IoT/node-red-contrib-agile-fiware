/*******************************************************************************
 *Copyright (C) 2017 ATOS.
 *All rights reserved. This program and the accompanying materials
 *are made available under the terms of the Eclipse Public License v1.0
 *which accompanies this distribution, and is available at
 *http://www.eclipse.org/legal/epl-v10.html
 *
 *Contributors:
 *    ATOS - initial API and implementation
 ******************************************************************************/
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

            function show_error(msg) {
                node.status({fill:"red",shape:"ring",text:"Missing parameters"});
                RED.log.error(msg);
            }

            payload = JSON.parse(msg.payload);

            var deviceid = config.deviceid || payload.deviceID || "";
            var attribute = config.attribute || payload.componentID || "";
            var apikey = node.server.apikey || msg.apikey || "";

            if (deviceid == "") {
                show_error("Deviceid is missing. Either specify config.attribute or msg.payload.deviceID");
                return;
            }
            if (attribute == "") {
                show_error("Attribute is missing. Either specify config.attribute or msg.payload.componentID");
                return;
            }
            if (apikey == "") {
                show_error("Apikey is missing. Either specify config.server.apikey or msg.apikey");
                return;
            }

            node.status({fill:"blue",shape:"ring",text:"sending"});
            d("Testing debug");

            var options = {
                url: node.server.idas_server_url,
                qs: { k: apikey, i: deviceid },
                method: 'POST',
                headers: {
                    'Fiware-Service':node.server.service,
                    'Fiware-ServicePath':node.server.servicepath,
                    'Content-Type':'text/plain'
                },
                body: `${attribute}|${payload.value}`
            };
            d(`Sending FIWARE request: ${JSON.stringify(options)}`)
            request(options, function(err, res, body) {
                if (err) {
                    node.status({fill:"red",shape:"ring",text:"disconnected"});
                }
                else {
                  console.log(res.statusCode +' ' + res.body);

                  if (res.statusCode===200) {
                      node.status({fill:"green",shape:"dot",text:"sent"});
                  } else {
                      var msg = JSON.parse(res.body)["message"] || "<unknown error>";
                      node.status({fill:"red", shape:"ring", text:res.statusCode});
                      RED.log.error(`Error sending FIWARE data: ${msg}`);
                  }
                }
            })

        });

    }

    RED.nodes.registerType("fiware-send-data", FiwareSendData);
}
