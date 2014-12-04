/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store.js');
var CatDesign = require('./app-catdesign.js');
var ChosenDesign = require('./app-chosendesign.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');
Link = require('react-router-component').Link;

function getDesigns() {
  return{designs: AppStore.getDesigns()}
}
var Design =
  React.createClass({
    mixins: [new StoreWatchMixin(getDesigns)],
    render:function(){
      var designs = this.state.designs.map(function(design){
        return <CatDesign design={design} />
      })
        return (
          <div>
            <h2>Choose a Design</h2>
            {designs}
            <ChosenDesign>Ford Unity</ChosenDesign>
            <Link href={'/'}>Back to Manufacturer</Link> | 
            <Link href={'/palette'}>Choose your color</Link>
          </div>
        )
    }
  });
module.exports = Design;
