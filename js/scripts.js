$(document).ready(function() {
  $
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const yourName = $("input#Name").val();
    const yourColor = $("input#colors").val();
    const arrayName = [];
    arrayName.push(yourName, yourColor);
    console.log(arrayName);
  });
});