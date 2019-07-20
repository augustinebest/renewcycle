$(document).ready(function() {
    $('#login_button').click(function(e) {
        e.preventDefault();
        const payload = {
            username: $('#username').val(),
            password: $('#password').val()
        }
        console.log(payload)
        if(payload.username.trim('').length < 1 || payload.password.trim('').length < 1) {
            $('.alert').html('Required field(s)');
            $('.alert').css({display: 'block'})
        } else {
            fetch(`/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.code == 200) {
                    $('.alert').html(data.message);
                    $('.alert').css({display: 'block'});
                    sessionStorage.setItem('hytjz', JSON.stringify(data.token));
                    // setTimeout(function() {
                        window.location = '/xyz/a/dashboard'
                    // }, 2000);
                } else {
                    $('.alert').html(data.message);
                    $('.alert').css({display: 'block'})
                }
            })
            .catch(err => console.log(err));
        }
    })
})