/** @jsx React.DOM */
var React = require('react');
var ColorList = require('../palette/app-colorlist.js');
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');


function getDesigns() {
  return{designs: AppStore.getDesigns()}
}
function getSelectedDesignDisplayName() {
  return{ selectedDesignDesignName: AppStore.getSelectedDesignDisplayName()}
}

var Palette =
  React.createClass({
    mixins: [new StoreWatchMixin(getDesigns)],
    render:function(){
        return (
          <div className="row container select-color-options-wrapper">
            <div className="col-xs-8 col-sm-4">
              <ColorList />
            </div>
            <div className="col-xs-8 col-sm-4">
              <div className="theme-color light">Light</div>
              <div className="theme-color dark">Dark</div>
            </div>
          </div>
        )
    }
  });
module.exports = Palette;
