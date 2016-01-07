var React = require('react');
var EmployerNavbar = require('../EmployerNavbar.jsx');
var BasicSearch = require('./BasicSearch.jsx');
var AdvancedSearch = require('./AdvancedSearch.jsx');
var Thumbnail = require('../thumbnail/Thumbnail.jsx');
var SearchStore = require('../../stores/SearchStore.js');

// var thumbnails = SearchStore.getThumbnailDataArray();

var Search = React.createClass({

	// getInitialState: function () {
	// 	return {
	// 		searchString: ''
	// 	};
	// },

	// handleChange: function (input) {
	// 	this.setState({
	// 		searchString: input.target.value
	// 	});
	// },
	
	render: function () {

		// var thumbnails = this.props.items;
		// var searchString = this.state.searchString.trim().toLowerCase();

		// if (searchString.length > 0) {
		// 	thumbnails = thumbnails.filter(function (content) {
		// 		return content.specialism.toLowerCase().match(searchString);
		// 	});
		// }

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