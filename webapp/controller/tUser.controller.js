sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("bbuserBlackbird_user_v1.controller.tUser", {
	onInit: function() {
		this.getView().byId("ideaNorth").setVisible(false);
		this.getView().byId("ideaSouth").setVisible(false);
		this.getView().byId("ideaEast").setVisible(false);
		this.getView().byId("ideaWest").setVisible(false);
		this.getView().byId("RelianceNorth").setVisible(false);
		this.getView().byId("RelianceSouth").setVisible(false);
		this.getView().byId("RelianceEast").setVisible(false);
		this.getView().byId("RelianceWest").setVisible(false);

		var oModel = new sap.ui.model.json.JSONModel({

			"user": [{
				"Region": "North",
				"Reliance": "1234",
				"Idea": "2345"
			}, {
				"Region": "South",
				"Reliance": "4334",
				"Idea": "5235"
			}, {
				"Region": "East",
				"Idea": "4445",
				"Reliance": "5554"
			}, {
				"Region": "West",
				"Idea": "4345",
				"Reliance": "8854"
			}],
			"Idea": {
				"North": [{
					"Name": "Jammu",
					"CallLog": "4334",
					"Data": "1876"
				}, {
					"Name": "Haryana",
					"CallLog": "4874",
					"Data": "8006"
				}, {
					"Name": "Delhi",
					"CallLog": "8794",
					"Data": "4876"
				}],

				"South": [{
					"Name": "Kerala",
					"CallLog": "5934",
					"Data": "5809"
				}, {
					"Name": "Karnataka",
					"CallLog": "6874",
					"Data": "6606"
				}, {
					"Name": "Tamil Nadu",
					"CallLog": "6994",
					"Data": "8876"
				}],
				"East": [{
					"Name": "Assam",
					"CallLog": "3334",
					"Data": "9876"
				}, {
					"Name": "Sikkim",
					"CallLog": "1874",
					"Data": "1006"
				}, {
					"Name": "Nagaland",
					"CallLog": "7994",
					"Data": "3876"
				}],
				"West": [{
					"Name": "Punjab",
					"CallLog": "1334",
					"Data": "2876"
				}, {
					"Name": "Gujarat",
					"CallLog": "3874",
					"Data": "4006"
				}, {
					"Name": "Rajastan",
					"CallLog": "5994",
					"Data": "6876"
				}]
			},
			"Reliance": {
				"North": [{
					"Name": "Jammu",
					"CallLog": "7334",
					"Data": "9876"
				}, {
					"Name": "Haryana",
					"CallLog": "1874",
					"Data": "9006"
				}, {
					"Name": "Delhi",
					"CallLog": "8994",
					"Data": "7876"
				}],

				"South": [{
					"Name": "Kerala",
					"CallLog": "6334",
					"Data": "6876"
				}, {
					"Name": "Karnataka",
					"CallLog": "1874",
					"Data": "8006"
				}, {
					"Name": "Tamil Nadu",
					"CallLog": "7794",
					"Data": "6876"
				}],
				"East": [{
					"Name": "Assam",
					"CallLog": "7634",
					"Data": "4876"
				}, {
					"Name": "Sikkim",
					"CallLog": "2874",
					"Data": "9886"
				}, {
					"Name": "Nagaland",
					"CallLog": "7694",
					"Data": "6876"
				}],
				"West": [{
					"Name": "Punjab",
					"CallLog": "9934",
					"Data": "9876"
				}, {
					"Name": "Gujarat",
					"CallLog": "5874",
					"Data": "7606"
				}, {
					"Name": "Rajastan",
					"CallLog": "9794",
					"Data": "9176"
				}]
			}
		});
		this.getView().setModel(oModel);
			var oVizFrame1 = this.byId('idVizFrame1');
				var oVizPopover1 = this.byId('vizPopover1');	
		     	oVizPopover1.connect(oVizFrame1.getVizUid());
		     	
		     		var oVizFrame2 = this.byId('ideaNorth');
				var oVizPopover2 = this.byId('vizPopoveriN');	
		     	oVizPopover2.connect(oVizFrame2.getVizUid());
		     	
		     		var oVizFrame3 = this.byId('ideaSouth');
				var oVizPopover3 = this.byId('vizPopoveriS');	
		     	oVizPopover3.connect(oVizFrame3.getVizUid());
		     	
		     		var oVizFrame4 = this.byId('ideaEast');
				var oVizPopover4 = this.byId('vizPopoveriE');	
		     	oVizPopover4.connect(oVizFrame4.getVizUid());
		     	
		     		var oVizFrame5 = this.byId('ideaWest');
				var oVizPopover5 = this.byId('vizPopoveriW');	
		     	oVizPopover5.connect(oVizFrame5.getVizUid());
		     	
		     		var oVizFrame6 = this.byId('RelianceNorth');
				var oVizPopover6 = this.byId('vizPopoverRN');	
		     	oVizPopover6.connect(oVizFrame6.getVizUid());
		     	
		     		var oVizFrame7 = this.byId('RelianceSouth');
				var oVizPopover7 = this.byId('vizPopoverRS');	
		     	oVizPopover7.connect(oVizFrame7.getVizUid());
		     	
		     		var oVizFrame8 = this.byId('RelianceEast');
				var oVizPopover8 = this.byId('vizPopoverRE');	
		     	oVizPopover8.connect(oVizFrame8.getVizUid());
		     	
		     		var oVizFrame9 = this.byId('RelianceWest');
				var oVizPopover9 = this.byId('vizPopoverRW');	
		     	oVizPopover9.connect(oVizFrame9.getVizUid());
	},

	selectData: function(oEvent) {
		var oSelect = (oEvent.getParameter("data"));
		var company = oSelect[0].data.measureNames;
		var region = oSelect[0].data.Region;
		 if(company=="Idea")
			{
			  if(region == "North")
			  {
		this.getView().byId("ideaNorth").setVisible(true);
		this.getView().byId("ideaSouth").setVisible(false);
		this.getView().byId("ideaEast").setVisible(false);
		this.getView().byId("ideaWest").setVisible(false);
		this.getView().byId("RelianceNorth").setVisible(false);
		this.getView().byId("RelianceSouth").setVisible(false);
		this.getView().byId("RelianceEast").setVisible(false);
		this.getView().byId("RelianceWest").setVisible(false);
			  }
			  else if(region == "South")
			  {
		this.getView().byId("ideaNorth").setVisible(false);
		this.getView().byId("ideaSouth").setVisible(true);
		this.getView().byId("ideaEast").setVisible(false);
		this.getView().byId("ideaWest").setVisible(false);
		this.getView().byId("RelianceNorth").setVisible(false);
		this.getView().byId("RelianceSouth").setVisible(false);
		this.getView().byId("RelianceEast").setVisible(false);
		this.getView().byId("RelianceWest").setVisible(false);
			  }
			   else if(region == "East")
			  {
		this.getView().byId("ideaNorth").setVisible(false);
		this.getView().byId("ideaSouth").setVisible(false);
		this.getView().byId("ideaEast").setVisible(true);
		this.getView().byId("ideaWest").setVisible(false);
		this.getView().byId("RelianceNorth").setVisible(false);
		this.getView().byId("RelianceSouth").setVisible(false);
		this.getView().byId("RelianceEast").setVisible(false);
		this.getView().byId("RelianceWest").setVisible(false);
			  }
			   else if(region == "West")
			  {
		this.getView().byId("ideaNorth").setVisible(false);
		this.getView().byId("ideaSouth").setVisible(false);
		this.getView().byId("ideaEast").setVisible(false);
		this.getView().byId("ideaWest").setVisible(true);
		this.getView().byId("RelianceNorth").setVisible(false);
		this.getView().byId("RelianceSouth").setVisible(false);
		this.getView().byId("RelianceEast").setVisible(false);
		this.getView().byId("RelianceWest").setVisible(false);
			  }
		
				
			}
			
			else if(company=="Reliance")
			{
			  if(region == "North")
			  {
		this.getView().byId("ideaNorth").setVisible(false);
		this.getView().byId("ideaSouth").setVisible(false);
		this.getView().byId("ideaEast").setVisible(false);
		this.getView().byId("ideaWest").setVisible(false);
		this.getView().byId("RelianceNorth").setVisible(true);
		this.getView().byId("RelianceSouth").setVisible(false);
		this.getView().byId("RelianceEast").setVisible(false);
		this.getView().byId("RelianceWest").setVisible(false);
			  }
			  else if(region == "South")
			  {
		this.getView().byId("ideaNorth").setVisible(false);
		this.getView().byId("ideaSouth").setVisible(false);
		this.getView().byId("ideaEast").setVisible(false);
		this.getView().byId("ideaWest").setVisible(false);
		this.getView().byId("RelianceNorth").setVisible(false);
		this.getView().byId("RelianceSouth").setVisible(true);
		this.getView().byId("RelianceEast").setVisible(false);
		this.getView().byId("RelianceWest").setVisible(false);
			  }
			   else if(region == "East")
			  {
		this.getView().byId("ideaNorth").setVisible(false);
		this.getView().byId("ideaSouth").setVisible(false);
		this.getView().byId("ideaEast").setVisible(false);
		this.getView().byId("ideaWest").setVisible(false);
		this.getView().byId("RelianceNorth").setVisible(false);
		this.getView().byId("RelianceSouth").setVisible(false);
		this.getView().byId("RelianceEast").setVisible(true);
		this.getView().byId("RelianceWest").setVisible(false);
			  }
			   else if(region == "West")
			  {
		this.getView().byId("ideaNorth").setVisible(false);
		this.getView().byId("ideaSouth").setVisible(false);
		this.getView().byId("ideaEast").setVisible(false);
		this.getView().byId("ideaWest").setVisible(false);
		this.getView().byId("RelianceNorth").setVisible(false);
		this.getView().byId("RelianceSouth").setVisible(false);
		this.getView().byId("RelianceEast").setVisible(false);
		this.getView().byId("RelianceWest").setVisible(true);
			  }
		
				
			}

	

	}
});
});