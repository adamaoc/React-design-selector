/** @jsx React.DOM */
var React = require('react');

var ChosenDesign =
  React.createClass({

    render:function(){
      return (
          <div className="design-time">
          	<h3>Chosen Design</h3>
          	<div className="design-wrap">
            	{this.props.children}
            </div>
          </div>

        )
    }
  });
module.exports = ChosenDesign;
