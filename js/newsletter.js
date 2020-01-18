function newsletter() {
    var email = document.getElementById('email').value;
    document.getElementById('email').className = "form-control is-valid"
    if (email == "") {
        document.getElementById('email').placeholder = "Email cannot be empty";
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

    formData = {
        'email': $('input[name=email]').val()
    };


    $.ajax({
        url: "newsletter.php",
        type: "POST",
        data: formData,
        success: function (data, textStatus, jqXHR) {

            $('#status').text(data.message);
            if (data.code) //If mail was sent successfully, reset the form.
                $('#news').closest('form').find("input[type=text], textarea").val("");

            window.alert("You have signed up for the newsletter!");
            location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#status').text(jqXHR);
            window.alert("Email not sent. Try reloading the Page.")
        }
    });


   


}