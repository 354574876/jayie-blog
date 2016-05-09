var testEditor;
testEditor = editormd("test-editormd", {
	width   : "100%",
	height  : 700,
	syncScrolling : "single",
	path    : "/plugins/markdown/js/",
	saveHTMLToTextarea : true,
});
$('#modalShow').click(function(){
	$('.ui.modal').modal('show')
})
$('#submitBlog').click(function(){
	var data = {
		artical_title:$('input[name=title]').val(),
		artical_markdown:testEditor.getMarkdown(),
		artical_html:testEditor.getHTML(),
		artical_date:new Date().Format("yyyy-MM-dd HH:mm:ss"),
		artical_remark:$('input[name=remark]').val()
	}
	Jayie.utils.postDataWithToken('/artical/insertArtical',data,function(res){
		$('.ui.modal').modal('hide');
		$('input[name=title]').val('');
		$('input[name=remark]').val('');
	})
})