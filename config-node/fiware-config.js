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
