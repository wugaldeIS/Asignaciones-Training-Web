/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: main.js
 */

$(document).ready(function(){
	var $request = ajaxRequest('http://intelligentsense.com/trainings/twitterUser.json', 'GET', 'json');

	$.when($request).done(function(json){
		loadJsonToHtml(json[0], 'container', 'template');
		hideButton('.hideButton');
		hideInformation('.user-information');
		executeBtnEvents($('button'));
	});
});

/** Adds elements at the html */
function addHtmlElement(pHtmlId, pHtmlElement){
	document.getElementById(pHtmlId).innerHTML += pHtmlElement;
}

/** Send a request to get the Json */
function ajaxRequest(pUrl, pRequestType, pRequestDataType){
    return $.ajax({
		type: pRequestType,
		dataType: pRequestDataType,
		url: pUrl,
		success: function (json) {} 
	});
}

/** Loads the Json information at the Html */
function loadJsonToHtml(pJson, pHtmlId, pTemplate) {
	var template = Handlebars.templates[pTemplate];
	var html = template(pJson);
	addHtmlElement(pHtmlId, html);
}

/** Switch the hide and show buttons */
function changeButton($pActualBtn, pIdName) {
	var btnId = pIdName + ($pActualBtn[0].id).split('_')[2];
	var $hiddenBtn = $(btnId);
	$($pActualBtn).hide();
	$hiddenBtn.show();
}

/** Execute the events of a button */
function executeBtnEvents($pBtn){
	$pBtn.click(function(event) {
		var actualClass = $(this).attr('class');

		if (actualClass === 'showButton'){
			changeButton($(this), '#btn_hide_');

		} else if(actualClass === 'hideButton'){
			changeButton($(this), '#btn_show_');
		}

		toggleInformation($(this));
	});
}

/** Hide the "hide" button when the page loads it */
function hideButton(pButtonClass){
	$(pButtonClass).hide();
}

/** Hide the twitter user information when the page loads it */
function hideInformation(pInformationContainer){
	$(pInformationContainer).hide();	
}

/** Show or hide the information of the twitter user */
function toggleInformation($pActualBtn){
	var parentDiv = getParent($pActualBtn,'div');
	var parentSibling = getSibling(parentDiv, 'div', 0);
	var siblingDiv = '#'+ parentSibling.id;
	$(siblingDiv).animate({width : 'toggle'}, 1000);
}

/** Return the parent tag of the element */
function getParent($pElement, pTag){
	return $pElement.parent(pTag);
}

/** Return the sibling tag of the element */
function getSibling($pElement, pTag, pSiblingNumber){
	return $pElement.siblings(pTag)[pSiblingNumber];
}