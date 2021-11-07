$(document).ready(function() {
  $
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const yourName = $("input#Name").val();
    const yourColor = $("input#colors").val();
    const arrayName = [];
    const arrayColor = [];
    arrayName.push(yourName);
    arrayColor.push(yourColor);
    const arrayElements = []
    arrayElements.push(arrayName, arrayColor);
    console.log(arrayElements);

    $("ul").prepend("<li>" + arrayName);
    $("ul").prepend("<li>" + arrayColor);
  });
});