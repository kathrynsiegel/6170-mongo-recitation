$(document).ready(function() {
  $('#submit-button').click(function() {
    $.post('/', {
        type: $('#type-input').val(),
        duration: $('#minutes-input').val(),
        intensity: $('#intensity-input').val()
    },
    function(resp, status, jQxhr) {
      if (resp.success == true) {
        $('#hours-table tr:last').after('<tr><td>' + resp.activity.type + '</td>' +
                                          '<td>' + resp.activity.duration + '</td>' +
                                          '<td>' + resp.activity.intensity + '</td</tr>');
      } else {
        alert(resp.message);
      }
    }).fail(function(jqXhr, status, err) {
      console.log();
    });
  });
  $('#intensity-input li a').click(function() {
    console.log($(this).text());
    $('#intensity-dropdown:first-child').text($(this).text());
    $('#intensity-dropdown:first-child').val($(this).text());
  });
});
