var React = require('react');
var ReactFire = require('reactfire');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');

var ExcavationDetails = React.createClass({

	componentWillMount: function () {
		var firebaseRef = new Firebase("https://tiy-front-end.firebaseio.com/excavations/" + excavationId);
		firebaseRef.on("value", function (snapshot) {
			console.log(snapshot.val());	
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
	},

	render: function () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-2">
						<p>{snapshot.val().name}</p>
					</div>
					<div className="col-xs-4 col-xs-offset-6">
						<p>MAP</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-6">
						<p>{snapshot.val().excavation_description}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4">
						<a type="submit" className="btn btn-info" href={snapshot.val().excavation_url} target="_blank" role="button">Excavation Home Page</a>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ExcavationDetails;