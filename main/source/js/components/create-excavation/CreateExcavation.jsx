var React = require('react');
var EmployerNavbar = require('../EmployerNavbar.jsx');
var CreateExcavationActionCreators = require('../../actions/CreateExcavationActionCreators.js');

var CreateExcavation = React.createClass({

	handleCreateExcavationClickEvent: function () {
		CreateExcavationActionCreators.changeToCompanyProfile();
	},

	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<form>
						<div className="form-group">
							<label htmlFor="inputExcavationName">Excavation Name</label>
							<input type="text" className="form-control" id="inputExcavationName" placeholder="Excavation Name" ref="name"></input>
						</div>
						<div className="form-group">
	                    	<label htmlFor="inputAddressLineOne">Address Line 1</label>
	                    	<input type="address" className="form-control" id="inputAddressLineOne" placeholder="Address Line 1" ref="address1"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputAddressLineTwo">Address Line 2</label>
	                    	<input type="address" className="form-control" id="inputAddressLineTwo" placeholder="Address Line 2" ref="address2"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputAddressLineThree">Address Line 3</label>
	                    	<input type="address" className="form-control" id="inputAddressLineThree" placeholder="Address Line 3" ref="address3"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputPostcode">Postcode</label>
	                    	<input type="postcode" className="form-control" id="inputPostcode" placeholder="Postcode" ref="postcode"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="selectDuration">Duration of Excavation</label>
	                    	<input type="text" className="form-control" id="selectDuration" placeholder="Duration" ref="duration"></input>
	                    </div>
	                    <div className="form-group">
      						<label htmlFor="enterExcavationUrl">Excavation Home Page</label>
      						<input type="url" className="form-control" id="enterExcavationUrl" placeholder="Excavation Home Page URL" ref="url"></input>
    					</div>
    					<div className="form-group">
	                    	<label htmlFor="describeExcavation">Please Enter a Brief Description of the Excavation (max. 250 words)</label>
	                    	<input type="text" className="form-control" id="describeExcavation" placeholder="Description" ref="description"></input>
	                    </div>
					</form>
				</div>
				<div className="form-group">
					<div className="col-xs-6 col-xs-offset-3">
						<button onClick={this.handleCreateExcavationClickEvent} type="button" className="btn btn-success">Create Excavation Profile</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CreateExcavation;