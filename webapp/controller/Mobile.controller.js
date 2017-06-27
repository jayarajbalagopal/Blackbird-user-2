sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
	"use strict";
	var d;
	var that;
	// var oList;
	return Controller.extend("bbuserBlackbird_user_v1.controller.Mobile", {

		OnSelectCheckbox: function() {
			var filters = [];
			var oFilter;
			var ofilters;
			var oList = this.getView().byId("myList");
			if (this.getView().byId("idP1").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Price", sap.ui.model.FilterOperator.GT, 15000);
				filters.push(oFilter);
			}
			if (this.getView().byId("idP2").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Price", sap.ui.model.FilterOperator.BT, 10000, 15000);
				filters.push(oFilter);
			}
			if (this.getView().byId("idP3").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Price", sap.ui.model.FilterOperator.BT, 5000, 10000);
				filters.push(oFilter);
			}
			if (this.getView().byId("idP4").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Price", sap.ui.model.FilterOperator.LT, 5000);
				filters.push(oFilter);
			}

			if (this.getView().byId("idB1").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Apple");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB2").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Asus");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB3").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Coolpad");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB4").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "LeEco");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB5").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Lenovo");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB6").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "LYF");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB7").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Micromax");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB8").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Moto");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB9").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Nokia");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB10").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "OPPO");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB11").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Panasonic");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB12").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Redmi");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB13").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Samsung");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB14").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Sansui");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB15").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Swipe");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB16").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Vivo");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB17").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "XOLO");
				filters.push(oFilter);
			}
			if (this.getView().byId("idB18").getSelected() === true) {
				oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.StartsWith, "Yu");
				filters.push(oFilter);
			}
			if (this.getView().byId("Ram4").getSelected() === true) {
				// MessageToast.show(this.getView().byId("Ram4").getSelected());

				ofilters = new sap.ui.model.Filter("Ram", sap.ui.model.FilterOperator.StartsWith, "4GBRAM");
				filters.push(ofilters);
			}
			if (this.getView().byId("Ram3").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Ram", sap.ui.model.FilterOperator.Contains, "3GBRAM");
				filters.push(ofilters);
			}
			if (this.getView().byId("Ram2").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Ram", sap.ui.model.FilterOperator.Contains, "2GBRAM");
				filters.push(ofilters);
			}
			if (this.getView().byId("Ram1").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Ram", sap.ui.model.FilterOperator.Contains, "1GBRAM");
				filters.push(ofilters);
			}
			if (this.getView().byId("MP20").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Camera", sap.ui.model.FilterOperator.StartsWith, "20");
				filters.push(ofilters);
			}
			if (this.getView().byId("MP13").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Camera", sap.ui.model.FilterOperator.StartsWith, "13");
				filters.push(ofilters);
			}
			if (this.getView().byId("MP12").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Camera", sap.ui.model.FilterOperator.StartsWith, "12");
				filters.push(ofilters);
			}
			if (this.getView().byId("MP8").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Camera", sap.ui.model.FilterOperator.StartsWith, "8");
				filters.push(ofilters);
			}
			if (this.getView().byId("MP5").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Camera", sap.ui.model.FilterOperator.StartsWith, "5");
				filters.push(ofilters);
			}
			if (this.getView().byId("b1").getSelected() === true) {
				// MessageToast.show(this.getView().byId("Ram4").getSelected());

				ofilters = new sap.ui.model.Filter("Battery", sap.ui.model.FilterOperator.GT,"4000");
				filters.push(ofilters);
			}
			if (this.getView().byId("b2").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Battery", sap.ui.model.FilterOperator.BT,"3000","3999");
				filters.push(ofilters);
			}
			if (this.getView().byId("b3").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Battery", sap.ui.model.FilterOperator.BT,"2000","2999");
				filters.push(ofilters);
			}
			if (this.getView().byId("b4").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Battery", sap.ui.model.FilterOperator.LT,"1000");
				filters.push(ofilters);
				
			}
	if (this.getView().byId("s1").getSelected() === true) {
				

				ofilters = new sap.ui.model.Filter("Display", sap.ui.model.FilterOperator.GT,"6");
				filters.push(ofilters);
			}
			if (this.getView().byId("s2").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Display", sap.ui.model.FilterOperator.StartsWith,"5.5");
				filters.push(ofilters);
			}
		
			if (this.getView().byId("s3").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Display", sap.ui.model.FilterOperator.BT,"4","5.4");
				filters.push(ofilters);
			}
			if (this.getView().byId("s4").getSelected() === true) {
				ofilters = new sap.ui.model.Filter("Display", sap.ui.model.FilterOperator.LT,"3.9");
				filters.push(ofilters);
			}
		  oList.getBinding("items").filter(filters);
		   var oList1 = this.getView().byId("myList");
		   ;
		   MessageToast.show(oList1.getBinding("items").getValue("Price"));
		  
		 
	       

		},
		// onSelect: function() {
		
		// 	var oView = this.getView();
		// 	var oDialog1 = oView.byId("select companies");
		// 	if (!this._oDialog1) {
		// 		this._oDialog1 = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.TSelection", this);
		// 		this.getView().addDependent(this._oDialog1);
		// 		this._oDialog1.addStyleClass("sapUiSizeCompact");
		// 	}
		// 	this._oDialog1.open();
		// },
		// onClose: function() {
		// 	this._oDialog1.close();
		// },
		onMenuClick: function(oEvent) {
			var sideNavigation = this.getView().byId("SplitAppDemo");

			if (sideNavigation.getMode() == "ShowHideMode" || sideNavigation.getMode() == "StretchCompressMode") {
				sideNavigation.setMode(sap.m.SplitAppMode.HideMode);
			} else {
				sideNavigation.setMode(sap.m.SplitAppMode.StretchCompressMode);
			}
		},
		onListItemPress: function(oEvent) {
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
			this.getSplitAppObj().toDetail(this.createId(sToPageId));
		},

		getSplitAppObj: function() {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				jQuery.sap.log.info("SplitApp object can't be found");
			}
			return result;
		},
		onPressStock: function() {
			this.getSplitAppObj().to(this.createId("tstock"));
		},
		onPressDashboard: function() {
			this.getSplitAppObj().to(this.createId("tdashboard"));
		},
		onPressConsumption: function() {
			this.getSplitAppObj().to(this.createId("tuser"));
		},
		OndomainChange: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.TDomainChange", this);
				this.getView().addDependent(this._oDialog);
				this._oDialog.addStyleClass("sapUiSizeCompact");
			}
			this._oDialog.open();

		},

		onPress: function(oEvent) {
			var domain = oEvent.getParameter("selectedItem").getText();
			if (domain === "Energy")
				d = 2;
			else if (domain === "Zip Code based Info")
				d = 3;
			else if (domain === "Telecommunication")
				d = 1;
			else
				d = 4;
		},
		onConfirm: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if (d === 1)
				oRouter.navTo("Tdashboard");
			else if (d === 2)
				oRouter.navTo("Edashboard");
			else if (d == 3)
				oRouter.navTo("zip");
			else
				this._oDialog.close();
		},
		onCancel: function() {
			this._oDialog.close();
		},
		onLogout: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home");
		}
	});
});