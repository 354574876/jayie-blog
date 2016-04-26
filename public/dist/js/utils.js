webpackJsonp([4,5],[
/* 0 */
/***/ function(module, exports) {

		var Jayie = window.Jayie || {};
		Jayie.utils = {
			extend:function(){
				Date.prototype.Format = function(fmt) { //author: meizz     
				  var o = {   
				    "M+" : this.getMonth()+1,                 //月份   
				    "d+" : this.getDate(),                    //日   
				    "h+" : this.getHours(),                   //小时   
				    "m+" : this.getMinutes(),                 //分   
				    "s+" : this.getSeconds(),                 //秒   
				    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
				    "S"  : this.getMilliseconds()             //毫秒   
				  };   
				  if(/(y+)/.test(fmt))   
				    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
				  for(var k in o)   
				    if(new RegExp("("+ k +")").test(fmt))   
				  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
				  return fmt;   
				}
			},
			getUrlData: function (name) {
			    var str = window.location.hash.split('?')[1],
			        arr = str ? str.length > 0 ? str.split('&') : [0] : [0],
			        obj = {};
			    if (arr[0]) {
			        for (var i = 0; i < arr.length; i++) {
			            obj[arr[i].split('=')[0]] = arr[i].split('=')[1];
			        }
			        return obj[name];
			    } else {
			        return undefined;
			    }

		    },

		    postDataWithToken: function(a, b, c,type) {
	            var d;
	            type = type == undefined?true:type;
	            if(_.isFunction(b)){
	                d = {};
	                type = c == undefined?true:c ;
	                c = b;
	            }else{
	                d= b;
	            }
	            $.ajax({
	                url: a,
	                type: "post",
	                data: d,
	                async:type,
	                success: function (b) {
	                    c(b);
	                }
	            })

	        },

		}
		Jayie.utils.extend();
		//module.export = Jayie;
		window.Jayie = window.Jayie || Jayie;

/***/ }
]);