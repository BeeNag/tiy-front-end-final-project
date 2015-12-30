var React = require('react');
var EmployerNavbar = require('../EmployerNavbar.jsx');

var CreateCompanyProfile = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Please Enter Your Company Details to Create a Company Profile</h1>
					</div>
				</div>
				<div className="row">
					<form>
						<div className="form-group">
							<label for="inputCompanyName">Company Name</label>
							<input type="text" className="form-control" id="inputCompanyName" placeholder="Company Name"></input>
						</div>
						<div className="form-group">
	                    	<label for="inputAddressLineOne">Address Line 1</label>
	                    	<input type="address" className="form-control" id="inputAddressLineOne" placeholder="Address Line 1"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputAddressLineTwo">Address Line 2</label>
	                    	<input type="address" className="form-control" id="inputAddressLineTwo" placeholder="Address Line 2"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputAddressLineThree">Address Line 3</label>
	                    	<input type="address" className="form-control" id="inputAddressLineThree" placeholder="Address Line 3"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputCity">City</label>
	                    	<input type="text" className="form-control" id="inputCity" placeholder="City"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputPostcode">Postcode</label>
	                    	<input type="postcode" className="form-control" id="inputPostcode" placeholder="Postcode"></input>
	                    </div>
	                    <div className="form-group">
      						<label for="enterUrl">Company Home Page</label>
      						<input type="url" className="form-control" id="enterUrl" placeholder="Company Home Page URL"></input>
    					</div>
    					<div className="form-group">
	                    	<label for="describeCompany">Please Enter a Brief Description of the Company (max. 250 words)</label>
	                    	<textarea className="form-control" id="describeCompany" rows="5" maxlength="250"></textarea>
	                    </div>
					</form>
				</div>
				<div className="row">
					<div className="col-xs-6 col-xs-offset-3">
						<button type="button" className="btn btn-success">Create Company Profile</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CreateCompanyProfile;