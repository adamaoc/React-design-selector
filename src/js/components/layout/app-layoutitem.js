/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var AppStore = require('../../stores/app-store.js');

/* Rethinking this... */
var layoutItem =
	React.createClass({
		getInitialState:function() {
			var curLayout = AppStore.getSelectedLayout();
			return {
				currentLayout: curLayout,
				class: ""
			}
		},
		handleClick:function(){
			var SelectedLayout = this.props.layoutName;
			AppActions.updateLayout(SelectedLayout);
			this.setState({
		        currentLayout: SelectedLayout,
		    	class: "active"
		    });
		},
		render:function(){
			var layoutName = this.props.layoutName;
			var designName = this.props.designName.selectedDesignDesignName;
      		var imgpath = "/img/"+designName+"/Layout_"+layoutName+".jpg";

			return (
				<span className={this.state.class} onClick={this.handleClick}>
					<div className="selector-title">Layout {layoutName}</div>
					<img src={imgpath} />
				</span>
			)
		}
	});
module.exports = layoutItem;