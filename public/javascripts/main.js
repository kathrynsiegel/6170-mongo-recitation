$(document).ready(function() {
  $('#submit-login-button').click(function() {
    $.post('/login',
            {username: $('#kerberosInput').val(),
             password: $('#passwordInput').val()},
    function(resp, status, jQxhr) {
      if (resp.success) {
        location.reload();
      } else {
        $('#alert-box').text(resp.message);
        $('#alert-box').css('display', 'block');
      }
    }).fail(function(jqXhr, status, err) {
      console.log(err);
    });
  });
  $('#submit-email-button').click(function() {
    $.post('/forgot', {kerberos: $('#kerbInput').val()},
    function(resp, status, jQxhr) {
      if (resp.success) {
        $('#success-box').text(resp.message);
        $('#success-box').css('display', 'block');
        $('#alert-box').text('');
        $('#alert-box').css('display', 'none');
      } else {
        $('#alert-box').text(resp.message);
        $('#alert-box').css('display', 'block');
        $('#success-box').text('');
        $('#success-box').css('display', 'none');
      }
    }).fail(function(jqXhr, status, err) {
      console.log(err);
    });
  });
  $('#submit-hours-button').click(function() {
    $.post('/hours',
            {hours: $('#hoursInput').val(),
             supervisor: $('#supervisor-dropdown').val(),
             description: $('#descriptionInput').val()},
    function(resp, status, jQxhr) {
      if (resp.success) {
        location.reload();
      } else {
        $('#alert-box').text(resp.message);
        $('#alert-box').css('display', 'block');
      }
    }).fail(function(jqXhr, status, err) {
      console.log(err);
    });
  });
  $('#submit-new-password-button').click(function() {
    var url = window.location.href;
    $.post('/reset/' + url.substr(url.lastIndexOf("/") + 1),
            {password: $('#newPasswordInput').val()},
    function(resp, status, jQxhr) {
      if (resp.success) {
        $('#alert-box').text('');
        $('#alert-box').css('display','none');
        window.location = "/";
      } else {
        $('#alert-box').text(resp.message);
        $('#alert-box').css('display', 'block');
        $('#success-box').text('');
        $('#success-box').css('display', 'none');
      }
    }).fail(function(jqXhr, status, err) {
      console.log(err);
    });
  });

  $('#supervisorInput li a').click(function() {
    $('#supervisor-dropdown:first-child').text($(this).text());
    $('#supervisor-dropdown:first-child').val($(this).text());
  });
});
