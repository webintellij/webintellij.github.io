$(function() {

    const isCallingRegisterForm = window.location.toString().indexOf('#registerForm');
    if(isCallingRegisterForm > 0) {
        $('#register-form').modal('show');
    }

    $('#payDate').datetimepicker({format: 'DD/MM/YYYY'});

    $("input,textarea,select").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var firstName = $("input#firstName").val();                   
            var messageName = firstName; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (messageName.indexOf(' ') >= 0) {
                messageName = firstName.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././scripts/register_form.php",
                type: "POST",
                data: new FormData($form[0]),
                contentType: false,
                cache: false,
                processData:false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success' style='color: black !important'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Tu informaci&oacute;n ha sido enviada. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#registerForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Lo sentimos " + messageName + ", Parece que nuestro servidor de correos no esta respondiendo. Por favor intenta en otro momento!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#registerForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

    $('#cancel').on('click', ()=> $('#registerForm').trigger("reset"));
    $('#category').on('change', (event)=> {
        var value = $(event.target).val();        
        $('form .js-document').find('.control-group').eq(1).toggleClass('hidden', !(value == 'c' || value == 'd'));        
    });
    $('#registerForm').trigger("reset");
});


/*When clicking on Full hide fail/success boxes */
$('#firstName').focus(function() {
    $('#success').html('');
});
