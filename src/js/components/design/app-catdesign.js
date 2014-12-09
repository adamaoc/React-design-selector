/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');

var CatDesign =
  React.createClass({
    handleClick:function(){
      DesignName = this.props.design.DesignName;
      DisplayName = this.props.design.DisplayName;
      var names = [DesignName, DisplayName];
      AppActions.updateDesign(names);
    },
    render:function(){
      var imgpath = "/img/Responsive-"+this.props.design.DesignName+".png";
      
      return (
          <li className="col-xs-3rd" onClick={this.handleClick}>
            <div className="selector-title">{this.props.design.DisplayName}</div>
            <img src={imgpath} />
          </li>
        )
    }
  });
module.exports = CatDesign;
