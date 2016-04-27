webpackJsonp([1,5],[
/* 0 */
/***/ function(module, exports) {

	/**
	 * Created by jj on 2015/1/16.
	 */
	 $('div[name=btn]').on('click',function  (obj) {
	     $.ajax({
	        type: 'post',
	        url: 'dologin' ,
	        data: {name:$('input[name=name]').val(),password:$('input[name=password]').val()} ,
	        dataType: 'json',
	        success: function(ret){
	           console.log(ret);
	        } ,               
	     });  
	 })


	Jayie.utils.postDataWithToken('/artical/getArticalList',function(res){
	    console.log(res);
	})

/***/ }
]);