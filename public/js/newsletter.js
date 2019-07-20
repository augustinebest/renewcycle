const alert_div = document.getElementById('alert');

$(document).ready(function() {
    if($('#alert').is(':empty')) {
        $('#alert').css({display: 'none'})
    }

    let submitButton = document.getElementById('news_button');
        submitButton.addEventListener('click', function(e) {
            let input_name = document.getElementById('news_input_name').value;
            let input_email = document.getElementById('news_input_email').value;
            let button = document.getElementById('news_button');
            button.innerHTML = 'LOADING...';
            button.style.outline = 'none';
            // button.style.cursor = 'not-allowed';
            // button.style.backgroundColor ='#f00';
            // button.style.color = '#fff';
            e.preventDefault();
            let payload = {
                name: input_name,
                email: input_email
            }
            if(input_email.trim('').length < 1 || input_name.trim('').length < 1) {
                alert_div.innerHTML = 'The input field(s) is required';
                $('#alert').css({display: 'block'});
                button.innerHTML = 'SUBMIT'
                setTimeout(function() {
                    $('#alert').fadeOut('fast')
                }, 3000)
            } else {
                fetch(`/s/subscribe`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                }).then(res => res.json())
                .then(data => {
                    if(data.code == 200) {
                        alert_div.innerHTML = data.message;
                        $('#alert').css({display: 'block', backgroundColor: 'rgb(20, 143, 20)'});
                        button.innerHTML = 'SUBMIT'
                        setTimeout(function() {
                            $('#alert').fadeOut('fast');
                        }, 4000)
                    } else {
                        alert_div.innerHTML = data.message;
                        $('#alert').css({display: 'block', backgroundColor: 'rgb(131, 24, 24)'});
                        button.innerHTML = 'SUBMIT'
                        setTimeout(function() {
                            $('#alert').fadeOut('fast')
                        }, 3000)
                    }
                })
                .catch(err => console.log(err));
            }
        })
})