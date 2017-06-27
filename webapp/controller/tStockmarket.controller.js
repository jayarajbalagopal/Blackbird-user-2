sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	'sap/m/Column',
	'sap/m/ColumnListItem',
	'sap/m/Label',
	'sap/m/Text',
	'sap/m/Table'
], function(Controller, JSONModel, MessageToast, Column, ColumnListItem, Label, Text, Table) {
	"use strict";

	return Controller.extend("bbuserBlackbird_user_v1.controller.tStockmarket", {

		oModel: null,
		oVizFrame: null,
		oVizReliance: null,
		selectData: function(oEvent) {
			var oSelect = (oEvent.getParameter("data"));
			var results = oSelect[0].data.Company;
			// var val = oSelect[0].data.Total_Trade_Quantity;

			if (results == 'Idea') {
				this.getView().byId("idVizFrame").setVisible(true);
				this.getView().byId("seriesRadioGroup").setVisible(true);
				this.getView().byId("toolbarI").setVisible(true);

				this.getView().byId("idVizReliance").setVisible(false);
				this.getView().byId("toolbarR").setVisible(false);
				this.getView().byId("seriesRadioGroupR").setVisible(false);
				this.getView().byId("myTable").setVisible(false);
				this.getView().byId("myTableR").setVisible(false);

			} else if (results == 'Reliance') {

				this.getView().byId("seriesRadioGroupR").setVisible(true);
				this.getView().byId("toolbarR").setVisible(true);
				this.getView().byId("idVizReliance").setVisible(true);

				this.getView().byId("idVizFrame").setVisible(false);
				this.getView().byId("toolbarI").setVisible(false);
				this.getView().byId("seriesRadioGroup").setVisible(false);
				this.getView().byId("myTable").setVisible(false);
				this.getView().byId("myTableR").setVisible(false);
			}

		},

		onSeriesSelected: function(oEvent) {
			var seriesRadio = oEvent.getSource();
			if (this.oVizFrame && seriesRadio.getSelected()) {
				var bindValue = seriesRadio.getBindingContext().getObject();
				var feedValueAxis = this.getView().byId('valueAxisFeed');
				this.oVizFrame.removeFeed(feedValueAxis);
				feedValueAxis.setValues([bindValue.value]);
				this.oVizFrame.addFeed(feedValueAxis);
			}
		},

		onSeriesSelectedR: function(oEvent) {
			var seriesRadio = oEvent.getSource();
			if (this.oVizReliance && seriesRadio.getSelected()) {
				var bindValue = seriesRadio.getBindingContext().getObject();
				var feedValueAxis = this.getView().byId('valueAxisFeedR');
				this.oVizReliance.removeFeed(feedValueAxis);
				feedValueAxis.setValues([bindValue.value]);
				this.oVizReliance.addFeed(feedValueAxis);
			}
		},
		onPress: function(evt) {

			if (evt.getSource().getPressed()) {
				this.getView().byId("seriesRadioGroup").setVisible(false);
				this.getView().byId("idVizFrame").setVisible(false);
				this.getView().byId("myTable").setVisible(true);
			} else {
				this.getView().byId("myTable").setVisible(false);
				this.getView().byId("idVizFrame").setVisible(true);
				this.getView().byId("seriesRadioGroup").setVisible(true);
			}
		},

		onPressR: function(evt) {

			if (evt.getSource().getPressed()) {
				this.getView().byId("seriesRadioGroupR").setVisible(false);
				this.getView().byId("idVizReliance").setVisible(false);
				this.getView().byId("myTableR").setVisible(true);
			} else {
				this.getView().byId("myTableR").setVisible(false);
				this.getView().byId("idVizReliance").setVisible(true);
				this.getView().byId("seriesRadioGroupR").setVisible(true);
			}
		},

		onInit: function() {
			this.oVizFrame = this.getView().byId("idVizFrame");
			this.oVizReliance = this.getView().byId("idVizReliance");
			var oRadioModel = new sap.ui.model.json.JSONModel(this.settingsModel);
			oRadioModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
			this.getView().setModel(oRadioModel);

			var oData = {

				"companies": [{
					"Company": "Idea",
					"Total_Trade_Quantity": "432523",
					"Turnover": "2364"
				}, {
					"Company": "Reliance",
					"Total_Trade_Quantity": "762342",
					"Turnover": "5464"
				}],

				"idea": [{
					"Date": "2017-05-25",
					"Open": "77.5",
					"High": "78.1",
					"Low": "76.5",
					"Last": "77.2",
					"Close": "76.8",
					"Total_Trade_Quantity": "6139195.0",
					"Turnover": "4913.83"
				}, {
					"Date": "2017-05-24",
					"Open": "82.1",
					"High": "83.1",
					"Low": "82.0",
					"Last": "85.3",
					"Close": "89.9",
					"Total_Trade_Quantity": "15395521.0",
					"Turnover": "12107.34"
				}, {
					"Date": "2017-05-23",
					"Open": "88.4",
					"High": "89.0",
					"Low": "86.2",
					"Last": "85.3",
					"Close": "88.8",
					"Total_Trade_Quantity": "13460616.0",
					"Turnover": "10928.79"
				}, {
					"Date": "2017-05-22",
					"Open": "77.9",
					"High": "80.0",
					"Low": "79.4",
					"Last": "78.6",
					"Close": "77.1",
					"Total_Trade_Quantity": "6879751.0",
					"Turnover": "5894.68"
				}, {
					"Date": "2017-05-21",
					"Open": "70.1",
					"High": "74.1",
					"Low": "74.0",
					"Last": "71.2",
					"Close": "72.6",
					"Total_Trade_Quantity": "5032662.0",
					"Turnover": "4425.01"
				}, {
					"Date": "2017-05-20",
					"Open": "78.3",
					"High": "79.9",
					"Low": "76.1",
					"Last": "77.7",
					"Close": "76.1",
					"Total_Trade_Quantity": "6631802.0",
					"Turnover": "5842.4"
				}, {
					"Date": "2017-05-19",
					"Open": "84.6",
					"High": "86.0",
					"Low": "85.5",
					"Last": "86.8",
					"Close": "85.9",
					"Total_Trade_Quantity": "8588960.0",
					"Turnover": "7486.09"
				}],

				"reliance": [{
					"Date": "2017-05-25",
					"Open": "55.5",
					"High": "66.1",
					"Low": "77.5",
					"Last": "66.2",
					"Close": "55.8",
					"Total_Trade_Quantity": "6139195.0",
					"Turnover": "4913.83"
				}, {
					"Date": "2017-05-24",
					"Open": "66.1",
					"High": "55.1 ",
					"Low": "66.0",
					"Last": "55.3",
					"Close": "66.9",
					"Total_Trade_Quantity": "15395521.0",
					"Turnover": "12107.34"
				}, {
					"Date": "2017-05-23",
					"Open": "88.4",
					"High": "77.0",
					"Low": "88.2",
					"Last": "77.3",
					"Close": "88.8",
					"Total_Trade_Quantity": "13460616.0",
					"Turnover": "10928.79"
				}, {
					"Date": "2017-05-22",
					"Open": "77.9",
					"High": "66.0",
					"Low": "77.4",
					"Last": "66.6",
					"Close": "77.1",
					"Total_Trade_Quantity": "6879751.0",
					"Turnover": "5894.68"
				}, {
					"Date": "2017-05-21",
					"Open": "44.1",
					"High": "55.1",
					"Low": "44.0",
					"Last": "55.2",
					"Close": "44.6",
					"Total_Trade_Quantity": "5032662.0",
					"Turnover": "4425.01"
				}, {
					"Date": "2017-05-20",
					"Open": "55.3",
					"High": "66.9",
					"Low": "55.1",
					"Last": "66.7",
					"Close": "55.1",
					"Total_Trade_Quantity": "6631802.0",
					"Turnover": "5842.4"
				}, {
					"Date": "2017-05-19",
					"Open": "33.6",
					"High": "55.0",
					"Low": "33.5",
					"Last": "55.8",
					"Close": "33.9",
					"Total_Trade_Quantity": "8588960.0",
					"Turnover": "7486.09"
				}],

				"options": {
					"values": [{
						"name": "Open",
						"value": "Open"
					}, {
						"name": "Close",
						"value": "Close"
					}, {
						"name": "Low",
						"value": "Low"
					}, {
						"name": "High",
						"value": "High"
					}]
				}
			};
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel);

			this.getView().byId("myTable").setVisible(false);
			this.getView().byId("myTableR").setVisible(false);
			this.getView().byId("idVizFrame").setVisible(false);
			this.getView().byId("idVizReliance").setVisible(false);
			this.getView().byId("seriesRadioGroup").setVisible(false);
			this.getView().byId("seriesRadioGroupR").setVisible(false);
			this.getView().byId("toolbarI").setVisible(false);
			this.getView().byId("toolbarR").setVisible(false);

			var oVizFrame = this.byId('idVizFrame');
			var oVizPopover = this.byId('vizPopover');
			oVizPopover.connect(oVizFrame.getVizUid());

			var oVizReliance = this.byId('idVizReliance');
			var oVizPopoverReliance = this.byId('vizPopoverReliance');
			oVizPopoverReliance.connect(oVizReliance.getVizUid());
		}
	});

});