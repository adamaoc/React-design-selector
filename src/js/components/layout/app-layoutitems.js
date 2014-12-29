/** @jsx React.DOM */
var React = require('react');
var layoutItem = require('../layout/app-layoutitem.js');

var layoutItems =
	React.createClass({
		handleClick:function(){
			var SelectedLayout = this.props.layoutName;
			console.log(SelectedLayout);

		},
		render:function(){
			var items = this.props.layout.map(function(name){
				return (
					<li className="col-xs-8 col-md-2 selected">
						<layoutItem layoutName={name} />
					</li>
				)
			}, this)
			return (
				<ul className="layout-selector-list">
					{items}
				</ul>
			)
		}
	});
module.exports = layoutItems;