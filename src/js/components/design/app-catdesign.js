/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');

var CatDesign =
  React.createClass({
    
    handleClick:function(){
      // console.log(this.props.design.DisplayName);
      AppActions.updateDesign(this.props.design.DisplayName);
    },
    render:function(){
      return (
          <button className="design-time" onClick={this.handleClick}>
            {this.props.design.DisplayName}
          </button>

        )
    }
  });
module.exports = CatDesign;
