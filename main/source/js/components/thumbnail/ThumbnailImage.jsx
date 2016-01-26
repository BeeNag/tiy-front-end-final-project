var React = require('react');

var ThumbnailImage = React.createClass({
	render: function () {
		return (
			<img src={'http://localhost:8383/uploads/' + this.props.image} alt="Profile Picture"></img>
		);
	}
});

module.exports = ThumbnailImage;