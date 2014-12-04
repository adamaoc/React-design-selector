/** @jsx React.DOM */
var React = require('react');

var CatDesign =
  React.createClass({

    render:function(){
      return (
          <div className="design-time">
            {this.props.design}
          </div>

        )
    }
  });
module.exports = CatDesign;
