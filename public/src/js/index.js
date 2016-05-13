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
    var tpl = '';
    $.each(res,function(index,val){
        val.artical_remark = val.artical_remark || '';
         tpl += '<div class="ui existing segment" >'+
            '<h4 class="ui header"><a href=/markdown/detail?_id='+val._id+'>'+val.artical_title+'</a></h4>'+
            '<p>'+val.artical_remark+'</p>'+
            '<a class="ui teal" href=/markdown/addMarkdown?_id='+val._id+'>>>>>编辑</a>'+
          '</div>'
       })
    $('#contentList').html(tpl);
})