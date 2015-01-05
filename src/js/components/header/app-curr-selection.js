/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');


function selectedDesignDesignName() {
  return{ selectedDesignDesignName: AppStore.getSelectedDesignDesignName()}
}
function selectedDesignLayout() {
  return{ selectedLayout: AppStore.getSelectedLayout()}
}

var CurrentSelection =
  React.createClass({
    mixins: [new StoreWatchMixin(selectedDesignDesignName)],
    render:function(){
      var selectedDesign = selectedDesignDesignName();
      var selectedLayout = selectedDesignLayout();
      return (
        <div className="current-selection">
          {selectedDesign} | Layout {selectedLayout} | Color
        </div>
        )
    }
  });
module.exports = CurrentSelection;