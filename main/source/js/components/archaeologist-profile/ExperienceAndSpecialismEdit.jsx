var React = require('react');

var ExperienceAndSpecialismEdit = React.createClass({

      handleExperienceAndSpecialismEditFormSubmit: function (submitEvent) {
            submitEvent.preventDefault();
            this.props.handleExperienceAndSpecialismEditForm();
      },

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="update" method="post" action="/update" onSubmit={this.handleExperienceAndSpecialismEditFormSubmit}>
	        				<h1>Update Your Specialism and/or Experience</h1>
	        				<select className="form-control input pass">
            					<option>Experience</option>
            					<option>0-1</option>
            					<option>1-2</option>
            					<option>2-5</option>
            					<option>5+</option>
            				</select>
            				<select className="form-control input pass">
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
    						<input type="submit" value="Update" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = ExperienceAndSpecialismEdit;