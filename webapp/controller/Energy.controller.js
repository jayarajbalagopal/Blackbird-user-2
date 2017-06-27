sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast","sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    "use strict";
     var d;
    return Controller.extend("bbuserBlackbird_user_v1.controller.Energy", {
        onInit:function(){
            var oModel = new JSONModel();
            this.getView().setModel(oModel);
            var oView = this.getView();
            var self=this;
            var a = "https://";
            var b = "newsapi.org/v1/articles?source=reuters&sortBy=top&apiKey=fb2bae43a3d8442196b859b66e4fe253";
            // newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=fb2bae43a3d8442196b859b66e4fe253
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
                this._oDialog1 = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.ESelection", this);
                this.getView().addDependent(this._oDialog1);
                this._oDialog1.addStyleClass("sapUiSizeCompact");
            }
            this._oDialog1.open();
        },
        onMenuClick: function (oEvent) {
            var sideNavigation = this.getView().byId("SplitAppDemo");
            
            if(sideNavigation.getMode()=="ShowHideMode"||sideNavigation.getMode()=="StretchCompressMode"){
              sideNavigation.setMode(sap.m.SplitAppMode.HideMode);}
            else{
              sideNavigation.setMode(sap.m.SplitAppMode.StretchCompressMode);
            }
        },
        onClose: function() {
            this._oDialog1.close();
        },
        onListItemPress: function(oEvent) {
            var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
            this.getSplitAppObj().toDetail(this.createId(sToPageId));
        },
        Onpress:function(oControlEvent){
        
        this.companyrestricter();
        this.onClose();
            
        
        },
        getSplitAppObj: function() {
            var result = this.byId("SplitAppDemo");
            if (!result) {
                jQuery.sap.log.info("SplitApp object can't be found");
            }
            return result;
        },
        onPressStock:function(){
            this.getSplitAppObj().to(this.createId("estock"));
        },
        onPressDashboard:function(){
            this.getSplitAppObj().to(this.createId("edashboard"));
        },
        onPressConsumption:function(){
            this.getSplitAppObj().to(this.createId("econsum"));
        },
        OndomainChange:function(){
        if (!this._oDialog) {
            this._oDialog = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.EDomainChange", this);
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
                    oRouter.navTo("Tdashboard");
                    else if (d===3)
                    oRouter.navTo("zip");
                    else if(d==4)
                    oRouter.navTo("mobile");
                    else
                    this._oDialog.close();
            },
            onCancel:function(){
                    this._oDialog.close();
            },
            
    
            onLogout:function()
            {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("Home");
            },
            companyrestricter: function() {
				//var newv;
			//MessageToast.show(newv);
			
			var cha = sap.ui.getCore().byId("checka").getSelected();
			var chr = sap.ui.getCore().byId("checkr").getSelected();
			var chb = sap.ui.getCore().byId("checkb").getSelected();
			var chi = sap.ui.getCore().byId("checki").getSelected();
			var chh = sap.ui.getCore().byId("checkh").getSelected();
			vcha=cha;
			vchr=chr;
			vchb=chb;
			vchi=chi;
			vchh=chh;
			//MessageToast.show(sap.ui.getCore().byId("checka").getId());
			//MessageToast.show(cha + ":" + chr + ":" + chb + ":" + chi + ":" + chh);
			
			var comp;
			var oFilter;
			var oVizFrame = sap.ui.getCore().byId(vidchart1);
			//MessageToast.show(this.getView().byId("checka").getId());
			//MessageToast.show(oVizFrame);
			var oFilters = [];
			if (cha === true)
			{comp="Adani Power";
			oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
			oFilters.push(oFilter);
			}
			if (chr === true)
			{comp="Reliance Power";
			oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
			oFilters.push(oFilter);
			}
			
			if (chb === true)
			{comp="BPCL";
			oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
			oFilters.push(oFilter);
			}
			
			if (chi === true)
			{comp="IOC";
			oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
			oFilters.push(oFilter);
			}
			if (chh === true)
			{comp="Hindustan Petroleum";
			oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ, comp);
			oFilters.push(oFilter);
			}
			
			//oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ,"Hindustan Petroleum");
			//oFilters.push(oFilter);
			//oFilter = new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.EQ,"Tata Steel");
			//oFilters.push(oFilter);
			oVizFrame.getDataset().getBinding("data").filter(oFilters);

		}
            
    });
});