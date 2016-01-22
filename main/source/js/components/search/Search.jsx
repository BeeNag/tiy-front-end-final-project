var React = require('react');
var EmployerNavbar = require('../company-navbar/EmployerNavbar.jsx');
var BasicSearch = require('./BasicSearch.jsx');
var AdvancedSearch = require('./AdvancedSearch.jsx');
var Thumbnail = require('../thumbnail/Thumbnail.jsx');
var SearchStore = require('../../stores/SearchStore.js');

var Search = React.createClass({

	getInitialState: function () {
		return {
			isThumbnailShowing: false
		};
	},

	updateState: function () {
		this.setState({
			data: SearchStore.getThumbnailSearchData(),
			isThumbnailShowing: true
		});
	},

	componentDidMount: function () {
		SearchStore.addChangeListener(this.updateState);
	},

	componentWillUnMount: function () {
		SearchStore.removeChangeListener(this.updateState);
	},

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
				<div className="row">
					<h3>Recent Archaeologists</h3>
				</div>
				<div className="row">
			
				</div>
				<div className="row">
					<div className="col-xs-8">
						<h3 id="search-results">Search Results</h3>
					</div>
				</div>
				<div className="row">
					{this.state.isThumbnailShowing ? <Thumbnail /> : null}
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