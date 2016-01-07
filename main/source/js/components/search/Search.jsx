var React = require('react');
var EmployerNavbar = require('../EmployerNavbar.jsx');
var BasicSearch = require('./BasicSearch.jsx');
var AdvancedSearch = require('./AdvancedSearch.jsx');
var Thumbnail = require('../thumbnail/Thumbnail.jsx');

var Search = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Search for an Archaeologist</h1>
					</div>
				</div>
				<BasicSearch />
				<AdvancedSearch />
				<div className="row">
					<h3>Recent Archaeologists</h3>
				</div>
				<div className="row">
					<Thumbnail />
				</div>
				<div className="row">
					<div className="col-xs-8">
						<h3 id="search-results">Search Results</h3>
					</div>
				</div>
				<div className="row">
					
					<div className="col-xs-3 col-xs-offset-3">
						<div data-drop-zone className="drop-zone">Drag Desired Candidates in Here and They Will be Saved For You</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-8">
						<h3 id="saved-profiles">Your Saved Profiles</h3>
					</div>
				</div>
				<div className="row">
					
				</div>
				<div className="row">
					
				</div>
			</div>
		);
	}
});

module.exports = Search;