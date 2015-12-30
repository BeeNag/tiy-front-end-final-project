var React = require('react');

var Thumbnail = React.createClass({
	render: function () {
		return (
			<div className="col-xs-3">
				<div className="thumbnail">
					<img src="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" alt="power switched off"></img>
					<div className="caption">
						<h4>Name</h4>
						<p>Email</p>
						<p>Specialism</p>
						<p>Experience</p>
						<p><a href="#" className="btn btn-primary" role="button">View Profile</a></p>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Thumbnail;