sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"
], function(Controller, MessageToast) {
	"use strict";

	var BPCL = {
		"BPCL": [{
			"Region": "Onshore",
			"LOCATION": "Gujarat",
			"VALUEP1": "110424.323",
			"VALUEC1": "87243.566",
			"VALUEP": "110424.323",
			"VALUEC": "87243.566",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "83789.63",
			"VALUEC": "83789.63",
			"LOCATION": "Assam",
			"VALUEP1": "895.722",
			"VALUEP": "895.722",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "56532.235",
			"VALUEC": "56532.235",
			"LOCATION": "Arunachal Pradesh",
			"VALUEP1": "2538.786",
			"VALUEP": "2538.786",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "337653.3553",
			"VALUEC": "337653.3553",
			"LOCATION": "Tamil Nadu",
			"VALUEP1": "5079.029",
			"VALUEP": "5079.029",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "398597.634",
			"VALUEC": "398597.634",
			"LOCATION": "Andhra Pradesh",
			"VALUEP1": "253.147",
			"VALUEP": "253.147",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "652947.573",
			"VALUEC": "652947.573",
			"VALUEP1": "209.912",
			"VALUEP": "209.912",
			"LOCATION": "Rajasthan",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""

		}, {
			"Region": "Offshore",
			"VALUEC2": "74629.452",
			"VALUEC": "74629.452",
			"LOCATION": "ONGC",
			"VALUEP2": "110424.323",
			"VALUEP": "110424.323",

			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Offshore",
			"VALUEC2": "1133123.355",
			"VALUEC": "1133123.355",
			"LOCATION": "PSC Regime",
			"VALUEP2": "895.722",
			"VALUEP": "895.722",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Condensate",
			"VALUEC3": "346212.5235",
			"VALUEC": "346212.5235",
			"LOCATION": "ONGC",
			"VALUEP3": "2657.249",
			"VALUEP": "2657.249",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP1": "",
			"VALUEC1": ""
		}, {
			"Region": "Condensate",
			"VALUEC3": "435557.35",
			"VALUEC": "435557.35",
			"LOCATION": "PSC Regime",
			"VALUEP3": "5282.99",
			"VALUEP": "5282.99",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP1": "",
			"VALUEC1": ""
		}]
	};
	var IOC = {
		"IOC": [{
			"VALUEC1": "54346.876",
			"VALUEC": "54346.876",
			"Region": "Onshore",
			"LOCATION": "Gujarat",
			"VALUEP1": "310424.323",
			"VALUEP": "310424.323",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "97536.655",
			"VALUEC": "97536.655",
			"LOCATION": "Assam",
			"VALUEP1": "1895.722",
			"VALUEP": "1895.722",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "178638.487",
			"VALUEC": "178638.487",

			"LOCATION": "Arunachal Pradesh",
			"VALUEP1": "3538.786",
			"VALUEP": "3538.786",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "112342.24",
			"VALUEC": "112342.24",
			"LOCATION": "Tamil Nadu",
			"VALUEP1": "6079.029",
			"VALUEP": "6079.029",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "23512.2536",
			"VALUEC": "23512.2536",
			"LOCATION": "Andhra Pradesh",
			"VALUEP1": "112153.147",
			"VALUEP": "112153.147",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "595.53",
			"VALUEC": "595.53",
			"LOCATION": "Rajasthan",
			"VALUEP1": "20130.802",
			"VALUEP": "20130.802",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"VALUEC2": "224545.53",
			"VALUEC": "224545.53",
			"Region": "Offshore",
			"LOCATION": "ONGC",
			"VALUEP2": "10424.323",
			"VALUEP": "10424.323",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Offshore",
			"VALUEC2": "311562.35",
			"VALUEC": "311562.35",
			"LOCATION": "PSC Regime",
			"VALUEP2": "4894.722",
			"VALUEP": "4894.722",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"VALUEC3": "326236.36",
			"VALUEC": "326236.36",
			"Region": "Condensate",
			"LOCATION": "ONGC",
			"VALUEP3": "610424.323",
			"VALUEP": "610424.323",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP1": "",
			"VALUEC1": ""
		}, {
			"Region": "Condensate",
			"VALUEC3": "3526.235",
			"VALUEC": "3526.235",
			"LOCATION": "PSC Regime",
			"VALUEP3": "1894.722",
			"VALUEP": "1894.722",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP1": "",
			"VALUEC1": ""
		}]
	};
	var HINDPETRO = {
		"HINDPETRO": [{
			"Region": "Onshore",
			"VALUEC1": "312452.42",
			"VALUEC": "312452.42",
			"LOCATION": "Gujarat",
			"VALUEP1": "127611.66",
			"VALUEP": "127611.66",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "83789.63",
			"VALUEC": "83789.63",
			"LOCATION": "Assam",
			"VALUEP1": "895.722",
			"VALUEP": "895.722",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "56532.235",
			"VALUEC": "56532.235",
			"LOCATION": "Arunachal Pradesh",
			"VALUEP1": "2538.786",
			"VALUEP": "2538.786",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "337653.3553",
			"VALUEC": "337653.3553",
			"LOCATION": "Tamil Nadu",
			"VALUEP1": "5079.029",
			"VALUEP": "5079.029",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "398597.634",
			"VALUEC": "398597.634",
			"LOCATION": "Andhra Pradesh",
			"VALUEP1": "253.147",
			"VALUEP": "253.147",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "652947.573",
			"VALUEC": "652947.573",
			"VALUEP1": "209.912",
			"VALUEP": "209.912",
			"LOCATION": "Rajasthan",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""

		}, {
			"VALUEC2": "224545.53",
			"VALUEC": "224545.53",
			"Region": "Offshore",
			"LOCATION": "ONGC",
			"VALUEP2": "10424.323",
			"VALUEP": "10424.323",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Offshore",
			"VALUEC2": "311562.35",
			"VALUEC": "311562.35",
			"LOCATION": "PSC Regime",
			"VALUEP2": "4894.722",
			"VALUEP": "4894.722",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"VALUEC3": "326236.36",
			"VALUEC": "326236.36",
			"Region": "Condensate",
			"LOCATION": "ONGC",
			"VALUEP3": "610424.323",
			"VALUEP": "610424.323",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP1": "",
			"VALUEC1": ""
		}, {
			"Region": "Condensate",
			"VALUEC3": "836899.24",
			"VALUEC": "836899.24",
			"LOCATION": "PSC Regime",
			"VALUEP3": "5500.949",
			"VALUEP": "5500.949",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP1": "",
			"VALUEC1": ""
		}]
	};
	var BPCL1 = {
		"BPCL1": [{
			"Region": "Onshore",
			"LOCATION": "Gujarat",
			"VALUEP1": "10424.323",
			"VALUEC1": "1187243.566",
			"VALUEP": "10424.323",
			"VALUEC": "1187243.566",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "789.63",
			"VALUEC": "789.63",
			"LOCATION": "Assam",
			"VALUEP1": "234895.722",
			"VALUEP": "234895.722",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "123532.235",
			"VALUEC": "123532.235",
			"LOCATION": "Arunachal Pradesh",
			"VALUEP1": "538.786",
			"VALUEP": "538.786",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "423532.235",
			"VALUEC": "423532.235",
			"LOCATION": "Tripura",
			"VALUEP1": "133438.786",
			"VALUEP": "133438.786",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "337653.3553",
			"VALUEC": "337653.3553",

			"LOCATION": "Tamil Nadu",
			"VALUEP1": "15079.029",
			"VALUEP": "15079.029",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "8597.634",
			"VALUEC": "8597.634",
			"LOCATION": "Andhra Pradesh",
			"VALUEP1": "23253.147",
			"VALUEP": "23253.147",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "652947.573",
			"VALUEP1": "424209.912",
			"VALUEC": "652947.573",
			"VALUEP": "424209.912",
			"LOCATION": "Rajasthan",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "352947.573",
			"VALUEP1": "1424209.912",
			"VALUEC": "352947.573",
			"VALUEP": "1424209.912",
			"LOCATION": "West Bengal",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""

		}, {
			"Region": "Onshore",
			"VALUEC1": "2947.573",
			"VALUEP1": "1224209.912",
			"VALUEC": "2947.573",
			"VALUEP": "1224209.912",
			"LOCATION": "Madhya Pradesh",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""

		}, {
			"Region": "Onshore",
			"VALUEC1": "1232947.573",
			"VALUEC": "1232947.573",
			"VALUEP1": "4209.912",
			"VALUEP": "4209.912",
			"LOCATION": "Jharkhand",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Offshore",
			"VALUEC2": "4629.452",
			"VALUEC": "4629.452",
			"LOCATION": "ONGC",
			"VALUEP2": "2110424.323",
			"VALUEP": "2110424.323",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Offshore",
			"VALUEC2": "33123.355",
			"VALUEC": "33123.355",
			"LOCATION": "PSC Regime",
			"VALUEP2": "1423895.722",
			"VALUEP": "1423895.722",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""

		}]
	};
	var IOC1 = {
		"IOC1": [{
			"VALUEC": "4346.876",
			"Region": "Onshore",
			"LOCATION": "Gujarat",
			"VALUEP": "1310424.323",
			"VALUEC1": "4346.876",
			"VALUEP1": "1310424.323",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC": "7536.655",
			"VALUEC1": "7536.655",
			"LOCATION": "Assam",
			"VALUEP": "1133895.722",
			"VALUEP1": "1133895.722",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC": "638.487",
			"VALUEC1": "638.487",
			"LOCATION": "Arunachal Pradesh",
			"VALUEP": "13538.786",
			"VALUEP1": "13538.786",
			"VALUEP2": "",
			"VALUEC2": ""
		}, {
			"Region": "Onshore",
			"VALUEC": "112342.24",
			"VALUEC1": "112342.24",
			"LOCATION": "Tamil Nadu",
			"VALUEP": "116079.029",
			"VALUEP1": "116079.029",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC": "23512.2536",
			"VALUEC1": "23512.2536",
			"LOCATION": "Andhra Pradesh",
			"VALUEP": "2153.147",
			"VALUEP1": "2153.147",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC": "595.53",
			"VALUEC1": "595.53",
			"LOCATION": "Rajasthan",
			"VALUEP": "230130.802",
			"VALUEP1": "230130.802",
			"VALUEP2": "",
			"VALUEC2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"VALUEC": "224545.53",
			"VALUEC2": "224545.53",
			"Region": "Offshore",
			"LOCATION": "ONGC",
			"VALUEP": "424.323",
			"VALUEP2": "424.323",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Offshore",
			"VALUEC": "311562.35",
			"VALUEC2": "311562.35",
			"LOCATION": "PSC Regime",
			"VALUEP": "894.722",
			"VALUEP2": "894.722",
			"VALUEP1": "",
			"VALUEC1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}]
	};
	var HINDPETRO1 = {
		"HINDPETRO1": [{
			"Region": "Onshore",
			"VALUEC1": "2452.42",
			"VALUEC": "2452.42",
			"LOCATION": "Gujarat",
			"VALUEP1": "1127611.66",
			"VALUEP": "1127611.66",
			"VALUEC2": "",
			"VALUEP2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "83789.63",
			"VALUEC": "83789.63",
			"LOCATION": "Assam",
			"VALUEP1": "895.722",
			"VALUEP": "895.722",
			"VALUEC2": "",
			"VALUEP2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "2156532.235",
			"VALUEC": "2156532.235",
			"LOCATION": "Arunachal Pradesh",
			"VALUEP1": "538.786",
			"VALUEP": "538.786",
			"VALUEC2": "",
			"VALUEP2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "653.3553",
			"VALUEC": "653.3553",
			"LOCATION": "Tamil Nadu",
			"VALUEP1": "511079.029",
			"VALUEP": "511079.029",
			"VALUEC2": "",
			"VALUEP2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "38597.634",
			"VALUEC": "38597.634",
			"LOCATION": "Andhra Pradesh",
			"VALUEP1": "23253.147",
			"VALUEP": "23253.147",
			"VALUEC2": "",
			"VALUEP2": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Onshore",
			"VALUEC1": "947.573",
			"VALUEP1": "234109.912",
			"VALUEC": "947.573",
			"VALUEP": "234109.912",
			"LOCATION": "Rajasthan",
			"VALUEC2": "",
			"VALUEP2": "",
			"VALUEP3": "",
			"VALUEC3": ""

		}, {
			"VALUEC2": "224545.53",
			"VALUEC": "224545.53",
			"Region": "Offshore",
			"LOCATION": "ONGC",
			"VALUEP2": "1424.323",
			"VALUEP": "1424.323",
			"VALUEC1": "",
			"VALUEP1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}, {
			"Region": "Offshore",
			"VALUEC2": "3562.35",
			"VALUEC": "3562.35",
			"LOCATION": "PSC Regime",
			"VALUEP2": "412894.722",
			"VALUEP": "412894.722",
			"VALUEC1": "",
			"VALUEP1": "",
			"VALUEP3": "",
			"VALUEC3": ""
		}]
	};

	var Production = {

		"Production": [{
			"Region": "Onshore",
			"BPCL": 343,
			"IOC": 234,
			"HINDPETRO":322
		}, {
			"Region": "Offshore",
			"BPCL": 443,
			"IOC": 134,
			"HINDPETRO":312
		}, {
			"Region": "Condensate",
			"BPCL": 143,
			"IOC": 234,
			"HINDPETRO":222
		}]
	};
	var Production1 = {

		"Production1": [{
			"Region": "Onshore",
			"BPCL": 143,
			"IOC": 434,
			"HINDPETRO":211
		}, {
			"Region": "Offshore",
			"BPCL": 543,
			"IOC": 634,
			"HINDPETRO":212
		}]
	};
	var Consumption = {

		"Consumption": [{
			"Region": "Onshore",
			"BPCL": 243,
			"IOC": 534,
			"HINDPETRO":212
		}, {
			"Region": "Offshore",
			"BPCL": 143,
			"IOC": 134,
			"HINDPETRO":242
		}, {
			"Region": "Condensate",
			"BPCL": 443,
			"IOC": 234,
			"HINDPETRO":211
		}]

	};
	var Consumption1 = {
		"Consumption1": [{
			"Region": "Onshore",
			"BPCL": 643,
			"IOC": 134,
			"HINDPETRO":212
		}, {
			"Region": "Offshore",
			"BPCL": 543,
			"IOC": 434,
			"HINDPETRO":423
		}]

	};
	return Controller.extend("bbuserBlackbird_user_v1.controller.eConsumption", {

		onInit: function() {
			this.getView().byId("chart1").setVisible(false);
			this.getView().byId("chart2").setVisible(false);
			this.getView().byId("crudec").setVisible(false);
			this.getView().byId("crudec1").setVisible(false);
			this.getView().byId("crudep").setVisible(false);
			this.getView().byId("crudep1").setVisible(false);
			this.getView().byId("rprod").setVisible(false);
			//	this.getView().byId("table").setVisible(false);
			//this.getView().byId("table").setVisible(false);
			//this.getView().byId("table").setVisible(false);

		},
		press1: function() {
			this.getView().byId("rprod").setVisible(false);
			this.getView().byId("chart1").setVisible(true);
			this.getView().byId("crudec1").setVisible(false);
			this.getView().byId("crudep1").setVisible(false);
			this.getView().byId("crudec").setVisible(true);
			this.getView().byId("crudep").setVisible(true);

			var chart1 = this.getView().byId("crudep");

			var oModel1 = new sap.ui.model.json.JSONModel();
			oModel1.setData(Production);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{

					name: 'Region',
					value: "{Region}"
				}],
				measures: [{
					name: 'BPCL',
					value: '{BPCL}'
				}, {
					name: 'IOC',
					value: '{IOC}'
				}],
				data: {
					path: "/Production"
				}
			});
			chart1.destroyFeeds();
			chart1.setDataset(oDataset);
			chart1.setModel(oModel1);
			chart1.setVizType('column');

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
						'uid': "valueAxis",
						'type': "Measure",
						'values': ["BPCL", "IOC"]
					}

				),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Region"]
				});

			chart1.addFeed(feedValueAxis);
			chart1.addFeed(feedCategoryAxis);
			chart1.setVizProperties({
				//Set Properties For Value Axis(here shown as y-axis)  
				valueAxis: {
					axisLine: {
						visible: true //Show the Value Axis Line  
					},
					title: {
						visible: true,
						text: "Production(TMT)" //Add custom title to Value Axis  
					},
					label: {
						visible: true
					},
					layout: {
						maxHeight: 1,
						maxWidth: 1
					}
				},

				//Set Properties For Category Axis(here shown as x-axis)     
				categoryAxis: {
					title: {
						visible: true,
						text: "Type" //Add custom title to Category Axis  
					},
					label: {
						visible: true,
						style: {
							fontSize: "10px"
						}
					}
				},

				//Set Legend  
				legend: {
					title: {
						visible: false //Set the legend title invisible  
					},
					visible: true //Set the legend visible  
				},
				//Set Title for Chart  
				title: {
					visible: true,
					text: "Total Production" //Set custom title for the Chart  
				},
				interaction: {
					selectability: {
						mode: 'single'
					}
				},
				plotArea: {
					colorPalette: ['#abdbf2', '#1b7eac']
				}
			});

			this.getView().byId("chart2").setVisible(true);
			var chart2 = this.getView().byId("crudec");

			var oModel2 = new sap.ui.model.json.JSONModel();
			oModel2.setData(Consumption);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{

					name: 'Region',
					value: "{Region}"
				}],
				measures: [{
					name: 'BPCL',
					value: '{BPCL}'
				}, {
					name: 'IOC',
					value: '{IOC}'
				}],
				data: {
					path: "/Consumption"
				}
			});
			chart2.destroyFeeds();
			chart2.setDataset(oDataset);
			chart2.setModel(oModel2);
			chart2.setVizType('column');

			var ValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
						'uid': "valueAxis",
						'type': "Measure",
						'values': ["BPCL", "IOC"]
					}

				),
				CategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Region"]
				});

			chart2.addFeed(ValueAxis);
			chart2.addFeed(CategoryAxis);
			chart2.setVizProperties({
				//Set Properties For Value Axis(here shown as y-axis)  
				valueAxis: {
					axisLine: {
						visible: true //Show the Value Axis Line  
					},
					title: {
						visible: true,
						text: "Consumption(TMT)" //Add custom title to Value Axis  
					},
					label: {
						visible: true
					},
					layout: {
						maxHeight: 1,
						maxWidth: 1
					}
				},

				//Set Properties For Category Axis(here shown as x-axis)     
				categoryAxis: {
					title: {
						visible: true,
						text: "Type" //Add custom title to Category Axis  
					},
					label: {
						visible: true,
						style: {
							fontSize: "10px"
						}
					}
				},

				//Set Legend  
				legend: {
					title: {
						visible: false //Set the legend title invisible  
					},
					visible: true //Set the legend visible  
				},
				//Set Title for Chart  
				title: {
					visible: true,
					text: "Total Consumption" //Set custom title for the Chart  
				},
				interaction: {
					selectability: {
						mode: 'single'
					}
				},
				plotArea: {
					colorPalette: ['#abdbf2', '#1b7eac']
				}
			});

		},
		press2: function() {
			this.getView().byId("rprod").setVisible(false);

			this.getView().byId("rprod").setVisible(false);
			this.getView().byId("chart1").setVisible(true);
			this.getView().byId("crudec").setVisible(false);
			this.getView().byId("crudep").setVisible(false);
			this.getView().byId("crudec1").setVisible(true);
			this.getView().byId("crudep1").setVisible(true);

			var chart1 = this.getView().byId("crudep1");

			var oModel1 = new sap.ui.model.json.JSONModel();
			oModel1.setData(Production1);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{

					name: 'Region',
					value: "{Region}"
				}],
				measures: [{
					name: 'BPCL',
					value: '{BPCL}'
				}, {
					name: 'IOC',
					value: '{IOC}'
				}],
				data: {
					path: "/Production1"
				}
			});
			chart1.destroyFeeds();
			chart1.setDataset(oDataset);
			chart1.setModel(oModel1);
			chart1.setVizType('column');

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
						'uid': "valueAxis",
						'type': "Measure",
						'values': ["BPCL", "IOC"]
					}

				),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Region"]
				});

			chart1.addFeed(feedValueAxis);
			chart1.addFeed(feedCategoryAxis);
			chart1.setVizProperties({
				//Set Properties For Value Axis(here shown as y-axis)  
				valueAxis: {
					axisLine: {
						visible: true //Show the Value Axis Line  
					},
					title: {
						visible: true,
						text: "Production(TMT)" //Add custom title to Value Axis  
					},
					label: {
						visible: true
					},
					layout: {
						maxHeight: 1,
						maxWidth: 1
					}
				},

				//Set Properties For Category Axis(here shown as x-axis)     
				categoryAxis: {
					title: {
						visible: true,
						text: "Type" //Add custom title to Category Axis  
					},
					label: {
						visible: true,
						style: {
							fontSize: "10px"
						}
					}
				},

				//Set Legend  
				legend: {
					title: {
						visible: false //Set the legend title invisible  
					},
					visible: true //Set the legend visible  
				},
				//Set Title for Chart  
				title: {
					visible: true,
					text: "Total Production" //Set custom title for the Chart  
				},
				interaction: {
					selectability: {
						mode: 'single'
					}
				},
				plotArea: {
					colorPalette: ['#abdbf2', '#1b7eac']
				}
			});

			this.getView().byId("chart2").setVisible(true);
			var chart2 = this.getView().byId("crudec1");

			var oModel2 = new sap.ui.model.json.JSONModel();
			oModel2.setData(Consumption1);

			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{

					name: 'Region',
					value: "{Region}"
				}],
				measures: [{
					name: 'BPCL',
					value: '{BPCL}'
				}, {
					name: 'IOC',
					value: '{IOC}'
				}],
				data: {
					path: "/Consumption1"
				}
			});
			chart2.destroyFeeds();
			chart2.setDataset(oDataset);
			chart2.setModel(oModel2);
			chart2.setVizType('column');

			var ValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
						'uid': "valueAxis",
						'type': "Measure",
						'values': ["BPCL", "IOC"]
					}

				),
				CategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Region"]
				});

			chart2.addFeed(ValueAxis);
			chart2.addFeed(CategoryAxis);
			chart2.setVizProperties({
				//Set Properties For Value Axis(here shown as y-axis)  
				valueAxis: {
					axisLine: {
						visible: true //Show the Value Axis Line  
					},
					title: {
						visible: true,
						text: "Consumption(TMT)" //Add custom title to Value Axis  
					},
					label: {
						visible: true
					},
					layout: {
						maxHeight: 1,
						maxWidth: 1
					}
				},

				//Set Properties For Category Axis(here shown as x-axis)     
				categoryAxis: {
					title: {
						visible: true,
						text: "Type" //Add custom title to Category Axis  
					},
					label: {
						visible: true,
						style: {
							fontSize: "10px"
						}
					}
				},

				//Set Legend  
				legend: {
					title: {
						visible: false //Set the legend title invisible  
					},
					visible: true //Set the legend visible  
				},
				//Set Title for Chart  
				title: {
					visible: true,
					text: "Total Consumption" //Set custom title for the Chart  
				},
				interaction: {
					selectability: {
						mode: 'single'
					}
				},
				plotArea: {
					colorPalette: ['#abdbf2', '#1b7eac']
				}
			});

		},
		selectData2: function(oEvent) {
			var oSelect = (oEvent.getParameter("data"));
			var results1 = oSelect[0].data.Region;
			var results2 = oSelect[0].data.measureNames;
			this.getView().byId("rprod").setVisible(true);
			//MessageToast.show(results1 + results2);
			var oVizFrame = this.getView().byId("rprod");

			var oModel = new sap.ui.model.json.JSONModel();
			var data;
			if (results2 == "BPCL")
				oModel.setData(BPCL);
			else if (results2 == "IOC")
				oModel.setData(IOC);
			else
				oModel.setData(HINDPETRO);
			var a;
			if (results1 == "Onshore")
				a = "{VALUEC1}";
			else if (results1 == "Offshore")
				a = "{VALUEC2}";
			else
				a = "{VALUEC3}";
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{

					name: 'LOCATION',
					value: "{LOCATION}"
				}],
				measures: [{
					name: 'VALUEC',
					value: a
				}],
				data: {
					path: "/" + results2
				}
			});
			//	oVizFrame.getModel().filter(comFil);
			oVizFrame.destroyFeeds();
			//MessageToast.show(JSON.Stringify(oDataset));
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType('bar');

			var ValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
						'uid': "valueAxis",
						'type': "Measure",
						'values': ["VALUEC"]
					}

				),
				CategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["LOCATION"]
				});

			oVizFrame.addFeed(ValueAxis);
			oVizFrame.addFeed(CategoryAxis);
			oVizFrame.setVizProperties({
				//Set Properties For Value Axis(here shown as y-axis)  
				valueAxis: {
					axisLine: {
						visible: true //Show the Value Axis Line  
					},
					title: {
						visible: true,
						text: "Consumption(TMT)" //Add custom title to Value Axis  
					},
					label: {
						visible: true
					},
					layout: {
						maxHeight: 1,
						maxWidth: 1
					}
				},

				//Set Properties For Category Axis(here shown as x-axis)     
				categoryAxis: {
					title: {
						visible: true,
						text: "Region" //Add custom title to Category Axis  
					},
					label: {
						visible: true,
						style: {
							fontSize: "10px"
						}
					}
				},

				//Set Legend  
				legend: {
					title: {
						visible: false //Set the legend title invisible  
					},
					visible: true //Set the legend visible  
				},
				//Set Title for Chart  
				title: {
					visible: true,
					text: "Region-wise -" + results2 + "(" + results1 + ")" //Set custom title for the Chart  
				},
				interaction: {
					selectability: {
						mode: 'single'
					}
				},
				plotArea: {
					colorPalette: ['#71c989']
				}
			});
			// this.filter(results1);
		},
		selectData21: function(oEvent) {
			var oSelect = (oEvent.getParameter("data"));
			var results1 = oSelect[0].data.Region;
			var results2 = oSelect[0].data.measureNames;
			this.getView().byId("rprod").setVisible(true);
			//MessageToast.show(results1 + results2);
			var oVizFrame = this.getView().byId("rprod");

			var oModel = new sap.ui.model.json.JSONModel();
			var data;
			if (results2 == "BPCL")
				oModel.setData(BPCL1);
			else if (results2 == "IOC")
				oModel.setData(IOC1);
			else
				oModel.setData(HINDPETRO1);
			var a;
			if (results1 == "Onshore")
				a = "{VALUEC1}";
			else if (results1 == "Offshore")
				a = "{VALUEC2}";
			else
				a = "{VALUEC3}";
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{

					name: 'LOCATION',
					value: "{LOCATION}"
				}],
				measures: [{
					name: 'VALUEC',
					value: a
				}],
				data: {
					path: "/" + results2 + "1"
				}
			});
			//	oVizFrame.getModel().filter(comFil);
			oVizFrame.destroyFeeds();
			//MessageToast.show(JSON.Stringify(oDataset));
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType('bar');

			var ValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
						'uid': "valueAxis",
						'type': "Measure",
						'values': ["VALUEC"]
					}

				),
				CategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["LOCATION"]
				});

			oVizFrame.addFeed(ValueAxis);
			oVizFrame.addFeed(CategoryAxis);
			oVizFrame.setVizProperties({
				//Set Properties For Value Axis(here shown as y-axis)  
				valueAxis: {
					axisLine: {
						visible: true //Show the Value Axis Line  
					},
					title: {
						visible: true,
						text: "Consumption(TMT)" //Add custom title to Value Axis  
					},
					label: {
						visible: true
					},
					layout: {
						maxHeight: 1,
						maxWidth: 1
					}
				},

				//Set Properties For Category Axis(here shown as x-axis)     
				categoryAxis: {
					title: {
						visible: true,
						text: "Region" //Add custom title to Category Axis  
					},
					label: {
						visible: true,
						style: {
							fontSize: "10px"
						}
					}
				},

				//Set Legend  
				legend: {
					title: {
						visible: false //Set the legend title invisible  
					},
					visible: true //Set the legend visible  
				},
				//Set Title for Chart  
				title: {
					visible: true,
					text: "Region-wise -" + results2 + "(" + results1 + ")" //Set custom title for the Chart  
				},
				interaction: {
					selectability: {
						mode: 'single'
					}
				},
				plotArea: {
					colorPalette: ['#71c989']
				}
			});
			// this.filter(results1);
		},
		selectData1: function(oEvent) {
			var oSelect = (oEvent.getParameter("data"));
			var results1 = oSelect[0].data.Region;
			var results2 = oSelect[0].data.measureNames;
			this.getView().byId("rprod").setVisible(true);
			//MessageToast.show(results1 + results2);
			var oVizFrame = this.getView().byId("rprod");

			var oModel = new sap.ui.model.json.JSONModel();
			var data;
			if (results2 == "BPCL")
				oModel.setData(BPCL);
			else if (results2 == "IOC")
				oModel.setData(IOC);
			else
				oModel.setData(HINDPETRO); //MessageToast.show(oModel.oData.BPCL[0].LOCATION);

			//	var oFilter1 = new sap.ui.model.Filter("Region", sap.ui.model.FilterOperator.EQ, results1);

			//		var comFil = new sap.ui.model.Filter([oFilter1]); 
			//oModel.filter(comFil);
			var a;
			if (results1 == "Onshore")
				a = "{VALUEP1}";
			else if (results1 == "Offshore")
				a = "{VALUEP2}";
			else
				a = "{VALUEP3}";
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{

					name: 'LOCATION',
					value: "{LOCATION}"
				}],
				measures: [{
					name: 'VALUEP',
					value: a
				}],
				data: {
					path: "/" + results2
				}
			});
			//	oVizFrame.getModel().filter(comFil);
			oVizFrame.destroyFeeds();
			//MessageToast.show(JSON.Stringify(oDataset));
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType('bar');

			var ValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
						'uid': "valueAxis",
						'type': "Measure",
						'values': ["VALUEP"]
					}

				),
				CategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["LOCATION"]
				});

			oVizFrame.addFeed(ValueAxis);
			oVizFrame.addFeed(CategoryAxis);
			oVizFrame.setVizProperties({
				//Set Properties For Value Axis(here shown as y-axis)  
				valueAxis: {
					axisLine: {
						visible: true //Show the Value Axis Line  
					},
					title: {
						visible: true,
						text: "Production(TMT)" //Add custom title to Value Axis  
					},
					label: {
						visible: true
					},
					layout: {
						maxHeight: 1,
						maxWidth: 1
					}
				},

				//Set Properties For Category Axis(here shown as x-axis)     
				categoryAxis: {
					title: {
						visible: true,
						text: "Region" //Add custom title to Category Axis  
					},
					label: {
						visible: true,
						style: {
							fontSize: "10px"
						}
					}
				},

				//Set Legend  
				legend: {
					title: {
						visible: false //Set the legend title invisible  
					},
					visible: true //Set the legend visible  
				},
				//Set Title for Chart  
				title: {
					visible: true,
					text: "Region-wise -" + results2 + "(" + results1 + ")" //Set custom title for the Chart  
				},
				interaction: {
					selectability: {
						mode: 'single'
					}
				},
				plotArea: {
					colorPalette: ['#71c989']
				}
			});
			// this.filter(results1);
		},
		selectData11: function(oEvent) {
			var oSelect = (oEvent.getParameter("data"));
			var results1 = oSelect[0].data.Region;
			var results2 = oSelect[0].data.measureNames;
			this.getView().byId("rprod").setVisible(true);
			//MessageToast.show(results1 + results2);
			var oVizFrame = this.getView().byId("rprod");

			var oModel = new sap.ui.model.json.JSONModel();
			var data;
			if (results2 == "BPCL") {
				oModel.setData(BPCL1);
			} else if (results2 == "IOC") {
				oModel.setData(IOC1);
			} else {
				oModel.setData(HINDPETRO1);

			}
			//MessageToast.show(oModel.oData.BPCL[0].LOCATION);

			//	var oFilter1 = new sap.ui.model.Filter("Region", sap.ui.model.FilterOperator.EQ, results1);

			//		var comFil = new sap.ui.model.Filter([oFilter1]); 
			//oModel.filter(comFil);
			var a;
			if (results1 == "Onshore")
				a = "{VALUEP1}";
			else if (results1 == "Offshore")
				a = "{VALUEP2}";
			else
				a = "{VALUEP3}";
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({

				dimensions: [{

					name: 'LOCATION',
					value: "{LOCATION}"
				}],
				measures: [{
					name: 'VALUEP',
					value: a
				}],
				data: {
					path: "/" + results2 + "1"
				}
			});
			//	oVizFrame.getModel().filter(comFil);
			oVizFrame.destroyFeeds();
			//MessageToast.show(JSON.Stringify(oDataset));
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType('bar');

			var ValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
						'uid': "valueAxis",
						'type': "Measure",
						'values': ["VALUEP"]
					}

				),
				CategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["LOCATION"]
				});

			oVizFrame.addFeed(ValueAxis);
			oVizFrame.addFeed(CategoryAxis);
			oVizFrame.setVizProperties({
				//Set Properties For Value Axis(here shown as y-axis)  
				valueAxis: {
					axisLine: {
						visible: true //Show the Value Axis Line  
					},
					title: {
						visible: true,
						text: "Production(TMT)" //Add custom title to Value Axis  
					},
					label: {
						visible: true
					},
					layout: {
						maxHeight: 1,
						maxWidth: 1
					}
				},

				//Set Properties For Category Axis(here shown as x-axis)     
				categoryAxis: {
					title: {
						visible: true,
						text: "Region" //Add custom title to Category Axis  
					},
					label: {
						visible: true,
						style: {
							fontSize: "10px"
						}
					}
				},

				//Set Legend  
				legend: {
					title: {
						visible: false //Set the legend title invisible  
					},
					visible: true //Set the legend visible  
				},
				//Set Title for Chart  
				title: {
					visible: true,
					text: "Region-wise -" + results2 + "(" + results1 + ")"
				},
				interaction: {
					selectability: {
						mode: 'single'
					}
				},
				plotArea: {
					colorPalette: ['#71c989']
				}
			});
			// this.filter(results1);
		}

	});
});