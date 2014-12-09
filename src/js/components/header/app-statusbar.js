/** @jsx React.DOM */
var React = require('react');

var Statusbar =
  React.createClass({
    render:function(){
      return (
        <div className="row status-bar-wrapper selected-wrapper">
          <div className="container">
            <div className="col-xs-4 title-wrapper">
              <h2>Responsive Design Selector</h2>
            </div>
            <div className="col-xs-4">
              <ul className="breadcrumb">
                <li><a href="#">1. OEM</a></li>
                <li className="active"><a href="#">2. Select Design</a></li>
                <li><a href="#">3. Select Color &amp; Layout</a></li>
                <li><a href="#">4. Finalize</a></li>
              </ul>
            </div>
          </div>
        </div>
        )
    }
  });
module.exports = Statusbar;