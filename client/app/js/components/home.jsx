'use strict';
var React = require('react'),
  	HomeSlider = require('./home/homeSlider.jsx'),
  	HomeContent = require('./home/homeContent.jsx'),
  	HomeOfertas = require('./home/homeOfertas.jsx'),
	Home = React.createClass({	
	render: function() {
		return (
	<div className="outer_wrap">
		<div className="inner_wrap">
			<div id="container">
				<HomeSlider slides={this.props.slides} />
			</div>
			<div className="content">
				<HomeContent 
					quemsomos={this.props.quemsomos}
					achapada={this.props.achapada} />
				<HomeOfertas 
					chamadas={this.props.chamadas} />
				<div className="clear"></div>
			</div>
		</div>
	</div>
		);
	}

});

module.exports = Home;