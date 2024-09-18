
// id = prompt('아이디: ')
id = prompt('아이디: ', 'admin')         // (*중요*) 취소를 누르거나, Escape 을 누르면 null 리턴

if(id == 'admin') {

    // pw = prompt('암호: ')
    pw = prompt('암호: ', '123456')     // (*중요*) 취소를 누르거나, Escape 을 누르면 null 리턴

    if(pw === '123456') {
        location.href = '../sub/login.html'
    } else {
        location.href = '../sub/error.html'
    } // inner if-else

} else {
    location.href = '../sub/error.html'
} // if-else