var React = require('react');

var AdvancedSearch = React.createClass({
	render: function () {
		return (
            <div className="row">
                <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#advanced-search">Advanced Search</button>
                <div className="collapse" id="advanced-search">
    			    <div className="row myform">
                        <div className="col-xs-6 col-xs-offset-3">
                            <form name="advanced-search-form" role="form">
                                <div className="form-group">
                                    <label htmlFor="selectSpecialism">Specialism</label>
                                    <select className="form-control" id="selectSpecialism">
                                        <option>Please select from the list of available specialisms</option>
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
                                    <label htmlFor="selectExperience">Experience</label>
                                    <select className="form-control" id="selectExperience">
                                        <option>Please select from the list</option>
                                        <option>0-1 Year</option>
                                        <option>1-2 Years</option>
                                        <option>2-5 Years</option>
                                        <option>5+ Years</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="validCSCSCard">Valid CSCS Card?</label>
                                    <select className="form-control" id="validCSCSCard">
                                        <option>Please select whether you would like to search for candidates with a valid CSCS card</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary">Search<span className="glyphicon glyphicon-search"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
});

module.exports = AdvancedSearch;