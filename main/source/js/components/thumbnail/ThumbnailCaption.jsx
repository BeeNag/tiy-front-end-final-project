var React = require('react');

var ThumbnailCaption = React.createClass({
	render: function () {
		return (
			<div className="caption">
				<h4>{this.props.name}</h4>
				<p>{this.props.email}</p>
				<p>{this.props.specialism}</p>
				<p>{this.props.experience}</p>
				<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
			</div>
		);
	}
});

module.exports = ThumbnailCaption;