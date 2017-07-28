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
