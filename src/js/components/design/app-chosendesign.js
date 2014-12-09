/** @jsx React.DOM */
var React = require('react');

var ChosenDesign =
  React.createClass({

    render:function(){
      var designName = this.props.designName.selectedDesignDesignName;
      var imgpath = "/img/Responsive-"+designName+".png";
      return (
        <div className="row container">
          <div className="col-xs-8">
            <div className="large-image-wrapper">
              <div className="large-image-wrapper-title">Viewing: {this.props.displayName.selectedDesignDisplayName}</div>
              <img src={imgpath} />
            </div>
          </div>
        </div>
        )
    }
  });
module.exports = ChosenDesign;
