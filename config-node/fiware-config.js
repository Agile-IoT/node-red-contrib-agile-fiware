/*******************************************************************************
* Copyright (c) 2017 Atos, and others
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the Eclipse Public License 2.0
* which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-2.0/
*
* Contributors:
* Atos - initial implementation
*******************************************************************************/
module.exports = function(RED) {
    function FiwareConfigNode(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.apikey = config.apikey;
        this.idas_server_url = config.idas_server_url;
        this.service = config.service;
        this.servicepath = config.servicepath;
    }
    RED.nodes.registerType("fiware-config",FiwareConfigNode);
}
