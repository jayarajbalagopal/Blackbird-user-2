sap.ui.define([
	'jquery.sap.global',
	'sap/m/MessageToast',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter',
	'sap/ui/model/json/JSONModel',
	'sap/ui/unified/FileUploader',
	'sap/m/Column',
	'sap/m/ColumnListItem',
	'sap/m/Label',
	'sap/m/Text',
	'sap/m/Table'
], function(jQuery, MessageToast, Fragment, Controller, Filter, JSONModel, FileUploader, Column, ColumnListItem, Label, Text, Table) {
	"use strict";

	return Controller.extend("bbuserBlackbird_user_v1.controller.zip", {

		onInit: function() {


			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setSizeLimit(10000);
			this.getView().setModel(oModel);
		},

		csvJSON: function(csv) {
			var lines = csv.split("\n");
			var result = [];
			var headers = lines[0].split(",");
			for (var i = 1; i < lines.length - 1; i++) {
				var obj = {};
				var currentline = lines[i].split(",");
				for (var j = 0; j < headers.length; j++) {
					obj[headers[j]] = currentline[j];
				}
				result.push(obj);
			}
			var count = j;
			var oStringResult = JSON.stringify(result);
			var oFinalResult = JSON.parse(oStringResult.replace(/\\r/g, ""));
			//return result; //JavaScript object
			// this.getView().getModel().setProperty("/data", oFinalResult);
			// sap.ui.getCore().getModel().setProperty("/", oFinalResult);
			this.getView().getModel().setProperty("/", oFinalResult);
			this.generateTable();

		},

		generateTable: function() {
			var oTable = this.getView().byId("zipTable");
			var oModel = this.getView().getModel();
			//var oModel = sap.ui.getCore().getModel();
			var oModelData = oModel.getProperty("/");
			var oColumns = Object.keys(oModelData[0]);
			var oColumnNames = [];
			$.each(oColumns, function(i, value) {
				oColumnNames.push({
					Text: oColumns[i]
				});
			});
			oModel.setProperty("/columnNames", oColumnNames);
			var oTemplate = new Column({
				header: new Label({
					text: "{Text}"
				})
			});
			oTable.bindAggregation("columns", "/columnNames", oTemplate);
			var oItemTemplate = new ColumnListItem();
			var oTableHeaders = oTable.getColumns();
			$.each(oTableHeaders, function(j, value) {
				var oHeaderName = oTableHeaders[j].getHeader().getText();
				oItemTemplate.addCell(new Text({
					text: "{" + oHeaderName + "}"
				}));
			});
			oTable.bindItems("/", oItemTemplate);
			
		},

		onConfirmDialog: function() {
			var that = this;
			var dialog = new sap.m.Dialog({
				title: 'Upload',
				type: 'Message',
				icon: 'sap-icon://upload',
				content: [
					new sap.ui.unified.FileUploader({
						width: '100%',
						uploadUrl: 'upload/',
						change: function(oEvent) {
							var file = oEvent.getParameter("files")[0];
							if (file && window.FileReader) {
								var reader = new FileReader();
								reader.onload = function(evn) {
									var strCSV = evn.target.result; //string in CSV 
									that.csvJSON(strCSV);
								};
								reader.readAsText(file);
							}
							// that.getView().byId("dataGraph").setVisible(true);
							
							dialog.close();

						}
					})
				],

				endButton: new sap.m.Button({
					text: 'Cancel',
					press: function() {
						dialog.close();
					}
				})
			});
			dialog.open();
		}

	});
});