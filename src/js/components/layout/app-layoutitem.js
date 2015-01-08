/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var AppStore = require('../../stores/app-store.js');

/* Rethinking this... */
var layoutItem =
	React.createClass({
		handleClick:function(){
			var SelectedLayout = this.props.layoutName;
			AppActions.updateLayout(SelectedLayout);
		},
		render:function(){
			var layoutName = this.props.layoutName;
			var designName = this.props.designName.selectedDesignDesignName;
      		var imgpath = "/img/"+designName+"/Layout_"+layoutName+".jpg";

			return (
				<span onClick={this.handleClick}>
					<div className="selector-title">Layout {layoutName}</div>
					<img src={imgpath} />
				</span>
			)
		}
	});
module.exports = layoutItem;
