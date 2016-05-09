webpackJsonp([1,6],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by jj on 2015/1/16.
	 */
	$('div[name=btn]').on('click', function (obj) {
	   $.ajax({
	      type: 'post',
	      url: 'dologin',
	      data: { name: $('input[name=name]').val(), password: $('input[name=password]').val() },
	      dataType: 'json',
	      success: function success(ret) {
	         console.log(ret);
	      }
	   });
	});

	Jayie.utils.postDataWithToken('/artical/getArticalList', function (res) {
	   console.log(res);
	});

/***/ }
]);