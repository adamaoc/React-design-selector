/** @jsx React.DOM */
var React = require('react');

var ColorList =
  React.createClass({
    render:function(){
        return (
          <div className="color-chip-wrapper">
            <a className="color-chip ovalblue"></a>
            <a className="color-chip escapeblue"></a>
            <a className="color-chip harvestorange"></a>
            <a className="color-chip flourishgreen"></a>
            <a className="color-chip tealgreen"></a>
            <a className="color-chip scarletred"></a>
          </div>
        )
    }
  });
module.exports = ColorList;
