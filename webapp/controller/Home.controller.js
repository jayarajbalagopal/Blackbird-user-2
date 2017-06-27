sap.ui.define([
			"sap/ui/core/mvc/Controller",
			"sap/m/MessageToast",
			"sap/ui/model/json/JSONModel"

		], function(Controller, MessageToast, JSONModel) {
			"use strict";
			var d = 0;
			return Controller.extend("bbuserBlackbird_user_v1.controller.Home", {
				onInit: function() {
					var oModel = new JSONModel();
					this.getView().setModel(oModel);
					
				},

				onLogin: function() {

					if (!this._oDialog) {
						this._oDialog = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.Login", this);
						this.getView().addDependent(this._oDialog);
						this._oDialog.addStyleClass("sapUiSizeCompact");
					}
					this._oDialog.open();

				},

				onSignup: function() {

					if (!this._oDialog1) {
						this._oDialog1 = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.Register", this);
						this.getView().addDependent(this._oDialog1);
						this._oDialog1.addStyleClass("sapUiSizeCompact");
					}
					this._oDialog1.open();

				},
				onCancel: function() {
					this._oDialog1.close();

				},
				// onNext: function(oEvent) {

				// 
				// 	this._oDialog1.close();
				// 	if (!this._oDialog2) {
				// 		this._oDialog2 = sap.ui.xmlfragment("bbuserBlackbird_user_v1.view.Selection", this);
				// 		this.getView().addDependent(this._oDialog2);
				// 		this._oDialog2.addStyleClass("sapUiSizeCompact");
				// 	}
				// 	this._oDialog2.open();
				// },

				login: function() {
					var email = sap.ui.getCore().byId("email1").getValue();
					var password = sap.ui.getCore().byId("password1").getValue();
					var oView = this.getView();
					if (email === null || password === null) {

						MessageToast.show("Enter Email and password");
						var results ;
					}
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					$.ajax({
						type: 'GET',
						url: "/destinations/Blackbird_01/login.xsjs?email=" + email + "&password=" + password,
						async: false
					}).done(function(results) {
							results = JSON.parse(results);
							if (results[0] === "2") {
								results = results.split(",");
								/*oView.getModel().setProperty("/name", results[1]);
								MessageToast.show("/name");*/
								oRouter.navTo("Tdashboard");
							} else if (results[0] === "1") {
								results = results.split(",");
								// oView.getModel().setProperty("/name", results[1]);
								oRouter.navTo("Edashboard");
							}else if (results[0] === "3") {
								results = results.split(",");
								// oView.getModel().setProperty("/name", results[1]);
								oRouter.navTo("zip");
							} else if (results[0] === "4") {
								results = results.split(",");
								// oView.getModel().setProperty("/name", results[1]);
								oRouter.navTo("mobile");
							} 
							else MessageToast.show("password does not match");
})
							.fail(function(err) {
								oView.setBusy(false);
								if (err !== undefined) {
									var oErrorResponse = $.parseJSON(err.responseText);
									sap.m.MessageToast.show("No such registered user");
								} else {
									sap.m.MessageToast.show("Unknown error!");
								}
							});

						},
						onPress: function(oEvent) {

							var domain = oEvent.getParameter("selectedItem").getText();
							if (domain === "Energy")
								d = 1;
							else if(domain == "Telecommunication")
								d = 2;
							else if(domain == "Zip code based information")
								d=3;
							else
								d=4;
						},
						onClose: function(Event) {
							var email = sap.ui.getCore().byId("email").getValue();
							var user_name = sap.ui.getCore().byId("user_name").getValue();
							var password = sap.ui.getCore().byId("password").getValue();
							var oView = this.getView();
							if (email === null || user_name === null || password === null || d === 0) MessageToast.show("All fields are required");
							else {
								$.ajax({
										type: 'GET',
										url: "/destinations/Blackbird_01/signup.xsjs?email=" + email + "&user_name=" + user_name + "&password=" + password +
											"&domain=" +
											d,
										async: false
									}).done(function(results) {
										MessageToast.show("Success");
									})
									.fail(function(err) {
										oView.setBusy(false);
										if (err !== undefined) {
											var oErrorResponse = $.parseJSON(err.responseText);
											sap.m.MessageToast.show(oErrorResponse.message, {
												duration: 6000
											});
										} else {
											sap.m.MessageToast.show("Unknown error!");
										}
									});
								this._oDialog1.close();
							}
						},
						handleToggleSecondaryContent: function(oEvent) {
							var oSplitContainer = this.getView().byId("mySplitContainer");
							oSplitContainer.setShowSecondaryContent(!oSplitContainer.getShowSecondaryContent());
						},

					});
			});