/**
 * Created by jj on 2015/1/16.
 */
$(function(){
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
})