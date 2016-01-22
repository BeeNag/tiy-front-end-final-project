var React = require('react');

var ThumbnailImage = React.createClass({
	render: function () {
		return (
			<img src={this.props.image} alt="Profile Picture"></img>
		);
	}
});

module.exports = ThumbnailImage;