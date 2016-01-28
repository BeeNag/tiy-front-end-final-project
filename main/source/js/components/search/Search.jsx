var React = require('react');
var EmployerNavbar = require('../company-navbar/EmployerNavbar.jsx');
var BasicSearch = require('./BasicSearch.jsx');
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
			<div className="container-fluid search-page">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div className="row">
					<div className="col-xs-12">
						<h1 className="text-center">Search for an Archaeologist</h1>
					</div>
				</div>
				<hr className="page-break" />
				<BasicSearch />
				<div className="row">
					<div className="col-xs-12 search-results">
						<h3 id="search-results" className="text-center">Search Results</h3>
					</div>
				</div>
				<div className="row">
					{this.state.isThumbnailShowing ? <Thumbnail /> : null}
				</div>
				<hr className="page-break" />
			</div>
		);
	}
});

module.exports = Search;