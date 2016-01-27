var React = require('react');
var ThumbnailImage = require('./ThumbnailImage.jsx');
var ThumbnailCaption = require('./ThumbnailCaption.jsx');
var SearchStore = require('../../stores/SearchStore.js');
var ArchLandingPageActionCreators = require('../../actions/ArchLandingPageActionCreators.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');

var Thumbnail = React.createClass({

	getArchaeologistProfile: function (id) {
		ArchLandingPageActionCreators.getArchProfile(SignInDetailsStore.getToken(), id);
	},

	addThumbnails: function () {

		var thumbnailArray = SearchStore.getThumbnailSearchData();

		var thumbnails = thumbnailArray.map(function (element, index) {
			return (
				<div className="col-xs-3" key={index}>
					<div className="thumbnail">
						<ThumbnailImage image={element.image} />
						<ThumbnailCaption id={element.id} name={element.name} email={element.email} specialism={element.specialism} experience={element.experience} handleViewProfileClickEvent={this.getArchaeologistProfile} />
					</div>
				</div>
			);
		}.bind(this));
		return thumbnails;
	},

	render: function () {
		return (
			<div>
				{this.addThumbnails()}	
			</div>
		);
	}
});

module.exports = Thumbnail;