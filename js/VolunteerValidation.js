function volunteerSubmit() {
    var name = document.getElementById('name').value;
    document.getElementById('name').className = "form-control is-valid"

    if (name == "") {
        document.getElementById('name').className = "form-control is-invalid"
        return false;
    }
    var email = document.getElementById('email').value;
    document.getElementById('email').className = "form-control is-valid"
    if (email == "") {

        document.getElementById('email').className = "form-control is-invalid"
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            window.alert("Email format invalid");
            document.getElementById('email').className = "form-control is-invalid"
            return false;
        }
    }

    var phone = document.getElementById('Phone').value;
    console.log(document.getElementById('textok').value);
    if (phone !== "") {
        document.getElementById('textok').className = "browser-default custom-select"
        if (document.getElementById('textok').value !== "") {
            document.getElementById('textok').className = "browser-default custom-select is-valid"
        } else {
            document.getElementById('textok').className = "browser-default custom-select is-invalid"
            return false;
        }
    }

    var subject = document.getElementById('subject').value;
    document.getElementById('subject').className = "form-control is-valid"
    if (subject == "") {

        document.getElementById('subject').className = "form-control is-invalid"
        return false;
    }
    var message = document.getElementById('message').value;
    document.getElementById('message').className = "form-control is-valid"
    if (message == "") {
        document.getElementById('message').className = "form-control is-invalid"
        return false;
    }


    formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'subject': $('input[name=subject]').val(),
        'message': $('textarea[name=message]').val(),
        'Phone': $('input[name=Phone]').val(),
        'textok': $('select[name=textok]').val()
    };


    $.ajax({
        url: "volunteer.php",
        type: "POST",
        data: formData,
        success: function (data, textStatus, jqXHR) {

            $('#status').text(data.message);
            if (data.code) //If mail was sent successfully, reset the form.
                $('#volunteerForm').closest('form').find("input[type=text], textarea").val("");

            window.alert("Email has been sent!");
            location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#status').text(jqXHR);

            window.alert("Email has not been Sent! Reload and try again.")
        }
    });



}