var count=0;
spa.$('firstPage', {

    //base properties
  
  });



spa.$extend('firstPage',{
    /*enabling text box on click*/
    enableTextarea: function(){
        // alert('enabling');
        $('#text-area').prop('disabled',false);
    },
    disableTextarea: function(){
        $('#text-area').prop('disabled',true);

        // alert('disabling');
        // spa.api.post('@firstService', content);
    },
    clearText: function(){
        $('#text-area').val('');
        // alert('clearing');
       

    },
    onPost: function(){
    var content = $("#text-area").val();

    $('#yourPost').removeClass('hide');
    $('#comments').append('<br><textarea class="showPost" id="blogPost'+count+'" disabled></textarea><br>');

        $('#blogPost'+count+'').val(content);
        
            
        

        $('#text-area').val('');
        count++;
    },
    checkText: function(){
        var checker = $("#text-area").val();
        if( checker) {
        $('.doneButton').prop('disabled',false);
        $('.discardButton').prop('disabled',false);
        }
    }

});


