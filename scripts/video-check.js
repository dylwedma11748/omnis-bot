document.addEventListener('DOMContentLoaded', function() {
    var support = checkVideoTagSupport();
    var dynamicContentDiv = document.getElementById('dynamic-content');
    var paragraph = document.createElement('p');
    
    // Set the text content of the paragraph to the result
    paragraph.textContent = result;
    // Insert the paragraph into the dynamic content div
    dynamicContentDiv.appendChild(paragraph);
});

function checkVideoTagSupport() {
    var video = document.createElement('video');

	if (video && typeof video.canPlayType === 'function') {
		return "video tag is supported";
	} else {
		console.log("video tag is not supported");
	}
}