var userId = document.querySelector('#user-id');
var pw1 = document.querySelector('#user-pw1');
var pw2 = document.querySelector('#user-pw2');

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;


function checkId() {
    console.log('- checkId() invoked.');

    if(userId.value.length < 4 || userId.value.length > 15) {
        alert('4 ~ 15 자리의 영문과 숫자를 사용하세요.');

        userId.select();
    } // if
} // checkId


function checkPw() {
    console.log('- checkPw() invoked.');
    
    if(pw1.value.length < 8) {
        alert('비밀번호는 8자리 이상이어야 합니다.');

        pw1.value = '';
        pw1.focus();
    } // if
} // checkPw


function comparePw() {
    console.log('- comparePw() invoked.');

    if(pw1.value != pw2.value) {
        alert('비밀번호가 다릅니다. 다시 입력하세요.');

        pw2.value = '';
        pw2.focus();
    } // of
} // comparePw



