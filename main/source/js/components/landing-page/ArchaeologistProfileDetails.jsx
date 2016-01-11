var React = require('react');

var ArchaeologistProfileDetails = React.createClass({
	render: function () {
		return (
			<div>
				<input type="text" placeholder="First Name" className="form-control input pass" ref="first_name"></input>
				<input type="text" placeholder="Last Name" className="form-control input pass" ref="last_name"></input>
				<input type="date" placeholder="Date of Birth" className="form-control input pass" ref="date_of_birth"></input>
				<input type="address" placeholder="Address Line 1" className="form-control input pass" ref="address"></input>
				<input type="address" placeholder="Address Line 2" className="form-control input pass" ref="address"></input>
				<input type="address" placeholder="Address Line 3" className="form-control input pass" ref="address"></input>
				<input type="text" placeholder="City" className="form-control input pass" ref="city"></input>
				<input type="postcode" placeholder="Postcode" className="form-control input pass" ref="postcode"></input>
				<input type="text" placeholder="Enter Home Phone Number" className="form-control input pass" data-format="(+44)ddd ddd dddd" ref="home_phone_number"></input>
				<input type="text" placeholder="Enter Mobile Phone Number" className="form-control input pass" data-format="(+44)dddd ddd dddd" ref="mobile_phone_number"></input>
				<select className="form-control input pass" ref="experience">
                  		<option>Experience</option>
                  		<option>0-1</option>
                  		<option>1-2</option>
                  		<option>2-5</option>
                  		<option>5+</option>
            	      </select>
                  	<select className="form-control input pass" ref="specialism">
                  		<option>Specialism</option>
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
                  	<select className="form-control input pass" ref="cscs_card">
                  		<option>CSCS Card</option>
                  		<option>Yes</option>
                  		<option>No</option>
                  	</select>
            	      <textarea className="form-control input pass" placeholder="Describe Yourself in 250 Words..." rows="5" maxLength="250" ref="description"></textarea>
            	      <label htmlFor="upload-picture" className="upload">Upload a Picture of Yourself</label>
    			      <input type="file" className="form-control input pass" id="upload-picture"></input>
			</div>
		);
	}
});

module.exports = ArchaeologistProfileDetails;