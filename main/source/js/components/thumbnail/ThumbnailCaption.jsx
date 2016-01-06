var React = require('react');

var ThumbnailCaption = React.createClass({
	render: function () {
		return (
			<div className="caption">
				<h4 className="text-center">{this.props.name}</h4>
				<p className="text-center">{this.props.email}</p>
				<p className="text-center">{this.props.specialism}</p>
				<p className="text-center">{this.props.experience}</p>
				<p className="text-center"><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
			</div>
		);
	}
});

module.exports = ThumbnailCaption;