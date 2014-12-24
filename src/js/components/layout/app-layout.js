/** @jsx React.DOM */
var React = require('react');

var Layout =
  React.createClass({
    render:function(){
        return (
          <div className="row container select-layout-options-wrapper">
            <div className="col-xs-8">
              <div className="row">
                <ul className="layout-selector-list">
                  <li className="col-xs-8 col-md-2 selected">
                    <div className="selector-title">Layout A</div>
                    <img src="https://s3.amazonaws.com/uploads.hipchat.com/20402/404850/ViB6LcIGUOcZkwi/Layout_A_Default.jpg" />
                  </li>
                  <li className="col-xs-8 col-md-2">
                    <div className="selector-title">Layout B</div>
                    <img src="https://s3.amazonaws.com/uploads.hipchat.com/20402/404850/r3xksS2moFRT06g/Layout_B.jpg" />
                  </li>
                  <li className="col-xs-8 col-md-2">
                    <div className="selector-title">Layout C</div>
                    <img src="https://s3.amazonaws.com/uploads.hipchat.com/20402/404850/QOnMMM724NsrdnT/Layout_C.jpg" />
                  </li>
                  <li className="col-xs-8 col-md-2">
                    <div className="selector-title">Layout D</div>
                    <img src="https://s3.amazonaws.com/uploads.hipchat.com/20402/404850/WDvSlqY1lZMcRMI/Layout_D.jpg" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
  });
module.exports = Layout;
