var React = require('react');
var ThumbnailImage = require('./ThumbnailImage.jsx');
var ThumbnailCaption = require('./ThumbnailCaption.jsx');
var SearchStore = require('../../stores/SearchStore.js');

var Thumbnail = React.createClass({

	addThumbnails: function () {

		var thumbnailArray = SearchStore.getThumbnailSearchData();

		var thumbnails = thumbnailArray.map(function (element, index) {

			console.log(element);
			return (
				<div className="col-xs-3" key={index}>
					<div className="thumbnail">
						<ThumbnailImage image={element.image} />
						<ThumbnailCaption name={element.name} email={element.email} specialism={element.specialism} experience={element.experience} />
					</div>
				</div>
			);
		});
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