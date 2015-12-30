var React = require('react');
var ArchNavbar = require('../ArchNavbar.jsx');

var CreateProfile = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<ArchNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Please Enter Your Details to Create Your Profile</h1>
					</div>
				</div>
				<div className="row">
					<form>
						<div className="form-group">
	                        <label for="inputFirstName">First Name</label>
	                        <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"></input>
	                    </div>
	                    <div className="form-group">
	                        <label for="inputLastName">Last Name</label>
	                        <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputDateOfBirth">Date of Birth</label>
	                    	<input type="date" className="form-control" id="inputDateOfBirth" placeholder="Date of Birth"></input>
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
	                    	<label for="selectExperience">Years of Experience</label>
	                    	<select className="form-control" id="selectExperience">
	                    		<option></option>
	                    		<option>0-1</option>
	                    		<option>1-2</option>
	                    		<option>2-5</option>
	                    		<option>5+</option>
	                    	</select>
	                    </div>
	                    <div className="form-group">
	                    	<label for="selectSpecialism">Specialism</label>
	                    	<select className="form-control" id="selectSpecialism">
	                    		<option></option>
	                    		<option>Bioarchaeology</option>
	                    		<option>Osteoarchaeology</option>
	                    		<option>Classical Archaeology</option>
	                    		<option>Egyptology</option>
	                    		<option>Environmental Archaeology</option>
	                    		<option>Field Archaeology</option>
	                    		<option>Forensic Archaeology</option>
	                    		<option>Heritage</option>
	                    		<option>Historical Archaeology</option>
	                    		<option>Medieval Archaeology</option>
	                    		<option>Landscape Archaeology</option>
	                    		<option>GIS (Geographical Information Systems)</option>
	                    		<option>Maritime Archaeology</option>
	                    		<option>Museums/Curatorship</option>
	                    		<option>Buildings Archaeology</option>
	                    		<option>Funerary Archaeology</option>
	                    	</select>
	                    </div>
	                    <div className="form-group">
	                    	<label>CSCS Card</label>
	                    	<label className="radio-inline">
	                    		<input type="radio" name="inlineRadioOptions" id="cardSelect1" value="option1">Yes</input>
	                    	</label>
	                    	<label className="radio-inline">
	                    		<input type="radio" name="inlineRadioOptions" id="cardSelect2" value="option2">No</input>
	                    	</label>
	                    </div>
	                    <div className="form-group">
	                    	<label for="describeYourself">Describe Yourself in 250 Words</label>
	                    	<textarea className="form-control" id="describeYourself" rows="5" maxlength="250"></textarea>
	                    </div>
	                    <div className="form-group">
	                    	<label>Upload a Picture of Yourself</label>
	                    	<label className="control-label"></label>
	                    	<input id="photoAvatar" type="file" className="file"></input>
	                    </div>
	                </form>
				</div>
				<div className="row">
					<div className="col-xs-6 col-xs-offset-3">
						<button type="button" className="btn btn-success">Create Profile</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CreateProfile;