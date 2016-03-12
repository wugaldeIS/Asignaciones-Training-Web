/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: helpers.js
 */

/** Adds one to the index of the each handlebars function */
Handlebars.registerHelper('plusOne', function(number, options){
	return number + 1;
});