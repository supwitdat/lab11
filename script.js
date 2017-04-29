$(document).ready(function(){

  $.get('https://www.reddit.com/r/turning.json').done(function(response){

      console.log(response);

      for (var i = 0; i < (response.data.children.length) - 1; i++){

        if (response.data.children[i].data.thumbnail !== 'self'){

              console.log(response.data.children[i].data.title);
              var title = response.data.children[i].data.title;
              var author = response.data.children[i].data.author;
              var thumbNail = response.data.children[i].data.thumbnail;

              var div = $('<div>').draggable();
              $('.wrapper').append(div);
              div.css('background-color', 'black');
              div.css('border-radius', '5%');
              div.css('border', "1px solid salmon");
              div.attr('class', 'infoBox');
              div.attr('class', 'puff');


              div.append('<p>'+ title +'</p>');
              div.append('<img src = ' + thumbNail + '>');
          }
       }
   });

   $('button' ).click(function() {
     $( ".puff" ).toggle( "puff" );

      console.log($(this).text());

     if ($(this).text() === 'DESTROY!!'){
        $(this).text('RESURRECT!!');
     } else if ($(this).text() === 'RESURRECT!!'){
        $(this).text('DESTROY!!');
     }
   });


});
