$(document).ready(function() {

    $('#submit-form').on('submit', function(e){

        //3-a form validation

            var email = $('#email').val();

            function msg(body) {

                $('#email-error').text(body).show();

            };

            function hide() {

                $('#email-error').hide();

            };

            var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);

            if(email.length < 1 || !testExp.test(email)) {

                e.preventDefault();

                msg('Please enter a valid email address');

            } else {

                //3-e It should allow only a single submission.

                if ($(this).hasClass('form-submitted')) {

                  e.preventDefault();

                } else {

                  e.preventDefault();

                  $(this).addClass('form-submitted');

                  $.ajax({

                      url : $(this).attr('action'),

                      type : $(this).attr('method'),

                      dataType : 'json',

                      data : $(this).serialize(),

                      success : function(res){

                          //3-c The value of each field should be logged in the browser console.

                          console.log(res);

                      }

                  })

                  $('#newsletter-submit').attr('disabled', true);

                  $('#newsletter-submit').attr("value", "Submitting...");



                  //"Thank you" confirmation replace the form

                  $('#thanks-message').delay(2000).fadeIn();

                  $('#submit-form').delay(1700).fadeOut();

                }

            }

    });


});
