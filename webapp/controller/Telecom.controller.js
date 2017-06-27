sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast","sap/ui/model/json/JSONModel"
], function(Controller, MessageToast,JSONModel) {
	"use strict";
   var d;          
	return Controller.extend("bbuserBlackbird_user_v1.controller.Telecom", {
     //onInit:function(){
     //	MessageToast.show(results.data[0][1]);
     	onInit:function(){
			var oModel = new JSONModel();
			this.getView().setModel(oModel);
			var oView = this.getView();
			var self=this;
			var a = "https://";
            var b = "newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=fb2bae43a3d8442196b859b66e4fe253";
            
			  $.ajax({
                    type: 'GET',
                    url: a + b,
                    async: false
                }).done(function(results) {
                    self.getView().getModel().setProperty("/data", results.articles);
                    oView.setBusy(false);
                    
                })
                .fail(function(err) {
                
                    oView.setBusy(false);
                   
                    if (err !== undefined) {
                        // self.getView().byId("Excel2").setVisible(false);
                        var oErrorResponse = $.parseJSON(err.responseText);
                        sap.m.MessageToast.show("Invalid company code", {
                            duration: 6000
                        });
                        
                    } else {
                        sap.m.MessageToast.show("Unknown error!");
                    }
                });

        },
	onSelect: function() {
			var oView = this.getView();
			var oDialog1 = oView.byId("select companies");
			if (!this._oDialog1) {
				this._oDialog1 = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.TSelection", this);
				this.getView().addDependent(this._oDialog1);
				this._oDialog1.addStyleClass("sapUiSizeCompact");
			}
			this._oDialog1.open();
		},
		onClose: function() {
			this._oDialog1.close();
		},
		onMenuClick: function (oEvent) {
			var sideNavigation = this.getView().byId("SplitAppDemo");
			
			if(sideNavigation.getMode()=="ShowHideMode"||sideNavigation.getMode()=="StretchCompressMode"){
			  sideNavigation.setMode(sap.m.SplitAppMode.HideMode);}
			else{
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
		onPressStock:function(){
			this.getSplitAppObj().to(this.createId("tstock"));
			// this.addStyleClass('Side_Navigation_Active');
		},
		onPressDashboard:function(){
			this.getSplitAppObj().to(this.createId("tdashboard"));
		},
		onPressConsumption:function(){
			this.getSplitAppObj().to(this.createId("tuser"));
		},
		OndomainChange:function(){
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
			else if(domain ==="Zip Code based Info")
				d = 3;
			else if(domain == "Mobile")
				d=4;
				else 
				d=1;
			},
				onConfirm:function(){
					 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					if(d===1)
						this._oDialog.close();
					else if(d===2)
					oRouter.navTo("Edashboard");
					else if(d ==3)
					oRouter.navTo("zip");
					else
					 oRouter.navTo("mobile");
			},
			onCancel:function(){
					this._oDialog.close();
			},
		onLogout:function(){
	  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	  oRouter.navTo("Home");
		}
	});
});