var React = require('react');

var AdvancedSearch = React.createClass({
	render: function () {
		return (
            <div className="row">
			    <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#advanced-search">Advanced Search</button>
				<div className="collapse" id="advanced-search">
					<div className="col-xs-8 col-xs-offset-2">
	    				<div className="input-group">
            				<div className="input-group-btn search-panel">
                				<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                					<span id="filter-dropdown">Filter by</span><span className="caret"></span>
                				</button>
                				<ul className="dropdown-menu" role="menu">
			                      <li><a href="#specialism">Specialism</a></li>
			                      <li><a href="#experience">Experience</a></li>
			                      <li><a href="#cscs-card">CSCS Card</a></li>
                				</ul>
            				</div>
            				<input type="hidden" name="search-param" value="all" id="search-param"></input>        
            				<input type="text" className="form-control" name="search-input" placeholder="Search for Archaeologists..."></input>
            				<span className="input-group-btn">
                				<button className="btn btn-primary" type="button"><span className="glyphicon glyphicon-search"></span></button>
            				</span>
        				</div>
    				</div>
				</div>
            </div>
		);
	}
});

module.exports = AdvancedSearch;