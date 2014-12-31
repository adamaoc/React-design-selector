/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');
var layoutItems = require('../layout/app-layoutitems.js');


function getDesigns() {
  return{designs: AppStore.getDesigns()}
}
function selectedDesignDesignName() {
  return{ selectedDesignDesignName: AppStore.getSelectedDesignDesignName()}
}
function selectedDesignLayout() {
  return{ selectedLayout: AppStore.getSelectedLayout()}
}
function getLayouts() {
  var layouts = AppStore.getLayouts();
  return layouts
}

var Layout =
  React.createClass({
    mixins: [new StoreWatchMixin(getDesigns)],
    render:function(){
        var selectedDesign = selectedDesignDesignName();
        return (
          <div className="row container select-layout-options-wrapper">
          <h3>{selectedDesign} - Layout {selectedDesignLayout()}</h3>
            <div className="col-xs-8">
              <div className="row">
                <layoutItems layout={getLayouts()} design={selectedDesign} />
              </div>
            </div>
          </div>
        )
    }
  });
module.exports = Layout;