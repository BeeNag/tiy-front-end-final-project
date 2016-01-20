var React = require('react');

var ImageUploadForm = React.createClass({

	componentDidMount: function () {
		console.log('waaaaah');
		$(function () {

			var SERVER_URL = 'http://localhost:8383';
			var IMAGES_UPLOAD_URL = '/api/images/upload/';

			var $fileInputElement = $('input[type="file"]');
			var $uploadButtonElement = $('[data-upload-file-button]');

			$('form').on('submit', function handleFormSubmit(submitEvent) {
			    submitEvent.preventDefault();

			    $fileInputElement.simpleUpload(SERVER_URL + IMAGES_UPLOAD_URL, {
				    start: function handleStart(file) {
				        // Upload started

				        $uploadButtonElement.prop('disabled', true);
				    },

				    progress: function handleProgress(progress) {
				        // Received progress
				    },

				    success: function handleSuccess(data) {
				        // Upload successful
				        $uploadButtonElement.prop('disabled', false);
				    },

				    error: function handleError(error) {
				        // Upload failed

				        console.error(error);
				    }
			    });
			});
		});
	},

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6">
	    			<div id="logbox">
						<form className="upload-picture-form" action="http://localhost:8383/images/upload" method="post" encType="mulitpart/form-data">
							<div>
		        				<label htmlFor="upload-picture" className="upload">Upload a Picture of Yourself</label>
	    			    		<input type="file" className="form-control input pass" id="upload-picture" name="image"></input>
	    					</div>
	    					<div>
	    			    		<input type="submit" className="btn btn-success btn-block" value="Upload" data-upload-file-button></input>
    			    		</div>
    					</form>
    				</div>
    			</div>
    		</div>
		);
	}
});

module.exports = ImageUploadForm;