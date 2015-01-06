$(document).ready(function(){

$(function(){
  $('#search-form').submit(function(event){ // when the user clicks submit....
    event.preventDefault(); // prevent the form from submitting
    var searchTerm = $('#query').val(); // take whatever is in the search field and put it in searchTerm
    getRequest(searchTerm); //call the function "getRequest" and pass it the search term
  });
});

function getRequest(searchTerm){
  var userQuery = searchTerm;
  //alert(typeof(userQuery));
  var params = {
    part: 'snippet',
    key: 'AIzaSyDFpwiJk6C7QlJr1PrZ73ukMpMolXO2DSQ',
    q: userQuery,
    maxResults: 39
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    //debugger;
    showResults(data.items);
    
  });
}

function showResults(results){ //shows the results to the user
  var html = ""; // variable to hold the html
  $.each(results, function(index,items){ //for each of the results
//debugger;
    //html += '<p>' + items.snippet.thumbnails.default.url + '</p>'; // create a new paragraph with the title
    html += '<a href=' + "https://www.youtube.com/watch?v=" + items.id.videoId + '>';
    html += '<img src=' + items.snippet.thumbnails.default.url + '>'; 
    html += '</a>';

    //console.log(items.snippet.thumbnails.default.url);
    console.log(items.id.videoId);
  });
  $('#search-results').html(html); // display each of those paragraphs on the page
}


});