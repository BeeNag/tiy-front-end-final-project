var React = require('react');
var ReactFire = require('reactfire');
var ExcavationStore = require('../../stores/ExcavationStore.js');

var ExcavationDetails = React.createClass({
	
	addExcavations: function () {

		var excavationArray = ExcavationStore.getExcavationDetails();

		console.log('this is:' + excavationArray);

		var excavations = excavationArray.map(function (element, index) {

			console.log(element);
			return (
				<div className="container" key={index}>
					<div className="panel panel-info">
	            		<div className="panel-heading">
	              			<h3 className="panel-title">{element.name}</h3>
	            		</div>
	            		<div className="panel-body">
	              			<div className="row">
	                			<div className="col-md-9 col-lg-9">
	                  				<table className="table table-user-information">
	                    				<tbody>
	                    					<tr>
	                    						<td>Overview</td>
	                    						<td>{element.excavation_description}</td>
	                    						<td></td>
	                    					</tr>
	                        				<tr>
	                        					<td>Excavation Home Page</td>
	                        					<td><a type="submit" href={element.excavation_url} target="_blank">Excavation Home Page</a></td>
	                        					<td></td>
	                      					</tr>
	                    				</tbody>
	                  				</table>
	                			</div>
	              			</div>
	            		</div>
	            	</div>
            	</div>
					// <div className="row">
					// 	<div className="col-xs-12 excavation-name">
					// 		<p>{element.name}</p>
					// 	</div>
					// </div>
					// <div className="row">
					// 	<div className="col-xs-6">
					// 		<p>{element.excavation_description}</p>
					// 	</div>
					// </div>
					// <div className="row">
					// 	<div className="col-xs-4">
					// 		<a type="submit" className="btn btn-info" href={element.excavation_url} target="_blank" role="button">Excavation Home Page</a>
					// 	</div>
					// </div>
			);
		});
		console.log(excavations);
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