var React = require('react');
var ReactFire = require('reactfire');
var ExcavationStore = require('../../stores/ExcavationStore.js');

var ExcavationDetails = React.createClass({
	
	addExcavations: function () {

		var excavationArray = ExcavationStore.getExcavationDetails();

		var excavations = excavationArray.map(function (element, index) {

			console.log(element);
			return (
				<div className="container" key={index}>
					<div className="row">
						<div className="col-xs-2">
							<p>{element.name}</p>
						</div>
						<div className="col-xs-4 col-xs-offset-6">
							<p>Small map of location</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<p>{element.excavation_description}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4">
							<a type="submit" className="btn btn-info" href={element.excavation_url} target="_blank" role="button">Excavation Home Page</a>
						</div>
					</div>
				</div>
			);
		});
		return excavations;
	},

	render: function () {
		return (
			<div className="row">
				{this.addExcavations()}	
			</div>
		);
	}
});

module.exports = ExcavationDetails;