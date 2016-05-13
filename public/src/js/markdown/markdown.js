var testEditor;
var _id = Jayie.utils.getUrlData('_id');
var artical;
if(_id){
	Jayie.utils.postDataWithToken('/artical/getArticalById',{id:Jayie.utils.getUrlData('_id')},function(res){
		$('#content').val(res.artical_markdown);
		artical = res;
		Editor();
	})
}else{
	Editor();
}

function Editor(){
	testEditor = editormd("test-editormd", {
		width   : "100%",
		height  : 700,
		syncScrolling : "single",
		path    : "/plugins/markdown/js/",
		saveHTMLToTextarea : true,
		emoji:true
	});	
}

$('#modalShow').click(function(){
	if(artical){
		$('input[name=title]').val(artical.artical_title);
		$('input[name=remark]').val(artical.artical_remark);	
	}
	$('.ui.modal').modal('show');
})
$('#submitBlog').click(function(){
	var data = {
		artical_title:$('input[name=title]').val(),
		artical_markdown:testEditor.getMarkdown(),
		artical_html:$('.editormd-preview-container').html(),
		artical_date:new Date().Format("yyyy-MM-dd hh:mm:ss"),
		artical_remark:$('input[name=remark]').val(),
		_id:_id
	};
	var url = data._id?"/artical/updateArtical":'/artical/insertArtical';
	Jayie.utils.postDataWithToken(url,data,function(res){
		$('.ui.modal').modal('hide');
		$('input[name=title]').val('');
		$('input[name=remark]').val('');
	})
})