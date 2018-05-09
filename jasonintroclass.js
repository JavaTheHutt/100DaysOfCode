$().ready( () => {

  console.log("Before the AJAX call");

  var url = "https://api.myjson.com/bins";

  $.getJSON(url)
    .done( (response) => {
        console.log(response);
    });

  console.log("After the AJAX call");

});
