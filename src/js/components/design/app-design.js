/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var CatDesign = require('./app-catdesign.js');
var ChosenDesign = require('./app-chosendesign.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');


function getDesigns() {
  return{designs: AppStore.getDesigns()}
}
function selectedDesignDesignName() {
  return{selectedDesignDesignName: AppStore.getSelectedDesignDesignName()}
}
function selectedDesingDisplayName() {
  return{selectedDesignDisplayName: AppStore.getSelectedDesignDisplayName()}
}
var Design =
  React.createClass({
    mixins: [new StoreWatchMixin(getDesigns)],
    render:function(){
      var designs = this.state.designs.map(function(design){
        return <CatDesign design={design} />
      })
        return (
          <div className="row container design-selection-wrapper">
            <div className="col-xs-8">
              <div className="row">
                <ul className="design-selector-list">
                  {designs}    
                </ul>
              </div>
            </div>
            <ChosenDesign displayName={selectedDesingDisplayName()} designName={selectedDesignDesignName()}></ChosenDesign>
          </div>
        )
    }
  });
module.exports = Design;
