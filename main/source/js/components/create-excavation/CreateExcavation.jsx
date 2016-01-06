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
							<input type="text" className="form-control" id="inputExcavationName" placeholder="Excavation Name"></input>
						</div>
						<div className="form-group">
	                    	<label htmlFor="inputAddressLineOne">Address Line 1</label>
	                    	<input type="address" className="form-control" id="inputAddressLineOne" placeholder="Address Line 1"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputAddressLineTwo">Address Line 2</label>
	                    	<input type="address" className="form-control" id="inputAddressLineTwo" placeholder="Address Line 2"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputAddressLineThree">Address Line 3</label>
	                    	<input type="address" className="form-control" id="inputAddressLineThree" placeholder="Address Line 3"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputPostcode">Postcode</label>
	                    	<input type="postcode" className="form-control" id="inputPostcode" placeholder="Postcode"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="selectDuration">Duration of Excavation</label>
	                    	<select className="form-control" id="selectDuration">
	                    		<option></option>
	                    		<option>1 Week</option>
	                    		<option>2 Weeks</option>
	                    		<option>3 Weeks</option>
	                    		<option>1 Month</option>
	                    		<option>2 Months</option>
	                    		<option>3 Months</option>
	                    		<option>More than 3 Months</option>
	                    	</select>
	                    </div>
	                    <div className="form-group">
      						<label htmlFor="enterExcavationUrl">Excavation Home Page</label>
      						<input type="url" className="form-control" id="enterExcavationUrl" placeholder="Excavation Home Page URL"></input>
    					</div>
    					<div className="form-group">
	                    	<label htmlFor="describeExcavation">Please Enter a Brief Description of the Excavation (max. 250 words)</label>
	                    	<textarea className="form-control" id="describeExcavation" rows="5" maxlength="250"></textarea>
	                    </div>
					</form>
				</div>
				<div className="row">
					<div className="col-xs-6 col-xs-offset-3">
						<button onClick={this.handleCreateExcavationClickEvent} type="button" className="btn btn-success">Create Excavation Profile</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CreateExcavation;