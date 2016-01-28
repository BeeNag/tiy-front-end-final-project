var React = require('react');

var ExperienceAndSpecialismEdit = React.createClass({

      handleExperienceAndSpecialismEditFormSubmit: function (submitEvent) {
            submitEvent.preventDefault();

            var experience = this.refs.experience.value;
            var specialism = this.refs.specialism.value;

            this.props.handleExperienceAndSpecialismEditForm();
            this.props.handleExperienceAndSpecialismEditFormSubmit(experience, specialism);
      },

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-4">
	    			<div id="logbox-profile">
	      				<form id="update" method="post" action="/update" onSubmit={this.handleExperienceAndSpecialismEditFormSubmit}>
	        				<h1>Update Your Specialism and/or Experience</h1>
	        				<input type="number" placeholder="Experience" className="form-control input pass" ref="experience"></input>
                                    <input type="text" placeholder="Specialism" className="form-control input pass" ref="specialism"></input>
    						<input type="submit" value="Update" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = ExperienceAndSpecialismEdit;