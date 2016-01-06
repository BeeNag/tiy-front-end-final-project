var React = require('react');
var ThumbnailImage = require('./ThumbnailImage.jsx');
var ThumbnailCaption = require('./ThumbnailCaption.jsx');

var Thumbnail = React.createClass({
	render: function () {
		return (
			<div className="col-xs-3">
				<div className="thumbnail">
					<ThumbnailImage imageUrl="http://www.valuestockphoto.com/downloads/43521-2/power_button.jpg" imageAlt="power switched off" />
					<ThumbnailCaption name="Joe Blogs" email="joeblogs1988@gmail.com" specialism="Osteoarchaeology" experience="2-5 Years" />
				</div>
			</div>
		);
	}
});

module.exports = Thumbnail;