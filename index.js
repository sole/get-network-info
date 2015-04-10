'use strict';

module.exports = function getNetworkInfo() {
	return new Promise(function(resolve, reject) {
	
		var info = {};
		var wifiManager = navigator.mozWifiManager;
    
		if(!wifiManager) {
		  return reject('Not available');
		}
		
		var connInfo = wifiManager.connectionInformation;
		var status = wifiManager.connection.status;
   
		info.status = status;
		info.mac = wifiManager.macAddress;

		if(status === 'associated' || status === 'connected') {
			var network = wifiManager.connection.network;
			info.networkName = network.ssid;
			info.networkSecurity = network.security;
		}

		if(connInfo) {
			info.ip = connInfo.ipAddress;
		}
    
		return resolve(info);
	});
};
