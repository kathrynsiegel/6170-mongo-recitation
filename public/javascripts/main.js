$(document).ready(function() {
  $('#submit-button').click(function() {
    $.post('/', {
        activity: $('#type-input').val(),
        duration: $('#minutes-input').val(),
        intensity: "asdf"
    },
    function(resp, status, jQxhr) {
      if (resp.success) {
        console.log("yay");
        $('#success-box').text(resp.message);
        $('#success-box').css('display', 'block');
        $('#alert-box').text('');
        $('#alert-box').css('display', 'none');
      } else {
        console.log("boo");
        $('#alert-box').text(resp.message);
        $('#alert-box').css('display', 'block');
        $('#success-box').text('');
        $('#success-box').css('display', 'none');
      }
    }).fail(function(jqXhr, status, err) {
      console.log(err);
    });
  });
});
