$(function(){
    $("#formulaire").submit( function(){
        var mat = $('#mat').val();
        var mdp = $('#mdp').val();
        console.log(mat);
        $.ajax({
            url :"http://padsrv-remove.portdedouala.lan/fr/android/login/"+mat+"/"+mdp ,
        
        error: function(){
                $('#error1').show();
        }, 
            
        dataType : 'json',
        success : function(data){
                console.log(data);
            
        },
        type : 'GET'
        });
    return false;
    });
    
    
    function Verification(json)
    {
        if (data.status == 0)
        {
            
        }
        else
        {
    
        }
    }
})

