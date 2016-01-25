var React = require('react');
var ReactFire = require('reactfire');

var ExcavationDetails = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-2">
						<p>{Object.name}</p>
					</div>
					<div className="col-xs-4 col-xs-offset-6">
						<p>MAP</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6">
						<p>{Object.excavation_description}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4">
						<a type="submit" className="btn btn-info" href={Object.excavation_url} target="_blank" role="button">Excavation Home Page</a>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ExcavationDetails;