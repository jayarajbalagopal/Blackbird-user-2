sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
		"sap/m/MessageBox",
	'sap/ui/core/Fragment',
	'jquery.sap.global',
	'sap/ui/model/Filter',
	'sap/ui/model/json/JSONModel'
], function(Controller, MessageToast, jQuery, Fragment, Filter, JSONModel,MessageBox) {
	"use strict";
	var data = {
		'cmp': [{
				"Company": "Adani Power",
				"Open": "742.75",
				"High": "742.95",
				"Low": "722.7",
				"Month": "January",
				"M": "1"

			}, {
				"Company": "Adani Power",
				"Open": "723.75",
				"High": "724.95",
				"Low": "735.7",
				"Month": "February",
				"M": "2"

			}, {
				"Company": "Adani Power",
				"Open": "743.75",
				"High": "754.95",
				"Low": "726.7",
				"Month": "March",
				"M": "3"

			}, {
				"Company": "Adani Power",
				"Open": "723.75",
				"High": "754.95",
				"Low": "765.7",
				"Month": "April",
				"M": "4"

			}, {
				"Company": "Adani Power",
				"Open": "733.75",
				"High": "774.95",
				"Low": "735.7",
				"Month": "May",
				"M": "5"

			},

			{
				"Company": "Tata Steel",
				"Open": "753.95",
				"High": "763.95",
				"Low": "722.1",
				"Month": "January",
				"M": "1"
			}, {
				"Company": "Tata Steel",
				"Open": "753.95",
				"High": "763.95",
				"Low": "722.1",
				"Month": "February",
				"M": "2"
			}, {
				"Company": "Tata Steel",
				"Open": "753.95",
				"High": "763.95",
				"Low": "722.1",
				"Month": "March",
				"M": "3"
			}, {
				"Company": "Tata Steel",
				"Open": "753.95",
				"High": "763.95",
				"Low": "722.1",
				"Month": "April",
				"M": "4"
			}, {
				"Company": "Reliance Power",
				"Open": "753.95",
				"High": "763.95",
				"Low": "722.1",
				"Month": "May",
				"M": "5"
			}, {
				"Company": "BPCL",
				"Open": "754.0",
				"High": "769.25",
				"Low": "747.0",
				"Month": "January",
				"M": "1"
			}, {
				"Company": "IOC",
				"Open": "753.95",
				"High": "853.95",
				"Low": "723.95",
				"Month": "January",
				"M": "1"
			}, {
				"Company": "Hindustan Petroleum",
				"Open": "723.95",
				"High": "953.95",
				"Low": "553.95",
				"Month": "January",
				"M": "1"
			}
		]
	};
	var datacomp = {
		'cmpl': [{
			"Company": "Adani Power"
		}, {
			"Company": "Reliance Power"
		}, {
			"Company": "BPCL"
		}, {
			"Company": "IOC"
		}, {
			"Company": "Hindustan Petroleum"
		}]
	};

	var num=2;
	var gra = ["bar", "column", "line", "waterfall", "bullet"];
	var gbv = -1;
	var fdate, tdate;
	var d = 0;
	var a;
	var colar=["#33FFBD","#FFBD33","#DBFF33","#75FF33","#33FF57"];
	var colind=0;
	return Controller.extend("bbuserBlackbird_user_v1.controller.eStockmarket", {
		onInit: function() {
			gbv = 0;
			this.getView().byId("country").setVisible(false);
				
			num = 1
			//num=0;
			//                1.Get the id of the VizFrame
			colind=Math.floor(Math.random() * 4);
			this.getView().byId("idcolumn").setVisible(true);
			this.getView().byId("Tableo").setVisible(false);
			this.getView().byId("Tableh").setVisible(false);
			this.getView().byId("Tablel").setVisible(false);
			var oVizFrame = this.getView().byId("idcolumn");
			vidchart1 = oVizFrame.getId();
			//MessageToast.show(oVizFrame.getId());
			//                2.Create a JSON Model and set the data
			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData(data);
			this.getView().setModel(oModel);

			//2nd model
			var mod2 = new sap.ui.model.json.JSONModel();
			mod2.setData(datacomp);
			this.getView().setModel(mod2);

			//                3. Create Viz dataset to feed to the data to the graph
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'company',
					value: "{Company}"
				}],

				measures: [{
					name: 'rate',
					value: '{Open}'
				}],

				data: {
					path: "/cmp"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType(gra[num]);

			//                4.Set Viz properties
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()
					//colorPalette:colar[colind]
				}
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["rate"]
				}),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["company"]
				});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);

			//new
			
			
		
			//                1.Get the id of the VizFrame
			var oVizFrame = this.getView().byId("chart2");

			//                2.Create a JSON Model and set the data
			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData(data);

			//                3. Create Viz dataset to feed to the data to the graph
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'month',
					value: "{Month}"
				}],

				measures: [{
					name: 'rate',
					value: '{Open}'
				}],

				data: {
					path: "/cmp"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			num=3;
			oVizFrame.setVizType(gra[num]);

			//                4.Set Viz properties
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()
					//colorPalette:colar[colind]
					
				}
			
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["rate"]
				}),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["month"]
				});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			/*this.hfn();	
			this.lfn();
			this.ofn();*/
		},
		frameviz: function(evt) {
			
			fdate = this.byId("DP1").getValue();
			tdate = this.byId("DP2").getValue();
			/*var fd = fdate.split("/");
			var td = tdate.split("/");*/
			var country = this.byId("country").getValue();
			//MessageToast.show(country);
			this.graphselector(country);
			/*var oVizFrame = this.getView().byId("chart2");
			var oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, country);
			var oFilter1 = new sap.ui.model.Filter("M", sap.ui.model.FilterOperator.EQ, fd[0]);*/
			if (fdate&&tdate) 
			{
				var fd = fdate.split("/");
				var td = tdate.split("/");
				//MessageToast.show(fd[0]+fd[1]+fd[2]);	
				//MessageToast.show(fd[1]+""+td[1]);
				if(fd[1] > td[1]) {
					MessageToast.show("Error:From-Month should be less than To-Month");
									} 
				else {
					//this.graphselector(country);

					var oVizFrame = this.getView().byId("chart2");
					var oFilter;
					var oFilters = [];
					var oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, country);
					oFilters.push(oFilter);
					
					for (var i = fd[1]; i <= td[1]; i++) 
					{
						oFilter = new sap.ui.model.Filter("M", sap.ui.model.FilterOperator.EQ, i);
						oFilters.push(oFilter);
					}
					oVizFrame.getDataset().getBinding("data").filter(oFilters);
					  }
			}
			
			//MessageToast.show(++fd[0]);
		

		},
		onValueHelpRequest: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.Dialog", this);
				this.getView().addDependent(this._oDialog);
				this._oDialog.addStyleClass("sapUiSizeCompact");
			}
			this._oDialog.open();
		},
		handleSearch: function(oEvent) {
			this.inputId = this.getView().byId("country");
			//MessageToast.show(""+this.inputId);
			if (!this._valueHelpDialog) {
				this._valueHelpDialog = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.Dialog", this);
				this.getView().addDependent(this._valueHelpDialog);
			}
			this._valueHelpDialog.open();
		},
		handleClose: function(evt) {
			var property = evt.getParameter("selectedItem").getBindingContext().getObject();
			//MessageToast.show("" + property.Company);
			this.getView().byId("country").setValue(property.Company);
			var country = this.byId("country").getValue();

			var oVizFrame = this.getView().byId("chart2");

			var asyncChartUpdate = function() {
				oVizFrame.setVizProperties({
					title: {
						text: country
					}
				});
			};
			setTimeout(asyncChartUpdate, 0);
			var oFilters = [];
			var oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, country);
			oFilters.push(oFilter);
			oVizFrame.getDataset().getBinding("data").filter(oFilters);
		},
		hfn: function() {
			gbv = 1;
			num=1;
			this.companyrestricter();
			var oVizFrame = this.getView().byId("idcolumn");
			//	MessageToast.show(oVizFrame.getId());
			oVizFrame.removeAllFeeds();

			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData(data);

			//                3. Create Viz dataset to feed to the data to the graph
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'company',
					value: "{Company}"
				}],

				measures: [{
					name: 'rate',
					value: '{High}'
				}],

				data: {
					path: "/cmp"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType(gra[num]);

			//                4.Set Viz properties
			
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()

						//colorPalette:colar[colind]
					
				}
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["rate"]
				}),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["company"]
				});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			this.companyrestricter();
		},
		lfn: function() {
			gbv = 2;
			num=1;
			//var oVizFrame =sap.ui.getCore().byId('idcolumn');
			
			var oVizFrame = this.getView().byId("idcolumn");
			//MessageToast.show(oVizFrame.getId());
			
			oVizFrame.removeAllFeeds();

			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData(data);

			//                3. Create Viz dataset to feed to the data to the graph
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'company',
					value: "{Company}"
				}],

				measures: [{
					name: 'rate',
					value: '{Low}'
				}],

				data: {
					path: "/cmp"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			oVizFrame.setVizType(gra[num]);

			//                4.Set Viz properties
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()
					//colorPalette:colar[colind]
				}
				
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["rate"]
				}),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["company"]
				});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			this.companyrestricter();
		},
		ofn: function() {
			//var oVizFrame =sap.ui.getCore().byId('idcolumn');
			gbv = 0;
			num=1;
			var oVizFrame = this.getView().byId("idcolumn");
			
			//MessageToast.show(oVizFrame.getId());
			oVizFrame.removeAllFeeds();

			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData(data);

			//                3. Create Viz dataset to feed to the data to the graph
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'company',
					value: "{Company}"
				}],

				measures: [{
					name: 'rate',
					value: '{Open}'
				}],

				data: {
					path: "/cmp"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			
			oVizFrame.setVizType(gra[num]);

			//                4.Set Viz properties
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()
					//colorPalette:colar[colind]
				}
			});

			var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["rate"]
				}),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["company"]
				});
			oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			this.companyrestricter();
		},
		changetotableviewfn: function() {

			if (d % 2 === 0) {
				this.getView().byId("idcolumn").setVisible(false);
				this.getView().byId("radio1").setVisible(false);
				this.getView().byId("radio2").setVisible(false);
				this.getView().byId("radio3").setVisible(false);
				if (gbv === 0) {
					this.getView().byId("Tableo").setVisible(true);
				} else if (gbv === 1) {
					this.getView().byId("Tableh").setVisible(true);
				} else {
					this.getView().byId("Tablel").setVisible(true);
				}
				d++;
			} else {

				this.getView().byId("radio1").setVisible(true);
				this.getView().byId("radio2").setVisible(true);
				this.getView().byId("radio3").setVisible(true);
				this.getView().byId("idcolumn").setVisible(true);
				this.getView().byId("Tableh").setVisible(false);
				this.getView().byId("Tablel").setVisible(false);
				this.getView().byId("Tableo").setVisible(false);
				d++;
			}

			var data = [{
				"Company": "Adani Power",
				"Open": "743.75",
				"High": "744.95",
				"Low": "725.7"
			}, {
				"Company": "Reliance Power",
				"Open": "754.0",
				"High": "769.25",
				"Low": "747.0"
			}, {
				"Company": "BPCL",
				"Open": "753.95",
				"High": "763.95",
				"Low": "722.1"
			}, {
				"Company": "IOC",
				"Open": "753.95",
				"High": "853.95",
				"Low": "723.95"
			}, {
				"Company": "Hindustan Petroleum",
				"Open": "723.95",
				"High": "953.95",
				"Low": "553.95"
			}];

			var oModel = new sap.ui.model.json.JSONModel();
			this.getView().setModel(oModel);
			oModel.setData(data);

		},
		myfn: function(oEvent) {
			//Object.keys(clickedData).length
			//var value;

			/*var clickedData = oEvent.getParameter("data")[0].data;
			for(Object.key in clickedData) {
    		if(clickedData.hasOwnProperty(Object.key)) 
    		{
        		 value=clickedData[Object.key];
        		MessageToast.show(value);
        //do something with value;
        
    		}
			}*/
			var clickedData = oEvent.getParameter("data");

			//MessageToast.show(clickedData[0].data.company);	
			this.byId("country").setValue(clickedData[0].data.company);
			//var ev=new sap.ui.base.Event("change",oEvent.getSource, oEvent.getParameters);
			this.byId("DP1").setValue("1/6/2017");
			this.byId("DP2").setValue("12/6/2017");

			//var tdate=this.byId("DP2").getValue();
			this.graphselector(clickedData[0].data.company);
			//evt.getSource);	
			//	MessageToast.show(evt.getParameter);
		},
		graphselector: function(cnt) {

			//this.getView().byId("country").setValue(cnt);
			//	var country=this.byId("country").getValue();
			var country = cnt;
			//var oVizFrame = this.getView().byId("idcolumn");
			var oVizFrame = this.getView().byId("chart2");
			var oFilters = [];
			var oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, country);
			oFilters.push(oFilter);
			//oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ,"Hindustan Petroleum");
			//oFilters.push(oFilter);
			//oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ,"Tata Steel");
			//oFilters.push(oFilter);
			oVizFrame.getDataset().getBinding("data").filter(oFilters);

			var asyncChartUpdate = function() {
				oVizFrame.setVizProperties({
					title: {
						text: country
					}
				});
			};
			setTimeout(asyncChartUpdate, 0);

		},
		
			companyrestricter: function() {
			//MessageToast.show("Entered comp");
			var cha = vcha;
			var chr = vchr;
			var chb = vchb;
			var chi = vchi;
			var chh = vchh;
			//MessageToast.show(cha + ":" + chr + ":" + chb + ":" + chi + ":" + chh);
			if (cha === false && chr === false && chb === false && chi === false && chh === false) {
				return;
			}
			var comp;
			var oFilter;
			var oVizFrame = sap.ui.getCore().byId(vidchart1);

			//MessageToast.show(oVizFrame);
			var oFilters = [];

			if (cha === true) {
				comp = "Adani Power";
				oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
				oFilters.push(oFilter);
			}
			if (chr === true) {
				comp = "Reliance Power";
				oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
				oFilters.push(oFilter);
			}

			if (chb === true) {
				comp = "BPCL";
				oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
				oFilters.push(oFilter);
			}

			if (chi === true) {
				comp = "IOC";
				oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
				oFilters.push(oFilter);
			}
			if (chh === true) {
				comp = "Hindustan Petroleum";
				oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
				oFilters.push(oFilter);
			}

		
			oVizFrame.getDataset().getBinding("data").filter(oFilters);

		}
		
	});
});