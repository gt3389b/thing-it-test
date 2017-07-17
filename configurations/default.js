module.exports = {"uuid":"a5272040-69a3-11e7-b199-7dc267e39a3c","id":"default",
   "autoDiscoveryDeviceTypes":[
      {"plugin":"ti-sensortag/tiSensorTag","confirmRegistration":true,"persistRegistration":true,"defaultConfiguration":{"accelerometerEnabled":true,"accelerometerNotificationInterval":1000},"options":{}}],
   "devices":[{"id":"device1","label":"ti-sensortag/tiSensorTag 1","plugin":"ti-sensortag/tiSensorTag",
                  "configuration":{"accelerometerEnabled":true,"accelerometerNotificationInterval":1000},"actors":[],"sensors":[],"uuid":"5327451e3a4646d385a2fc651a0a12f7"},
              {"id":"device2","label":"ti-sensortag/tiSensorTag 2","plugin":"ti-sensortag/tiSensorTag",
                  "configuration":{
                     //"accelerometerEnabled":true,"accelerometerNotificationInterval":1000,
                     "luxometerEnabled":true,"luxometerNotificationInterval":1000
                  },"actors":[],"sensors":[],"uuid":"7fb041ff2d67492897e8870355a799aa"}],
   "services":[],
	eventProcessors: [{
					id: "eventProcessor1",
					label: "Event Processor 1",
					observables: ["device2"],
					trigger: {
						type: "timeInterval",
						content: {
							interval: 2000,
                     observable: "device2",
                     cumulation: "maximum",
                     stateVariable: "luminousIntensity",
                     compareOperator: "<",
                     compareValue: 600
                     }
					},
					action: {
                  type: "script", "content": {"script": "console.log('hello world', this)"}
					}
			}],
   "jobs":[],"groups":[],"data":[],"lastModificationTimestamp":"2017-07-15T19:40:25-04:00"};
