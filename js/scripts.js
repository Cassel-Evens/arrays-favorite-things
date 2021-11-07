$(document).ready(function() {
  $
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const yourName = $("input#Name").val();
    const yourColor = $("input#colors").val();
    const yourMovie = $("input#Movie").val();
    const arrayName = [];
    const arrayColor = [];
    const arrayMovie = [];

    arrayName.push(yourName);
    arrayColor.push(yourColor);
    arrayMovie.push(yourMovie);
    const arrayElements = []
    arrayElements.push(arrayName, arrayColor, arrayMovie);

    $("ul").append("<li>" + arrayName);
    $("ul").append("<li>" + arrayColor);
    $("ul").append("<li>" + arrayMovie);
  });
});