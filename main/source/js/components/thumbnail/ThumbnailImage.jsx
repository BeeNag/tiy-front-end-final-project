var React = require('react');

var ThumbnailImage = React.createClass({
	render: function () {
		return (
			<img src={this.props.imageUrl} alt={this.props.imageAlt}></img>
		);
	}
});

module.exports = ThumbnailImage;