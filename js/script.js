
function carifilm(){
    $('#movie-list').html('');
    $.ajax({
        url:'http://omdbapi.com',
        type:'get',
        dataType:'json',
        data:{
            'apikey':'2ed32873',
            's':$('#search-input').val()
        },
        success:function(hasil){
            if( hasil.Response == "True"){
                let movies = hasil.Search;
                $.each(movies,function(i,data){
                    $('#movie-list').append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                    <img src="`+data.Poster +`" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">`+data.Title+`</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">`+data.Year+`</h6>
                    <a href="#" class="card-link">See Detail</a>
                    </div>
                    </div>
                    </div>
                    `);

                });

                $('#search-input').val('');

            }else{
                $('#movie-list').html(`
                <div class="col">
                <h1 class="text-center">`+hasil.Error+`</h1>
                </div>`)
                
            }
        }
    });
}

$('#search-button').on('click',function(){

    carifilm();

});

$('#search-input').on('keyup',function(e){
    if(e.keyCode == 13){
        carifilm();
    }
})

//tinggal nambahin modal box aja

