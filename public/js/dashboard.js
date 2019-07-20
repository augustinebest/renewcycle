// window.onload = function() {
//     const token = JSON.parse(sessionStorage.getItem('hytjz'));
//     console.log(token);
//     if(!token) {
//         window.location = '/'
//     }
// }

$(document).ready(function() {
    $('#button').click(function() {
        sessionStorage.clear();
        window.location = '/'
    })
})