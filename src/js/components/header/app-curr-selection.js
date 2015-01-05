/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');


function getSelectedDesignDisplayName() {
  return{ selectedDesignDesignName: AppStore.getSelectedDesignDisplayName()}
}
function selectedDesignLayout() {
  return{ selectedLayout: AppStore.getSelectedLayout()}
}

var CurrentSelection =
  React.createClass({
    mixins: [new StoreWatchMixin(getSelectedDesignDisplayName)],
    render:function(){
      var selectedDesign = getSelectedDesignDisplayName();
      var selectedLayout = selectedDesignLayout();
      return (
        <div className="current-selection">
          {selectedDesign} Layout {selectedLayout} Color
        </div>
        )
    }
  });
module.exports = CurrentSelection;