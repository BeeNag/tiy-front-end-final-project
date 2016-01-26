var React = require('react');

var ThumbnailCaption = React.createClass({
	render: function () {
		return (
			<div className="caption">
				<h4 className="text-center">{this.props.name}</h4>
				<p className="text-center">{this.props.email}</p>
				<p className="text-center">{this.props.specialism}</p>
				<p className="text-center">{this.props.experience}</p>
				<p className="text-center"><button className="btn btn-primary" type="button">View Profile</button></p>
			</div>
		);
	}
});

module.exports = ThumbnailCaption;