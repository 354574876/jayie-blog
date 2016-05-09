webpackJsonp([2,7],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Jayie.utils.postDataWithToken('/artical/getArticalById', { id: Jayie.utils.getUrlData('_id') }, function (res) {
		$('#contentList').html(res.artical_html);
	});

/***/ }
]);