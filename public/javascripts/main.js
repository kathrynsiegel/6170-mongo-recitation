$(document).ready(function() {
  $('#submit-button').click(function() {
    $.post('/', {
        type: $('#type-input').val(),
        duration: $('#minutes-input').val(),
        intensity: $('#intensity-dropdown').val()
    },
    function(resp, status, jQxhr) {
      // what do we do if it succeeds?
    }).fail(function(jqXhr, status, err) {
      console.log(err);
    });
  });
  $('#intensity-input li a').click(function() {
    console.log($(this).text());
    $('#intensity-dropdown:first-child').text($(this).text());
    $('#intensity-dropdown:first-child').val($(this).text());
  });
});
