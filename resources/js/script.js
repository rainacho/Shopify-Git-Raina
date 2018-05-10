$(document).ready(function() {

    //3-a form validation

    //When users click the input field

    $('#email').on('input', function(){

        var email = $(this).val();
        var error = $('#email-error');
        var testExp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);

        //show error message

        function msg(body) {

          error.text(body).show();

        };

        //hide error message

        function hide() {

          error.hide();

        };


        if(email.length < 1 || !testExp.test(email)) { //condition for not validating

            $('#submit-form').addClass('form-error');

            msg('Please enter a valid email address');

        } else { //condition for validating

            $('#submit-form').removeClass('form-error');

            hide();

        }

    });


    //When users click the submit button

    $('#submit-form').on('submit', function(e){

            if ($(this).hasClass('form-submitted')||$(this).hasClass('form-error')) {

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

              $('#newsletter-submit').attr('disabled', true); //3-e It should allow only a single submission.

              $('#newsletter-submit').attr("value", "Submitting..."); // 3-d show a loading state for 2 seconds.


              //"Thank you" confirmation replace the form

              $('#thanks-message').delay(2000).fadeIn();

              $('#submit-form').delay(1700).fadeOut();

            }

    });

});
