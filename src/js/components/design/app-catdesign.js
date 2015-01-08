/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var AppStore = require('../../stores/app-store.js');

var CatDesign =
  React.createClass({
    getInitialState:function() {
      return {ref: this.props.design.DesignName}
    },
    handleClick:function(){
      DesignName = this.props.design.DesignName;
      DisplayName = this.props.design.DisplayName;
      var names = [DesignName, DisplayName];
      AppActions.updateDesign(names);

    },
    render:function(){
      var imgpath = "/img/Responsive-"+this.props.design.DesignName+".png";
      var curDesign = AppStore.getSelectedDesignDesignName();
      var style = '';
      if(this.state.ref == curDesign) {
        style = 'focused';
      }
      return (
          <li ref={this.state.ref} className={style + ' col-xs-3rd'} onClick={this.handleClick}>
            <div className="selector-title">{this.props.design.DisplayName}</div>
            <img src={imgpath} />
          </li>
        )
    }
  });
module.exports = CatDesign;
