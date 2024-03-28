sap.ui.define([
	'sap/ui/core/UIComponent'
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.smartControls.Component", {
		metadata: {
			manifest: "json"
		},
		init(){
			UIComponent.prototype.init.apply(this, arguments);
		},
		destory(){
			UIComponent.prototype.destory.apply(this,arguments);
		}
	});

});
